 canvas.width = document.documentElement.clientWidth
 canvas.height = document.documentElement.clientHeight
window.onresize = function() {
    canvas.width = document.documentElement.clientWidth
    canvas.height = document.documentElement.clientHeight  
}

var ctx = canvas.getContext("2d")
var drawBegin = false
var eraserOn = false
pen.onclick = function() {
    eraserOn = false
    pen.classList.add("active")
    eraser.classList.remove("active")
}
eraser.onclick = function() {
    eraserOn = true
    eraser.classList.add("active")
    pen.classList.remove("active")
}
clearall.onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
savepicture.onclick = function() {
    var url = canvas.toDataURL("image/png")
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = "我的画作"
    a.target = '_blank'
    a.click()
}
var setFirstPoint = function(width,height) {
     if (eraserOn) {     
        ctx.clearRect(width-10, height-10, 20, 20)
    }else {  
        ctx.beginPath()
        ctx.moveTo(width, height)
    }
}
var drawPicture = function(width, height) {
    if (drawBegin){
        if (eraserOn) {
            ctx.clearRect(width-2, height-2, 4, 4)
        }else{
            ctx.lineTo(width, height)
            ctx.stroke()
        }
    }   
}
if (canvas.ontouchstart === undefined) {
    canvas.onmousedown = function(location) {
        drawBegin = true
        var width = location.clientX
        var height = location.clientY
        setFirstPoint(width, height)
        }
    canvas.onmousemove = function(location) {
        var width = location.clientX
        var height = location.clientY
        drawPicture(width, height)
    }        
    document.body.onmouseup = function() {
        drawBegin = false
    }
}else {
    canvas.ontouchstart = function(coords) {
        var width = coords.touches[0].clientX
        var height = coords.touches[0].clientY
        drawBegin = true
        setFirstPoint(width, height)
    }
    canvas.ontouchmove = function(coords) {
        var width = coords.touches[0].clientX
        var height = coords.touches[0].clientY
        drawPicture(width, height)
    }
}