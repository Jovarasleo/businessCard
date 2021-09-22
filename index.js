let userName = document
  .querySelector(".fullname")
  .addEventListener("input", (event) => {
    myStorageName = window.localStorage.userName = String(event.target.value);
  });
let email = document.querySelector(".e-mail");
email.addEventListener("input", (event) => {
  myStorageEmail = window.localStorage.email = event.target.value;
});
let phone = document.querySelector(".phone");
phone.addEventListener("input", (event) => {
  myStoragePhone = window.localStorage.phone = event.target.value;
});
let address = document.querySelector(".address");
address.addEventListener("input", (event) => {
  myStorageAddress = window.localStorage.address = event.target.value;
});
let jobServices = document.querySelector(".jobServices");
jobServices.addEventListener("input", (event) => {
  myStorageJobServices = window.localStorage.jobServices = event.target.value;
});

const Button = document.querySelector(".createButton");

Button.addEventListener("click", function genCard() {
  let card = document.createElement("div");
  card.className = "businessCard";

  let carduserName = document.createElement("p");
  let cardemail = document.createElement("p");
  let cardphone = document.createElement("p");
  let cardaddress = document.createElement("p");
  let cardjobServices = document.createElement("p");

  card.appendChild(carduserName).innerHTML += myStorageName;
  card.appendChild(cardemail).innerHTML += myStorageEmail;
  card.appendChild(cardphone).innerHTML += myStoragePhone;
  card.appendChild(cardaddress).innerHTML += myStorageAddress;
  card.appendChild(cardjobServices).innerHTML += myStorageJobServices;
  document.querySelector(".inputSection").appendChild(card);
});
let card = document.createElement("div");
card.className = "businessCard";

let carduserName = document.createElement("p");
let cardemail = document.createElement("p");
let cardphone = document.createElement("p");
let cardaddress = document.createElement("p");
let cardjobServices = document.createElement("p");

card.appendChild(carduserName).innerHTML += window.localStorage.userName;
card.appendChild(cardemail).innerHTML += window.localStorage.email;
card.appendChild(cardphone).innerHTML += window.localStorage.phone;
card.appendChild(cardaddress).innerHTML += window.localStorage.address;
card.appendChild(cardjobServices).innerHTML += window.localStorage.jobServices;
document.querySelector(".inputSection").appendChild(card);
