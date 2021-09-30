
const array = document.querySelector('.array')
let delay = $('#speed-range').val()
let size = $('#size-range').val()

$('#speed-val').text($('#speed-range').val())
$('#size-val').text($('#size-range').val())

$('#speed-range').on('input',()=>{
    $('#speed-range').val($('#speed-range').val())
    delay = $('#speed-range').val()
    $('#speed-val').text($('#speed-range').val())
})

$('#size-range').on('input',()=>{
    $('#size-range').val($('#size-range').val())
    size = $('#size-range').val()
    $('#size-val').text($('#size-range').val())
})


function showArr(arr){
    $('#arr-header').css('color','black')
    $('#arr-header').text('Array')
    $('#arr-header').css('opacity',1)
    $('#arr-header').css('visibility','visible')
    array.innerHTML=''
    arr.forEach( el =>{
        const elt = document.createElement('span')
        elt.classList.add('array-el')
        $(elt).animate({height:el*2},200)
        $(elt).width('25px')
        $(elt).html(`<span class='elt-label text-monospace'>${el}</span>`)
        $(elt).css('background','#337ab7')
        array.appendChild(elt)
    })
    
}



$('#randomise').on('click',()=>{
    arr = []
    for(let i=0 ; i<size ; i++){
        arr.push(Math.ceil(Math.random()*100 + 5))
    }
    console.log('Array length: ',arr.length);
    showArr(arr)
})

function swap(el1,el2){
    let temp1 = el1.style.height
    el1.style.height = el2.style.height
    el2.style.height = temp1

    // console.log(el1.firstChild.innerText);
    // let temp2 = el1.innerText
    // el1.innerText = el2.innerText
    // el2.innerText = temp2
}

function swap2(lb1,lb2){
    let temp2 = lb1.innerText
    lb1.innerText = lb2.innerText
    lb2.innerText = temp2
}

function wait(ms){
    return new Promise(resolve=>{
        setTimeout(()=>{ resolve('') }, ms)
    })
}

async function bubbleSort(){
    const array = document.querySelectorAll('.array-el')
    const labels = document.querySelectorAll('.elt-label')

    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-i-1;j++){
            array[j].style.background ='#5bc0de'
            array[j+1].style.background ='#5bc0de'
            if(parseInt(array[j].style.height) > parseInt(array[j+1].style.height)){
                await wait(delay)
                swap(array[j],array[j+1])
                swap2(labels[j],labels[j+1])
            }
            array[j].style.background = '#337ab7'
            array[j+1].style.background = '#337ab7'
        }
        array[array.length-1-i].innerHTML = `<span class='elt-label text-monospace text-success'>${labels[labels.length-1-i].innerText}</span>`
        array[array.length-1-i].style.background = '#5cb85c'
        array[array.length-1-i].style.color = 'white'
    }
    array[0].innerHTML = `<span class='elt-label text-monospace text-success'>${labels[0].innerText}</span>`
    array[0].style.background = '#5cb85c'
    array[0].style.color = 'white'
    $('#arr-header').css('color','#5cb85c')
    $('#arr-header').html(`<i class='fas fa-check fa-sm'></i> Sorting complete!`)
}

$('#bubble-sort').on('click', async (e)=>{
    $('#arr-header').css('color','#5bc0de')
    $('#arr-header').text('Sorting...')
    await bubbleSort()
})