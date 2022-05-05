import Monster from "./Monster";

class Dragon extends Monster {
    constructor(name, type, element) {
        super(name, type);
        this.name = name;
        this.type = type;
        this.element = element;
    }

    fly() {
        console.log(`${this.name}, the ${this.element} ${this.type} has taken flight!`);
    }
}

export default Dragon;
