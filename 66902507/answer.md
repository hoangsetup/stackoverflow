No need to create a promise function if you don't need it, you can return a promise for an async function. Don't use `async` keyword for a sync function.

```ts
  @Get('')
  async getAllData(@Req() req: Request) {
    const token = req.cookies.access_token;

    const periods = ['short_term', 'medium_term', 'long_term'];
    const types = ['artists', 'tracks'];

    const getUserTopData = () => {
      const promise = [];
      types.forEach((type) => {
        periods.forEach((period) => {
          promise.push(
            this.personalizationService.getUserTopArtistsTracks(
              type as 'artists' | 'tracks',
              {
                time_range: period as
                  | 'short_term'
                  | 'medium_term'
                  | 'long_term',
                limit: 1,
              },
              token,
            ),
          );
        });
      });
      return promise;
    };

    const [
      user,
      artistsShortTerm,
      artistsMediumTerm,
      artistsLongTerm,
      tracksShortTerm,
      tracksMediumTerm,
      tracksLongTerm,
    ] = await Promise.all([
      this.userService.getCurrentUserProfile(token),
      ...getUserTopData()
    ]);

    return {
      user,
      artistsShortTerm,
      artistsMediumTerm,
      artistsLongTerm,
      tracksShortTerm,
      tracksMediumTerm,
      tracksLongTerm,
    };
  }
```
