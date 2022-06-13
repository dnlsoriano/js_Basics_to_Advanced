$(document).ready(function() {
    // 2 new ways to create variables
    // let -> replacement for var
    // const  -> to create constants, variables created this way can't be updated later in the code

    // Template Strings
    // It's a string which allows embedding expressions inside it
    // eg const greetings = `Hello ${name}`

    const firstName = 'John';
    const lastName = 'Stevens';

    function getFullName(firstName, lastName) {
        return `${firstName} ${lastName}`;
    };

    console.log(`Hello ${getFullName(firstName, lastName)}`);
});