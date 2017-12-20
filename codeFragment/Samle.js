console.log('0');

Promise.resolve().then(()=>{
  console.log('1');
});

new Promise(
    (resolve) => {
      console.log('2');
      for (let i = 0; i < 100; i++) {
        i === 99 && resolve();
      }

      console.log('3');
    }
).then(() => {
  console.log('4');
});

console.log('5');
