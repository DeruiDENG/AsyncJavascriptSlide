<section>
    <h1>Promise</h1>
    <ul>
        <li>Promise是Javascript异步编程的一套解决方案，在ES2015纳入规范</li>
        <li><a href="https://caniuse.com/#search=promise" target="_blank">点我查看promise的兼容性</a></li>
        <li>很好的解决了回调嵌套问题</li>
        <li>良好的代码阅读体验</li>
    </ul>
</section>
<section>
    <h1>基本语法</h1>
    <pre><code>
        new Promise( function(resolve, reject) {...} /* executor */  );
    </code></pre>
    <small>声明一个Promise</small>
    <pre><code>
Promise.prototype.then(onFulfilled, onRejected)
            </code></pre>
    <small>添加肯定和否定回调到当前 promise, 返回一个新的 promise, 将以回调的返回值 来resolve.</small>
    <pre><code>
Promise.prototype.catch(onRejected)
            </code></pre>
    <small>添加一个否定(rejection) 回调到当前 promise, 返回一个新的promise。如果这个回调被调用，新 promise 将以它的返回值来resolve，否则如果当前promise
        进入fulfilled状态，则以当前promise的肯定结果作为新promise的肯定结果.
    </small>
</section>
<section>
    <h1>Promise的三种状态</h1>
    <ul class="fragment">
        <li>Pending: 初始状态</li>
        <li>Fulfilled: 意味着操作成功完成</li>
        <li>Rejected: 表明操作失败</li>
    </ul>
    <img class="fragment" src="https://mdn.mozillademos.org/files/8633/promises.png" alt="">
</section>
<section>
    <h1>举个例子...</h1>
    <pre><code>
new Promise( resolve => {
  setTimeout( () => {
    resolve('hello');
  }, 2000);
})
  .then( value => {
    return new Promise( resolve => {
      setTimeout( () => {
        resolve('world')
      }, 2000);
    });
  })
  .then( value => {
    console.log( value + ' world');
  });

// 输出：
// world world
    </code></pre>
</section>