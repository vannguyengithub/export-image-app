
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
//   ctx.font = "bold 60px " + font;
//   const textWidth = ctx.measureText(name).width;
//   const textHeight = 24; //

//   //
//   const x = (canvas.width - textWidth) / 2;
//   const y = (canvas.height - textHeight) / 2;

//   //
//   ctx.fillText(name, x, y);

//   //
//   const icon = new Image();

//   if (name.trim() !== '') {
//     icon.src = "assets/images/icon.svg"; //
//   } else {
//     // Set icon to a blank image
//     icon.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3C/svg%3E";
//   }

//   const iconSize = 24;
//   const iconX = x + textWidth - 27;
//   const iconY = y - 68;

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

// nguyen 
function updateImage() {
  const name = document.getElementById("inputName").value;
  const fileName = name.trim().replace(/\s+/g, "_") + ".png"; // Replace spaces with underscores and add ".png"

  const canvas = document.createElement("canvas");
  canvas.width = 1033; // Tăng chiều rộng canvas để chứa biểu tượng
  canvas.height = 657;
  const ctx = canvas.getContext("2d");

  // Fill the canvas with a white background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set the font and text color
  const font = "SVNGilroy";
  const color = "#0a1b2b";
  ctx.fillStyle = color;
  ctx.font = "bold 60px " + font;

  // Calculate the position to center the text
  const textWidth = ctx.measureText(name).width;
  const textHeight = 24;
  const x = (canvas.width - textWidth) / 2;
  const y = (canvas.height - textHeight) / 2;

  // Draw the text on the canvas
  ctx.fillText(name, x, y);

  // Load the icon image
  const icon = new Image();
  if (name.trim() !== '') {
    icon.src = "assets/images/icon.svg";
  } else {
    icon.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3C/svg%3E";
  }

  // Icon position and size
  const iconSize = 24;
  const iconX = x + textWidth - 27;
  const iconY = y - 68;

  icon.onload = function () {
    // Draw the icon on the canvas
    ctx.drawImage(icon, iconX, iconY, iconSize, iconSize);

    // Convert the canvas to a data URL
    const dataURL = canvas.toDataURL("image/png");

    // Create an image element to display the generated image
    const imageElement = document.createElement("img");
    imageElement.src = dataURL;

    // Get the output image container element and clear its content
    const outputImageContainer = document.getElementById("outputImageContainer");
    outputImageContainer.innerHTML = "";

    // Create a download link with the generated image
    const downloadLink = document.createElement("a");
    downloadLink.download = fileName;
    downloadLink.href = dataURL;
    downloadLink.textContent = "Export image";

    // Append the image and download link to the output container
    outputImageContainer.appendChild(imageElement);
    outputImageContainer.appendChild(downloadLink);

    // Display the download link
    downloadLink.style.display = "block";
  };
}

document.getElementById("inputName").addEventListener("input", updateImage);


// xóa

function clearInput() {
  const inputName = document.getElementById("inputName");
  inputName.value = "";
  updateImage();
}

document.getElementById("clearButton").addEventListener("click", clearInput);
