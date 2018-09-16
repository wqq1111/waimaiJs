window.onload=function () {
    let erroy1 = document.querySelector(".erroy1");
    let erroy2 = document.querySelector(".erroy2");
    let user = document.querySelector(".user");
    let pass = document.querySelector(".pass");
    let btn = document.querySelectorAll("button");
    let dui1 = document.querySelectorAll("#right")[0];
    let dui2 = document.querySelectorAll("#right")[1];
    console.log(erroy1, erroy2, user, pass, btn, dui1, dui2);


    btn[1].onclick = function () {
        if (user.value.length == 11 && pass.value.length == 6) {
            window.open("index.html");
        } else if (user.value.length != 11 && pass.value.length == 6) {
            erroy1.style.display = "block";
            erroy2.style.display = "none";
            dui1.style.display = "none";
        } else if (user.value.length == 11 && pass.value.length != 6) {
            erroy2.style.display = "block";
            erroy1.style.display = "none";
            dui2.style.display = "none";
        }
        else {
            erroy1.style.display = "block";
            erroy2.style.display = "block";
            dui1.style.display = "none";
            dui2.style.display = "none";
        }
    }
    user.onblur = function () {
        if (user.value.length == 11) {
            dui1.style.display = "block";
        }
    }
    pass.onblur = function () {
        if (pass.value.length == 6) {
            dui2.style.display = "block";
        }
    }
}