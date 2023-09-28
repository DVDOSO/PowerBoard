let svgBoard = document.getElementById("svgBoard");
let pointNumber = 0;

let pointRenderList = []

function addPoint(x, y) {
    let point = new Point(x, y);
    pointRenderList.push(point);
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.isClicked = false;

        this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.setAttribute("cx", x);
        this.circle.setAttribute("cy", y);
        this.circle.setAttribute("r", this.radius);
        this.circle.setAttribute("fill", "red");
        this.circle.setAttribute("stroke", "black");
        this.circle.setAttribute("id", "point" + pointNumber);
        pointNumber++;
        this.circle.addEventListener("click", function () {
            if(!this.isClicked){
                this.setAttribute("fill", "gray");
                console.log("point" + pointNumber + " clicked");
                this.isClicked = true;
            } else {
                this.setAttribute("fill", "red");
                console.log("point" + pointNumber + " unclicked");
                this.isClicked = false;
            }
        });
    }
    moveBy(x,y){
        this.x += x;
        this.y += y;
        this.circle.setAttribute("cx", this.x);
        this.circle.setAttribute("cy", this.y);
    }
    moveTo(x,y){
        this.x = x;
        this.y = y;
        this.circle.setAttribute("cx", this.x);
        this.circle.setAttribute("cy", this.y);
    }
}

addPoint(100, 100);
addPoint(200, 200);
addPoint(300, 150);
renderPoints();

function renderPoints() {
    for (let i = 0; i < pointRenderList.length; i++) {
        svgBoard.appendChild(pointRenderList[i].circle);
    }
}

//falling points

function fallingPoints(){
    for(let i = 0; i < pointRenderList.length; i++){
        let point = document.getElementById("point" + i);
        if(point == null){
            console.log("point" + i + " is null")
        }
        let y = point.getAttribute("cy");
        point.setAttribute("cy", y + 1);

        if(point.getAttribute("cy") >= 500){
            point.setAttribute("cy", 0);
        }
    }
    requestAnimationFrame(fallingPoints);
}

requestAnimationFrame(fallingPoints);


//create a rectangle
const circle = document.getElementById("point1");

// Set the initial position of the circle
let y = 100;

// Define the animation function
function animate() {
  // Move the circle up or down
  y += 1;
  if (y >= 200) {
    y = 100;
  }

  // Update the position of the circle
  circle.setAttribute("cy", y);

  // Request the next frame of the animation
  requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);