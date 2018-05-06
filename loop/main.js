var buttons = $('.buttons > button')
var images = $('.container')
var span = $('.viewer > span')
var onShow = 1
var counts = 1
var flag = true
images.append('<img src="./1.png" alt="">')
images.prepend('<img src="./4.png" alt="">')
var timer = setInterval(playSlide, 2000)
buttons.bind('click', playS)
span.on('click', playSlide)

function playSlide() {
    var s = span.index(this)
    if (s !== -1 ) {
        flag = true
    } 
    if (s === 0) {
        counts = (onShow + 2) % 4 + 1
        playStart(counts)
    } else {
        counts = onShow % 4 + 1
        if (flag) {
            playStart(counts)
        }    
    }
}
function playS() {
    var s = buttons.index(this) + 1
    playStart(s)
}

function playStart(num) {
        var l = 0
        images.removeClass('active1', 'active2').css('transition', '0.3s')
        if (num === 4 && onShow === 1 ) {
            l = 0
            images.one('transitionend', function() {images.css({'margin-left': '-1600px', 'transition': 'none'})})
            onShow = num
        } else if (num === 1 && onShow === 4) {
            l = -(onShow + 1) * 400
            images.one('transitionend', function() {images.css({'margin-left': '-400px', 'transition': 'none'})})
            onShow = num
        } else {
            l = num * -400
            onShow = num
        }
        images.css('margin-left', l + 'px')
}
$('.viewer').on('mouseenter', function() {$('span').addClass('active'); flag = false})
$('.viewer').on('mouseleave', function() {$('span').removeClass('active'); flag = true})

