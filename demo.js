const CIRCLE_RADIUS = 40;
const DIMENSIONS = [5, 5, 900, 600]

const EVENT_TYPE_TO_VALUE = {'keydown': 1, 'keyup': 0}
const VELOCITY_SCALE = 4;
const TICK_RATE = 60;
const BLINK_DURATION = 500;
const NUM_BLINKS = 3;
const COLOR_OFF = '#e84d48'
const COLOR_ON = '#fcba03';

let velocities = [{'left': 0, 'up': 0, 'right': 0, 'down': 0},
   {'left': 0, 'up': 0, 'right': 0, 'down': 0}];
let tick_delay = 1000 / TICK_RATE;

let svg = document.getElementsByTagName('svg')[0];
let svgClone = svg.cloneNode(true);

function inBounds(coordinate, start, span, radius) {
   return coordinate > start + radius &&
       coordinate < start + span - radius;
}

function processMove(element, index) {
   let newX = parseInt(element.getAttribute('cx')) - velocities[index]['left'] + velocities[index]['right'];
   if (inBounds(newX, DIMENSIONS[0], DIMENSIONS[2], CIRCLE_RADIUS)) {
       element.setAttribute('cx', newX.toString());
   }
   let newY = parseInt(element.getAttribute('cy')) - velocities[index]['up'] + velocities[index]['down'];
   if (inBounds(newY, DIMENSIONS[1], DIMENSIONS[3], CIRCLE_RADIUS)) {
       element.setAttribute('cy', newY.toString());
   }
}


(function tick() {
   // console.log('Tick!');
   let left = svg.querySelectorAll(".left")[0];
   let right = svg.querySelectorAll(".right")[0];

   processMove(left, 0);
   processMove(right, 1);

   window.setTimeout(tick, tick_delay);
})();


function process(event) {
   if (event.repeat) return;

   let direction = null;
   switch (event.keyCode) {
       case 37:
       case 65:
           direction = 'left';
           break;
       case 38:
       case 87:
           direction = 'up'
           break;
       case 39:
       case 68:
           direction = 'right';
           break;
       case 40:
       case 83:
           direction = 'down';
           break;
   }

   if (direction) {
       velocities[event.keyCode > 50 ? 0 : 1][direction] = EVENT_TYPE_TO_VALUE[event.type] * VELOCITY_SCALE;
   }
   // console.log(event);
}

function blinkOn(remaining) {
   if (remaining) {
       let left = svg.querySelectorAll(".left")[0];
       let right = svg.querySelectorAll(".right")[0];

       left.style.fill = COLOR_ON;
       right.style.fill = COLOR_ON;

       left.replaceWith(left);
       right.replaceWith(right);

       window.setTimeout(blinkOff.bind(null, remaining - 1), BLINK_DURATION);
   }
}

function blinkOff(remaining) {
   let left = svg.querySelectorAll(".left")[0];
   let right = svg.querySelectorAll(".right")[0];

   left.style.fill = COLOR_OFF;
   right.style.fill = COLOR_OFF;

   left.replaceWith(left);
   right.replaceWith(right);

   window.setTimeout(blinkOn.bind(null, remaining), BLINK_DURATION);
}

function scratch() {
   let left = svg.querySelectorAll(".left")[0];
   let right = svg.querySelectorAll(".right")[0];

   let x1 = parseInt(left.getAttribute('cx'));
   let y1 = parseInt(left.getAttribute('cy'));
   let x2 = parseInt(right.getAttribute('cx'));
   let y2 = parseInt(right.getAttribute('cy'));

   let distance = Math.hypot(x2 - x1, y2 - y1);
   let status = distance < CIRCLE_RADIUS * 2 ? 'Touching' : 'Not touching';
   console.log(status);

   if (status === 'Touching') {
       blinkOn(NUM_BLINKS);
   }
}

function reset() {
   let newCanvas = svgClone.cloneNode(true);
   svg.replaceWith(newCanvas);
   svg = newCanvas;
}

document.onkeydown = process;
document.onkeyup = process;
