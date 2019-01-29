let inputForm=document.querySelector('.form-control');
let guessBtn=document.querySelector('.btn');
let alertBlock=document.querySelector('.alert');

let winningNo;
let guessLeft;

function initParam() {
    guessBtn.innerText='Guess';
    inputForm.value=""
    inputForm.disabled=false;
    winningNo= Math.floor(Math.random()*20 +1);
    alertBlock.classList.add('d-none')
    console.log(winningNo);
    guessLeft=4;
}

function checkNo() {
    if(inputForm.value==="")
    alertMessage('Please Enter A Number')
    else{
            if(parseInt(inputForm.value)===winningNo)
            {
                alertMessage('You Guessed It Right');
                guessBtn.innerText='Play Again'
                inputForm.disabled=true;
            }
            
            else if (inputForm.value>winningNo)
            alertMessage('No Is greater then Winning No');
            else alertMessage('No Is Less Then Winning No')
    }
    
}

function guessNoChecker() {
    checkNo();
    if (guessBtn.innerText==='Play Again') {
        return;
    }    
    if(guessLeft>0)
    {   
        if (Number(inputForm.value)>20)
         {
            alertMessage('Number Should Be Less then 20 ');
        } else {
            guessLeft-=1;
        }
        
    }
    else{ 
        alertMessage(`You Lost. Winning Number Was ${winningNo}`);
        guessBtn.innerText='Play Again'
        inputForm.disabled=true;
    }
    inputForm.value="";
}

function play() {
    if(guessBtn.innerText==='Play Again')
        initParam();
    else guessNoChecker();
}

function alertMessage(Message) {
    alertBlock.innerText=`${Message}`
    alertBlock.classList.remove('d-none')
}

initParam();


guessBtn.addEventListener('click',play);
inputForm.addEventListener('keypress',function (e) {   
    if(e.keyCode===13)
   { e.preventDefault();
    play();}
})