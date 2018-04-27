var buttons  = $('div.controller > button')
var images = $('.images')
var num = 0
var flag = true
buttons.bind('click', playStart)
images.bind('mouseenter', function(){flag = false})
images.bind('mouseleave', function(){flag = true})
timer = setInterval(autoPlay, 1000)
function playStart() {
    num = buttons.index(this) 
    var that = this
    var l = num * -400
    buttonControl(that)
    images.css('margin-left', l + 'px')
}
function buttonControl(btn) {
    var s = $(btn)
    s.siblings().removeClass('red')
    s.addClass('red')
}
function autoPlay() {
    if (flag) {
        var number = num % 3
        buttons.eq(number).trigger('click', playStart)
        num++
    } 
}


