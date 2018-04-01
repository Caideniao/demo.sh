
var row = [["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]]
var hash = {Q:"qq.com",E:"ele.com",M:"meituan.com"}
var length = row.length
for (i = 0; i < length; i = i + 1) {
    var sss = document.createElement('div')
    document.body.appendChild(sss)
    for (n= 0; n < row[i].length; n = n + 1) {
        var span = document.createElement('span')
        var key = document.createElement('kbd')
        var text = document.createTextNode(row[i][n])
        document.body.main.node.appendChild(span)
        document.body.main.node.span.appendChild(key)
        document.body.main.node.span.key.appendChild(text)
    }
}
button.onclick = function (dd) {
    var button2 = dd['target']
    var key = button2['id']
    var x = prompt('请输入网址')
    hash[key] = x
    localStorage.setItem('zz',JSON.stringify(hash))
}
document.onkeypress = function(x) {
    var key = x['key']
    var website = hash.key
    window.open('http://' + website, '_blank')
}

