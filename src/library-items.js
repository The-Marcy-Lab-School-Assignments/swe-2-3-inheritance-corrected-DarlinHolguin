/* eslint-disable max-classes-per-file */

class LibraryItem {
  isCheckedOut = false
constructor(title, year) {
this.title = title
this.year = year
}

checkOut() {
  this.isCheckedOut = true
  return `${this.title} has been checked out`
}

returnItem() {
  this.isCheckedOut = false
  return `${this.title} has been returned`
}

getDescription(){
return `${this.title} (${this.year})`

}


}

class Book extends LibraryItem {
  constructor(author, pages) {
    super(title, year)
    this.author = author
    this.page = pages
  }

  getDescription(){
    return `${super.getDescription()} by ${this.author}, ${this.page} pages`
  }

  

}

class DVD extends LibraryItem{
  constructor() {
    
  }

}

class Magazine {

}

module.exports = {
  LibraryItem,
  Book,
  DVD,
  Magazine,
};
