function Passenger(destination){
	this.destination = destination;
	this.name = "";
}

function Train(velocity, name, capacity, costPerMile){
	this.velocity = velocity;
	this.name = name;
	this.capacity = capacity;
	this.costPerMile = costPerMile;
	this.totalMilesTravelled = 0;

	this.curCity = "";
	this.destination = "";
	this.passengers = [];

	this.getCity = function(){
		return this.curCity;
	}
	this.getDestination = function(){
		return this.destination;
	}
	this.addPassenger = function(passengerObject){
		this.passengers.push(passengerObject);
	}
	this.getPassengersOnTrain = function(){
		var pPassengerNames = [];
		for(var i = 0; i < this.passengers.length; i++){
			pPassengerNames.push(this.passengers[i].name);
		}
		return pPassengerNames.toString();
	}
	this.incrementTime = function(){
		this.totalMilesTravelled += this.velocity;
	}
}

function City(cityName){
	this.name = cityName;
	this.passengers = [];
	this.trains = [];
	this.addPassenger = function(name, destination){
		var pNewPassenger = new Passenger(destination);
		pNewPassenger.name = name;
		this.passengers.push(pNewPassenger);
	}
	this.trainArrives = function(trainObject){
		this.trains.push(trainObject);
		for(var i = 0; i < trainObject.passengers.length; i++){
			if(this.passengers[i].destination != this.name){
				this.passengers.push(trainObject.passengers[i]);
			}
		}
		trainObject.passengers = [];
		trainObject.curCity = this.name;
		trainObject.destination = this.passengers[0].destination;
		for(var i = 0; i < trainObject.passengers.length; i++){
			if(i < trainObject.capacity){
				trainObject.passengers.push(this.passengers[i]);
			}
		}
	}
	this.getNameArray = function(objectArray){
		var pNameArray = [];
		for(var i = 0; i < objectArray.length; i++){
			pNameArray.push(objectArray[i].name);
		}
		return pNameArray;
	}
	this.getTrainsAtCity = function(){
		return (this.getNameArray(this.trains)).toString();
	}
	this.getPassengersAtCity = function(){
		return (this.getNameArray(this.passengers)).toString();
	}
	this.incrementTime = function(){
		for(var i = 0; i < this.trains.length; i++){
			if(this.trains[i].destination === 'undefined' || this.trains[i].destination === null){
				var reTrain = this.trains[i].splice(i, 1);
				this.trainArrives(reTrain);
			}else{
				//this is where i have to link track and city for hw8
			}
		}
	}
	this.checkTrack = function(trackObject){
		return !(trackObject.isTrainOnTrack);
	}
}

function Track(cityA, cityB, length){
	this.cityA = cityA;
	this.cityB = cityB;
	this.length = length;

	this.train = null;

	this.isTrainOnTrack = function(){
		if(this.train === null){
			return false;
		}else{
			return true;
		}
	}
	this.incrementTime = function(){
		this.train.incrementTime;
	}
	this.handleArrivingTrains = function(){
		if(this.train.totalMilesTravelled > this.length){
			this.cityB.trainArrives(this.train);
		}
	}
	this.addTrain = function(train){
		this.train = train;
	}
}
