I guess your issue come form the way you use the db connection. You created ~ 6 or 10 connections to db, but you did not release them, and the default limit of mariadb's connection pool is 10 (I guess).

Finally, new request want to create new connection, but it reach the limit, new request waiting for another connection be release, but it waiting forever.

In this case, you can extend the limit (not root cause but I think it is good to know).

Add `connectionLimit` under `extra` in `ormconfig.json` (or where you create db config)

```json
{
  ...,
  "extra": { connectionLimit: 10, ... }
}
```

[More information][1]

And you have to release the new connection what you just created in `getData` function, right after the query finish (success or error) :

```ts
...
...
await queryRunner.release()
```

Note: Let's take care about when your query throw an error, you can use try/catch/finally

```ts
...
    let res = await queryRunner.manager.query(`
        select count(*) as result from my_table
        where my_field ='I'
        and DATE(date_field) = DATE('${dateField.toISOString()}')
    `).finally(() => queryRunner.release())
...
```

  [1]: https://github.com/mysqljs/mysql#pool-options
