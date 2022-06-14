$(document).ready(function() {
    // 2 new ways to create variables
    // let -> replacement for var
    // const  -> to create constants, variables created this way can't be updated later in the code

    // Template Strings
    // It's a string which allows embedding expressions inside it
    // eg const greetings = `Hello ${name}`

    let firstName = 'John';
    let lastName = 'Stevens';

    function getFullName(firstName, lastName) {
        return `${firstName} ${lastName}`;
    };

    console.log(`Hello ${getFullName(firstName, lastName)}`);

    // Arrow Functions
    console.log("ARROW FUNCTIONS");
    function greetings(name) {
        return('Welcome ' + name);
    }

    console.log(greetings('John'));

    const greetingsArrow = (name, age) => {
        return(`Welcome ${name}, ${age} years old`);
    }

    console.log(greetingsArrow('John', 28));

    // When there's only one statement you can get rid of the curly braces
    const greetingsSimplified = (name, age) => `Welcome ${name}, ${age} years old`;

    console.log(greetingsSimplified('John', 30));

    // REST OPERATOR
    console.log("REST OPERATOR");
    // This function receives a n number of arguments and operater with them
    const mSum = (...args) => {
        let sum = 0;
        for(let i=0; i<args.length; i++) {
            sum +=args[i];
        }
        console.log(sum);
    }

    mSum(1, 2, 3, 4, 5);

    // It can be changed to receive a couple of named variables, mandatory, and n optional arguments
    // 1 and 2 will be passed as nnumbers while the rest will be send as an array
    const mSumOptional = (num1, num2, ...args) => {
        let sum = num1 + num2;
        for(let i=0; i<args.length; i++) {
            sum +=args[i];
        }
        console.log(sum);
    }

    mSumOptional(1, 2, 3, 4, 5, 6, 7, 8);

    // SPREAD OPERATOR
    console.log("SPREAD OPERATOR");
    /*
        Spread syntax allows arrays and objects to be expendad into:
        - elements in case of array
        - key-value pairs in case of object
    */
    let mArr1 = [1, 2, 3, 3, 4, 5];

    // [...mArr1] creates a copy of the array
    /*
        why use it?
        let mArr1 = [1, 2, 3];
        let mArr2 = mArr1;
        mArr1.push(4);
        mArr2 is a reference to mArr1 so whenever mArray 1 is updated so it will be mArr2
        mArr1 -> [1, 2, 3, 4];
        mArr2 -> [1, 2, 3, 4];

        using mArr2 = [...mArr1]; will create a copy of mArr1 so they will be different
        let mArr1 = [1, 2, 3];
        let mArr2 = [...mArr1];
        mArr1.push(4);
        mArr1 -> [1, 2, 3, 4];
        mArr2 -> [1, 2, 3];
    */
    console.log([...mArr1]);

    let mArr2 = [6, 7, 8];

    // It can be also be used to concatenate
    let mArr3 = mArr1.concat(mArr2);
    console.log(mArr3);

    mArr3 = [...mArr1, ...mArr2];
    console.log(mArr3);

    // Or expand the array
    mArr3 = [0, ...mArr1, ...mArr2, 9];
    console.log(mArr3);

    // Also applies for objects
    let mObj1 = {
        name: 'John',
        age: '30'
    }

    let mObj2 = {
        job: 'Developer'
    }

    let mObj3 = {...mObj1, ...mObj2};
    console.log(mObj3);



    // DESTRUCTURING
    console.log("DESTRUCTURING");
    // Allows to unpack arrays or objects into a bunch of variables

    const name = 'John Manuel Lark';
    const nameArr = name.split(' ');

    console.log(nameArr);

    firstName = nameArr[0];
    middleName = nameArr[1];

    // This way you can assign first and second position to the variables in [], the order matters.
    /*
        [firstName, middleName] = nameArr; gives as result John, Manuel
        [middleName, firstName] = nameArr; gives as result John, Manuel
    */
    [firstName, middleName] = nameArr; // gives as result John, Manuel
    console.log(firstName);
    console.log(middleName);

    [firstName, , lastName] = nameArr; // gives as result John, Lark
    console.log(firstName);
    console.log(lastName);

    let person = {
        name: 'John',
        job: 'developer',
        age: 28
    }

    // When it comes to objects, it searchs values by key
    let {job, age} = person; //-> will return a=undefined, b=undefined

    console.log(job);
    console.log(age);


    // MAP
    mArr = [1, 2, 3, 4];
    let newArr = mArr.map((item, i) => {
        console.log(`Item a pos: ${i} is ${item}`);
        return item*2;
    })

    console.log(newArr);

    // It can also be used with objects
    mArr = [
        {
            name: 'John Lark',
            experience: 10,
            type: 'commercial'
        },
        {
            name: 'John Doe',
            experience: 5,
            type: 'commercial'
        },
        {
            name: 'Susan Doe',
            experience: 10,
            type: 'manager'
        },
    ]

    newArr = mArr.map((item, i) => {
        return {
            name: item.name,
            experience: item.experience
        }
    })

    console.log(newArr);

    // REDUCE
    // Iterates through an array and it accepts a callback function to perform some action on the array element
    /*
        aa.reduce((acc,item) => {
            //callback function body
        }, acc_default_value)
    */

    numArr = [1, 2, 3, 3, 4, 5];

    let result = numArr.reduce((acc, item) => {
        console.log(item);
        console.log(acc);
        return acc + item;
    }, 0);

    console.log('Result of reduce ' + result);

    // Same for objects
    result = mArr.reduce((acc, item) => {
        return acc + item.experience;
    }, 0);

    console.log('Result of accumulated experience ' + result);

    // FILTER
    // Iterates and filters an array to create a new array
    /*
        ar.filter(item => {
            // Return true/false to add/skip the current item
        })
    */

    mArr = [
        {
            name: 'John Lark',
            experience: 10,
            type: 'commercial'
        },
        {
            name: 'John Doe',
            experience: 5,
            type: 'commercial'
        },
        {
            name: 'Susan Doe',
            experience: 10,
            type: 'manager'
        },
        {
            name: 'Marie Sue',
            experience: 8,
            type: 'manager'
        },
        {
            name: 'Markus Boyle',
            experience: 3,
            type: 'manager'
        },
    ];

    result = mArr.filter(item => {
        return item.experience > 5;
    })

    console.log("Result of filter people with more than 5 year of experience ", result);

    // FIND & FININDEX
    // find() -> returns the first element which matches the condition
    // finIndex() -> return the index of the first element whch matches the condition
    result = mArr.find(item =>{
        return item.name === 'Marie Sue';
    });
    console.log("Result of find()", result);

    result = mArr.findIndex(item =>{
        return item.name === 'Marie Sue';
    });
    console.log("Result of findIndex()", result);

    // CLASSES
    class Person {
        constructor(name, birthYear) {
            this.name = name;
            this.birthYear = birthYear;
        }

        getDetails = () => {
            return `Name: ${this.name} and Age: ${2022 - this.birthYear}`;
        }
    }

    let markus = new Person('Markus', 1990);

    console.log(markus.getDetails());

    // INHERITANCE

    class Pilot extends Person {
        constructor(name, birthYear, experience, type, license) {
            super(name, birthYear);
            this.experience = experience;
            this.type = type;
            this.license = license;
        }

        getLicenseDtails = () => {
            return `Experience with license ${this.license} type ${this.type} => ${this.experience} years`;
        }
    }

    let mack = new Pilot('Mack', 1993, 13, 'private', 'TC23123');

    console.log(mack.getDetails());
    console.log(mack.getLicenseDtails());

    // CALLBACK AND PROMISES
    /*
        In JS the code is executed line-by-line in a sequence so it doesn't wait for any kind of operation result.
        The asynchronous operation is given a function to call when it is completed -> Callback Function
    */

    let list = [];

   $.get('https://jsonplaceholder.typicode.com/posts', (response) => {
       let id = 1;
        $.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (response) => {
            console.log(response);
        }).fail(err => {
            console.log(err);
        });
   }).fail(err => {
       console.log(err);
   });

   // Here the list is empty despite being assigned with the response because js doesn't wait for it
   console.log(list);

   // As seen before it can get really messi to work with those calls, for that promises were introduced
   // A promise is used to handle the asynchronous result of and operation, it defers the execution of a code block until an asynchronous
   // request is completed.
   // It has 3 states:
   //   1. Pending
   //   2. Fulfilled
   //   3. Rejected
   // Advantage is that we have the methods then() which is called when the resolve() is executed and
   // catch() which is called when the reject() method is executed.

    const postListPromise = new Promise((resolve, reject) => {
        $.get('https://jsonplaceholder.typicode.com/posts', (data) => {
            resolve(data);
        }).fail(err => {
            reject(new Error(`Call failed for GET POST List Request with status ${err.status}`));
        });
    });
    
    postListPromise
        .then((response) => { 
            console.log('Call success');
            console.log('Then response => ', response);
        })
        .catch((error) => { 
            console.log('Call failed');
            console.log('Catch error => ', error);
        })

    // CHAINING PROMISES
    const postDetailsPromise = (data) => new Promise((resolve, reject) => {
        $.get(`https://jsonplaceholder.typicode.com/posts/${data[0].id}`, (data) => {
            resolve(data);
        }).fail(err => {
            reject(new Error(`Call failed for GET POST List Request with status ${err.status}`));
        });
    });

    postDetailsPromise
        .then((response) => postDetailsPromise(response)) // same as .then(postDetailsPromise)
        .then(response => {
            console.log('POST DETAILS RESPONSE => ', response)
        })
        .catch((error) => {
            console.log('Call Failed');
            console.log('Catch Error => ', error);
        })
});