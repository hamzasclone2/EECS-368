//Below is 10.2 ------------------------------------------------------------------------

var NinjaRobotFactory = {};
NinjaRobotFactory.ptt = [];

NinjaRobotFactory.setNinjaPrototype = function(prototypeName, height, weight, color){
	function NinjaRobot(){};
	NinjaRobot.prototype.name = prototypeName;
	NinjaRobot.prototype.height = height;
	NinjaRobot.prototype.weight = weight;
	NinjaRobot.prototype.color = color;
	if(NinjaRobot.prototype.weight < 200){
		NinjaRobot.prototype.flyingKick = function(){
			return "ninja robot performs flying kick";
		}
	}
	if(NinjaRobot.prototype.color == "black"){
		NinjaRobot.prototype.hide = function(){
			return "ninja robot is hiding";
		}
	}
	if(NinjaRobot.prototype.height < 80){
		NinjaRobot.prototype.useStairs = function(){
			return "ninja robot uses stairs";
		}
	}
	if(NinjaRobot.prototype.color == "red" && NinjaRobot.prototype.weight > 140){
		NinjaRobot.prototype.run = function(){
			return "ninja robot is running";
		}
	}
	if(NinjaRobot.prototype.color == "blue" && NinjaRobot.prototype.height < 30){
		NinjaRobot.prototype.dodge = function(){
			return "ninja robot is dodging";
		}
	}
	this.ptt.push(NinjaRobot);
}

NinjaRobotFactory.createNinjaRobot = function(prototypeName){
	for(i = 0; i < this.ptt.length; i++){
		var obj = new this.ptt[i]();
		if(obj.name == prototypeName){
			return obj;
		}else{
			delete obj;
		}
	}
}

//End 10.2 -------------------------------------------------------------------------------

//Below is 10.3 --------------------------------------------------------------------------

var NinjaRobotFactory = {};
NinjaRobotFactory.ptt = [];

NinjaRobotFactory.setNinjaPrototype = function(prototypeName, height, weight, color){
	function NinjaRobot(){};
	NinjaRobot.prototype.name = prototypeName;
	NinjaRobot.prototype.height = height;
	NinjaRobot.prototype.weight = weight;
	NinjaRobot.prototype.color = color;
	if(NinjaRobot.prototype.weight < 200){
		NinjaRobot.prototype.flyingKick = function(){
			return "ninja robot performs flying kick";
		}
	}
	if(NinjaRobot.prototype.color == "black"){
		NinjaRobot.prototype.hide = function(){
			return "ninja robot is hiding";
		}
	}
	if(NinjaRobot.prototype.height < 80){
		NinjaRobot.prototype.useStairs = function(){
			return "ninja robot uses stairs";
		}
	}
	if(NinjaRobot.prototype.color == "red" && NinjaRobot.prototype.weight > 140){
		NinjaRobot.prototype.run = function(){
			return "ninja robot is running";
		}
	}
	if(NinjaRobot.prototype.color == "blue" && NinjaRobot.prototype.height < 30){
		NinjaRobot.prototype.dodge = function(){
			return "ninja robot is dodging";
		}
	}
	this.ptt.push(NinjaRobot);
}

NinjaRobotFactory.createNinjaRobot = function(prototypeName){
	for(i = 0; i < this.ptt.length; i++){
		var obj = new this.ptt[i]();
		if(obj.name == prototypeName){
			return obj;
		}else{
			delete obj;
		}
	}
}

function inheritPrototype(childObject, parentObject){
	var copyOfParent = Object.create(parentObject.prototype);
	copyOfParent.constructor = childObject;
	childObject.prototype = copyOfParent ;
}

NinjaRobotFactory.createTrainedNinjaRobot = function(height, weight, color){
	NinjaRobotFactory.setNinjaPrototype.call(this, height, weight, color);

	function trainedNinjaRobot(){};

	trainedNinjaRobot.prototype.height = height;
	trainedNinjaRobot.prototype.weight = weight;
	trainedNinjaRobot.prototype.color = color;
	trainedNinjaRobot.prototype.flyingKick = function(){
		Output("ninja robot performs flying kick");
		return trainedNinjaRobot.prototype.weight - trainedNinjaRobot.prototype.height - 130;
	}
	trainedNinjaRobot.prototype.run = function(){
		Output("ninja robot is running");
		return 160 - trainedNinjaRobot.prototype.weight;
	}
	trainedNinjaRobot.prototype.dodge = function(){
		Output("ninja robot is dodging");
		trainedNinjaRobot.prototype.color = "black";
		return 40 - trainedNinjaRobot.prototype.height;
	}
	this.ptt.push(trainedNinjaRobot);
	return trainedNinjaRobot;
}

inheritPrototype(NinjaRobotFactory.createTrainedNinjaRobot, NinjaRobotFactory.setNinjaPrototype);
