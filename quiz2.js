//? follow these steps:
// todo1: Write a code that logs “wait 5 sec”
// todo2: and then after 5 seconds logs “ready?”
// todo3: and finally logs “🚀”  every one second
// todo4: (write a condition that cleans up the setInterval after 10 seconds to avoid crashing)

//!   Answer:

// todo1:
console.log("wait 5 sec");

// todo2:
setTimeout(() => {
  console.log("ready?");
}, 5000);

// todo3:
const intervalId = setInterval(() => {
  console.log("🚀");
}, 1000);

// todo4:
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Countdown stopped.");
}, 10000);