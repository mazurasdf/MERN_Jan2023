//FOUR PRINCIPLES OF OOP
//abstraction, encapsulation, inheritance, polymorphism

class Fighter{
    constructor(name,weight,speed,strength,color,playerNum=1){
        //percentage, name, weight, speed, strength, color, player number
        this.percentage = 0;
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.strength = strength;
        this.color = color;
        this.playerNum = playerNum;
        console.log("making a new fighter");
    }

    attack(opponent){
        if(opponent instanceof Fighter){
            opponent.percentage += 5;
            console.log(`${this.name} attacked ${opponent.name} and dealt 5% damage!`);
        }
    }

    special(opponent){
        if(opponent instanceof Fighter){
            const damage = 15;
            opponent.percentage += damage;
            console.log(`${this.name} performed a special move on ${opponent.name} and dealt ${damage}% damage!`);
        }
    }
}

// const kirby = new Fighter("Kirby",3,4,6,"pink");
// const falco = new Fighter("Falco",4,7,6,"blue",2);
// console.log(kirby);
// console.log(falco);
// falco.special(kirby);
// console.log(falco);

module.exports = Fighter;