function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved!');
    }, 2000);
  });
}

// usage
delay()
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.error(err);
  });
