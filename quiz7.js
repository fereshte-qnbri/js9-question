//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

// const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];
//!  Answer:

function checkCharacter(array) {
    const filteredArray = array.filter(item => item.length > 6);
    return filteredArray.every(item => item.length < 10);
  }
  
  const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];
  const result = checkCharacter(array);
  console.log(result);
