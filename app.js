'use strict'

var imageArray = []; 

var totalClicks = 0;

function getRandomImg(){
    var randomNumber = Math.floor(Math.random() * imageArray.length);
    return randomNumber;
}

function imgconstructer(imgPath, name){
    this.imgPath = imgPath;
    this.name = name;
    this.timesClicked = 0;
    imageArray.push(this);

}

var previousIndex = -1;

function renderImg(){
    var imgRef = document.getElementById('img1')
    var randomIndex = getRandomImg();
    
    while(randomIndex === previousIndex){
        randomIndex = getRandomImg();
    }
    previousIndex = randomIndex;
    var randomImg = imageArray[randomIndex];
    imgRef.src = randomImg.imgPath;
    imgRef.alt = randomImg.name;
}

new imgconstructer('img/bag.jpg', 'R2D2 Suit Case');
new imgconstructer('img/banana.jpg', 'Banana cutter');
new imgconstructer('img/bathroom.jpg', 'Bathroom tablet');
new imgconstructer('img/boots.jpg', 'Rain boots');
new imgconstructer('img/breakfast.jpg', 'All in one breakfast maker');
new imgconstructer('img/bubblegum.jpg', 'Meatball bubblegum');
new imgconstructer('img/chair.jpg', 'Terriable made chair');
new imgconstructer('img/cthulhu.jpg', 'Green monster');
new imgconstructer('img/dog-duck.jpg', 'Rat dog with a mask');
new imgconstructer('img/dragon.jpg', 'Dragon Meat');
new imgconstructer('img/pen.jpg', 'Swiss army pen');
new imgconstructer('img/pet-sweep.jpg', 'Dog with cleaning shoes');
new imgconstructer('img/scissors.jpg', 'Pizza scissors');
new imgconstructer('img/shark.jpg', 'Shark blanket');
new imgconstructer('img/sweep.png', 'Cleaning baby');
new imgconstructer('img/tauntaun.jpg', 'starwars blanket');
new imgconstructer('img/unicorn.jpg', 'Unicorn meat');
new imgconstructer('img/water-can.jpg', 'More like unwater can ');
new imgconstructer('img/usb.gif', 'Tenticale usb');
new imgconstructer('img/wine-glass.jpg', 'Badly made glass');










renderImg();

var imgRef = document.getElementById('img1');
imgRef.addEventListener('click', renderImg);