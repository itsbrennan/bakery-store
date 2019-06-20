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


// light box

(function(){

  let imageList = [];
  let counter = 0;

  const images = document.querySelectorAll('.store-img');
  const container = document.querySelector('.lightbox-container');
  const item = document.querySelector('.lightbox-item');
  const closeIcon = document.querySelector('.lightbox-close');
  const btnLeft = document.querySelector('.btnLeft');
  const btnRight = document.querySelector('.btnRight');

  // add all images to an array
  images.forEach(function(img) {
    imageList.push(img.src);

  });
  //console.log(imageList);

  // open modal
  images.forEach(function(img){
    img.addEventListener('click', function(event){
      // show modal
      container.classList.add('show');
      // get source
      let src = event.target.src;
      //console.log(src);
      counter = imageList.indexOf(src);
      // show modal with correct image
      item.style.backgroundImage = `url(${src})`;
      
      
      
    })
  })

  // close modal
  closeIcon.addEventListener('click', function(){
    container.classList.remove('show');
  })
  // left button
  btnLeft.addEventListener('click', function(){
    counter --;  
    if(counter < 0){
      counter = imageList.length -1;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`
    console.log(counter);
  })
  // right button
  btnRight.addEventListener('click', function(){
    counter ++;  
    if(counter > imageList.length -1){
      counter = 0;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`
    console.log(counter);
  })

})();