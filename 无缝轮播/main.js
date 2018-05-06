
var images = $('img')
var waitingList = [0, 1, 2]
// timer = setInterval(showImage, 3000)
function showImage() {
    var show1 = images.eq(waitingList[0])
    var show2 = images.eq(waitingList[1])
    show2.one('transitionend', function(){show1.removeClass('disappear').addClass('waiting')})
    show1.removeClass('showing').addClass('disappear')
    show2.removeClass('waiting').addClass('showing')
    var s = waitingList.shift()
    waitingList.push(s)
}
var buttons = $('div.controller > button')
var waiting = [2]

buttons.bind('click', playSlide)
function playSlide(e) {
    var index = e.currentTarget.index()
}
































// var buttons  = $('div.controller > button')
// var flag = true  
// var num = 0
// buttons.bind('click', playStart)
// function autoPlay() {
//     if (flag) {
//         var number = num % 3
//         buttons.eq(number).trigger('click', playStart)
//         num++
//     } 
// }
// function playStart() {
//     num = buttons.index(this) 
//     var that = this
//     var l = num * -400
//     buttonControl(that)
//     images.css('margin-left', l + 'px')
// }
// images.bind('mouseenter', function(){flag = false})
// images.bind('mouseleave', function(){flag = true})

// function buttonControl(btn) {
//     var s = $(btn)
//     s.siblings().removeClass('red')
//     s.addClass('red')
// }


