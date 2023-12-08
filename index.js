let input = prompt("Enter froyo flavors seperated with commas:");

let flavors = input.split(",").map((x) => x.trim());

let freqCount = (flavors) => {
  let counter = {};
  for (let i = 0; i < flavors.length; i++) {
    if (!counter[flavors[i]]) counter[flavors[i]] = 1;
    else counter[flavors[i]]++;
  }
  return counter;
};

console.log(freqCount(flavors));
