document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector(".mdiv > img");
    const txt1 = document.querySelector("#txt1");
    const bt = document.querySelector(".mdiv > button");
    const bt2 = document.querySelector("#btArea > button");
    const btInput = document.querySelector("#btInput");
    const btArea = document.querySelector("#btArea");
    const countDisplay = document.getElementById("count");

    //flag변수

    
    let n ;
    let count =0;
    let flag = false;
    //다시하기 영역 보이지 않도록 초기화
    btArea.style.display = 'none'
    bt.addEventListener('click' , () => {
        //확인 버튼이 눌러지면
    //1.flag가 false이면 랜덤수 생성 flag true로 변경
         if(!flag) {
            n = Math.floor(Math.random() * 100) + 1;
            flag = true;
            console.log(n , flag);
        }

        if(!txt1.value){
            alert("숫자를 입력하세요");
            txt1.focus();
            return;
        }
         //input에 입력한 값과 랜덤수 n을 비교
         //2-1 n보다 입력수가 크면 다운이미지 보이기
        if(parseInt(txt1.value) > n){
            img.setAttribute('src' , '../img/down.png');
        }
        //2-2 n보다 입력수가 작으면 업 이미지 보이기
        else if(txt1.value < n) {
            img.setAttribute('src', "../img/up.png");
        }
        //2-3 n과 입력수가 같으면 good 이미지 보이기 ,다시하기 버튼 보이기
        else {
            img.setAttribute('src', "../img/good.png");
            alert(count+1 + "번 만에 성공!");
            btInput.style.display ="none";
            btArea.style.display='block';
        }

        count++;
        countDisplay.innerHTML ="클릭횟수:" + count;
    });

     //다시하기 버튼 눌러지면
    bt2.addEventListener('click', () => {
           //1.flag false 만들기
    //2.input과 확인 버튼이 보여지기
        flag = false;
        console.log(flag);
        btInput.style.display ='block';
        btArea.style.display='none';
        
        img.setAttribute('src', "../img/what.png");
        //초기화
        txt1.value = "";
        txt1.focus();
        n = undefined;
        count = 0;
 
    })

});


