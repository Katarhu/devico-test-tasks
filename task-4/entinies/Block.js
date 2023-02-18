import {generateRandomColor} from "../utils/generateRandomColor.js";
import {styles} from "../contstants/styles.js";

export class Block {
    /**
     * @type {HTMLElement} $node
     */
    $node;

    /**
     * @type {number} clickCount
     */
    clickCount = 0;
    constructor(style) {
        this.#createElement(style);
        this.changeColor();
        this.#addListener();
    }

    changeColor() {
        this.$node.style.setProperty("--background", generateRandomColor());
    }

    increaseCount() {
        this.clickCount++;
        this.$node.textContent = `${this.clickCount}`;
    }

    #createElement(style = "") {
        this.$node = document.createElement("div");
        this.$node.textContent = `${this.clickCount}`;
        this.$node.style = styles.block + style;
    }

    #addListener() {
        this.$node.addEventListener('click', () => {
            this.increaseCount();
            this.changeColor();
        })
    }
}