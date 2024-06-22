(function()
{
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-clear');
    let equals=document.querySelector('.btn-equal');


buttons.forEach(function(akshay){

    akshay.addEventListener('click', function(e){
        
        let value=e.target.dataset.num;

        screen.value+=value;


    });
});

equals.addEventListener('click',function(e)
{
    if(screen.value === '')
        {
            screen.value="please enter";
        }
        else
        {
            let answer= eval(screen.value);
            screen.value=answer;
        }
});

clear.addEventListener('click',(event)=>{

    screen.value='';


})

})();