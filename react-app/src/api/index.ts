export async function getTestPhrase() {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/`);
  if (!response.ok) {
    throw new Error('Something went wrong.');
  }
  return response.text();
}

export async function getTodos() {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/todos`);
  if (!response.ok) {
    throw new Error('Todos could not be retrieved.');
  }
  return response.json();
}
