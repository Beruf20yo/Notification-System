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
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}