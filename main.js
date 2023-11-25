const content = document.querySelector('.content')
const addBtn = document.querySelector('.add')
let counter = 1
let colors = [ 'red', 'green', ' yellow' , 'blue', ' tomato' , ' chocolate' , '#ccc', '#000' , 'dark green' , ' silver' , 'gold']
let chars = '012356789abcdef'
let a = chars.split('')
console.log(a);

addBtn.addEventListener('click', () => {
    let rnd = Math.floor(Math.random()*a.length)
    let rnd2 = Math.floor(Math.random()*a.length)
    let rnd3 = Math.floor(Math.random()*a.length)
    let rnd4 = Math.floor(Math.random()*a.length)
    let rnd5 = Math.floor(Math.random()*a.length)
    let rnd6 = Math.floor(Math.random()*a.length)
    let box = document.createElement('div')
    box.classList.add('box')
    // let rnd = Math.floor(Math.random() * colors.length)
    box.style.backgroundColor = `#${a[rnd]}${a[rnd2]}${a[rnd3]}${a[rnd4]}${a[rnd5]}${a[rnd6]}`
    box.style.backgroundColor = colors[rnd]
    box.style.border = colors[rnd]
    box.innerHTML = counter
    content.appendChild(box) 
    counter++
    
    
    
})





// let h1 = document.createElement('h1')
// h1.innerText = 'salom ${counter}'
// content.appendChild(h1)
// console.log(h1);
// counter++





// let div = document.querySelector('.content')
// const addBtn =document.querySelector('#add')
// let counter = 1

// addBtn.addEventListener('click', () => {
//     let box = document.createElement('div')
//     box.innerHTML = counter
//     content.appenChild(box)
//     counter++
//     console.log('click')
// })

