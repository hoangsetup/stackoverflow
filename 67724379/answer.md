Update the regex to `/^\$\d+(?:.\d+)?/g` to detect currency string only. Remove `,` before text with the regex.

If the string not match with the regex, return `"Can't Compare"`.

Try to parse number string to float instead of int, then round the `diff` to 2 digits.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    const arr1 = ["$33.90", "$161.90", "$53.30", "$186.20", "Match up to $350 ", "Match to $700 ", "$3,000.00", "$6,000.00", "$6,650.00", "$13,300.00", "None"]
    const arr2 = ["$13.90", "$11.30", "$53.80", "$18.00", "$350 ", "Match to $700 ", "$3,000.00", "$7,000.00", "$6,950.00", "Match up to $350 ", "Not available"]

    const arr3 = [];

    function difference() {
      for (let i = 0; i < arr1.length; i++) {
        const regex = /^\$\d+(?:.\d+)?/g;

        const firstStr = arr1[i].replace(/,/g, "").match(regex);
        const secondStr = arr2[i].replace(/,/g, "").match(regex);

        if (firstStr === null || secondStr === null) {
          arr3.push("Can't Compare");
          continue;
        }

        
        let firstnum = parseFloat(firstStr[0].replace("$", ""));
        let secondnum = parseFloat(secondStr[0].replace("$", ""));


        let diff = firstnum - secondnum;
        if (isNaN(diff)) {
          diff = `Can't Compare`;
        } else if (diff < 0) {
          diff = Math.abs(diff)
          diff = `-$${diff.toFixed(2)}`
        } else {
          diff = `$${diff.toFixed(2)}`
        }
        arr3.push(diff)
      }

      console.log(arr3)
    }

    difference();

<!-- end snippet -->

