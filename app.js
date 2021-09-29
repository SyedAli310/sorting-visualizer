
const array = document.querySelector('.array')
const delay = 300

function showArr(arr){
    array.innerHTML=''
    arr.forEach( el =>{
        const elt = document.createElement('span')
        elt.classList.add('array-el')
        $(elt).animate({height:el*2},200)
        $(elt).width('25px')
        $(elt).text(el)
        $(elt).css('background','lightgreen')
        array.appendChild(elt)
    })
    
}

$('#randomise').on('click',()=>{
    arr = [ Math.ceil(Math.random()*100 + 5),
            Math.ceil(Math.random()*100 + 5),
            Math.ceil(Math.random()*100 + 5),
            Math.ceil(Math.random()*100 + 5),
            Math.ceil(Math.random()*100 + 5),
            Math.ceil(Math.random()*100 + 5),
            Math.ceil(Math.random()*100 + 5),
            Math.ceil(Math.random()*100 + 5),
    ]
    showArr(arr)
})

function swap(el1,el2){
    let temp1 = el1.style.height
    el1.style.height = el2.style.height
    el2.style.height = temp1

    let temp2 = el1.innerText
    el1.innerText = el2.innerText
    el2.innerText = temp2
}

function wait(ms){
    return new Promise(resolve=>{
        setTimeout(()=>{ resolve('') }, ms)
    })
}

async function bubbleSort(){
    const array = document.querySelectorAll('.array-el')

    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-i-1;j++){
            array[j].style.background ='yellow'
            array[j+1].style.background ='yellow'
            if(parseInt(array[j].style.height) > parseInt(array[j+1].style.height)){
                await wait(delay)
                swap(array[j],array[j+1])
            }
            array[j].style.background = 'lightgreen'
            array[j+1].style.background = 'lightgreen'
        }
        array[array.length-1-i].style.background = 'pink'
    }
    array[0].style.background = 'pink'
}

$('#bubble-sort').on('click', async (e)=>{
    await bubbleSort()
})