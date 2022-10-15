const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const api_url = 'https://type.fit/api/quotes'

btn.addEventListener('click', apifunc)

function apifunc() {

    const random = Math.floor(Math.random() * 1643)

    fetch(api_url)
        .then(a => a.json())
        .then(b => {
            console.log(b);
            quote.innerText = `"${b[random].text}"`;
            person.innerText = b[random].author;
        })
}

