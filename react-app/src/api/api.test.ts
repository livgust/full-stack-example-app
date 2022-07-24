import {getTestPhrase, getTodos} from '../api';

describe('getTestPhrase', () => {
  it('calls home route', async () => {
    expect.assertions(3);
    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(route => {
      expect(new URL(route as URL).pathname).toBe('/');
      return Promise.resolve({
        text: () => Promise.resolve('Test Phrase'),
        ok: true,
      } as any as Response);
    });
    expect(await getTestPhrase()).toBe('Test Phrase');
    expect(fetchMock).toHaveBeenCalled();
  });
  it('throws error if one occurs', async () => {
    expect.assertions(1);
    let error;
    jest.spyOn(global, 'fetch').mockResolvedValue({
      text: () => Promise.resolve('Test Phrase'),
      ok: false,
    } as any as Response);
    try {
      await getTestPhrase();
    } catch (e) {
      error = e;
    }
    expect(error).toBeTruthy();
  });
});

describe('getTodos', () => {
  it('calls todos route', async () => {
    expect.assertions(3);
    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(route => {
      expect(new URL(route as URL).pathname).toBe('/todos');
      return Promise.resolve({
        json: () => Promise.resolve([{name: 'Test Item'}]),
        ok: true,
      } as any as Response);
    });
    expect(await getTodos()).toEqual([{name: 'Test Item'}]);
    expect(fetchMock).toHaveBeenCalled();
  });
  it('throws error if one occurs', async () => {
    expect.assertions(1);
    let error;
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve([{name: 'Test Item'}]),
      ok: false,
    } as any as Response);
    try {
      await getTodos();
    } catch (e) {
      error = e;
    }
    expect(error).toBeTruthy();
  });
});
