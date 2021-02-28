You call controller's `getResponse()` infinity, then it throws `Maximum call stack size exceeded` error.

I think you want to call the service's function instead:

```ts
    @Get()
    getResponse(){
      this.collectService.getResponse();
    }
```
