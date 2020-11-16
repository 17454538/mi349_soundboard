var button1 = document.getElementById('rimshot')
var button2 = document.getElementById('seinfeld')
var button3 = document.getElementById('bazinga')

var clip1 = document.getElementById('rimshot-clip')
var clip2 = document.getElementById('seinfeld-clip')
var clip3 = document.getElementById('bazinga-clip')

button1.addEventListener('click', function () {
    clip1.play()
})

button2.addEventListener('click', function () {
    clip2.play()
})

button3.addEventListener('click', function () {
    clip3.play()
})


button1.addEventListener('mouseenter', function () {
    clip1.play()
})

button2.addEventListener('mouseenter', function () {
    clip2.play()
})

button3.addEventListener('mouseenter', function () {
    clip3.play()
})