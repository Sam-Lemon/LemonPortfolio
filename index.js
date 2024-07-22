//BACKGROUND SPARKLES EFFECT//
const colors = ['#FF0000', '#FFFF00', '#00FF00', '#00E6E6', '#2B00FF', '#FF66FF'];
const rotationAngles = [0, 45, 90, 135];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function getRandomRotation () {
    const randomIndex = Math.floor(Math.random() * rotationAngles.length);
    return rotationAngles[randomIndex];
}

function createSparkle () {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.backgroundColor = getRandomColor();
    sparkle.style.animationDuration = `${Math.random() * 3 + 1}s`;
    sparkle.style.transform =  `rotate(${getRandomRotation()}deg)`;
    document.querySelector('.sparkling-bg').appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3000)    //Adjust this to match the animation duration
}

setInterval(createSparkle, 50);    //Adjust the interval to control the number of sparkles


//Toggle 'active' class
const welcomeCard = document.getElementById('welcome-card');
const shapes = document.getElementById('shapes');

welcomeCard.addEventListener('mouseover', () => {
    welcomeCard.classList.add('active');
    shapes.classList.add('visible');    //Makes shapes visible
});

welcomeCard.addEventListener('transitionend', () => {
    if (welcomeCard.classList.contains('active')) {
        shapes.classList.add('visible');    //Makes sure shapes stay visible
    }
});