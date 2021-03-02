
When you call `const spy = jest.spyOn(app.instance(), 'handleRequestError');` it spy for instance X.

`await app.instance().getFilterData(['language'], ['='], ['Java'])
        .catch(error => expect(error).toBe(HREResponse));` running on instance Y, with `handleRequestError` is not been spy.

Just use one app instance when you test it. 

```js
describe('When getFilterData() is unsuccessful', () => {
  it('calls handleRequestError', async () => {
    axios.post.mockImplementation(() => Promise.reject(HREResponse));
    const app = await global.shallowWithIntl(<ManageProjectsPage />).dive();
    
    const instance = app.instance(); // create app instance

    const spy = jest.spyOn(instance, 'handleRequestError'); // spy on the instance
    await instance.getFilterData(['language'], ['='], ['Java']) // execute on the instance
      .catch(error => expect(error).toBe(HREResponse));
    console.log(instance.state);
    app.update();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
  axios.post.mockReset();
});
```


