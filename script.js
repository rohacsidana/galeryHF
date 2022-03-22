window.addEventListener("load", init)
function ID(id) {
    return document.getElementById(id)
}
//function Class(className) {
//    document.getElementsByClassName(className)
//}
function $(item) {
    return document.querySelectorAll(item)
}
var pictureBlock = [
    {
        source: "kepek/1.jpg",
        title: "Animals",
        description: "Goats"

    },
    {
        source: "kepek/2.jpg",
        title: "Japanese Tree",
        description: "Above 20°C"

    },
    {
        source: "kepek/3.jpg",
        title: "Sunset in the summer",
        description: "Sunset Lover"

    },
    {
        source: "kepek/4.jpg",
        title: "Hungarian Town",
        description: "Hungarian Town on a Cloudy Day"

    },
    {
        source: "kepek/5.jpg",
        title: "Elderflower",
        description: "A flowering elderflower "

    },
]
var picIndex = 0;
function init() {
    showPic();
    ID("left").addEventListener("click", goLeft)
    ID("right").addEventListener("click", goRight)
}
function showPic() {
    ID("actualPic").src = pictureBlock[picIndex].source
    ID("actualPic").alt = pictureBlock[picIndex].title
}
function goLeft() {
    if (picIndex <= 0) {
        picIndex = pictureBlock.length - 1
    }
    else {
        picIndex--
    }
    showPic(picIndex)
}
function goRight() {
    if (picIndex >= pictureBlock.length - 1) {
        picIndex = 0
    }
    else {
        picIndex++
    }
    showPic(picIndex)
}