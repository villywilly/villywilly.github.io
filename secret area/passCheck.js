function check() {
    const passCheck='theGreatKeyboard!';
    let password = document.getElementById('pass').value;
    if (password===passCheck) {
        window.alert('Congrats, you have been granted access to the file.')
        console.log('Password confirmed, redirecting user...')
        window.location.href = 'https://drive.google.com/drive/folders/1wvhH_-PRjJHU7AP9Za_4s04f1SMR7Lrd?usp=sharing';
    }
    else {
        window.alert('Password incorrect, try again! Password hint: Only a true hacker would know.');
    }
}