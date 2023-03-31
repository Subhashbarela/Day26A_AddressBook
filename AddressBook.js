class Contact {
    constructor(firstName, lastName, city, phoneNumber) {
      const nameRegex = /^[A-Z][a-z]{2,}$/; // Regex for first name and last name
      if (!nameRegex.test(firstName)) {
        throw new Error('First name should start with a capital letter and should have at least 3 characters');
      }
      if (!nameRegex.test(lastName)) {
        throw new Error('Last name should start with a capital letter and should have at least 3 characters');
      }
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
    findContact(firstName, lastName) {
        for (let i = 0; i < this.contacts.length; i++) {
          if (this.contacts[i].firstName === firstName && this.contacts[i].lastName === lastName) {
            return this.contacts[i];
          }
        }
        return null;
      }
      getNumberOfContacts() {
        return this.contacts.reduce((count, contact) => count + 1, 0);
      }
  }
  
  
  // example usage
  const Raaj = new Contact('Subhash', 'Barela', 'New Delhi', '8654765433');
  const Jadhav = new Contact('Raaj', 'Chouhan', 'USA', '8845422656');
  const book = new AddressBook();
  
  book.addContact(Raaj);
  book.addContact(Jadhav);
  
  const numberOfContacts = book.getNumberOfContacts();
  console.log(numberOfContacts);