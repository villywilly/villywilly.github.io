

// welcome to special area of macig dir website!!
console.log('Remember this whole thing is a joke, but dont put any personal information just in case!'); // idk the user cant read this unless the user
console.log('Hey, stop snooping around in my website!!'); // opens inspect element
let age = window.prompt('Enter your age. You must be over 18 to order Magic Dirt'); // asks for ur age
let address = window.prompt('Enter your address'); // asks for ur address
document.getElementById('age').textContent = age; // sets a text element to ur age, other one makes it address
document.getElementById('address').textContent = address;
console.log(age,address,'entered'); // logs it in console because testing
let numAge = Number(age);
if (isNaN(numAge)) { // check if you entered a proper number
    console.log('Warning! Invalid number error has occured!');
    window.alert('Warning! Invalid number error has occured! Check console for more details');
    console.log(`The number the user entered <${age}>, returns as <${numAge}, which is invalid!`);
}
else if(numAge < 18) { // check if your old enough
    console.log(`Warning! Use too young! Entered age <${numAge} returns below 18, so is not allowed to purchase magic dirt!`);
    window.alert('Sorry, you must be over 18 to purchase this product.');
}
else { // say purchase in progress
    console.log('Success! purchase is in progress.');
    window.alert('Success! Order in progress');
}