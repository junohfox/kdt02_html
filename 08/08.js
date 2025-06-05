const selChange = (s1, s2, l1, l2, t1, t2) => {
    //select의 값을 변경
        if(s1.value == "℃") s2.value ="℉" ;
        else s2.value ="℃";

        //label의 값 변경
        l1.innerHTML=s1.value;
        l2.innerHTML=s2.value;

        //input 값 초기화 
        t1.value="";
        t2.value="";
        t1.focus();
}

//DOM 생성된 후 
document.addEventListener("DOMContentLoaded", () => {
    //DOM 요소 가져오기
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");
    // const sel2 = document.getElementById("sel2");
    //input => 아이디값이 있다면 getElementByID를 써도 무방
    const txt1 = document.querySelector("input");
    const txt2 = document.querySelector("[readonly]");
    //label
    const lab1 = document.querySelector("[for = txt1]");
    const lab2 = document.querySelector("[for = txt2]");

    //2.셀렉터 값이 변경될 때

    sel1.addEventListener('change', ()=> {
        selChange(sel1,sel2,lab1,lab2,txt1,txt2);
    });

    sel2.addEventListener('change' , () => {
        selChange(sel2,sel1,lab2,lab1,txt1,txt2);
    });

    //3.input 요소에 값이 입력 될때
    txt1.addEventListener('input', () => {
        //(0°C × 9/5) + 32 = 32°F
        if (sel1.value=="℃") {
            txt2.value = parseFloat((txt1.value * 9 / 5 )+32).toFixed(4);

        }
        //(0°F − 32) × 5/9 = -17.78°C
        else{
            txt2.value = parseFloat((txt1.value-32)*5/9).toFixed(4);
        }
    });

})


