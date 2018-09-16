window.onload=function(){
	//点击加号加入购物车
	let add=document.querySelectorAll(".add")[0];
	let reduce=document.querySelectorAll(".num .reduce")[0];
	let count=document.querySelectorAll(".count")[0];
	let text=document.querySelectorAll(".bottom p")[0];
	let black=document.querySelector(".black");
	let red=document.querySelector(".red");
	let total=document.querySelector(".red span");
	let car=document.querySelector(".car");
	let send=document.querySelector(".send");
	let pay=document.querySelector(".pay");
	let shade=document.querySelector(".shade");
	let shadeC=document.querySelector(".shade .count");
	let shadeP=document.querySelector(".shade .price span");
	let shadeA=document.querySelector(".shade .add");
	let shadeR=document.querySelector(".shade .reduce");
	console.log(add,reduce,count,text,red,total);

        let num=0;
        add.onclick=function () {
        	num++;
            reduce.style.display="block";
            count.style.display="inline";
            count.innerHTML=num;
			black.style.display="none";
			red.style.display="block";
			total.innerHTML=3.5*num;
			car.style.background="#fcaf39";
			send.style.color="#dc3f50";
			pay.style.background="#fcaf39";
			//遮罩显示
            pay.onclick=function () {
                shade.style.display="block";
				shadeC.innerHTML=num;
				shadeP.innerHTML=total.innerHTML;
            }

        }
        reduce.onclick=function () {
			num--;
			if(num==0){
                reduce.style.display="none";
                count.style.display="none";
                black.style.display="block";
                red.style.display="none";
                car.style.background="#9f9d9e";
                send.style.color="#333";
                pay.style.background="#333333";
            }
            count.innerHTML=num;
            total.innerHTML=3.5*num;
        }

        //遮罩效果
    shadeA.onclick=function () {
        //遮罩上数量的变化
        shadeC.innerHTML=++num;
        //遮罩上价钱的变化
        shadeP.innerHTML=3.5*num;
    }
    shadeR.onclick=function () {
        if(num==1){
            shade.style.display="none";
        }
        shadeC.innerHTML=--num;
        shadeP.innerHTML=3.5*num;
    }



}