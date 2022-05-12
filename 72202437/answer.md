The abstract should be the logic for the result of `do` function. And `do` function will handle your duplicated logic:

```ts
abstract class Base {
    do(): number | Promise<number> {
        console.log('Start');

        const result = this.getResult(); // call abstract function

        console.log('End');

        return result;
    };

    abstract getResult(): number | Promise<number>;
}

// Then
class SyncBase extends Base {
    getResult(): number {
        const result = 5;
        // ...
        return result;
    }
}


class AsyncBase extends Base {
    async getResult()
    {
        const result = await Promise.resolve(5);
        // ...
        return result;
    }
}
```

My recommendation: Don't mix sync and async return type (`number | Promise<number>`), just return `Promise<number>` and `getResult` and `do` will be `async` function always.

