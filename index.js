//BACKGROUND SPARKLES EFFECT//
const colors = [
  "#FF0000",
  "#FFFF00",
  "#00FF00",
  "#00E6E6",
  "#2B00FF",
  "#FF66FF",
];
const rotationAngles = [0, 45, 90, 135];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function getRandomRotation() {
  const randomIndex = Math.floor(Math.random() * rotationAngles.length);
  return rotationAngles[randomIndex];
}

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.top = `${Math.random() * 100}vh`;
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.backgroundColor = getRandomColor();
  sparkle.style.animationDuration = `${Math.random() * 3 + 1}s`;
  sparkle.style.transform = `rotate(${getRandomRotation()}deg)`;
  document.querySelector(".sparkling-bg").appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 3000); //Adjust this to match the animation duration
}

setInterval(createSparkle, 50); //Adjust the interval to control the number of sparkles

//Toggle 'active' class for Welcome Card//
const welcomeCard = document.getElementById("welcome-card");
const shapes = document.getElementById("shapes");
const clickHere = document.getElementById("click-here");

clickHere.addEventListener("click", () => {
  welcomeCard.classList.toggle("active");
  if (welcomeCard.classList.contains("active")) {
    shapes.classList.add("visible");
    aboutMe.classList.remove("visible");
    aboutMe.style.display = "none";
  } else {
    shapes.classList.remove("visible");
    aboutMe.classList.remove("visible");
    aboutMe.style.display = "none";
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleAboutMe = document.getElementById('toggle-about-me');
  const aboutMeSection = document.getElementById('about-me');

  toggleAboutMe.addEventListener('click', () => {
    aboutMeSection.classList.toggle('visible');
  });
});










// Toggle 'active' class for Shapes//
// const aboutMe = document.getElementById("about-me");

// function viewAboutMe() {
//   const toggleAboutMe = document.getElementById("toggle-about-me");
//   cont aboutMeSection = document.getElementById('about-me');

//   //Ensure element exists
//   if (!toggleAboutMe) {
//     console.error("Element #toggle-about-me not found");
//     return;
//   }

//   toggleAboutMe.addEventListener("click", () => {
//     console.log("toggle-about-me is working");

//     if (shapes.classList.contains("visible")) {
//       //Toggle visibility of aboutMe
//       if (aboutMe.style.display === "block" || aboutMe.style.display === "") {
//         aboutMe.style.display = "none";
//       } else {
//         aboutMe.style.display = "block";
//       }
//     }
//   });
// }
// viewAboutMe();
