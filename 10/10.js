const init = (cols) =>{
      msg.innerHTML = "" ;
      msg.innerHTML = "" ;
      for (let col of cols) {
        col.innerHTML = "" ;
      }
}



document.addEventListener('DOMContentLoaded', () => {
    const cols = document.querySelectorAll('.col');
    const msg = document.querySelector('#msg');
    const bt = document.querySelector('.row > button');
    const gbox = document.querySelector(".gbox");
    const hbox = document.querySelector(".hbox");
    let flag = false;
    let arr = [0,0,0,0,0,0,0,0,1];
    let a = 0;
    hbox.style.display = "none";


    

    for(let [idx,col] of cols.entries()) {
        // col.innerHTML = idx +1;
        col.addEventListener("click" , () => {
            if(!flag) {
                msg.innerHTML = "폭탄을 섞어 주세요.";
                return;
            }

            if(msg.innerHTML=="실패") return;
            
            
            if(arr[idx] == 0) {
                col.innerHTML ='<img src="../img/hart.png">';

                if(col.innerHTML=='<img src="../img/hart.png">') {
                    
                    msg.innerHTML="중복 불가";
                } 
            
                a++;
                console.log(a);
                if (a == 8) {
                    hbox.style.display = "flex";
                    gbox.style.display = "none";
                    hbox.innerHTML = '<img src="../img/hart.png">';
                    
                    console.log(a);

                    msg.innerHTML ="성공";

                    bt.innerHTML ="폭탄 다시 섞기";

                    flag=false;
                    
                    a=0;

                    cols[arr.indexOf(1)].innerHTML ='<img src="../img/hart.png">';
                    }
                    


                
            }
            else if ( arr[idx]==1) {
                col.innerHTML = '<img src="../img/boom.png">';
                msg.innerHTML = "실패";
                a=0;
                flag=false;
                bt.innerHTML ="폭탄 다시 섞기";
                msg.innerHTML="";
                
            }
            
            
        });
    }

    bt.addEventListener("click" , () => {
        if(!flag) {
            arr.sort(() => Math.random() - 0.5); 
            console.log(arr);
            flag=true;
            bt.innerHTML = "게임중....";
            hbox.style.display="none";
            gbox.style.display ="block";
            msg.innerHTML="";
            init(cols) ;
            a = 0;
        }

    })
});