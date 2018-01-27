class Book{
	constructor(title,pages,isbn){
		this.title = title;
		this.pages = pages;
		this.isbn = isbn;
	}
	printIsbn(){
		console.log(this.isbn);
	}
}

let book = new Book('title','pag','isbn');

console.log(book.title);  //title

book.title = 'new title';

console.log(book.title);  //new title

class ITBook extends Book {
	constructor(title,pages,isbn,technology){
		super(title,pages,isbn);
		this.technology = technology;
	}
	printTechnology(){
		console.log(this.technology);
	}
}

let jsBook = new ITBook('JS','299','dsaff','javascript');

console.log(jsBook.title);
console.log(jsBook.printTechnology());
console.log(jsBook.printIsbn());

class Person{
	constructor(name){
		this._name = name;
	}
	get name(){
		return this._name;
	}
	set name(value){
		this._name = value;
	}
}

let sonya = new Person('sonya');
console.log(sonya.name);
sonya.name = 'sss';
console.log(sonya.name);
console.log(sonya._name);  //sss
