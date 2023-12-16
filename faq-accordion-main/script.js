const firstPlusButton = document.getElementById('first-plus')
const firstMinusButton = document.getElementById('first-minus');

const secondPlusButton = document.getElementById('second-plus')
const secondMinusButton = document.getElementById('second-minus');

const thirdPlusButton = document.getElementById('third-plus')
const thirdMinusButton = document.getElementById('third-minus');

const fourthPlusButton = document.getElementById('fourth-plus')
const fourthMinusButton = document.getElementById('fourth-minus');

const firstHidden = document.querySelector('.first-hidden')
const secondHidden = document.querySelector('.second-hidden')
const thirdHidden = document.querySelector('.third-hidden')
const fourthHidden = document.querySelector('.fourth-hidden')

firstPlusButton.addEventListener('click',()=>{
    firstHidden.classList.remove('first-hidden')
})

firstMinusButton.addEventListener('click',()=>{
    firstHidden.classList.add('first-hidden');
})

secondPlusButton.addEventListener('click',()=>{
    secondHidden.classList.remove('second-hidden')
})

secondMinusButton.addEventListener('click',()=>{
    secondHidden.classList.add('second-hidden');
})

thirdPlusButton.addEventListener('click',()=>{
    thirdHidden.classList.remove('third-hidden')
})

thirdMinusButton.addEventListener('click',()=>{
    thirdHidden.classList.add('third-hidden');
})

fourthPlusButton.addEventListener('click',()=>{
    fourthHidden.classList.remove('fourth-hidden')
})

fourthMinusButton.addEventListener('click',()=>{
    fourthHidden.classList.add('fourth-hidden');
})