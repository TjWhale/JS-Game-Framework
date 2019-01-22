//main menu class

class main_menu{
	constructor(){
		this.buttons = [new button([400,200,200,100], "New Game"), new button([400,350,200,100], "Effects!")];
	}

	update(dt, global_time){
	}

	draw(){
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		//wipe background
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);  
		//draw company logo
		ctx.font = 'bold 48px serif';
		ctx.fillStyle = "rgb(255,255,255)";
		ctx.fillText("This is the main menu", ctx.canvas.width/2, 100);
		//draw the buttons
		for (var b in this.buttons){
			this.buttons[b].draw();
		}
	}

	mouse_move(event){
		var mouse_position = [event.x, event.y];
		for (var b in this.buttons){
			if (collide_point_rect(mouse_position, this.buttons[b].position)){
				this.buttons[b].colour = "rgb(0,100,0)";
			}
			else{
				this.buttons[b].colour = "rgb(255,255,255)";
			}
		}
	}

	mouse_click(event){
		var mouse_position = [event.x, event.y];	
		for (var b in this.buttons){
			if (collide_point_rect(mouse_position, this.buttons[b].position)){
				if (this.buttons[b].menu_item == "New Game"){
					state = new logo_screen();
				}
				if (this.buttons[b].menu_item == "Effects!"){
					for (var i = 0; i < 100; i++){
						var pos = this.buttons[b].position;
						effects.add_particle([pos[0], pos[1]], -2.35 + 1*(Math.random() - 0.5));
						effects.add_particle([pos[0] + pos[2], pos[1]], -0.78 + 1*(Math.random() - 0.5));
						effects.add_particle([pos[0] + pos[2], pos[1] + pos[3]], 0.78 + 1*(Math.random() - 0.5));
						effects.add_particle([pos[0], pos[1] + pos[3]], 2.35 + 1*(Math.random() - 0.5));
					}
					effects.add_expanding_circle([pos[0], pos[1]]);
					effects.add_expanding_circle([pos[0] + pos[2], pos[1]]);
					effects.add_expanding_circle([pos[0] + pos[2], pos[1] + pos[3]]);
					effects.add_expanding_circle([pos[0], pos[1] + pos[3]]);
				}
			}
		}
	}
}

//buttons for the screen
class button{
	constructor(position, menu_item){
		this.position = position;
		this.menu_item = menu_item; 
		this.colour = "rgb(255,255,255)";
	} 

	draw(){
		ctx.font = 'bold 30px serif';
		ctx.fillStyle = this.colour;
		ctx.fillRect(this.position[0], this.position[1], this.position[2], this.position[3]);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText(this.menu_item, this.position[0] + this.position[2]/2, this.position[1] + this.position[3]/2);
	}
}