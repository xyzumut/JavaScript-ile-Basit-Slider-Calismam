let sliderItem = document.getElementsByClassName('slider-item')
let sliderItemSayisi = sliderItem.length
let itemGenislik = parseInt(window.getComputedStyle(sliderItem[0], null).getPropertyValue("width").replace("px"))+1
let sayfa = 1
let ileri = document.getElementById('ileri')
let geri= document.getElementById('geri')
let anlikCircle = document.querySelectorAll('.slider-circle span')
let anlikCircleIndex = 0 
anlikCircle[anlikCircleIndex].style.backgroundColor = 'blue'


// circle değiştiren fonksiyon
function switch_circle() {
    anlikCircle[anlikCircleIndex].style.backgroundColor = '#99aec5'
    anlikCircleIndex = sayfa-1
    anlikCircle[anlikCircleIndex].style.backgroundColor = 'blue'
}
// circle değiştiren fonksiyon



// Olay Dinleyiciler *************************************************
ileri.addEventListener('click',function() {
    for (let i = 0; i <sliderItemSayisi; i++) {
        sliderItem[i].style.right= itemGenislik*sayfa + 'px'
    }
    if(sayfa==sliderItemSayisi){ //son sayfadaysa başa al
        sayfa = 0
        for (let i = 0; i <sliderItemSayisi; i++) {
            sliderItem[i].style.right='0px'
        }
        
    }
    sayfa++
    console.log('ileri:'+sayfa)
    switch_circle()
})
geri.addEventListener('click',function(){
    if (sayfa==1) {
        for (let i = 0; i <sliderItemSayisi; i++) {
            sliderItem[i].style.right=itemGenislik*(sliderItemSayisi-1) + 'px'
        }
        sayfa=sliderItemSayisi
    }
    else if(sayfa>1){
        sayfa--
        for (let i = 0; i <sliderItemSayisi; i++) {
            sliderItem[i].style.right=(sayfa-1)*itemGenislik + 'px'
        }
    }
    console.log('geri:'+sayfa)
    switch_circle()
})
// Olay Dinleyiciler *************************************************




// Otomatik Tetikleyici
setTimeout(function yurut(){
    ileri.click();
    setTimeout(yurut, 6000);
  }, 6000);
// Otomatik Tetikleyici
