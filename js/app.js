// filter btns

(function() {
  // select all btns
  const filterBtn = document.querySelectorAll(".filter-btn");

  filterBtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      event.preventDefault();

      // set values from data-set attributes
      const value = event.target.dataset.filter;

      const items = document.querySelectorAll(".store-item");
      items.forEach(function(item) {
        if (value === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(value)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
})();

// search input
(function() {
  // target serach box
  const search = document.getElementById("search-item");

  search.addEventListener("keyup", function() {
    let value = search.value.toLowerCase().trim();

    const items = document.querySelectorAll(".store-item");

    items.forEach(function(item) {
      let type = item.dataset.item;

      if (type.includes(value)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }

    });
  });
})();
