const plusButton = document.getElementById('plus1');
const minusButton = document.getElementById('minus1');
const hidden1 = document.getElementById('hidden1')

plusButton.addEventListener('click', () => {
    hidden1.classList.remove("hidden1");
    minusButton.style.display = 'block'
    plusButton.style.display = 'none'
})
minusButton.addEventListener('click',()=>{
    hidden1.classList.add('hidden1')
    minusButton.style.display = 'none'
    plusButton.style.display = 'block'
})

const plusButton2 = document.getElementById('plus2');
const minusButton2 = document.getElementById('minus2');
const hidden2 = document.getElementById('hidden2')

plusButton2.addEventListener('click', () => {
    hidden2.classList.remove("hidden2");
    minusButton2.style.display = 'block'
    plusButton2.style.display = 'none'
})
minusButton2.addEventListener('click',()=>{
    hidden2.classList.add('hidden2')
    minusButton2.style.display = 'none'
    plusButton2.style.display = 'block'
})

const plusButton3 = document.getElementById('plus3');
const minusButton3 = document.getElementById('minus3');
const hidden3 = document.getElementById('hidden3')

plusButton3.addEventListener('click', () => {
    hidden3.classList.remove("hidden3");
    minusButton3.style.display = 'block'
    plusButton3.style.display = 'none'
})
minusButton3.addEventListener('click',()=>{
    hidden3.classList.add('hidden3')
    minusButton3.style.display = 'none'
    plusButton3.style.display = 'block'
})

const plusButton4 = document.getElementById('plus4');
const minusButton4 = document.getElementById('minus4');
const hidden4 = document.getElementById('hidden4')

plusButton4.addEventListener('click', () => {
    hidden4.classList.remove("hidden4");
    minusButton4.style.display = 'block'
    plusButton4.style.display = 'none'
})
minusButton4.addEventListener('click',()=>{
    hidden4.classList.add('hidden4')
    minusButton4.style.display = 'none'
    plusButton4.style.display = 'block'
})