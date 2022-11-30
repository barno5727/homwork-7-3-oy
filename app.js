let body = document.getElementsByTagName(`body`)[0];

setInterval(() => {
    let title = Math.floor(Math.random()* 255) 
    let title1 = Math.floor(Math.random()* 255) 
    let title2 = Math.floor(Math.random()* 255) 
    let title3 = Math.floor(Math.random()* 255) 
    body.style.backgroundColor = `rgb(${title},${title1}, ${title2}, ${title3})`;
}, 1000);





    

let imageElement = document.querySelector(".slide");
imageElement.style.padding = "150px 650px";
imageElement.style.textAlign = "center";
setInterval(() => {
  let src = imageElement.getAttribute("src");
  if (src === "images/chiroq-1.jpg") {
    imageElement.setAttribute("src", "images/chiroq-2.jpg");
  } else if (src === "images/chiroq-2.jpg") {
    imageElement.setAttribute("src", "images/chiroq-1.jpg");
  } else {
    imageElement.setAttribute("src", "images/chiroq-2.jpg");
  }
}, 2000);

