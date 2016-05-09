tetrisGame = {};
tetrisGame.currentState = [];
tetrisGame.shapes = [];

tetrisGame.AddShape = function(shapeType, position){
	//using topLeft because not every shape has an easy center
	this.shapes.push({'type' : shapeType, 'topLeft' : this.convert(position, 0)});
}

tetrisGame.addRandShape = function(){
	var randShape = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
	var randPos = 0;
	if(randShape == 0){ // Blue Line
		randPos = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
	}else if(randShape == 3){ // Green S
		randPos = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
	}else if(randShape == 4){ //Black Square
		randPos = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
	}else{ // every other shape
		randPos = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
	}
	this.AddShape(randShape, randPos);
}

tetrisGame.checkRows = function(){
	var cleared = true; // declares bool
	for(var i = 0; i < 20; i++){ // rows
		cleared = true;
		for(var j = 0; j < 10; j++){ // cols
			if(this.currentState[this.convert(j, i)] == -1){
				//if any part of row is not filled, row is not cleared
				cleared = false;
			}
		}
		if(cleared == true){
			// clear row i
			this.clearRow(i);
		}
	}
}

tetrisGame.clearRow = function(row){
	// get rid of row that is cleared
	this.currentState.splice(this.convert(0,row), 10, -1);
	// add empty blocks to top of screen
	for(var i = 0; i < 10; i++){
		this.currentState.unshift(-1);
	}
}

tetrisGame.randomShapes = function(){
	//if no shape exists yet, add a shape
	if(this.shapes.length == 0){
		this.addRandShape();
	}
	//current shape = most recent shape added
	var currentShape = this.shapes[this.shapes.length - 1];
	//if nothing is below, drop the shape as far as possible
	if(this.falling(currentShape)){
		currentShape.topLeft += 10;
	}else{ //once shape stops dropping, add another shape
		this.addRandShape();
	}
}

tetrisGame.chosenShapes = function(){
	if(this.shapes.length == 0){
		this.AddShape(0,0);
	}
	var currentShape = this.shapes[this.shapes.length - 1];
	if(this.falling(currentShape)){
		currentShape.topLeft += 10;
	}else if(this.shapes.length == 1){ //once shape stops dropping, add another shape
		this.AddShape(0,4);
	}else if(this.shapes.length == 2){
		this.AddShape(4,8);
	}else if(this.shapes.length == 3){
		this.AddShape(5,0);
	}
}

tetrisGame.IncrementTime = function(){
	this.randomShapes();
	//above will place a bunch of random shapes around
	//it's unlikely to make a full line
	//and will start to freak out when it hits the top
	//if you want to see clearing a line, comment out the above
	//and uncomment the line below
	//note: it only mostly works

	//this.chosenShapes();
}

tetrisGame.GetCurrentState = function(){
	// clears the board
	this.currentState = [];
	for(var i = 0; i < 20; i++){
		for(var j = 0; j < 10; j++){
			this.currentState.push(-1);
		}
	}
	// draws shape
	for(var i = 0; i < this.shapes.length; i++){
		this.DrawShape(this.shapes[i]);
	}
	this.checkRows();
	return this.currentState;
}

tetrisGame.IsShapeFalling = function(){
	//always retuns true for IncrementTime
	return true;
}

