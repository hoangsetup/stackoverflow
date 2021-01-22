Make it simple, save one by one in order.

Avoid mixing `async/await` with `.then/.catch`

```js
try {
  const resp = await getDataForVideo(requestVideoURL);
  const videoObj = resp.item;
  const author = new Author({
      author_id: videoObj.author_user_id.toString(),
      avatar: videoObj.author.avatar,
  });

  // save author
  await author.save();

  const video = new Video({
    video_id: videoObj.id,
    author: author._id, // ref
  });

  // save video
  await video.save();

  res.status(201).send({ video })
} catch (err) {
  res.status(400).send(err.message)
}
```
