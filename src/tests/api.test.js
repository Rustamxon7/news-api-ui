import sourcesApi from '../api/sources';

jest.useRealTimers();

test('getSources', async () => {
  const response = await sourcesApi.getSources();
  expect(response.status).toBe(200);
});

test('topHeadlines', async () => {
  const response = await sourcesApi.topHeadlines();
  expect(response.status).toBe(200);
});

test('getNewsBySource', async () => {
  const response = await sourcesApi.getNewsBySource('bbc-news');
  expect(response.status).toBe(200);
});

// return response.data
jest.setTimeout(30000);

test('createSources', async () => {
  const response = await sourcesApi.createSource();
  expect(response.status).toBe(200);
  expect(response.data.message).toBe('Scraped successfully');
  expect(response.data.time).toBeDefined();
});
