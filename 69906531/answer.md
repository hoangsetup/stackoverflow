`moment(value).format()` return a ISO 8601 date string, look like: `2021-11-10T10:19:09+09:00`. Then, I guess the `setStartDate` function require a date string with ISO 8601 format.

The goal is using `date-fns` to create a string as the result of `moment.format`.

To do that, you need to create a date object. If it works with `moment(value)` syntax, mean `value` is a millisecond timestamp number (`1636507295498`) or a formal date string (`2021-11-10`). Then you can create a date object by Date constructor:

```js
new Date(value);
```

Now, you can use [formatISO][1] to create the required date string:

```js
formatISO(dateObject);
```

The final look will be like this:

```js
setStartDate(formatISO(new Date(value)))
```


  [1]: https://date-fns.org/v2.25.0/docs/formatISO
