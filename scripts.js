const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const messageText = document.getElementById("message-text").value;
  const attachImage = document.getElementById("attach-image").files[0];
  const recipientType = document.querySelector('input[name="recipient-type"]:checked').value;
  const messageType = document.querySelector('input[name="message-type"]:checked').value;

  // Do something with the form data here
  console.log({
    messageText,
    attachImage,
    recipientType,
    messageType,
  });
});

document.querySelectorAll('input[name="recipient-type"]').forEach((input) => {
  input.addEventListener("change", () => {
    const checkedInput = document.querySelector('input[name="recipient-type"]:checked');
    const recipientTypeLabel = checkedInput.nextElementSibling;
    recipientTypeLabel.style.fontWeight = "bold";
  });
});

document.querySelectorAll('input[name="message-type"]').forEach((input) => {
  input.addEventListener("change", () => {
    const checkedInput = document.querySelector('input[name="message-type"]:checked');
    const messageTypeLabel = checkedInput.nextElementSibling;
    messageTypeLabel.style.fontWeight = "bold";
  });
});