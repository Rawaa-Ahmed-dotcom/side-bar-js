
// Dynamic Cards
const products = [
    {
        id: Math.random(),
        image: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_1.jpg",
        category: "Dried Fruits",
        title: "Mixed Nuts Berries Pack",
        rate: 4,
        newPrice: 45,
        oldPrice: null,
        isSale: true,
        isNew: false,
    },
    {
        id: Math.random(),
        image: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg",
        category: "Cookies",
        title: "Multi Grain Combo Cookies",
        rate: 2,
        newPrice: 25,
        oldPrice: 30,
        isSale: false,
        isNew: false,
    },
    {
        id: Math.random(),
        image: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_1.jpg",
        category: "Foods",
        title: "Fresh Mango juice pack",
        rate: 3,
        newPrice: 46,
        oldPrice: 65,
        isSale: false,
        isNew: true,
    },
    {
        id: Math.random(),
        image: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_1.jpg",
        category: "Dried Fruits",
        title: "Dates Value Fresh Pouch",
        rate: 5,
        newPrice: 78,
        oldPrice: 85,
        isSale: false,
        isNew: false,
    },
    {
        id: Math.random(),
        category: "Foods",
        title: "Stick Fiber Masala Magic",
        rate: 2,
        newPrice: 45,
        oldPrice: 50,
        isSale: false,
        isNew: true,
        image : "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/1_1.jpg",
    }
];
let productsContainer = document.querySelector(".section-content");
products.map(function(product) {
    let temp = ``;
    temp += `<div class="product_card">
                        <div class="product_card_image">
                            <img src="${product.image}" alt="">
                        </div>
                        <div class="product_card_info">
                            <span>${product.category}</span>
                            <h3>${product.title}</h3>
                            <div class="product_card_info_rate">
                                ${new Array(5).fill(0).map(
                                    (_, index) => `<svg stroke="currentColor" fill="${product.rate >= index ? "#FFC107" : "#D3D3D3"}" stroke-width="0" viewBox="0 0 576 512" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                    </path>
                                </svg>`,
                                ).join(" ")}
                            </div>
                            <div class="product_card_info_price">
                            ${
                                product.oldPrice
                                    ? `<strong>$${product.newPrice}</strong>
                            <del>$${product.oldPrice}</del>`
                                    : `<strong>$${product.newPrice}</strong>`
                            }
                            
                            </div>
                        </div>
                    </div>`;
    productsContainer.innerHTML += temp;
});

// Colors 
const palettes = [
    {
        code: "#5caf90",
    },
    {
        code: "#8118d5",
    },
    {
        code: "#5f6af5",
    },
    {
        code: "#f5885f",
    },
    {
        code: "#32dbe2",
    },
    {
        code: "#f44336",
    },
    {
        code: "#e91e63",
    },
    {
        code: "#607d8b",
    },
    {
        code: "#03492f",
    },
    {
        code: "#3f51b5",
    },

];
// adding color cards to the container
let colorsConatiner = document.querySelector(".color-themes-cards");
let itemsColored = document.querySelector("[data-color]");
palettes.map(function(color) {
    let temp = ``;
    temp += `<div class = "color-card" data-theme = "${color.code}"></div>`;
    colorsConatiner.innerHTML += temp;
})


// choosing the color
let colorCards = document.querySelectorAll(".color-card");
colorCards.forEach(function(card) {
    card.style.background = card.dataset.theme;
    card.onclick = function() {
        document.querySelector("[data-color]").style.color = card.style.background;
    }
})


// directions
let directionContainer = document.querySelector(".direction-cards");

const directions = [
    {
        image :  "./../images/ltr.png",
        title : "ltr",
    },
    {
        image :  "./../images/rtl.png",
        title : "rtl",
    }
];

// adding direction cards
directions.map(function(item ) {
    let temp = ``;
    temp += `
    <div class="direct-item" data-direction = "${item.title}" >
    <img src = "${item.image}">
    <h3>${item.title}</h3>
    </div>`;
    directionContainer.innerHTML += temp;
});

// choosing directions
let directItems = document.querySelectorAll(".direct-item");
directItems.forEach(item => {
    item.onclick = function() {
        document.querySelector("main").style.direction = item.dataset.direction;
    }
})

// Dark Modes
let modesContainer = document.querySelector(".modes-cards");

const darkModes = [
    {
        image : "./../images/dark.png",
        title : "Dark"
    },
    {
        image : "./../images/light.png",
        title: "Light",
    }
];
// Adding modes 
darkModes.map(function(item)  {
    let temp = ``;
    temp += `
    <div class="mode-item" data-mode = "${item.title}" >
    <img src = "${item.image}">
    <h3>${item.title}</h3>
    </div>`;
    modesContainer.innerHTML += temp;
});


function lightMode() {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    document.querySelector(".menu-side-bar").classList.add("light");
    document.querySelector(".menu-side-bar").classList.remove("dark");
}
function darkMode() {
    document.body.classList.add("dark");
        document.body.classList.remove("light");
        document.querySelector(".menu-side-bar").classList.add("dark");
        document.querySelector(".menu-side-bar").classList.remove("light");
}

// choosing mode
let modeItems = document.querySelectorAll(".mode-item");
modeItems.forEach(item => {
    item.onclick = function() {
    if(item.dataset.mode === "Light") {
        lightMode();
    }
    else if(item.dataset.mode === "Dark") {
        darkMode();
    }
}
})


function resetMode() {
    modeItems.forEach(item => {
        if(item.dataset.mode === "Light") {
            lightMode();
        }
        else if(item.dataset.mode === "Dark") {
            darkMode();
        }
    })
};
resetMode();

// opening and closing menu-side-bar
document.querySelector(".icon").onclick = function() {
    document.querySelector(".menu-side-bar").classList.toggle("active-menu");
    document.querySelector(".active-body").classList.toggle("show");
    
}
