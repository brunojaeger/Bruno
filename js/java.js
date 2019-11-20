 /* credits codegar */
var coolbutton = document.getElementById('coolbutton');
    var inprogress = false;
    coolbutton.onclick = function(){
        if (inprogress) {
            return false;
        }
        inprogress = true
        coolbutton.classList.add('button_first');
        setTimeout(function(){
        coolbutton.classList.add('button_bridge1');
        },500);
        setTimeout(function(){
        coolbutton.classList.add('button_second');
        },600);
        setTimeout(function(){
        coolbutton.classList.add('button_third');
        },700);
        setTimeout(function(){
        coolbutton.classList.add('button_final');
        },1800);
        setTimeout(function(){
            coolbutton.classList.remove('button_final');
            coolbutton.classList.remove('button_third');
            coolbutton.classList.remove('button_second');
            coolbutton.classList.remove('button_bridge1');
            coolbutton.classList.remove('button_first');
            inprogress = false;
        },3200)
    };
