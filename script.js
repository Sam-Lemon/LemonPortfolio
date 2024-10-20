// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     //Collect form data
//     const firstName = document.getElementById("first-name").value;
//     const lastName = document.getElementById("last-name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     //Send email using EmailJS
//     email.js
//       .send("service_npdzlfj", "template_cstqo4b", {
//         first_name: firstName,
//         last_name: lastName,
//         from_email: email,
//         message: message,
//       })
//       .then(
//         function (response) {
//           document.getElementById("status").innerHTML =
//             "Message sent successfully!";
//         },
//         function (error) {
//           document.getElementById("status").innerHTML =
//             "Failed to send message. Please try again.";
//         }
//       );
//   });

