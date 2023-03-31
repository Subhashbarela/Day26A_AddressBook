class Contact {

    constructor(firstName, lastName, city, phoneNumber) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.city = city;
      this.phoneNumber = phoneNumber;
    }
  }
  
  class AddressBook {
    constructor() {
      this.contacts = [];
    }
    
    addContact(contact) {
      this.contacts.push(contact);
    }
    
    removeContact(index) {
      this.contacts.splice(index, 1);
    }
    
    getContact(index) {
      return this.contacts[index];
    }
    
    getAllContacts() {
      return this.contacts;
    }
  }
  
  // example usage
  const john = new Contact('subhash', 'barela', 'New Delhi', '8654765433');
  const jane = new Contact('Raaj', 'chouhan', 'USA', '8845422656');
  const book = new AddressBook();
  
  book.addContact(john);
  book.addContact(jane);
  
  console.log(book.getAllContacts()); 