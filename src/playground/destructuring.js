// *** OBJECT DESTRUCTURING ***

const person = {
    name: 'Nestor',
    age: 35,
    location: {
        city: 'Houston',
        temp: 50
    }
};

// Normal way
// const name = person.name;
// const age = person.age;

// An object is created on the lefts are the variables
// on the right we have the object where the information is created from.
const { name = 'Anonymus', age } = person;  //<---- In this line there is default value for name 
console.log(`${name} is ${age}.`);          // in case the value on the object above does not 
                                            // have it.


// Same as above
const { city, temp: temperature } = person.location;            // *** ALIAS CREATION ***
if (city &&  temperature ) {                                    // <----- if we do not want to use 
    console.log(`It's ${ temperature } degrees in ${ city }.`); // the same variable name, 
}                                                               // it can be change as in the line 
                                                                // above.

// **************************************************************************************


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;  // <-- Name alias and default value.
console.log(publisherName); 

//
//*** ARRAY DESTRUCTURING ***
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;   // <--- items on the array are found by location,
console.log(`You are in ${city} ${state}.`);    // default values are posible, you only create
                                                // the variables you want, respecting the 
                                                // position with comas.

const item = ['Coffee (hot)', '$2.00', '$2.55', '2.75'];
const [itemName, small, medium, large] = item;

console.log(`A medium ${itemName} costs ${medium}. `);