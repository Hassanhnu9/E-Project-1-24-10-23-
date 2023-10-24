let service1 = [
  {
    "img": "images/customer-service.png",
    "title": "online support",
    "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia."
  },
]

let service_name1 = document.querySelector(".services_container");
for (let index = 0; index < service1.length; index++) {
  service_name1.innerHTML += `<div class="card mb-3" style="max-width: 400px;" id="card1">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${service1[index].img}" class="img-fluid rounded-start" alt="..." id="img1">
    </div>
    <div class="col-md-8">
      <div class="service-card-body">
        <h5 class="card-title">${service1[index].title}</h5>
        <p class="card-text">${service1[index].content}</p>
        
      </div>
    </div>
  </div>
</div>
`
}

let service2 = [
  {
    "img": "images/give-money.png",
    "title": "money back guarantee",
    "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia."
  },
]

let service_name2 = document.querySelector(".services_container");
for (let index = 0; index < service2.length; index++) {
  service_name2.innerHTML += `<div class="card mb-3" style="max-width: 400px;" id="card2">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${service2[index].img}" class="img-fluid rounded-start" alt="..." id="img2">
    </div>
    <div class="col-md-8">
      <div class="service-card-body">
        <h5 class="card-title">${service2[index].title}</h5>
        <p class="card-text">${service2[index].content}</p>
        
      </div>
    </div>
  </div>
</div>
`
}

let service3 = [
  {
    "img": "images/express-delivery.png",
    "title": "free shipping & return",
    "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia."
  },
]

let service_name3 = document.querySelector(".services_container");
for (let index = 0; index < service3.length; index++) {
  service_name3.innerHTML += `<div class="card mb-3" style="max-width: 400px;" id="card3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${service3[index].img}" class="img-fluid rounded-start" alt="..." id="img3">
    </div>
    <div class="col-md-8">
      <div class="service-card-body">
        <h5 class="card-title">${service3[index].title}</h5>
        <p class="card-text">${service3[index].content}</p>
        
      </div>
    </div>
  </div>
</div>
`
}


// some images

let drinks1 = [
  {
    "img": "images/11.jpg",
    "name": "brandy"
  },
  {
    "img": "images/2.png",
    "name": "gin"
  },
  {
    "img": "images/3.png",
    "name": "rum"
  },

]

let drinks_container1 = document.querySelector(".some_images1")
for (let index = 0; index < drinks1.length; index++) {
  drinks_container1.innerHTML += `<div class="drink_card" style="width: 12rem;">
  <div class="drink_containers">
      <div class="image_outer">
      <img src=${drinks1[index].img} class="card-img-top" alt="...">
      </div>

  </div>
    <div class="card-body">
      <p class="card-text">${drinks1[index].name}</p>
    </div>
  </div>
`
}


let drinks2 = [
  {
    "img": "images/4.jpg",
    "name": "tequila"
  },
  {
    "img": "images/5.jpg",
    "name": "vodka"
  },
  {
    "img": "images/6.jpg",
    "name": "whiskey"
  },
]
let drinks_container2 = document.querySelector(".some_images2")
for (let index = 0; index < drinks2.length; index++) {
  drinks_container2.innerHTML += `<div class="drink_card" style="width: 12rem;">
  <div class="drink_containers">
      <div class="image_outer">
      <img src=${drinks1[index].img} class="card-img-top" alt="...">
      </div>
  </div>
  <div class="card-body">
    <p class="card-text">${drinks2[index].name}</p>
  </div>
</div>
`
}


// offers

let offer_drinks = [
  {
    "img": "images/7.jpg",
    "name": " Bacardi 151",
    "price": "$69.00",
    "name2": "Brandy",
    "icons":"<i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i>",
  },
  {
    "img": "images/122.jpg",
    "name": " Jim Beam Kentucky Straight",
    "price": "$69.00",
    "name2": "Gin",
    "icons":"<i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i>",
  },
  {
    "img": "images/9.jpg",
    "name": " Citadelle",
    "price": "$69.00",
    "name2": "Rum",
    "icons":"<i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i>",
  },
  {
    "img": "images/144.jpg",
    "name": " The Glenlivet",
    "price": "$69.00",
    "name2": "Rum",
    "icons":"<i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i>",
  },
  {
    "img": "images/12.jpg",
    "name": " Black Label",
    "price": "$69.00",
    "name2": "Whiskey",
    "icons":"<i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i>",
  },
  {
    "img": "images/13.jpg",
    "name": " Macallan",
    "price": "$69.00",
    "name2": "Tequila",
    "icons":"<i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i>",
  },
  {
    "img": "images/14.jpg",
    "name": " Old Monk",
    "price": "$69.00",
    "name2": "Vodka",
    "icons":"<i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i>",
  },
  {
    "img": "images/18.jpg",
    "name": " Jameson Irish Whiskey",
    "price": "$69.00",
    "name2": "Whiskey",
    "icons":"<i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i><i class='fa-solid fa-calendar-days'></i>",
  },
]

