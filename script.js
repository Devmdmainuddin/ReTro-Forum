
const looadphone=async(serchtext='coding',isShowall)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?search=${serchtext}`);
    const data =await res.json();
    const cards = data.posts;
    displayphone(cards,isShowall)
    productcategory()
    console.log(cards)
    // showDatils(cards)
}

const displayphone = (card)=>{
    const postcontiner = document.getElementById('card-container');
   
    postcontiner.textContent=''
    card.forEach(cards => {

    const cardDiv = document.createElement('div')
    cardDiv.classList= `cart bg-[#797dfc18] rounded-[50px] flex p-10 `

    cardDiv.innerHTML =`

    <div class="image w-[72px] h-[72px] rounded-[16px] bg-white mr-6 text-center">
    <img src="${cards?.image}" alt="images/pen-1.png">
    </div>
    <div class="content" id="content">
   
    <div class="flex text-[#12132dcc]"><p>${cards?.category}</p><p class="ml-5">auther:${cards?.author?.name}</p></div>
    <h2  id="card-title" class="mt-3 text-black font-bold text-2xl">${cards?.title}</h2>
    <p class="mt-4 mb-5 ">${cards?.description}</p>
    <hr>
    <div class="flex items-center justify-between mt-6">
        <div class="flex items-center mt-6"> 
            <div class="flex items-center mr-6"><img src="images/massege.png" alt="images/massege.png"> <p class="ml-3">${cards?.comment_count}</p></div>
            <div class="flex items-center mr-6"><img src="images/eya.png" alt="images/eya.png"><p class="ml-3">${cards?.view_count}</p></div>
            <div class="flex items-center mr-6"><img src="images/clock.png" alt="images/clock.png"><p class="ml-3">${cards?.posted_time}minute ago</p></div>
        </div>
       
       <div ><a onclick="showDatils1()" href="#"><img src="images/massege-1.png" alt=""></a></div>
    </div>
    </div>        
    `
  
    
   
 
    postcontiner.appendChild(cardDiv)
 });

 latestproduct()
}
const showDatils1=()=>{
    const content =document.getElementById('content').innerHTML; 
    console.log(54,content)
    const cardtitle = document.getElementById('card-title').innerText;
    for(const title of cardtitle)
    console.log(55,title)
    console.log(cardtitle)
    const showDatilscontiner = document.getElementById('card-show-container');
        
             const showDiv = document.createElement('div')
             showDiv.classList= `flex items-center justify-between  `
             showDiv.innerHTML=`
             <h2 class="mt-3 text-black font-bold text-2xl">${cardtitle}</h2>
             <div class="flex items-center mr-6">
             
             </div>
             `
showDatilscontiner.appendChild(showDiv)
}
// const handelsowalldetails = ()=>{
//     const cardtitle = document.getElementById('card-title').innerText;
//     for(const title of cardtitle){
//         console.log(title)
//     }

    
// }
// handelsowalldetails()


// const showDatils =(phone)=>{
    
//     phone.forEach(cards => {
//          const showDatilscontiner = document.getElementById('card-show-container');
        
//              const showDiv = document.createElement('div')
//              showDiv.classList= `flex items-center justify-between  `
//              showDiv.innerHTML=`
//              <h2 class="mt-3 text-black font-bold text-2xl">${cards?.title}</h2>
//              <div class="flex items-center mr-6">
             
//              </div>
//              `
//              showDatilscontiner.appendChild(showDiv)
//     })
//      }




const latestproduct=async()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data =await res.json();
    const post = data;
    latestproductdisplay(post)
}

