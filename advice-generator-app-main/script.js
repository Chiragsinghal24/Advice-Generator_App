const adviceid = document.querySelector('#adviceId');
const advicetext = document.querySelector('#advicetext');
const btn = document.querySelector('#btn');

function getadvice() {
    fetch('https://api.adviceslip.com/advice').then(
        response => {
            return response.json();
        }).then(advicedata => {
            const advicenum = advicedata.slip.id;
            const advice = advicedata.slip.advice;

            adviceid.textContent = advicenum;
            advicetext.innerHTML = '<p>${advice}</p>';
        }).catch(error => {
            console.log(error);
        })
    )
}

btn.addEventListener('click', function () {
    getadvice();
})

window.onload = () => {
    getadvice();
}
