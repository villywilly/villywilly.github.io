


// this doesnt actually do anything with entered information
// its supposed to set 2 headers in an html file to the values users input
// but right now it does nothing. other than prompt you
console.log('Remember this whole thing is a joke, but dont put any personal information just in case!');
console.log('Hey, stop snooping around in my website!!');
let age = window.prompt('Enter your age. You must be over 18 to order Magic Dirt');
let address = window.prompt('Enter your address');
document.getElementById('age').textContent = age;
document.getElementById('address').textContent = address;
console.log(age,address,'entered');
