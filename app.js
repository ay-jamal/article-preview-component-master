const button = document.getElementById("btn");
const social = document.querySelector(".social");

button.addEventListener("click", () => {
  console.log(social);
  social.classList.toggle("hide");
});
