
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const Person = require('./models/person'); 

const newPerson = new Person({
  name: 'John Doe',
  age: 25,
  favoriteFoods: ['Pizza', 'Burger'],
});

newPerson.save()
  .then(savedPerson => {
    console.log('Person saved successfully:', savedPerson);
  })
  .catch(err => {
    console.error('Error saving person:', err);
  });