let offer_container = document.querySelector(".offers")
for (let index = 0; index < offer_drinks.length; index++) {
  offer_container.innerHTML += ` <div class="offer_card" style="width: 18rem;">
  <div class="offercard_cont">
  <div id="offerimage_hover">
  <img src=${offer_drinks[index].img} class="card-img-top" alt="..." id="offers_images">
  <div class=offer_icons>${offer_drinks[index].icons}</div>
  </div>
  </div>
  
 
  <div class="offer_card_body">
  <p class="card-text1">${offer_drinks[index].name2}</p>
    <h5 class="card-title">${offer_drinks[index].name}</h5>
    <p class="card-text2">${offer_drinks[index].price}</p>
  </div>
</div>
`
}


let blog_array1 = [
  {
    "img": "images/blog1.webp",
    "recipe": "The Recipe from a Winemaker's Restaurent",
    "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    "calender": "<i class='fa-solid fa-calendar-days'></i>",
    "date": "20-11-2023",
  },
  {
    "img": "images/blog2.webp",
    "recipe": "The Recipe from a Winemaker's Restaurent",
    "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    "calender": "<i class='fa-solid fa-calendar-days'></i>",
    "date": "20-11-2023",
  },
]
let blog11 = document.querySelector(".blog1")
for (let index = 0; index < blog_array1.length; index++) {
  blog11.innerHTML += `<div class="card_blog mb-5">
  <div class="row g-0">
    <div class="col-md-4"  style="width:45%;" class="blog_image">
      <img src=${blog_array1[index].img} class="img-fluid rounded-start" alt="..." style="height: 100%",style="width:100%">
    </div>
    <div class="col-md-8" style="width: 55%; height: 280px">
      <div class="card-body" >
      <div class=card_title>
      <h5 class="card_calender">${blog_array1[index].calender}</h5>
      <h5 class="card_date">${blog_array1[index].date}</h5>
      </div>
         
        <h4 class="recipe">${blog_array1[index].recipe}</h4>
        <p class="card-text"><small class="text-body-secondary">${blog_array1[index].content}</small></p>
      </div>
    </div>
  </div>
</div>
`
}


let blog_array2 = [
  {
    "img": "images/blog2.webp",
    "recipe": "The Recipe from a Winemaker's Restaurent",
    "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    "calender": "<i class='fa-solid fa-calendar-days'></i>",
    "date": "20-11-2023"
  },
  {
    "img": "images/blog4.jpg",
    "recipe": "The Recipe from a Winemaker's Restaurent",
    "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    "calender": "<i class='fa-solid fa-calendar-days'></i>",
    "date": "20-11-2023",
  },
]
let blog12 = document.querySelector(".blog2")
for (let index = 0; index < blog_array2.length; index++) {
  blog12.innerHTML += `<div class="card_blog mb-5">
  <div class="row g-0">
    <div class="col-md-4" style="width:45%;" class="blog_image"> 
      <img src=${blog_array2[index].img} class="img-fluid rounded-start" alt="..." style="height: 100%">
    </div>
    <div class="col-md-8" style="width: 55%; height: 280px">
      <div class="card-body">
        <div class=card_title>
        <h5 class="card_calender">${blog_array2[index].calender}</h5>
        <h5 class="card_date">${blog_array2[index].date}</h5>
        </div>
        <h4 class="recipe">${blog_array2[index].recipe}</h4>
        <p class="blog-card-text"><small class="text-body-secondary">${blog_array2[index].content}</small></p>
      </div>
    </div>
  </div>
</div>
`
}