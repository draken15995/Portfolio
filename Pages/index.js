let dog = document.getElementById('dog');
let main = document.getElementsByClassName('about');
let headshot = document.getElementById('headshot');

function scarletImage() {
    let img = document.createElement('img');
    img.src = "C:/Users/ztb15/Documents/HTML Code/Portfolio Project/Images/Scarlet.jpg";
    img.width = '200';
    img.height = '300';
    document.getElementById('hidden').appendChild(img);
}

dog.onclick = scarletImage;


function rickRoll() {
    let link = document.createElement('a');
    link.src = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    link.target = '_blank';
};

function colorValue() {
    return Math.floor(Math.random() * 256);
  }

function backgroundChange() {
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.backgroundColor = randomColor;
};


document.addEventListener('keydown', backgroundChange);