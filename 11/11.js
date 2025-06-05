const yesterday = () => {
    let yday = new Date();
    yday.setDate(yday.getDate()-1);
    return yday.toISOString().slice(0,10); //어제 날짜
    // let y = yday.getFullYear(); //년도 4자리
    // let m = yday.getMonth()+1; //월
    
    // m = m < 10 ? '0'+ m : m;

    // let d = yday.getDate(); //일
    // d = d< 10? '0'+ d : d;
    
    // return y+m+d;
    

}

const getOverview = (mvNm) => {
    console.log("getOverview", mvNm);
    const tmdbApi = "b18e798ff377ef49f1c335283e7c43d6";
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApi}&query=${mvNm}`

    const overview = document.querySelector(".overview");

    fetch(url)
    .then(resp => resp.json())
    .then(data => overview.innerHTML = `"${data.results[0].overview}"`)
}


const getPoster =(mvNm) => {
    console.log("getPoster", mvNm);
    const tmdbApi = "b18e798ff377ef49f1c335283e7c43d6";
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApi}&query=${mvNm}`

    const poster = document.querySelector(".poster");

    fetch(url)
    .then(resp => resp.json())
    .then(data => poster.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${data.results[0].poster_path}"/> `
                
                
            
            )
    .catch(err => console.log(err));

}
const getMvList = (dt, ul, gubun) => {
    console.log(dt);
    const apikey = "43d241aede25d4a86d706c39432ce206";
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}`;
    
    if (gubun == "r2") {
        url = `${url}&multiMovieYn=N`
    } else if (gubun == "r3") {
        url = `${url}&multiMovieYn=Y`
    }

    fetch(url)
    .then(resp=> resp.json())
    .then(data =>{
        const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
        console.log(dailyBoxOfficeList)
        const mvList = dailyBoxOfficeList.map((item) => {
            const mv = encodeURIComponent(item.movieNm);
        return `<li onClick=getPoster("${mv}")>
            
        <span class="spRank">${item.rank}</span>
        <span class="spMv">${item.movieNm}</span>

        ${parseInt(item.rankInten) > 0
         ? '<span class="spR"><i class="fa-solid fa-arrow-up"></i>' + Math.abs(item.rankInten) + '</span>'
         : parseInt(item.rankInten) < 0
         ? '<span class="spB"><i class="fa-solid fa-arrow-down"></i>' + Math.abs(item.rankInten) +'</span>'
         : '<span class="spA"><i class="fa-solid fa-minus sp"></i></span>'
        
        }
        </li><li onClick=getOverview("${mv}")></li>`});
        

        let tags = mvList.join('');
        console.log(tags);

        ul.innerHTML = tags;
        
        
    })
    .catch(err => console.log(err))
    ;
}


document.addEventListener("DOMContentLoaded", ()=> {
    
    const ul = document.querySelector("main ul");
    const dtIn = document.querySelector("#dt");
    const bt = document.querySelector('button');
     dtIn.value = yesterday();
     dtIn.setAttribute("max", yesterday());
     getMvList(dtIn.value.replaceAll('-',''), ul, "");
     console.log(yesterday());

    dtIn.addEventListener("change", () => {
        
        getMvList(dtIn.value.replaceAll('-',''), ul, "");

    })


    bt.addEventListener("click", (e)=>{
        e.preventDefault();
        const gubun = document.querySelector("[type=radio]:checked").value;
        document.querySelector(".poster").innerHTML = " ";
        
        getMvList(dtIn.value.replaceAll('-',''), ul, gubun);
    })

    
   
    
    


});
