let greetingButton = document.getElementById("greetingButton")
greetingButton.addEventListener("click", greetTheUser)

function greetTheUser() {
  let userName = document.getElementById("userName").value
  let greetingSpot = document.getElementById("greeting")
  
  greetingSpot.innerText = "Hello, " + userName+ "!"

}