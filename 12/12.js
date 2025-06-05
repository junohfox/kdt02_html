//데이터가져오기
const getData = (txtKw, content) => {
    const apiKey = "5nXWBIVTavcZuiX5bQbiWseewm7d1IS0QUwGTzHvoJyrJemSgOnNQ%2Fs5ysMSrxYdipfQqSuMUl3y%2BQMvkyHAEA%3D%3D";
    const  Baseurl ="https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?" ;
    let url = `${Baseurl}serviceKey=${apiKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
    url = `${url}&_type=json&keyword=${txtKw.value}`;

    console.log(url);

    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        const items = data.response.body.items.item;
        console.log(items);
        let tags = items.map(item=>`
            <div class="card">
            <div class="cardImg">
                <img src=${item.galWebImageUrl} />
            </div>
            <div class="cardDiv">
                <span>${item.galTitle}</span>
                <span>${item.galPhotographyLocation}</span>
            </div>
        </div>
            `);

            console.log(tags);
            tags=tags.join('');
            content.innerHTML = tags;
    })
    .catch(err => console.log(err));
    


}


// const getPoster =(mvNm, div) => {
//     console.log("getPoster", mvNm);
    
//     //const tmdbApi = "b18e798ff377ef49f1c335283e7c43d6";
//     const serviceKey = "5nXWBIVTavcZuiX5bQbiWseewm7d1IS0QUwGTzHvoJyrJemSgOnNQ%2Fs5ysMSrxYdipfQqSuMUl3y%2BQMvkyHAEA%3D%3D";
//     //let url = `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApi}&query=${mvNm}`
//     let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${mvNm}&_type=json`
//     console.log(url);
//     const poster = document.querySelector(".poster");


//     fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//         const items = data.response.body.items.item;
//         console.log(items);
//         const imgList = items.map((aImg) => {
//             return `<img src="${aImg.galWebImageUrl}"/> `
//         })

//         let tags = imgList.join('');
//         console.log(tags);
 
//         div.innerHTML = tags;
            
// })
//     .catch(err => console.log(err));

// }
//DOM 생성
document.addEventListener("DOMContentLoaded", ()=> {
    const txtKw = document.querySelector("#txt1");
    const bt1 = document.querySelector(".formDiv > button");
    const bt2 = document.querySelector(".formDiv > [type=reset]");
    const content = document.querySelector(".content");

    //취소
    bt2.addEventListener("click", ()=> {
        content.innerHTML="";
    });
    // let mvNm = "부산역";
    // getPoster(mvNm);
    //확인버튼
    bt1.addEventListener("click", (e)=> {
        e.preventDefault();
        if(txtKw.value == "") {
            alert("키워드를 입력하세요");
            txtKw.focus();
            return;
        }
        getData(txtKw, content); 

        // console.log(mvNm);
        // getPoster(mvNm);
    })
});