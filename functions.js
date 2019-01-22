//utility functions 

//reshape the screen when it's size is changed
function reshapeScreen(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

//what to do when the mouse is moved
function mouse_move(event){
	if (typeof state.mouse_move === 'function'){
		state.mouse_move(event);
	}
}

//what to do when the mouse is clicked
function mouse_click(event){
	if (typeof state.mouse_click === 'function'){
		state.mouse_click(event);
	}
}

//print to the console
function print(message){
    console.log(message);
}

//remove an item from a list
function remove_from_list(list, item){
    for (var i = 0; i < list.length; i++){
        if (list[i] == item){
            list.splice(i,1);
        }
    }
}

//collide a point with a rect
function collide_point_rect(point, rect){
    if (point[0] > rect[0] && point[0] < rect[0] + rect[2] && point[1] > rect[1] && point[1] < rect[1] + rect[3]){
        return true;
    }
    else{
        return false;
    }
}