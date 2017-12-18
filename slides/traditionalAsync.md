<section>
    <h2>传统的解决方式</h2>
</section>
<section>
    <h2>Callbacks</h2>
    <small class="fragment">
        A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
    </small>
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
    <small class="fragment">

    </small>
    <pre>
        <code>
$.subscribe(PubSubEvents.UpdateSeatSummary, (e, pax) => {
    updateButtonState({ isButtonDisabled: !seatsHaveBeenSelectedForAllSegments(pax.seatAssignment) });
});

$.publish(PubSubEvents.UpdateSeatSummary, { seatAssignment: list, totalBookingPrice });
        </code>
    </pre>
</section>