const main = document.querySelector('.main');
const thankYou = document.querySelector('.thank-you');
const submitButton = document.querySelector('.button');
const rateAgain = document.querySelector('#rate-again')
const rates = document.querySelectorAll('#btn');
const selectedStar = document.querySelector('#selectedStar')

submitButton.addEventListener("click", () => {
    thankYou.classList.remove("hidden");
    main.style.display = 'none';
})

rateAgain.addEventListener('click',()=>{
    thankYou.classList.add('hidden');
    main.style.display = 'block';
})

rates.forEach((rate) => {
    rate.addEventListener('click',() => {
        selectedStar.innerHTML = rate.innerHTML
    })
})