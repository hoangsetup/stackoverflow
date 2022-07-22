The route `/gcp` will not match `GET /gcp/filename` request. I think the route should be `/gcp/:filename` (`filename` is a "variable" name).

Now, you can get `filename` value by `req.params.filename`.
