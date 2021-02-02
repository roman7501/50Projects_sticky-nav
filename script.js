const nav = document.querySelector("nav");

window.addEventListener("scroll", (e) => {
  console.log(document.body.getBoundingClientRect().top);
  const intersection = document.body.getBoundingClientRect().top < -30;
  console.log(intersection);
  if (intersection) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
