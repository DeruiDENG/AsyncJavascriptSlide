<section>
    <h1>传统的解决方式</h1>
</section>
<section>
    <h1>Callbacks</h1>
    <div class="fragment">
        <ul>
            <li class="small">A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
            </li>
            <li class="small">函数作为javascript的一等公民当做参数传入</li>
            <li class="small">用户通过决定传递的callback函数来决定异步命令完成后的处理逻辑</li>
        </ul>
    </div>
    <pre class="fragment">
        <code class="javascript">
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
        </code>
    </pre>
</section>
<section>
    <h2>Pub/sub pattern</h2>
    <ul>
        <li>观察者模式</li>
        <li>订阅者和发布者的解耦</li>
    </ul>
    <pre class="fragment">
        <code class="small js">
$.subscribe(PubSubEvents.UpdateSeatSummary, (e, pax) => {
    // blablabla
});

$.publish(PubSubEvents.UpdateSeatSummary, { seatAssignment: list, totalBookingPrice });
        </code>
    </pre>
</section>
<section>
    <h1>The problem...</h1>
        <div>当我们面对复杂的逻辑的时候，callback会变得难以控制</div>
        <div class="fragment">
            我们想要的只是:
            <pre>
                <code data-trim>
getData=>getMoreData=>getMoreData=>getMoreData
                </code>
            </pre>
            实际却可能得到的是:
            <pre>
                <code class="small js" data-trim>
getData(function(a){
    getMoreData(a, function(b){
        getMoreData(b, function(c){
            getMoreData(c, function(d){
                getMoreData(d, function(e){
                    ...
                });
            });
        });
    });
});
                </code>
            </pre></div>
</section>