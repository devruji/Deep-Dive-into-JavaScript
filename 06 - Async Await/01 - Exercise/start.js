// 1. Convert the code snippet to use async/await
// Bonus: Rewrite the code snippet using Promise


// simulateAsyncAPI('A', 1000, () => {
//   simulateAsyncAPI('B', 500, () => {
//     simulateAsyncAPI('C', 100);
//   });
// });

function simulateAsyncAPI(text, timeout, callback) {
  setTimeout(() => {
    console.log(text);
    if (callback) callback();
  }, timeout);
}

// Async - Await

( async () => {
  try {
    await simulateAsyncAPI('A', 1000);
    await simulateAsyncAPI('B', 500);
    await simulateAsyncAPI('C', 100);
  }
  catch (error) {
    console.error(error)
  }
}) ();

// Promises

function simulateAsyncAPI(text, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(text);
      resolve()
    }, timeout);
  })
}

simulateAsyncAPI('A', 1000)
  .then(() => {
    return simulateAsyncAPI('B', 500)
  })
  .then(() => {
    return simulateAsyncAPI('C', 100)
  })
  .catch((err) => {
    console.error(err)
  });