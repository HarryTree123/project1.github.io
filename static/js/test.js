//function test(){
//    var n = Math.floor(Math.random() * 100);
//    console.log(n)
//
//    for (var i = 1; i < n; i++){
//            var count = 0;
//            for(var j = 10; j >= -infinity; j--){
//                console.log(j);
//                count += j
//            }
//    }
//
//
//}

//test()


function randomNum (){
    var n = Math.floor(Math.random() * 100000);
    return n;
}

function getSalary (){
    var count = 0;
    var total_sum = 0;
    var sum = 0;
    for(var ss = 1; ss <= 13; ss++){
        sum = 0;
        for(var s = 1; s <= 4; s++){
            count++;
            var block_id = document.getElementById(`block_${s}`);
            if (ss == 13) {
                if (s == 1) {
                    block_id.insertAdjacentHTML('afterend', `<p class="num${count} text2 box2"> ${888888}</p>` );
                }
                else if (s == 2) {
                    block_id.insertAdjacentHTML('afterend', `<p class="num${count} text2 box2"> ${999999}</p>` );
                }
                else if (s == 3) {
                    block_id.insertAdjacentHTML('afterend', `<p class="num${count} text2 box2"> ${777777}</p>` );
                }
                else if (s == 4) {
                    block_id.insertAdjacentHTML('afterend', `<p class="num${count} text2 box2"> ${total_sum}</p>` );
                }

                continue
            }
            if (s === 4) {
                block_id.insertAdjacentHTML('afterend', `<p class="num${count} text2 box2"> ${sum}</p>` );
                continue
            }

            rand = randomNum()

            block_id.insertAdjacentHTML('afterend', `<p class="num${count} text2 box2"> ${rand}</p>` );

            total_sum += rand;
            sum += rand;
        }



        for ( var ts = 1; ts <= 1; ts++){
            if (ts === 1){

            }



        }
    }

}

getSalary();