
document.querySelector('button').onclick = function() {
    var numa = Number(document.getElementById("js-input-numa").value);
    var numb = Number(document.getElementById("js-input-numb").value);
    var operation = String(document.getElementById("js-select-operation").value);

    var result = null;


    function showSum( numa, numb ){

       num = numa + numb;


       console.log(numa, numb, operation)
        return num;
        // 1 + 3 = 4.
    }

    function showMin( numa, numb ){
        return  numa - numb;
    }

    function showMul( numa, numb ){
        return  numa * numb;

    }

    function showDen( numa, numb ){
        return  numa / numb;
    }




    if (operation == '+') {
         result = showSum( numa, numb )
        }
    if (operation == '-') {
        result = showMin( numa, numb )
        }
    if (operation == '*') {
        result = showMul( numa, numb )
        }
    if (operation == '/') {
        result = showDen( numa, numb )
        }




    document.getElementById("js-output").innerHTML = result;





    function getRandomInt(num1, num2) {
        console.log(num1, num2)
        num = Math.floor(Math.random() * (num1 * num2));
        // document.getElementById("num").innerHTML = num
        return num; // 0 => numa * numb
    }

    function even(numa=9, numb=88) {
        var num = getRandomInt(numa)
        console.log(numa, numb)
        document.getElementById("num").innerHTML = num
        if (num % 2 == 0){
            document.getElementById("even").innerHTML = "Чётное"

        }
        else{
            document.getElementById("even").innerHTML = "Нечётное"

        }
    }
even(numa, numb)


}




    function dividers(){
        var text = ""
        var n = Number(document.getElementById("n").value);
        var s = 0;
        var count = 0;
        var dada = 0;
        var sd = 0;
        var ed = 0
        var eded = 0
        var c = 0
            for (var i=1; i<=n; i++) {
                if(n % i == 0){
                    text += i + '; ';
                    count++;
                    s += i;
                    document.getElementById("text").innerHTML = `Делители: ${text}`;
                    document.getElementById("text3").innerHTML = `Сумма делителей: ${s}`;
                    document.getElementById("text2").innerHTML = `Количество делителей: ${count}`;
                    if(i % 2 == 0){
                        dada++;
                        sd += i;
                        document.getElementById("text4").innerHTML = `Количество чётных делителей: ${dada}`;
                        document.getElementById("text5").innerHTML = `Сумма чётных делителей: ${sd}`;

                    }
                    else if(i % 2 == 1){
                        eded++;
                        ed += i;
                        document.getElementById("text6").innerHTML = `Количество нечётных делителей: ${eded}`;
                        document.getElementById("text7").innerHTML = `Сумма нечётных делителей: ${ed}`;

                    }
                }

        }
            for(var i=1; i<=n; i++){
                if(i % 2 == 0 && i > eded){
                    c++
                    document.getElementById("text8").innerHTML = `Количество делителей больших кол-во нечётных делителей: ${c}`;


                }

            }

    }
document.querySelector('.find').onclick = function(){
    dividers();
}
