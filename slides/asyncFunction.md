<section>
    <h1>Async Function</h1>
    <ul>
        <li>异步函数，连同async/await关键字，在ES2017引入</li>
        <li>很多人说它是Javascript异步编程的最终解决方案</li>
        <li>因为它真正的把几乎异步函数写的跟同步函数一样了...</li>
        <li><a href="https://caniuse.com/#search=async" target="_blank">兼容性看这里...</a></li>
    </ul>
</section>
<section>
    <h1>举个例子...</h1>
    <pre><code>
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}


async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});
    </code></pre>
    <ul>Async Function的语法定义
        <li>调用 async 函数时会返回一个 Promise 对象。当这个 async 函数返回一个值时，Promise 的 resolve 方法将会处理这个值</li>
        <li>async 函数中可能会有 await 表达式，这将会使 async 函数暂停执行，等待 Promise 正常解决后继续执行 async 函数并返回解决结果</li>
    </ul>
</section>
<section>
    <h1>错误处理</h1>
    <pre class="fragment" data-fragment-index="1"><code>
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
    </code></pre>
</section>
<section>
    <h1>小测试...</h1>
    <pre><code>
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
    </code></pre>
</section>
<section>
    <h1>Async Function vs Promise</h1>
    <ul>
        <li class="fragment">跟Promise相比，在语法的简洁性和可读性上，异步函数是有优势的，</li>
        <li class="fragment">但是别忘了没有Promise就没有异步函数</li>
    </ul>
    <p class="fragment">结论：Async Function和Promise不存在替代关系，而是应该根据场景做出合理选择。</p>
</section>