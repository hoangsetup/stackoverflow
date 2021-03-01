Define your `Request` type, that type extends `express.Request` and you can set the request body type:

```ts
interface ILoginBody {
  username: string;
  password: number;
}

interface ILoginRequest extends Request {
  body: ILoginBody;
}

// use ILoginRequest instead of express.Request
const fff = async (req: ILoginRequest, res: Response): Promise<void> => {
  const { username, password } = req.body; // body now is an ILoginBody
}
```
