const faker = require('faker');
const Contacts = require('./models/contact.model');

faker.locale = 'en';

let max = 100;
let users = [];

while (max > 0) {
    users.push({
        name: faker.name.findName(),
        phone: faker.phone.phoneNumberFormat(),
        email: faker.internet.email()
    });
    max--;
}

Contacts.find({}, (err, contacts) => {
    if(err) throw new Error(err);

    if(!contacts.length) {
        Contacts.insertMany(users)
            .then(docs => console.log('Fixtures added successfully'))
            .catch(console.error.bind(console, 'Fixtures failed -> '));
    }
});