const latestproductdisplay = (card)=>{
    const latestCardContainer = document.getElementById('latest-card-container');

    latestCardContainer.textContent=''
    card.forEach(cards => {

    const cardDiv = document.createElement('div')
    cardDiv.classList= `cart bg-[#797dfc18] rounded-[50px]  p-10 `

    cardDiv.innerHTML =`

    <div class="image w-[200px] h-[150px] rounded-[16px] bg-white mr-6 text-center">
    <img src="${cards?.cover_image}" alt="images/pen-1.png">
    </div>
    <div class="content">
   
    <div class="flex text-[#12132dcc]"><img src="images/Calander.png" alt="images/clock.png"><p class="ml-3">${cards?.author?.posted_date || ""}</p></div>
    <h2  id="card-title" class="mt-3 text-black font-bold text-2xl">${cards?.title}</h2>
    <p class="mt-4 mb-5 ">${cards?.description }</p>
    <hr>
    <div class="flex items-center justify-between mt-6">
        <div class="flex items-center mt-6 justify-between"> 
        <img class="w-[40px] h-[40px] rounded-full" src="${cards?.profile_image}" alt="images/pen-1.png">
      
        <div><h2  id="card-title" class="mt-3 text-black font-bold text-2xl">${cards?.author?.name}</h2>
        <h2  id="card-title" class="mt-3 text-black font-bold text-2xl">${cards?.author?.designation || "Unknown"}</h2></div>
        
        </div>
       
       <div ><a onclick="showDatils()" href="#"><img src="images/massege-1.png" alt=""></a></div>
    </div>
    </div>        
    `
  
    latestCardContainer.appendChild(cardDiv)
   

}
    )}

// search 

    const handlesearch = (isShowall)=>{

        const searchfield = document.getElementById('search-field').value;
    
     console.log(searchfield)
     looadphone(searchfield,isShowall)
    }
    handlesearch()

    // productcategory
   
    const productcategory=async()=>{
        const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=coding`);
        const data =await res.json();
        const post = data.posts;

        console.log(post)
        const categorys = document.getElementById('category');
        post.forEach(category => {
            const div = document.createElement('div');
            div.classList = `btn`;
            div.innerHTML = `
            <a onClick = "handleLoadCategory('${category.category}') class="tab text-base font-medium">${category.title}</a> 
            `;
            categorys.appendChild(div);
        });
        
    }
    const handleLoadCategory = async (categoryId) =>{
        const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryId}`);
        const data = await res.json();
    console.log(data)
    displayphone(data)
    }
        // const noContentContainer = document.getElementById('no-content-container');
    
        // if (data.data.length === 0){
        //     noContentContainer.classList.remove('hidden');
        // }
        // else{
        //     noContentContainer.classList.add('hidden');
        // }
    
        // const cardContainer = document.getElementById('card-container');
        // cardContainer.innerHTML = '';
    
        // data.data.forEach(videos => {    
    
        // const div = document.createElement('div');
        // div.innerHTML = `
        // <div class="card">
        //     <div class="relative">
        //         <figure><img class="rounded-lg w-full h-52 mb-5 " src="${videos.thumbnail}" alt="" /></figure>
        //     </div>
    
        //     <div id="time-overlay" class="absolute bg-black bottom-1/3 right-3 rounded text-white p-2">
        //         <p>${ videos.others.posted_date !== '' ? `${secondsToHoursMin(videos.others.posted_date)}` : '' }</p>
        //     </div>
      
        //     <div class="flex items-start gap-3">
        //         <div class="avatar">
        //             <div class="w-10 rounded-full">
        //                 <img src="${videos.authors[0].profile_picture}" />
        //             </div>
        //         </div>
                
        //         <div>
        //             <h2 class="card-title text-base font-bold">${videos.title}</h2>
        //             <div class="text-sm font-normal flex items-center gap-2">
        //                 <p>${videos.authors[0].profile_name}</p>
        //                 <span>${videos.authors[0].verified ? `<img src='./images/badge.png' />` : "" }</span> 
        //             </div>
        //             <p>${videos.others.views}</p>
                    
        //         </div>
        //     </div>
        // </div>
        
        // `;
        // cardContainer.appendChild(div);
    
        // });
     
    // };  


    // const handleCategory = async () =>{
    //     const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts?category=coding');
    //     const data = await res.json();
    //     console.log(data.data)
    //     // const tabContainer = document.getElementById('tab-container');
    
    //     data.data.forEach(category => {
    //         const div = document.createElement('div');
    //         div.classList = `btn`;
    //         div.innerHTML = `
    //         <a onClick = "handleLoadCategory('${category.category_id}')" class="tab text-base font-medium">${category.category}</a> 
    //         `;
    //         tabContainer.appendChild(div);
    //     });
    // };