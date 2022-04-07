$(document).ready(function () {
  fetch("https://images-api.nasa.gov/search?q=hubble&page=1", {
    api_key: "WSXS6UpIdCzVPyL4krzd37fhXgvuFfWGiAdgtNgh",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var imgElArray = document.querySelectorAll("a")
        for (var i = 0; i < imgElArray.length; i++) {
          var targetNum = imgElArray[i].getAttribute("data-index")
          console.log(targetNum)
          console.log(imgElArray[i].children[0])
          imgElArray[targetNum].children[0].setAttribute("src", data.collection.items[targetNum].links[0].href)
        }
  
    });
});

// function buildImageCarousel(imgArray) {
//     var imgDiv = $("<div>").addClass("carousel-item");
//     var imgEl = $("<img>")
//       imgArray.forEach(function(imgObj) {
//           var sourcepath = imgObj.img_path;
            
//       })
// }
//task, create working bootstrap image carousel


{/* <div class="carousel-item" data-bs-interval="2000">
<img src="..." class="d-block w-100" alt="..." />
</div>
<div class="carousel-item">
<img src="..." class="d-block w-100" alt="..." />
</div> */}
