//BACKGROUND SPARKLES EFFECT//
const colors = [
  "#FF0000", // red
  "#FFFF00", // yellow
  "#00FF00", // green
  "#00E6E6", // light blue
  "#2B00FF", // dark blue
  "#FF66FF", // purple
];
const rotationAngles = [0, 45, 90, 135];

function getRandomColor() {
  // Creates a randomIndex number variable.
  // Math.floor ensures the result is a whole number within the bound of array indices.
  // Math.random picks a random number between 0 and 1. Then multiplies it by the length of the colors array.
  // It rounds down to the whole number, and that is the randomIndex.
  // Then returns the color from the array associated with the randomIndex.
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function getRandomRotation() {
  // Performs same action as getRandomColor, but with different rotational angles.
  const randomIndex = Math.floor(Math.random() * rotationAngles.length);
  return rotationAngles[randomIndex];
}

function createSparkle() {
  const sparkle = document.createElement("div"); // creating new div for the sparkles
  sparkle.classList.add("sparkle"); // adding a the class of sparkle to the div
  sparkle.style.top = `${Math.random() * 100}vh`; // randomizing the distance from the top the sparkle will be placed
  sparkle.style.left = `${Math.random() * 100}vw`; // randomizing the distance from the left the sparkle will be placed
  sparkle.style.backgroundColor = getRandomColor(); // calling the getRandomColor function to specify each sparkle's color
  sparkle.style.animationDuration = `${Math.random() * 3 + 1}s`; // randomizing the length of time the sparkle is visible, between 1 and 4 seconds
  sparkle.style.transform = `rotate(${getRandomRotation()}deg)`; // calling the getRandomRotation function to specify each sparkle's rotation
  document.querySelector(".sparkling-bg").appendChild(sparkle); // adding the sparkle child div to the parent div

  setTimeout(() => {
    // Removes the sparkle element from the DOM
    sparkle.remove();
  }, 5000);
}

setInterval(createSparkle, 50); // Adjust the interval to control the number of sparkles



//INTERACTIVITY FOR WELCOME CARD AND SHAPES//
document.addEventListener("DOMContentLoaded", () => {
  // console.log("DOM fully loaded and parsed");

  const mainContainer = document.getElementById("main-container");
  const welcomeCard = document.getElementById("welcome-card"); // Referencing the element with the ID "welcome-card"
  const clickHere = document.getElementById("click-here");
  const shapes = document.getElementById("shapes");
  const aboutMe = document.getElementById("about-me");


  // console.log(welcomeCard, shapes, clickHere, aboutMe, mainContainer);

  if (!welcomeCard || !shapes || !clickHere || !aboutMe || !mainContainer) {
    console.error("One or more required elements are missing.");
    return;
  }

  clickHere.addEventListener("click", () => {
    console.log("Click Here button clicked");

    welcomeCard.classList.toggle("active"); // Toggles the 'active' class on the 'welcomeCard' element
    
    if (welcomeCard.classList.contains("active")) {
      console.log("welcomeCard is active");

      setTimeout(() => {
        shapes.classList.remove("hidden");
        shapes.classList.add("visible");

        console.log("Shapes have arrived, 1.5 seconds")

      }, 2000); //1.5 seconds delay
    } else {
      console.log("welcomeCard is inactive");

      // If not active, shapes and aboutMe hidden
      shapes.classList.remove("animate");
      shapes.classList.add("visible");
      aboutMe.classList.remove("visible");
    }
  });

  document.getElementById("toggle-about-me").addEventListener("click", () => {
    console.log("Toggle About Me clicked!");
    aboutMe.classList.toggle("visible");
    if (aboutMe.classList.contains("visible")) {
      console.log("aboutMe is visible");
      shapes.classList.add("visible");
    } else {
      console.log("aboutMe is hidden");
      shapes.classList.remove("visible");
    }
  });


  const squareShape = document.getElementById("toggle-projects");
  const projectList = document.getElementById("projects-list");

  if (!squareShape || !projectList || !shapes) {
    console.error("One or more required elements are missing");
    return;
  }

  squareShape.addEventListener("click", () => {
    console.log("Square shape clicked");
    projectList.classList.toggle("visible");
    if (projectList.classList.contains("visible")) {
      console.log("Projects List is visible");
      shapes.classList.add("visible");
    } else {
      console.log("Project List is hidden");
      shapes.classList.remove("visible");
    }
  });
  
});












//   document.getElementById("toggle-about-me").addEventListener("click", () => {
//     aboutMe.classList.toggle("visible");
//     if (aboutMe.classList.contains("visible")) {
//       shapes.classList.add("visible");
//     } else {
//       shapes.classList.remove("visible");
//     }
//   });

// document.addEventListener("DOMContentLoaded", () => {
//   const toggleAboutMe = document.getElementById("toggle-about-me");
//   const aboutMeSection = document.getElementById("about-me");

//   toggleAboutMe.addEventListener("click", () => {
//     aboutMeSection.classList.toggle("visible");
//   });
// });

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
