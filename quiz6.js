//? 6. write a reduce method to get the sum of all array items
const arr = [31, 1, 7, 12, 27];

//! Answer:

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  
  console.log(sum);

//   accumulator مقدار جمع شده تا آن لحظه را نگه می‌دارد.
// currentValue هر بار به یکی از عناصر آرایه numbers اشاره می‌کند.
// => تا وقتی for هست چرا reduce?😑😐🤷‍♀️🤷‍♀️