const arr1 = ["$33.90", "$161.90", "$53.30", "$186.20", "Match up to $350 ", "Match to $700 ", "$3,000.00", "$6,000.00", "$6,650.00", "$13,300.00", "None"]
const arr2 = ["$13.90", "$11.30", "$53.80", "$18.00", "$350 ", "Match to $700 ", "$3,000.00", "$7,000.00", "$6,950.00", "Match up to $350 ", "Not available"]

const arr3 = [];

function difference() {
  for (let i = 0; i < arr1.length; i++) {
    const regex = /^\$\d+(?:.\d+)?/g;

    const firstStr = arr1[i].replace(/,/g, "").match(regex);
    const secondStr = arr2[i].replace(/,/g, "").match(regex);

    console.log(arr1[i].replace(/,/g, "").replace("$", ""), secondStr)
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

// arr3= ["$20.00", "$150.60", "-$0.50", "$168.20", "Can't Compare", "$0", "$0", "-$1000.00","-$300.00", "Can't compare", "Can't compare"]

