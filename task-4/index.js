import {Block} from "./entinies/Block.js";
import {styles} from "./contstants/styles.js";
import {generateRandomColor} from "./utils/generateRandomColor.js";
import {Container} from "./entinies/Container.js";

// Main solution

const block1 = new Block(styles.blockSquare);
const block2 = new Block(styles.blockRectangleSmall);
const block3 = new Block(styles.blockRectangleSmall);
const block4 = new Block(styles.blockRectangle);
const block5 = new Block(styles.blockRectangleSmall);
const block6 = new Block(styles.blockRectangleSmall);

const container = new Container(document.querySelector("body"));

container
    .appendNodes([block1, block2, block3, block4, block5, block6])
    .renderNodes();


// Another solution

// const BLOCK_TYPE = "block";
// const createDiv = (style = "") => {
//     const div = document.createElement("div");
//     div.dataset.count = `0`;
//     div.dataset.type = BLOCK_TYPE;
//     div.textContent = `0`;
//     div.style = styles.block + style;
//     div.style.setProperty("--background", generateRandomColor());
//
//     return div;
// }
//
// const blocks = [
//     createDiv(styles.blockSquare),
//     createDiv(styles.blockRectangleSmall),
//     createDiv(styles.blockRectangleSmall),
//     createDiv(styles.blockRectangle),
//     createDiv(styles.blockRectangleSmall),
//     createDiv(styles.blockRectangleSmall),
// ];
//
// const $body = document.querySelector("body");
// const $container = document.createElement("div");
// $container.style = styles.container;
//
// blocks.forEach((block) => {
//     $container.appendChild(block);
// });
//
// $container.addEventListener("click", (event) => {
//     const target = event.target;
//
//     if (target.dataset?.type === BLOCK_TYPE ) {
//         target.dataset.count = `${+target.dataset.count + 1}`;
//         target.textContent = target.dataset.count;
//
//         target.style.setProperty("--background", generateRandomColor());
//     }
// })
//
// $body.appendChild($container);