function check() {
    const passCheck='theGreatKeyboard!';
    let password = document.getElementById('pass').value;
    if (password===passCheck) {
        window.alert('Congrats, you have been granted access to the file.')
        window.alert('JK, access denied bc nobody can see this anymore bc idk just yea')
        console.log('Password confirmed, redirecting user...')
    }
    else {
        window.alert('Password incorrect, try again! Password hint: Only a true hacker would know.');
    }

}
