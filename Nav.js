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

var APP_ID = 'xmpFg6NT8ShwwHgjdXGpnoAq-gzGzoHsz';
var APP_KEY = 'C32IKUt8mR08xYyBear2mK77';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
var Comment = AV.Object.extend('Comment');
var query = new AV.Query('Comment')
query.find().then(function (comments) { 
    comments.forEach(function(comment) { 
      var name = comment.attributes.name
      var content = comment.attributes.content
      $('.comment-content').append(`<div id=${comment.id}><span class=delete>删除</span> ${name}: ${content}</div>`)
    })},function(error){console.log(error)})

$('.input-button').bind('click', addComment)
function addComment() {
    var name = $("#comment-name").val()
    var content = $('#comment-content').val()
    if (name && content) {
    var comment = new Comment();
    comment.set('name', name)
    comment.set('content', content)
    comment.save().then(function(object) {
    $("#comment-name").val("")
    $('#comment-content').val("")
    $('.comment-content').append(`<div id=${comment.id}><span class=delete>删除</span>${name}: ${content}</div>`)
},function(error){console.log(error)})}else {
    alert('请输入用户名和内容')
}
}

$('.comment-content').bind('click', deleteComment)
function deleteComment(e) {
    var isspan = e.target
    var flag = $(isspan).text()
    if (flag ==='删除') {
        $(isspan).parent().remove()
        var id = $(isspan).parent().attr('id')
        var todo = AV.Object.createWithoutData('Comment', id);
        todo.destroy().then(function (success) {
            alert('删除成功')
        }, function (error) {
        })}   
}