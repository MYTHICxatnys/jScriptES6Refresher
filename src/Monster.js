

class Monster {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    roar() {
        console.log(`${this.name} the ${this.type} lets out a vicious roar!`);
    }
}

export default Monster;
