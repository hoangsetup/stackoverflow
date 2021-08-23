describe("Compare 2 objects", () => {
  it("should ...", () => {
    const actual = { uuid: '5435443', name: 'xxx', branches: [{ uuid: '643643', children: [{ uuid: '65654' }] }] };

    const expected = {
      uuid: expect.any(String),
      name: 'xxx',
      branches: [{ uuid: expect.any(String), children: [{ uuid: expect.any(String) }] }]
    };

    expect(actual).toEqual(expected);
  });
});
