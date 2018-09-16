window.onload=function () {
    let erroy1=document.querySelector(".erroy1");
    let erroy2=document.querySelector(".erroy2");
    let user=document.querySelector(".user");
    let pass=document.querySelector(".pass");
    let btn=document.querySelector("button.register");
    let num=document.querySelector(".yanzhengma");
    let btn1=document.querySelector(".yanz");
    let dui1=document.querySelectorAll("#right")[0];
    let dui2=document.querySelectorAll("#right")[1];
    let dui3=document.querySelectorAll("#right")[2];
    console.log(dui1,dui2);
    console.log(btn);

    btn.onclick=function () {
        if(user.value.length!=11 && pass.value.length!=6){
            erroy1.style.display="block";
            erroy2.style.display="block";
            dui1.style.display="none";
            dui3.style.display="none";
            btn.classList.remove("active");
        }else if (user.value.length!=11 && pass.value.length==6){
            erroy1.style.display="block";
            erroy2.style.display="none";
            dui3.style.display="block";
            dui1.style.display="none";
            btn.classList.remove("active");
        }else if (user.value.length==11 && pass.value.length!=6){
            erroy2.style.display="block";
            erroy1.style.display="none";
            dui1.style.display="block";
            dui3.style.display="none";
            btn.classList.remove("active");
        }
        if(user.value.length==11 && pass.value.length==6 && num.value.length!=4){
            erroy2.style.display="none";
            erroy1.style.display="none";
        }if ((user.value.length==11 && pass.value.length==6 && num.value.length==4)) {
            window.open("login.html");
        }
    }

    user.onblur=function(){
        if (user.value.length==11) {
            dui1.style.display="block";
        }
        if (user.value.length==11 && pass.value.length==6 && num.value.length==4) {
            btn.classList.add("active");
        }
    }
    pass.onblur=function(){
        if (pass.value.length==6) {
            dui3.style.display="block";
        }
        if (user.value.length==11 && pass.value.length==6 && num.value.length==4) {
            btn.classList.add("active");
        }
    }
    num.onblur=function(){
        if (num.value.length==4) {
            dui2.style.display="block";
        }
        if (user.value.length==11 && pass.value.length==6 && num.value.length==4) {
            btn.classList.add("active");
        }
    }
}