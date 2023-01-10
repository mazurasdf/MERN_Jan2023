const Fighter = require("./fighter");

class Samus extends Fighter{
    constructor(color, playerNum=1){
        //call parent constructor
        super("Samus",7,5,8,color,playerNum);
        this.charged = false;
    }

    special(opponent){
        if(this.charged){
            if(opponent instanceof Fighter){
                const damage = 35;
                opponent.percentage += damage;
                console.log(`${this.name} shot her laser at ${opponent.name} and dealt ${damage}% damage!!! Wow!`);

                this.charged = false;
            }
        }
        else{
            this.charged = true;
            console.log(`${this.name} is charging her laser and now ready to fire!`);
        }
    }
}

class BowserJR extends Fighter{
    constructor(color, playerNum=1){
        //call parent constructor
        super("Bowser Jr.",4,5,7,color,playerNum);
        this.isDriving = false;       
    }

    attack(opponent){
        if(opponent instanceof Fighter){
            let damage = this.strength;
            opponent.percentage += damage;
            console.log(`${this.name} attacked ${opponent.name} and dealt ${damage}% damage!`);
            console.log("this character is " + this.name);
        }
    }

    special(opponent=null){
        if(this.isDriving){
            console.log(`${this.name} isn't driving anymore`);
            this.speed /= 2;
            this.strength /= 2;
            this.isDriving = false;
        }
        else{
            console.log(`${this.name} is driving his car FAST!!`);
            this.speed *= 2;
            this.strength *= 2;
            this.isDriving = true;
        }
    }


}

const kirby = new Fighter("Kirby",3,4,6,"pink");
const samus = new Samus("red",2);
const jr = new BowserJR("pink", 3);

// kirby.attack(samus);
// console.log(samus.color);
// samus.special(kirby);
// samus.special(kirby);
jr.special();
jr.attack(samus);
console.log(samus);
jr.special();
jr.attack(samus);
console.log(samus);