tetrisGame.falling = function(shape){
	//checks if a block or the ground exists below shape
	if(shape.type == 0){ // Blue Line
		if(this.currentState[shape.topLeft + 10] != -1 ||
		   this.currentState[shape.topLeft + 1 + 10] != -1 ||
		   this.currentState[shape.topLeft + 2 + 10] != -1 ||
		   this.currentState[shape.topLeft + 3 + 10] != -1){
				return false;
		}else{ return true };
	}else if(shape.type == 1){ // Orange T
		if(this.currentState[shape.topLeft + 10] != -1 ||
		   this.currentState[shape.topLeft + 1 + 20] != -1 ||
		   this.currentState[shape.topLeft + 2 + 10] != -1){
				return false;
		}else{ return true };
	}else if(shape.type == 2){ // Blue Z
		if(this.currentState[shape.topLeft + 10] != -1 ||
		   this.currentState[shape.topLeft + 1 + 20] != -1 ||
		   this.currentState[shape.topLeft + 2 + 20] != -1){
				return false;
		}else{ return true };
	}else if(shape.type == 3){ // Green S
		if(this.currentState[shape.topLeft - 1 + 20] != -1 ||
		   this.currentState[shape.topLeft + 20] != -1 ||
		   this.currentState[shape.topLeft + 1 + 10] != -1){
				return false;
		}else{ return true };
	}else if(shape.type == 4){ // Black Square
		if(this.currentState[shape.topLeft + 20] != -1 ||
		   this.currentState[shape.topLeft + 1 + 20] != -1){
				return false;
		}else{ return true };
	}else if(shape.type == 5){ // Purple J
		if(this.currentState[shape.topLeft + 20] != -1 ||
		   this.currentState[shape.topLeft + 1 + 20] != -1 ||
		   this.currentState[shape.topLeft + 2 + 20] != -1){
				return false;
		}else{ return true };
	}else if(shape.type == 6){ // Yellow L
		if(this.currentState[shape.topLeft + 20] != -1 ||
		   this.currentState[shape.topLeft + 1 + 10] != -1 ||
		   this.currentState[shape.topLeft + 2 + 10] != -1){
				return false;
		}else{ return true };
	}
}

tetrisGame.DrawShape = function(shape){
	if(shape.type == 0){ // Blue line
		this.currentState[shape.topLeft] = shape.type;
		this.currentState[shape.topLeft + 1] = shape.type;
		this.currentState[shape.topLeft + 2] = shape.type;
		this.currentState[shape.topLeft + 3] = shape.type;
	}else if(shape.type == 1){ // Orange T
		this.currentState[shape.topLeft] = shape.type;
		this.currentState[shape.topLeft + 1] = shape.type;
		this.currentState[shape.topLeft + 2] = shape.type;
		this.currentState[shape.topLeft + 1 + 10] = shape.type;
	}else if(shape.type == 2){ // Blue Z
		this.currentState[shape.topLeft] = shape.type;
		this.currentState[shape.topLeft + 1] = shape.type;
		this.currentState[shape.topLeft + 1 + 10] = shape.type;
		this.currentState[shape.topLeft + 2 + 10] = shape.type;
	}else if(shape.type == 3){ // Green S
		this.currentState[shape.topLeft] = shape.type;
		this.currentState[shape.topLeft + 1] = shape.type;
		this.currentState[shape.topLeft - 1 + 10] = shape.type;
		this.currentState[shape.topLeft + 10] = shape.type;
	}else if(shape.type == 4){ // Black Square
		this.currentState[shape.topLeft] = shape.type;
		this.currentState[shape.topLeft + 1] = shape.type;
		this.currentState[shape.topLeft + 10] = shape.type;
		this.currentState[shape.topLeft + 1 + 10] = shape.type;
	}else if(shape.type == 5){ // Purple J
		this.currentState[shape.topLeft] = shape.type;
		this.currentState[shape.topLeft + 10] = shape.type;
		this.currentState[shape.topLeft + 1 + 10] = shape.type;
		this.currentState[shape.topLeft + 2 + 10] = shape.type;
	}else if(shape.type == 6){ // Blue Z
		this.currentState[shape.topLeft] = shape.type;
		this.currentState[shape.topLeft + 1] = shape.type;
		this.currentState[shape.topLeft + 2] = shape.type;
		this.currentState[shape.topLeft + 10] = shape.type;
	}
}

tetrisGame.convert = function(xcoord, ycoord){
	//Top-left of board is (0,0)
    return parseInt(String(ycoord) + String(xcoord));
}
