window.onload = () => {
  $("#searchbar").on("change paste keyup", () => {
    let searchbar = document.getElementById("searchbar").value;
    document.getElementById("searched-for").innerHTML = searchbar;
  });
};
