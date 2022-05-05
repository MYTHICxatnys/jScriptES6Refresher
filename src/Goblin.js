import Monster from "./Monster";
export const promoteToCommander = () => console.log('Promoted To Battle Commander!');

class Goblin extends Monster {
    constructor(name, description, type, weapon) {
        super(name, type);
        this.name = name;
        this.description = description;
        this.type = type;
        this.weapon = weapon;
    }

    speak() {
        console.log(`${this.name} the ${this.description} ${this.type} drew his ${this.weapon} and snarled: 'You've no business here hooman!`);
    }
}

export default Goblin;