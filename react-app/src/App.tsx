import React, {useState, useEffect} from 'react';
import {getTestPhrase, getTodos} from './api';

type Todo = {
  id?: number;
  name: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
};

function App() {
  const [phrase, setPhrase] = useState('Loading...');
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTestPhrase().then(setPhrase);
    getTodos().then(setTodos);
  }, []);
  return (
    <div>
      {phrase}
      <br />
      Todos:
      <br />
      <ul>
        {todos.map(todo => (
          <li>
            {todo.name}
            <br />
            <ul>
              <li>ID: {todo.id}</li>
              <li>
                <>
                  Created by {todo.createdBy} at {todo.createdAt}
                </>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
