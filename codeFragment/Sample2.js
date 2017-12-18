const resolveAfter1Second = x => {
    console.log(4);
    return new Promise(resolve => {
        console.log(6);
        setTimeout(() => {
            resolve(x);
        }, 1000);
    })
};

console.log(0);

const asyncGet = async x => {
    console.log(1);
    const a = await resolveAfter1Second(10);
    console.log(2);
    const b = await resolveAfter1Second(20);
    console.log(3);
    return x + a + b;
};

asyncGet(10).then(value => {
    console.log(`Hello, ${value}`);
});

console.log(5);