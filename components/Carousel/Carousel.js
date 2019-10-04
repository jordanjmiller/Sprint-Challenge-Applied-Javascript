/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let carouselContainer = document.querySelector('.carousel-container');
let carouselImages = ["assets/carousel/mountains.jpeg", "assets/carousel/computer.jpeg", "assets/carousel/trees.jpeg", "assets/carousel/turntable.jpeg"];

function carouselCreator(data){
  let carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');
  let leftBtnDiv = document.createElement('div');
  leftBtnDiv.classList.add('left-button');
  leftBtnDiv.textContent = " < ";
  let rightBtnDiv = document.createElement('div');
  rightBtnDiv.classList.add('right-button');
  rightBtnDiv.textContent= " > ";

  carouselDiv.appendChild(leftBtnDiv);

  data.forEach((image)=>{
    let img = document.createElement('img');
    img.src = image;
    carouselDiv.appendChild(img);
  })
  
  carouselDiv.appendChild(rightBtnDiv);
  console.log(carouselDiv);
  return carouselDiv;
}
let carouselDiv = carouselCreator(carouselImages);
console.log(carouselDiv);
carouselContainer.appendChild(carouselDiv);
let cImgs = document.querySelectorAll('.carousel-container img');
console.log(cImgs);
cImgs[0].style.display = "block";
let currentIndex = 0;
let rightButton = document.querySelector('.right-button');
let leftButton = document.querySelector('.left-button');

rightButton.addEventListener('click', () => {
  cImgs[currentIndex].style.display = "none";
  if (currentIndex < cImgs.length -1)
  {
    currentIndex++
  }
  else
  {
    currentIndex = 0;
  }
  cImgs[currentIndex].style.display = "block";
  console.log(currentIndex);
}
);

leftButton.addEventListener('click', () => {
  cImgs[currentIndex].style.display = "none";
  if (currentIndex > 0)
  {
    currentIndex--;
  }
  else if (currentIndex === 0)
  {
    currentIndex = cImgs.length-1;
  }
  cImgs[currentIndex].style.display = "block";
  console.log(currentIndex);
}
);