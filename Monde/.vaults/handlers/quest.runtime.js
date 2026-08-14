(function () {
  document.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("coa-quest-accept")) {
      e.target.innerText = "Quête acceptée !";
      e.target.style.backgroundColor = "green";
      // Prevent multiple clicks if necessary
      e.target.classList.remove("coa-quest-accept");
    }
  });
})();
