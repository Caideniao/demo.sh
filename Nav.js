all.onclick = function() {
    var bar = barcover.classList
    bar.remove('active1')
    bar.remove('active2')
}
model.onclick = function() {
    var bar = barcover.classList
    bar.remove('active2')
    bar.add('active1')
}
nativejs.onclick = function() {
    var bar = barcover.classList
    bar.remove('active1')
    bar.add('active2')
}

window.onscroll = function() {
    if(scrollY > 0) {
        addpadding.classList.add('active')
    }else {
        addpadding.classList.remove('active')
    }
}

worklist.onmouseenter = function() {
    worklist.firstElementChild.classList.add('active')
    console.log('1')
}

