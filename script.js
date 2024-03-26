
(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let btnequal = document.querySelector('.btnequal');
    
let color;
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value  += value;
        })

    });

    btnequal.addEventListener('click',function(e) {

        if(screen.value === '') {
            screen.value = "Please enter";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
        clear.addEventListener('click',function(e){
            screen.value = "";
        })
})();


function bgcolor (){
    let color = prompt("Enter the your favorite color : ");
    document.body.style.backgroundColor = color;
}


