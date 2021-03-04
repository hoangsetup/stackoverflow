You mock `datarepo.createQueryBuilder` as a function, the function will return an object with some mock functions include `getOne` function.

You call `this.datarepo.createQueryBuilder` two times, it will return 2 different instances of the object. Then, `getOne` function always returns the first mock value - `usageStart`, because it never is called again.

Let's create a mock object, then mock `datarepo.createQueryBuilder` will return that object:

```ts
      const queryBuilderMock = {
        where: jest.fn().mockReturnThis(),
        setParameter: jest.fn().mockReturnThis(),
        orderBy: jest.fn().mockReturnThis(),
        getOne: jest
          .fn()
          .mockResolvedValueOnce(usageStart)
          .mockResolvedValueOnce(usageEnd),
      }
      
      datarepo.createQueryBuilder = jest.fn(() => queryBuilderMock);
```

As you see, `datarepo.createQueryBuilder` always return `queryBuilderMock` object.
