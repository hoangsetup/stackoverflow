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

  test.only('Once', async () => {
    const mock = jest.fn()
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(5)

    const a = new (jest.fn() as any);
    console.log(a);

    const init = await mock();
    const result = await mock();
    expect(init).toEqual(0);
    expect(result).toEqual(5);
  })
})
