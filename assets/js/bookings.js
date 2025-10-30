// -------------------------------
// HandyHome Booking Popup Script
// -------------------------------

// Modal elements
const modal = document.getElementById("bookingModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const form = document.getElementById("bookingForm");

// Open modal
if (openBtn) {
	openBtn.onclick = () => modal.style.display = "flex";
}

// Close modal
if (closeBtn) {
	closeBtn.onclick = () => modal.style.display = "none";
}

// Close if user clicks outside
window.onclick = (event) => {
	if (event.target === modal) modal.style.display = "none";
};

// Form submission
if (form) {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		alert("✅ Booking submitted successfully! Our team will contact you soon.");
		form.reset();
		modal.style.display = "none";
	});
}

// -------------------------------
// Payment Field Visibility Logic
// -------------------------------
const paymentSelect = document.getElementById("payment");
const paymentDetails = document.getElementById("paymentDetails");

if (paymentSelect) {
	paymentSelect.addEventListener("change", function() {
		const selected = this.value;
		if (selected === "GCash" || selected === "PayMaya" || selected === "Credit/Debit Card") {
			paymentDetails.style.display = "block";
		} else {
			paymentDetails.style.display = "none";
		}
	});
}

const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {
	feedbackForm.addEventListener("submit", (e) => {
		e.preventDefault();
		alert("✅ Thank you for your feedback! We appreciate your time.");
		feedbackForm.reset();
	});
}

