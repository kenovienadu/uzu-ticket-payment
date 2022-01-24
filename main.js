class UzuEvent {
	eventId = "";

	constructor(eventId) {
		this.eventId = eventId;
	}

	open() {
		console.log("DEBUG: opening uzu ticket frame");
		const eventId = this.eventId;

		const uzuTicketIframe = document.createElement("iframe");
		uzuTicketIframe.id = "uzuTicketFrame";
		uzuTicketIframe.src = `https://confident-mccarthy-204cef.netlify.app/?event=${eventId}`;
		uzuTicketIframe.style.position = "fixed";
		uzuTicketIframe.style.top = "0";
		uzuTicketIframe.style.left = "0";
		uzuTicketIframe.style.height = "100vh";
		uzuTicketIframe.style.width = "100%";
		uzuTicketIframe.style.zIndex = "10000";
		uzuTicketIframe.style.backgroundColor = "rgba(0,0,0, 0.5)";

		// add close button
		const closeBtn = document.createElement("button");
		closeBtn.id = "closeUzuModalBtn";
		closeBtn.textContent = "Close";
		closeBtn.style.background = "#1f1f1f";
		closeBtn.style.position = "fixed";
		closeBtn.style.top = "20px";
		closeBtn.style.right = "20px";
		closeBtn.style.position = "fixed";
		closeBtn.style.padding = "10px";
		closeBtn.style.color = "#f1f1f1";
		closeBtn.style.zIndex = "11000";
		closeBtn.style.borderRadius = "7px";

		closeBtn.addEventListener("click", () => {
			this.close();
		});

		document.body.appendChild(closeBtn);
		document.body.appendChild(uzuTicketIframe);
	}

	close() {
		console.log("DEBUG: closing uzu ticket frame");

		const uzuTicketIframe = document.querySelector("#uzuTicketFrame");
		const closeBtn = document.querySelector("#closeUzuModalBtn");

		if (uzuTicketIframe) {
			document.body.removeChild(uzuTicketIframe);
		}

		if (closeBtn) {
			document.body.removeChild(closeBtn);
		}
	}
}
