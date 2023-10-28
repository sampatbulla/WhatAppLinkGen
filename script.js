function generateWhatsAppLink() {
    const phoneInput = document.getElementById("phoneInput");
    const whatsAppLink = document.getElementById("whatsAppLink");
    const phoneNumber = phoneInput.value;

    if (phoneNumber) {
        const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
        const whatsappURL = `https://api.whatsapp.com/send?phone=${cleanedPhoneNumber}`;
        whatsAppLink.innerHTML = `<a href="${whatsappURL}" target="_blank">WhatsApp Link</a>`;
        whatsAppLink.style.display = 'block'; // Show the WhatsApp link
    } else {
        whatsAppLink.innerHTML = "Please enter a phone number.";
        whatsAppLink.style.display = 'none'; // Hide the WhatsApp link
    }
}

function clearFields() {
    const phoneInput = document.getElementById("phoneInput");
    const whatsAppLink = document.getElementById("whatsAppLink");

    // Clear the input field and WhatsApp link
    phoneInput.value = '';
    whatsAppLink.innerHTML = '';
    whatsAppLink.style.display = 'none'; // Hide the WhatsApp link
}
