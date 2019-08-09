var link = document.querySelector(".js-search-button");
var popup = document.querySelector(".modal");
  
  link.addEventListener("click", function (evt) {
    if (popup.classList.contains("modal-show")) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.add("modal-close");
        } else {
          evt.preventDefault();
          popup.classList.remove("modal-close");
          popup.classList.add("modal-show");
        }
  });  