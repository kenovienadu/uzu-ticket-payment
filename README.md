# uzu-ticket-payment
A script to initiate popup payments for uzu tickets 


## Example

```html
<button class="bg-gray-800 text-gray-50 p-3 rounded" id="buy">Buy Ticket</button>

<script src="https://cdn.jsdelivr.net/gh/kenovienadu/uzu-ticket-payment/main.js"></script>

<script>
	const uzuEvent = new UzuEvent("eventId"); // Specify the event ID

	document.querySelector("#buy").addEventListener("click", () => {
		uzuEvent.open(); // Open Ticket Payment Modal (takes a few seconds to load up though)
	});
</script>
```
