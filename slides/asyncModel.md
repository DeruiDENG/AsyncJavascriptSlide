<section>
    <h1>Javascript并发模型</h1>
    <p>JavaScript 的并发模型基于"事件循环"。这个模型与像 C 或者 Java 这种其它语言中的模型截然不同。</p>
    <ul>
        <li class="fragment" data-fragment-index="1">
            你永远都不会遇到"线程安全"问题
        </li>
        <li class="fragment">
            <ul>事件驱动模型
                <li>
                    只有主线程有权利改变环境
                </li>
                <li>
                    主线程不允许被阻塞
                </li>
            </ul>
        </li>
        <li class="fragment">实际上几乎所有的Javascript Runtime都是单线程的</li>
    </ul>
</section>
<section>
    <h1>Javascript的事件驱动模型</h1>
    <img data-src="images/js_runtime.png" style="width: 50%"/>
</section>
<section>
    <h1>Web Api</h1>
    <p>Javascript Api for web browser</p>
    <ul>
        <li>DOM APIs</li>
        <li>Fetching data APIs</li>
        <li>Hardware APIs</li>
    </ul>
    <a href="https://developer.mozilla.org/zh-CN/docs/Web/API" target="_blank">List of Javascript Web Api</a>
</section>
<section>
    <h1>事件循环(Event loop)</h1>
    <pre><code>
while (true) {
    if (eventHandlersQueue.isNotEmpty()) {
        eventHandlersQueue.processTopEventHandler();
    }
}
    </code></pre>
    <ul>
        <li>完整执行: 一个事件完全执行完毕，下一个事件才会执行</li>
        <li>消息添加：随时可以添加事件</li>
        <li>事件循环永不阻塞</li>
    </ul>
</section>
<section>
    <h1>A good simulator...</h1>
    <a href="http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D" target="_blank">
        Click me!
    </a>
</section>
