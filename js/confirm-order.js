window.onload=function () {
    //弹出框
    let content=document.querySelector(".content");
    let pay=document.querySelector(".pay");
    pay.onclick=function () {
        content.style.top="1.8rem";
    }


    //对勾
    let right=document.querySelectorAll(".content .box .right");
    console.log(right);
    for (let i=0;i<right.length;i++){
        right[i].onclick=function(){
            for (let j=0;j<right.length;j++){
                right[j].style.background="#747474";
            }
            right[i].style.background="#fcaf3c";
        }

    }
}