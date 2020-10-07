function trigger(){
var showBtn = document.getElementById('Password');
var show = document.getElementById('unhide');
var hide = document.getElementById('hide');

if(showBtn.type === 'password')
  {
    showBtn.type = 'text';
    show.style.display = 'block';
    hide.style.display = 'none';
  }else{
    showBtn.type = 'password';
    show.style.display = 'none';
    hide.style.display = 'block';
  }
}
var message = document.getElementById('message');
function giveInstruction1(){
    message.innerHTML = "Enter Your <br> Good Name:-)"
    }
function giveInstruction2(){
        message.innerHTML = "That was nice name <br> share your surname too,<br> we'll keep it a secret...:-|"
        }
function giveInstruction3(){
            message.innerHTML = "Enter Your<br> email address,<br>let us reach you:-D"
            }
function giveInstruction4(){
                message.innerHTML = "Excited to <br> call you :P"
                }
function giveInstruction5(){
                    message.innerHTML = "When's your birthday ?,<br> We need a treat XD"}

function giveInstruction6(){
                        message.innerHTML = "Let's keep this<br> one a secret:-]"
                        }        