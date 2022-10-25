You can try a trick to avoid this issue: Close the connection in afterAll

```ts
    afterEach(() => { // reset mock should be in afterEach
        jest.resetAllMocks();
    });

    afterAll(async ()=>{
        await sqlzDB.close();
        await new Promise(res => setTimeout(res, 500)); // avoid jest open handle error
    });
```
