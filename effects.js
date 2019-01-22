//class for handling particles and expanding circles

class effect_system {
	constructor(){
		this.particles = [];
		this.expanding_circles = [];
	}

	update_and_draw(){
		for (var p in this.particles){
			this.particles[p].update_and_draw();
		}
		for (var e in this.expanding_circles){
			this.expanding_circles[e].update_and_draw();
		}
	}

	add_particle(position, angle){
		this.particles.push(new particle(position, angle));
	}

	add_expanding_circle(position){
		this.expanding_circles.push(new expanding_circle(position));
	}
}

//class for the particles emitted 
class particle {
    constructor(position, angle){
        this.position = position;
        this.velocity = [0,0];
        this.speed = (Math.random() + 0.5)*0.1;
        this.angle = angle;
        this.death_time = global_time + ((Math.random() + 0.5)*1000);
        this.colour = "rgb(189,0,255)";
    }

    update_and_draw(){
        this.angle += 0.4*(Math.random() - 0.5);
        this.velocity = [this.speed*Math.cos(this.angle), this.speed*Math.sin(this.angle)];
        this.position[0] += this.velocity[0]*dt;
        this.position[1] += this.velocity[1]*dt;
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.position[0], this.position[1], 4, 4);
        if (global_time > this.death_time){
            var i = effects.particles.indexOf(this);
            effects.particles.splice(i, 1);
        }
    }
}

//the class for circles which are dropped on the map as an effect
class expanding_circle {
    constructor(position) {
        this.position = position;
        this.radius = 0;
        this.velocity = 2;
        this.death_time = global_time + 500*(Math.random() + 0.5);
    } 

    update_and_draw() {
        //if you are too old then die
        if (global_time > this.death_time){
            var i = effects.expanding_circles.indexOf(this);
            effects.expanding_circles.splice(i, 1);
        }

        //grow bigger
        this.radius += this.velocity;
        //draw yourself
        ctx.strokeStyle = "rgb(0,184,255)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI);
        ctx.stroke();

    }
}