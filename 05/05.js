const lotto = () => {
    document.getElementById("nlist").innerHTML = "";

    let arr = [];
    //중복되지 않게 6개 숫자 생성
    while(arr.length < 6) {
        let n = Math.floor(Math.random()*45) + 1; //1~45까지 생성 랜덤수
        
        //랜덤수가 중복이 될 경우 다시 위로 올라가게 함
        if(arr.includes(n) ) continue;

        //랜덤수 배열에 추가
        arr.push(n);

    }
    //배열을 정렬
    arr.sort((a,b)=> a-b);
    console.log(arr);

    //보너스 번호 만들기
    let bonus = [];
    while(bonus.length <1) {
         let n = Math.floor(Math.random()*45) + 1; //1~45까지 생성 랜덤수

         //랜덤수가 중복이 될 경우 다시 위로 올라가게 함
        if(arr.includes(n) ) continue;
        bonus.push(n);
    }

    console.log(arr, bonus);

    //전체 배열 만들기
    // arr.push('+');
    arr=[...arr, ...bonus];

    

    //span 태그 배열 만들기
    let tags = arr.map( item => `<span class="sp${Math.floor(item/10)}">
                        ${item}</span>`);
    
    tags.splice(6,0,"<span id='spPlus'>+</span>");
    
    tags = tags.join('');
    
    console.log(tags);
    
    document.getElementById("nlist").innerHTML = tags;

}