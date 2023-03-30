let num = document.getElementById("num");
let shape = document.querySelector(".shape")
let dotcolor = document.querySelector(".dotcolor")
console.log(shape);

if(num.dataset.num == "100%"){
    shape.style.backgroundColor = "green"
    dotcolor.style.backgroundColor = "green"
    shape.style.height = num.dataset.num
}else if(num.dataset.num >= "50%"){
    shape.style.backgroundColor = "yellow"
    dotcolor.style.backgroundColor = "yellow"
    shape.style.height = num.dataset.num

}else{
    shape.style.backgroundColor = "red"
    dotcolor.style.backgroundColor = "red"
    shape.style.height = num.dataset.num
}