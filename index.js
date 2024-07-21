const colors = ['#FF0000', '#FFFF00', '#00FF00', '#00E6E6', '#2B00FF', '#FF66FF'];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function createSparkle () {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.backgroundColor = getRandomColor();
    sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`;
    document.querySelector('.sparkling-bg').appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3000)    //Adjust this to match the animation duration
}

setInterval(createSparkle, 1);    //Adjust the interval to control the number of sparkles