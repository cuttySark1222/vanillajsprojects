const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomImg1 = 'dice' + randomNumber1 +'.png';
const randomImgSrc1 = 'images/' + randomImg1;
document.querySelector('.img1').setAttribute('src', randomImgSrc1);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomImg2 = 'dice' + randomNumber2 +'.png';
const randomImgSrc2 = 'images/' + randomImg2;
document.querySelector('.img2').setAttribute('src', randomImgSrc2);

if(randomNumber1 > randomNumber2) {
  document.querySelector('h1').textContent = '🚩 Play 1 Wins!';
} else if(randomNumber1 < randomNumber2) {
  document.querySelector('h1').textContent = '🚩 Play 2 Wins!';
} else {
  document.querySelector('h1').textContent = 'Draw!';
}



