
  

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
    icon.src = "assets/images/open-hair-scissors.png"; //
    const iconSize = 20;
    const iconX = x + textWidth + 5; 
    const iconY = y - 50;
  
    icon.onload = function () {
      ctx.drawImage(icon, iconX, iconY, iconSize, iconSize);
      const dataURL = canvas.toDataURL("image/png");
      const imageElement = document.createElement("img");
      imageElement.src = dataURL;
  
      const outputImageContainer = document.getElementById("outputImageContainer");
      outputImageContainer.innerHTML = "";
  
      const downloadLink = document.createElement("a");
      downloadLink.download = "image.png";
      downloadLink.href = dataURL;
      downloadLink.textContent = "Tải xuống hình ảnh";
  
      outputImageContainer.appendChild(imageElement);
      outputImageContainer.appendChild(downloadLink);
  
      //
      downloadLink.style.display = "block";
    };
  }
  
  document.getElementById("inputName").addEventListener("input", updateImage);
  