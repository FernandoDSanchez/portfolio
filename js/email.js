let form = document.querySelector('.contact-form')
let fname = document.getElementById('firstName');
let lname = document.getElementById('lastName');
let email = document.getElementById('emailAddress');
let phone = document.getElementById('phoneNumber');
let message = document.getElementById('messageText');

async function postData(url, data = {}) {
    // Default options are marked with *
    console.log(JSON.stringify(data))
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        try {
            const fetchResponse = await fetch(url, settings);
            const data = await fetchResponse.json();
            return data;
        } catch (e) {
            return e;
        }     // parses JSON response into native JavaScript objects
}
form.addEventListener('submit', (e)=> {
    console.log('submit')
    e.preventDefault();
    let formData = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }
    postData('https://fathomless-eyrie-28906.herokuapp.com/email', formData)
        .then(data => {
            alert('Email sent successfully')
            console.log(data); // JSON data parsed by `data.json()` call
        });
    });