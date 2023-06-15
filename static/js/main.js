var time = new Date();

///
//var hours = time.getHours();
//console.log(hours, typeof(hours))
//if (7 <= hours && 12 > hours) {
//    alert ("Доброе утро!");
//}
//else if (12 < 19 && 16 > 19) {
//    alert ("Добрый день!");
//}
//else if (16 < hours && 22 > hours) {
//    alert ("Добрый вечер!");
//}
//else if (hours < 22) {
//    alert ("Доброй ночи!");
//}


//var count = 0
//while(true){
//    var password = prompt("Введите пароль:", count);
//    if (password == "0000") {
//        var hours = time.getHours();
//        console.log(hours, typeof(hours))
//        if (7 <= hours && 12 > hours) {
//            alert ("Доброе утро!");
//        }
//        else if (12 < 19 && 16 > 19) {
//            alert ("Добрый день!");
//        }
//        else if (16 < hours && 22 > hours) {
//            alert ("Добрый вечер!");
//        }
//        else if (hours < 22) {
//            alert ("Доброй ночи!");
//        }
//        continue
//    }
//
//    else {
//        alert ("неправильный пароль!")
//
//    }
//    count++;
//}








var time = new Date();

var mySrc = document.querySelector('.window_body'); // <body class="window_body">
var hours = time.getHours();
console.log(hours, typeof(hours))
if (7 <= hours && 12 > hours) {
    mySrc.setAttribute ('class', 'window_body body-background-1');
    console.log(mySrc.getAttribute ('class'));
}
else if (12 <= hours && 16 > hours) {
    mySrc.setAttribute ('class','window_body body-background-2');
    console.log(mySrc.getAttribute ('class'));
}
else if (16 <= hours && 22 > hours) {
    mySrc.setAttribute ('class', 'window_body body-background-3');
    console.log(mySrc.getAttribute ('class'));
}
else if (hours => 22) {
    mySrc.setAttribute ('class', 'window_body body-background-4') ;
    console.log(mySrc.getAttribute ('class'));
}

var count = 0;
var num = 0
while (count < 5){

   if (num%2 == 0){
        console.log(num)
        count++;

    }
    num++
}
console.log('------------')
console.log(count, num)

console.log('============')

var count = 0;
for(var num = 0; num < 5; num++){
    if (num%2 == 0){
        console.log(num)
        count++;
    }
}
console.log('------------')
console.log(count)


//var myImage = document.querySelector('.image_1');
//
//myImage.onclick = function() {
//    var mySrc = myImage.getAttribute('src');
//    if(mySrc === 'https://s5.stc.all.kpcdn.net/russia/wp-content/uploads/2019/01/Altai-.jpg') {
//      myImage.setAttribute ('src','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg');
//    } else {
//      myImage.setAttribute ('src','https://s5.stc.all.kpcdn.net/russia/wp-content/uploads/2019/01/Altai-.jpg');
//    }
//}


//    if(mySrc === 'morning') {
//      myImage.setAttribute ('src','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg');
//      else if (mySrc === "day")
//      else if (mySrc === "evening")
//      else if (mySrc === "")
//      else if (mySrc === "")
//    } else {
//      myImage.setAttribute ('Error');
//    }
//}
//
//var element = document.querySelector(".Data_1");
//var dateNow = new Date().toLocaleDateString();
//element.textContent = dateNow;
//
//
//var pop = document.querySelector(".Data_2");
//var pol = new Date();
//pop.textContent = pol.getHours();
//
//
//
//var time = document.querySelector(".Time_1");
//var emit = new Date(2345671245678).toLocaleDateString();
//time.textContent = emit
//
//var school = document.querySelector("school_1");
//school.ready function(){
//    myImage.setAttribute ('src','');
//    if (school === "holidays") {
//    else if (school === "cours")
//    }
//
//    else myImage.setAttribute ('Error');
//    }
//}

/*
const inputNumaNode = document.querySelector(".js-input-a")
const inputNumbNode =
const selectOperationNode =
const btnResultNode =
const outputNode =
*/



