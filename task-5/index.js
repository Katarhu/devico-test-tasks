

class Worker {
    /***
     * @type {string} #name
     */
    #name;
    /***
     * @type {string} #surname
     */
    #surname;
    /***
     * @type {number} #rate
     */
    #rate;
    /***
     * @type {number} #days
     */
    #days;

    /***
     * @param {string} name
     * @param {string} surname
     * @param {number} rate
     * @param {number} days
     */
    constructor(name= "unknown", surname= "unknown", rate= 0, days= 0) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }

    getRate() {
        return this.#rate;
    }

    getDays() {
        return this.#days;
    }

    getSalary() {
        return this.#days * this.#rate;
    }

    /***
     * @type {number} rate
     * @returns {Worker}
     */
    setRate(rate) {
        this.#rate = rate;
        return this;
    }

    /***
     * @type {number} days
     * @returns {Worker}
     */
    setDays(days) {
        this.#days = days;
    }
}

const worker = new Worker("Ivan", "Ivanov", 10, 31);

console.log(worker.getRate()); // 10
console.log(worker.getDays()); // 31
console.log(worker.getSalary()); // 310

worker.setRate(20);
worker.setDays(10);

console.log(worker.getRate()); //20
console.log(worker.getDays()); // 10
console.log(worker.getSalary()); // 200