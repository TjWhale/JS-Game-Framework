//company logo + load screen class

class logo_screen{
	constructor(){
		this.start_time = global_time;
	}

	update(dt, global_time){
		if (global_time > this.start_time + 2000){
			state = new main_menu();
		}
	}

	draw(){
		//wipe background
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);  
		//draw company logo
		ctx.font = 'bold 48px serif';
		ctx.fillStyle = "rgb(255,255,255)";
		ctx.fillText("Company LOGO!", ctx.canvas.width/2, ctx.canvas.height/2);
	}
}