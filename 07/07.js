document.addEventListener('DOMContentLoaded',() => {
    //querySelectorAll .mdiv 에서 img를 배열로 불러옴
    const imgs = document.querySelectorAll(".mdiv img");
    const bts = document.querySelectorAll(".mdiv button");
    const msg = document.querySelector("#msg");

    for(let [idx, bt] of bts.entries()) {

        bt.addEventListener('click', (e) => {
            //0.버튼 이벤트 방지 form 양식으로 쓰면 다시 돌아가는것을 방지
                e.preventDefault();
        })
        
        bt.addEventListener('click',()=> {
            //1.컴퓨터 랜덤수 생성, 이미지 변경
            let n = Math.floor(Math.random() * 6) + 1;
            imgs[0].setAttribute('src', `../img/${n}.png`);

            //2. 사용자 선택수, 이미지 변경
            // let usern = parseInt(bt.innerHTML[0]);
            let usern = idx + 1;
            imgs[1].setAttribute('src', `../img/${usern}.png`);

            //3. 컴퓨터수 사용자수 비교

            if(n == usern) {
                msg.innerHTML = "맞음";

            } else {
                msg.innerHTML ="틀림";
            }
        })

    }

})

