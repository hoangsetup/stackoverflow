Wait until the query returns then render the page.

```js
router.get('/', (req, res) => {
  db.query(`SELECT count(*) AS exact_count from users`, (error, results) => {
    if (error) {
      // render error page
      // return res.render('pages/error', { error });
    }
    res.render('pages/index', { userCount: results.rows[0]['exact_count'] });
  });
});
```
