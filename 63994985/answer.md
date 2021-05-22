In your service function

```ts
const result = await this.httpService.get(
      `https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data` +
        ingr,
      { headers: headersRequest },
    );
```

with `ingr` is `1 large apple` then the API URL will become "https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data**1 large apple**".

I think this is an incorrect API URL, and you don’t want to call the API like that.


Change it to
```ts
`https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=${ingr}`,
```
