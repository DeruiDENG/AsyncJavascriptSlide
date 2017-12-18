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
        new Promise((resolve, reject) => {...} /* executor */  );
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
<section>
    <h1>其他Promise的重要方法</h1>
    <ul>
        <li>Promise.resolve(value)</li>
        <li>Promise.all(iterable)</li>
        <li>Promise.race(iterable)</li>
        <li>Promise.reject(reason)</li>
    </ul>
</section>
<section>
    <h1>Promise.resolve(value)</h1>
    语法：
    <pre><code>
Promise.resolve(value); //返回一个fullfilled的promise对象，响应参数为指定value
Promise.resolve(promise);  // 直接返回该promise实例
Promise.resolve(thenable);  // 将thenable对象转换成Promise
Promise.resolve(); //返回一个fullfilled的promise对象
    </code></pre>
</section>
<section>
    <h1>Promise.all([p1, p2, p3, ....])</h1>
    <ul>
        <li>这个方法返回一个新的promise对象，该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功</li>
        <li>这个新的promise对象在触发成功状态以后，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值</li>
        <li>一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败</li>
    </ul>

    <p class="fragment">举个例子...</p>
    <pre class="fragment"><code>
let p1 = Promise.resolve(3);
let p2 = 1337;
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then(values => {
    console.log(values);
    // [3, 1337, "foo"]
});
    </code></pre>
</section>
<section>
    <h1>Promise的错误处理</h1>
    <p>Promise会自动捕获异常，交给rejected回调函数</p>
    <p class="fragment">回忆一下Promise的then方法</p>
    <pre><code>
promise.then(fulfilled, reject)
    </code></pre>
    <div class="fragment">
        举个例子...
        <pre><code>
new Promise( resolve => {
  setTimeout( () => {
    throw new Error('bye');
  }, 2000);
})
  .then( value => {
    console.log( value + ' world');
  })
  .catch( error => {
    console.log( 'It\'s an Error: ', error.message);
  });
        </code></pre>
    </div>
</section>
<section>
    <h1>Promise的实际应用</h1>
    <p>An AJAX example</p>
    传统的写法：
    <pre><code>
function search(term, onload, onerror) {
  var xhr, results, url;
  url = 'http://example.com/search?q=' + term;

  xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function (e) {
    if (this.status === 200) {
      results = JSON.parse(this.responseText);
      onload(results);
    }
  };
  xhr.onerror = function (e) {
    onerror(e);
  };

  xhr.send();
}

search("Hello World", console.log, console.error);
    </code></pre>
</section>
<section>
    <h1>Promise的实际应用</h1>
    <p>An AJAX example</p>
    使用了Promise的改进版本版本：
<pre><code>
function search(term) {
  var url = 'http://example.com/search?q=' + term;
  var xhr = new XMLHttpRequest();
  var result;

  var p = new Promise(function (resolve, reject) {
    xhr.open('GET', url, true);
    xhr.onload = function (e) {
      if (this.status === 200) {
        result = JSON.parse(this.responseText);
        resolve(result);
      }
    };
    xhr.onerror = function (e) {
      reject(e);
    };
    xhr.send();
  });

  return p;
}

search("Hello World").then(console.log, console.error);

</code></pre>
</section>
<section>
    <h1>小测试...</h1>
    结合我们刚才学到的Javascript异步模型和Promise的知识，下面的代码会在控制台里返回什么？
    <pre><code>
console.log('0');

setTimeout(()=>{
  console.log('1');
}, 0);

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
    </code></pre>
</section>
<section>
    <h1>Promise小结</h1>
    <ul>
        <li>Promise提供了一套标准化的接口和实现</li>
        <li>用标准链式调用替换将杂乱无章的callback hell</li>
        <li>链式调用符合现实世界的事物规律（即一个事情做完了，就去做下一个事情），因此代码更加容易理解</li>
    </ul>
</section>