// $(document).ready(function () {
//     var imgObjArray = []
//   var imageContainer = $(".carousel-inner");
//   fetch("https://images-api.nasa.gov/search?q=hubble&page=1", {
//     api_key: "WSXS6UpIdCzVPyL4krzd37fhXgvuFfWGiAdgtNgh",
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//         for (var i = 0; i < 10; i++) {
//           var imgObj = {
//               img_path: data.collection.items[i].links[0].href,
//               status: "",
//               className: "d-block"
//           }
//           imgObjArray.push(imgObj)
        
//           // imgDiv.addClass("carousel-item");
//           // imgDiv.addClass(imgObj.className)
//           // imgDiv.attr("data-bs-interval", "10000");
//           // imgEL.attr("src",imgObj.img_path)
//           // imgDiv.addClass("d-block w-100")
//           // imageContainer.append(imgDiv.append(imgEL))
//         }
//         buildImageCarousel(imgObjArray)
//     //   imgDiv.addClass("d-block w-100")
//     });
// });

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
