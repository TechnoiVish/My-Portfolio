
let contact = document.getElementById("contact");

contact.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");

  let subject = document.getElementById("subject");
  let message = document.getElementById("message");

  if (name.value == "" || email.value == ""||subject.value == "" || message.value == "") {
    alert("Ensure you input a value in all fields!");
  } else {
    Swal.fire({
        title: "Congrats!",
        text: " Form has been successfully submitted.",
        icon: "success"
      });

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  }
});