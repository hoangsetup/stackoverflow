import * as api from './index';

describe(`API Calls`, () => {
  let mock: jest.SpyInstance<any, any>;
  beforeEach(() => {
    mock = jest.spyOn(api, "fetch");
    (api.getPolicyStatsAPI as any) = jest.requireActual('./index').getPolicyStatsAPI;
  })
  test('getPolicyStatsAPI fetches the data and returns it as expected', async () => {
    mock.mockResolvedValueOnce({name: 'hoang1'})

    const a = await api.fetch();

    const response = await api.getPolicyStatsAPI();
    // expect(api.fetch).toBeCalledTimes(1)
    expect(response).toEqual({name: 'hoang1'});
  })
})
