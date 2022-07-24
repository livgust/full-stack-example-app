import {init} from './app';
import request from 'supertest';
import {Express} from 'express-serve-static-core';

const findAllMock = jest.fn();

jest.mock('./db', () => ({
  em: {
    getRepository: () => ({
      findAll: findAllMock,
    }),
    fork: jest.fn(),
  },
  init: jest.fn(),
}));

let app: Express;

beforeAll(async () => {
  app = await init(false);
});

it('has health endpoint returning 200', async () => {
  expect.assertions(1);
  const response = await request(app).get('/health');
  expect(response.status).toBe(200);
});

it('has home endpoint returning phrase', async () => {
  expect.assertions(2);
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Express + TypeScript Server');
});

it('fetches todos', async () => {
  expect.assertions(2);
  findAllMock.mockReturnValue(Promise.resolve([{test: 'item'}]));
  const response = await request(app).get('/todos');
  expect(findAllMock).toHaveBeenCalled();
  expect(response.body).toEqual([{test: 'item'}]);
});
