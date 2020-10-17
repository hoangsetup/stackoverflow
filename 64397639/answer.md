When you click to the button many times at the "same time", it will make to many http requests, then the requests finish at the same time too (maybe). Finally, to many div tag will be create and be focus (behavior of contenteditable will be different with input tag - I think so).

I have 2 options for that situation:

  1. Try to make focus command run in a "order". Wrap focus action into setTimeout.

      ```js
      setTimeout(function() {
          $('#divs').find('div[data-id="' + data.id + '"]').focus();
      }, 0);
      ```

  2. Debounce click action. User can click to many times, but click action will not be call many times. (Recommended)

     Delay 250ms for each action...

      ```js
      $(document).on('click', '.btn-create-div', $.debounce(250, function(e) {
          $.ajax(...).done(function(data) {
            $('#divs').prepend('<div contenteditable data-id="' + data.id + '">');
            $('#divs').find('div[data-id="' + data.id + '"]').focus();
          });
      }));
      ```
