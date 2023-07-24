
// function updateImage() {
//     const name = document.getElementById("inputName").value;
  
//     const canvas = document.createElement("canvas");
//     canvas.width = 1033; // Tăng chiều rộng canvas để chứa biểu tượng
//     canvas.height = 657;
//     const ctx = canvas.getContext("2d");
  
//     // 
//     ctx.fillStyle = "#ffffff"; // 
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
  
//     // 
//     const font = "SVNGilroy";
//     const color = "#0a1b2b";
  
//     // 
//     ctx.fillStyle = color;
//     ctx.font = "bold 50px " + font;
//     const textWidth = ctx.measureText(name).width;
//     const textHeight = 24; //
  
//     // 
//     const x = (canvas.width - textWidth) / 2;
//     const y = (canvas.height - textHeight) / 2;
  
//     //
//     ctx.fillText(name, x, y);
  
//     // 
//     const icon = new Image();
//     icon.src = "assets/images/icon.svg"; //
//     const iconSize = 20;
//     const iconX = x + textWidth - 23; 
//     const iconY = y - 56;
  
//     icon.onload = function () {
//       ctx.drawImage(icon, iconX, iconY, iconSize, iconSize);
//       const dataURL = canvas.toDataURL("image/png");
//       const imageElement = document.createElement("img");
//       imageElement.src = dataURL;
  
//       const outputImageContainer = document.getElementById("outputImageContainer");
//       outputImageContainer.innerHTML = "";
  
//       const downloadLink = document.createElement("a");
//       downloadLink.download = "image.png";
//       downloadLink.href = dataURL;
//       downloadLink.textContent = "Export image";
  
//       outputImageContainer.appendChild(imageElement);
//       outputImageContainer.appendChild(downloadLink);
  
//       //
//       downloadLink.style.display = "block";
//     };
//   }
  
//   document.getElementById("inputName").addEventListener("input", updateImage);
  

//   function clearInput() {
//     const inputName = document.getElementById("inputName");
//     inputName.value = ''; 
//     updateImage();
//   }
  
//   document.getElementById("clearButton").addEventListener("click", clearInput);


// function updateImage() {
//   const name = document.getElementById("inputName").value;

//   const canvas = document.createElement("canvas");
//   canvas.width = 1033; // Tăng chiều rộng canvas để chứa biểu tượng
//   canvas.height = 657;
//   const ctx = canvas.getContext("2d");

//   //
//   ctx.fillStyle = "#ffffff"; //
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   //
//   const font = "SVNGilroy";
//   const color = "#0a1b2b";

//   //
//   ctx.fillStyle = color;
//   ctx.font = "bold 50px " + font;
//   const textWidth = ctx.measureText(name).width;
//   const textHeight = 24; //

//   //
//   const x = (canvas.width - textWidth) / 2;
//   const y = (canvas.height - textHeight) / 2;

//   //
//   ctx.fillText(name, x, y);

//   //
//   const icon = new Image();
//   icon.src = "assets/images/icon.svg"; //
//   const iconSize = 20;
//   const iconX = x + textWidth - 23;
//   const iconY = y - 56;

//   icon.onload = function () {
//     ctx.drawImage(icon, iconX, iconY, iconSize, iconSize);
//     const dataURL = canvas.toDataURL("image/png");
//     const imageElement = document.createElement("img");
//     imageElement.src = dataURL;

//     const outputImageContainer = document.getElementById("outputImageContainer");
//     outputImageContainer.innerHTML = "";

//     const downloadLink = document.createElement("a");
//     downloadLink.download = "image.png";
//     downloadLink.href = dataURL;
//     downloadLink.textContent = "Export image";

//     outputImageContainer.appendChild(imageElement);
//     outputImageContainer.appendChild(downloadLink);

//     //
//     downloadLink.style.display = "block";
//   };
// }

// document.getElementById("inputName").addEventListener("input", updateImage);

// function clearInput() {
//   const inputName = document.getElementById("inputName");
//   inputName.value = "";
//   updateImage();
// }

// document.getElementById("clearButton").addEventListener("click", clearInput);


function updateImage() {
  const name = document.getElementById("inputName").value;

  const canvas = document.createElement("canvas");
  canvas.width = 1033; // Tăng chiều rộng canvas để chứa biểu tượng
  canvas.height = 657;
  const ctx = canvas.getContext("2d");

  // 
  ctx.fillStyle = "#ffffff"; // 
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 
  const font = "SVNGilroy";
  const color = "#0a1b2b";

  // 
  ctx.fillStyle = color;
  ctx.font = "bold 50px " + font;
  const textWidth = ctx.measureText(name).width;
  const textHeight = 24; //

  // 
  const x = (canvas.width - textWidth) / 2;
  const y = (canvas.height - textHeight) / 2;

  //
  ctx.fillText(name, x, y);

  // 
  const icon = new Image();
  icon.src = "assets/images/icon.svg"; //
  const iconSize = 20;
  const iconX = x + textWidth - 23; 
  const iconY = y - 56;

  icon.onload = function () {
    ctx.drawImage(icon, iconX, iconY, iconSize, iconSize);
    
    // Create a Blob from canvas data
    canvas.toBlob(function(blob) {
      // Create a URL for the Blob
      const imageURL = URL.createObjectURL(blob);
      
      // Display the image using the URL
      const imageElement = document.createElement("img");
      imageElement.src = imageURL;

      const outputImageContainer = document.getElementById("outputImageContainer");
      outputImageContainer.innerHTML = "";

      const downloadLink = document.createElement("a");
      downloadLink.download = "image.png";
      downloadLink.href = imageURL;
      downloadLink.textContent = "Export image";

      outputImageContainer.appendChild(imageElement);
      outputImageContainer.appendChild(downloadLink);

      //
      downloadLink.style.display = "block";
      
      // Release the URL object to free up memory
      URL.revokeObjectURL(imageURL);
    });
  };
}

document.getElementById("inputName").addEventListener("input", updateImage);

function clearInput() {
  const inputName = document.getElementById("inputName");
  inputName.value = ''; 
  updateImage();
}

document.getElementById("clearButton").addEventListener("click", clearInput);