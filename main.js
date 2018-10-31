window.onload = () => {
  let filterBtn = document.getElementById("filter-button");

  filterBtn.addEventListener("click", () => {
    let items = document.querySelectorAll(".food-gallery-item");
    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains("removed")) {
        items[i].classList.remove("removed");
        continue;
      }
      items[i].classList.add("removed");
    }
  });
};
