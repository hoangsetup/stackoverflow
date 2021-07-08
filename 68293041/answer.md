Following `line-reader` [documentation][1], the callback function of `eachLine` method supports 3 parameters, you can use `cb` to go to next line when `getMovie` done.

```js
const axios = require("axios").default
//const db =require('./db')

const lineReader = require('line-reader');

lineReader.eachLine('./movies.txt', async function (line, last, callback) {
  const movie = await getMovie(line)
  console.log(movie);

  callback(last);
});


async function getMovie(title) {
  const { data } = await axios.get("http://www.omdbapi.com/?t=" + title + "&apikey=myapikey");

  const { imdbID, Title, Year, Runtime, Genre, Director, Plot, imdbRating } = data;
  const movie = {
    "id": imdbID,
    "title": Title,
    "year": Year + "-01-01",
    "runtime": Runtime,
    "genres": Genre,
    "director": Director,
    "plot": Plot,
    "rating": parseFloat(imdbRating),
  };
  return movie;
}
```


  [1]: https://www.npmjs.com/package/line-reader#usage
