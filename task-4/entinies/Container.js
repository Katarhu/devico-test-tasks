import {styles} from "../contstants/styles.js";

/***
 * @typedef {Object} WithNode
 * @property {HTMLElement} $node
 */


export class Container {
    /***
     * @type {HTMLElement} $entities
     */
    $container;
    /***
     * @type {HTMLElement} $parent
     */
    $parent;
    /***
     * @type {WithNode[]} $entities
     */
    $entities = [];

    constructor($parent) {
        this.$parent = $parent;

        this.#createContainer();
        this.#appendContainer();
    }

    #createContainer() {
        this.$container = document.createElement("div");
        this.$container.style = styles.container;
    }

    #appendContainer() {
        this.$parent.appendChild(this.$container);
    }
    /***
     * @param {WithNode} $entity
     * @returns {Container}
     */
    appendNode($entity) {
        this.$entities.push($entity);

        return this;
    }
    /***
     * @param {WithNode[]} $entities
     * @returns {Container}
     */
    appendNodes($entities) {
        this.$entities.push(...$entities);

        return this;
    }

    renderNodes() {
        this.$entities.forEach(entity =>
            this.$container.appendChild(entity.$node)
        )

        this.$entities = [];
    }
}