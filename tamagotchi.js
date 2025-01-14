// Create class below
class Tamagotchi {
    constructor (name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    greet () {
        console.log(`Hello, I'm ${this.name}`)
    }

    status () {
        console.log(`My mood is: ${this.mood}, I am this full: ${this.full}, My energy is: ${this.energy}, I am ${this.sick ? "" : "not" } sick`)
    }

    eat () {
        this.full += 2;
        if (this.energy > 0) {
            this.energy--;
        }

        if (this.full > 10 ) {
            this.sick = true;
        }
    }


    medicate () {
        if (this.sick) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
        } else {
            console.log(`refusal to take medicine`);
            this.energy--;
        }
    }

    play () {
        if (this.sick || this.mood > 9 || this.energy <= 3) {
            if (this.sick) {
                if (this.mood > 0) {
                    this.mood--;
                }
                if (this.energy > 0) {
                    this.energy--;
                }
            } 
    
            if (this.mood > 9) {
                if (this.energy > 1) {
                    this.energy -= 2;
                } else {
                    this.energy = 0;
                }
                if (this.full > 0) {
                    this.full--;
                }
            }
    
            if (this.energy <= 3) {
                console.log(`I am too tired to play`);
                if (this.energy > 0) {
                    this.energy--;
                }
            }
        } else {
            this.mood += 2;
            this.energy--;
            this.full--;
        }
    }  
    
    sleep () {
        this.energy += 4;
        if (this.full > 3 ) {
            this.full -= 3;
        } else {
            this.full = 0;
        }
    }

    timePasses () {
        if (this.sick) {
            if (this.mood > 2) {
                this.mood -= 3;
            } else {
                this.mood = 0;
            }
            if (this.full > 1) {
                this.full -= 2;
            } else {
                this.full = 0;
            }
            if (this.energy > 1) {
                this.energy -= 2;
            } else {
                this.energy = 0;
            }
        } else {
            if (this.mood > 1) {
                this.mood -= 2;
            } else {
                this.mood = 0;
            }
            this.full--;
            this.energy--;
        }
    }

    badGuardian () {
        if (this.energy === 0 || this.mood === 0 || this.full === 0) {
            this.rehomed = true;
            console.log(`Tamagotchi has been rehomed`)
        }
    }
}

const tamagotchi = new Tamagotchi(`Keeanu`)
tamagotchi.greet();
tamagotchi.status();
tamagotchi.eat();
tamagotchi.medicate();
tamagotchi.play();
tamagotchi.sleep();
tamagotchi.timePasses();
tamagotchi.badGuardian();

// Do not edit below this line
module.exports = Tamagotchi;
