function Library(){}; //creates a library
Library.prototype.bookArray = []; //creates an array that holds books only in the library
Library.prototype.readerArray = []; //creates an array that holds readers books
Library.prototype.readerNames = []; //creates an array that holds the names of the readers
Library.prototype.addBook = function(bookObject){
	this.bookArray.push(bookObject); //adds a book into the library
}
Library.prototype.getBook = function(index){
	return this.bookArray[index]; //gets a book from the library
}
Library.prototype.markPlaceInBook = function(readerName, index, pageNumber){
	if(this.readerNames.length == 0){
		this.readerNames.push(readerName);
		this.readerArray.push(this.bookArray);
		this.readerArray[0][index].markPlaceInBook(pageNumber);
	}else{
		var i = 0;
		for(i = 0; i < this.readerNames.length; i++){
			if(this.readerNames[i] == readerName){
				this.readerArray[i][index].markPlaceInBook(pageNumber);
				i += this.readerNames.length;
			}
		}
		if(i == this.readerNames.length){
			this.readerNames.push(readerName);
			this.readerArray.push(this.bookArray);
			this.readerArray[i][index].markPlaceInBook(pageNumber);
		}
	}
}
Library.prototype.getBookForReader = function(readerName, index){
	var i = 0;
	for(i = 0; i < this.readerNames.length; i++){
		if(this.readerNames[i] == readerName){
			var book = this.readerArray[i][index];
			i += this.readerNames.length;
			return book;
		}
	}
	if(i == this.readerNames.length){
		return this.bookArray[index];
	}
}
