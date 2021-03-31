Simple way - use callback in callback: When the first request finished, start the second request, when the second request finished, let call `render` with the response from 1st request and 2nd request.

```js
app.post("/", function (req, res) {
  const username = req.body.username;

  const url1 = "https://codeforces.com/api/user.info?handles=" + username;
  https.get(url1, function (response) {
    response.on("data", function (data) {
      const code1 = JSON.parse(data);

      const url2 = "https://codeforces.com/api/user.status?handle=" + username;
      https.get(url2, function (response) {
        response.on("data", function (data) {
          const code2 = JSON.parse(data);

          res.render("result", {
            id: username,
            rating: code1.result[0].rating,
            rank: code1.result[0].rank,
            freinds: code1.result[0].friendOfCount,
            contri: code1.result[0].contribution,
            cid: code2.result[0].contestId
          });
        });
      });
    });
  });
});
```
