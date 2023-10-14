const h = document.getElementById('head')
const input = document.getElementById('my-input')
const button = document.getElementById('my-button')



/*
h.innerHTML = 'Hello world'

button.addEventListener('click', function (event) {
    h.innerHTML = input.value;
if(input.value === ''){
    alert('You have to write something...')
}

})
*/

function touch() {  
   //input.style.textAlign = 'center'
}

const s = document.getElementById('membership1')
const f = document.getElementById('free1')
const o = document.getElementById('one')
const t = document.getElementById('two')
const z = document.getElementById('zero')





z.style.fontFamily = 'san-serif'


f.style.fontFamily = 'san-serif'
f.style.fontHeight = '30px'

s.addEventListener('click', function (event) {
    s.innerHTML = '<em>Thanks please come back again</em> <br/> <em>Try for $10/mounth</em>'
    s.style.backgroundColor = '';
    
})


function sign() {
    s.style.backgroundColor = '#36c'
    
}


f.addEventListener('click', function (event) {
    f.innerHTML = '<em>Thanks please come back again</em> <br/> <em>Try for $10/mounth</em>'
    f.style.backgroundColor = '';
    
})

function free() {
    f.style.backgroundColor = '#36c'
    f.style.fontSize = '15px'
}

o.addEventListener('click', function (event) {
    o.innerHTML = '<em>Thanks please come back again</em> <br/> <em>Try for $10/mounth</em>'
    o.style.backgroundColor = '';
    
})

function see() {
    o.style.backgroundColor = 'yellow'
    o.style.fontSize = '20px'
}

t.addEventListener('click', function (event) {
    t.innerHTML = '<em>Thanks please come back again</em> <br/> <em>Try for $10/mounth</em>'
    t.style.backgroundColor = '';
    
})

function sees() {
    t.style.backgroundColor = 'yellow'
    t.style.fontSize = '20px'
}