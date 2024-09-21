onload = () => {
  document.body.classList.remove("container");
};

window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
});
