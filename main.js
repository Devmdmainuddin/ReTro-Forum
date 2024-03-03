
const loadAllCategoryName = () => {
    fetch("https://openapi.programming-hero.com/api/retro-forum/posts?category")
      .then((res) => res.json())
      .then((data) => {
        const container = document.getElementById("category");
        data.posts.forEach((categorys) => {
          const div = document.createElement("div");
          
          div.innerHTML = `
          <button onclick="looadphone('${categorys.category}')" class="category-btn"> ${categorys.category}</button>
            
            `;
          container.appendChild(div);
        });
      });
  };

////////////////////////////////////////////////////////////////////////////

const looadphone=async(category)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);
    const data =await res.json();
    const cards = data.posts;
    displayphone(cards)
   
}

////////////////////////////////////////////////////////////////////////////
const displayphone = (card)=>{
    const postcontiner = document.getElementById('card-container');

    postcontiner.textContent=''
    
    card.forEach(cards => {
        
    const cardDiv = document.createElement('div')
    cardDiv.classList= `cart bg-[#797dfc18] rounded-[50px] flex p-10 relative mb-5`

    cardDiv.innerHTML =`

    <div class="image mr-6 text-center relative">
    <img class="w-[72px] h-[72px] rounded-[16px] relative" src="${cards?.image}" alt="${cards?.image}">
    <div class="w-[20px] h-[20px] rounded-full bg-green-500 absolute -top-1 -right-1 z-10"></div>
    </div>
    <div class="content" id="content">
   
    <div class="flex text-[#12132dcc]"><p>#${cards?.category}</p><p class="ml-5">auther:${cards?.author?.name}</p></div>
    <h2  id="card-title" class="mt-3 text-black font-bold text-2xl">${cards?.title}</h2>
    <p class="mt-4 mb-5 ">${cards?.description}</p>
    <hr>
    <div class="flex items-center justify-between mt-6">
        <div class="flex items-center"> 
            <div class="flex items-center mr-6"><img src="images/massege.png" alt="images/massege.png"> <p class="ml-3">${cards?.comment_count}</p></div>
            <div class="flex items-center mr-6"><img src="images/eya.png" alt="images/eya.png"><p class="ml-3">${cards?.view_count}</p></div>
            <div class="flex items-center mr-6"><img src="images/clock.png" alt="images/clock.png"><p class="ml-3">${cards?.posted_time || "No publish date"}minute ago</p></div>
        </div>
       
       <div ><a id="datilesbtn" href="#"><img src="images/massege-1.png" alt=""></a></div>
    </div>
    </div>        
    `
    postcontiner.appendChild(cardDiv)

 });
//  const allBtn =document.getElementById('datilesbtn');
//  for(const btn of allBtn){
//      btn.addEventListener('click',function(){
//          console.log(allBtn)
//      })
//  }
}
///////////////////////////////////////////////////////////////////////
const handleSearch = () => {
    const value = document.getElementById("search-field").value;
    if (value) {
        looadphone(value);
    } else {
      alert("Please enter valid string ");
    }
  };

///////////////////////////////////////////////////////////
const latestproduct=async()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data =await res.json();
    const post = data;
    console.log(post)
    latestproductdisplay(post)
}

const latestproductdisplay = (card)=>{
    const latestCardContainer = document.getElementById('latest-card-container');

    latestCardContainer.textContent=''
    card.forEach(cards => {

    const cardDiv = document.createElement('div')
    cardDiv.classList= `cart bg-[#797dfc18] rounded-[50px] p-10 mb-5 `

    cardDiv.innerHTML =`

    <div class="image w-full mx-auto rounded-[16px] bg-white  text-center">
    <img  src="${cards?.cover_image}" alt="images/pen-1.png">
    </div>
    <div class="content mt-6">
   
    <div class="flex text-[#12132dcc]"><img src="images/Calander.png" alt="images/clock.png"><p class="ml-3">${cards?.author?.posted_date || "No publish date"}</p></div>
    <h2  id="card-title" class="mt-3 text-black font-bold text-2xl">${cards?.title}</h2>
    <p class="mt-4  font-regular text-lg text-[#12132d99] leading-6">${cards?.description }</p>
  
    <div class="flex items-center justify-between mt-6">
        <div class="flex items-center  justify-between"> 
        <img class="w-[40px] h-[40px]  rounded-full" src="${cards?.profile_image}" alt="images/pen-1.png">
      
        <div class="ml-3"><h2  id="card-title" class="mt-3 text-black font-bold text-xl">${cards?.author?.name}</h2>
        <h2  id="card-title" class="mt-3 text-[#12132d99] font-bold text-lg">${cards?.author?.designation || "Unknown"}</h2></div>
        
        </div>
       
       <div ><a onclick="showDatils()" href="#"><img src="images/massege-1.png" alt=""></a></div>
    </div>
    </div>        
    `
  
    latestCardContainer.appendChild(cardDiv)
}
    )}

/////////////////////////////////////////////////////////////////
looadphone('Comedy')
latestproduct()
loadAllCategoryName()