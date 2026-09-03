/* =====================================================
   INSTaflora SHOP JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


if(menuToggle && navMenu){

    menuToggle.addEventListener("click", function(){

        navMenu.classList.toggle("active");

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER LINK CLICK
===================================================== */

document.querySelectorAll(".nav-menu a")
.forEach(function(link){

    link.addEventListener("click", function(){

        navMenu.classList.remove("active");

    });

});



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.getElementById("navbar");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});



/* =====================================================
   LOGIN / REGISTER MODAL
===================================================== */

const accountBtn =
    document.getElementById("accountBtn");

const mobileAccountBtn =
    document.getElementById("mobileAccountBtn");

const accountModal =
    document.getElementById("accountModal");

const accountClose =
    document.getElementById("accountClose");

const loginTab =
    document.getElementById("loginTab");

const registerTab =
    document.getElementById("registerTab");

const loginForm =
    document.getElementById("loginForm");

const registerForm =
    document.getElementById("registerForm");


function openAccountModal(){

    accountModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeAccountModal(){

    accountModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* DESKTOP */

if(accountBtn){

    accountBtn.addEventListener(
        "click",
        openAccountModal
    );

}


/* MOBILE */

if(mobileAccountBtn){

    mobileAccountBtn.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            navMenu.classList.remove("active");

            openAccountModal();

        }
    );

}


/* CLOSE */

if(accountClose){

    accountClose.addEventListener(
        "click",
        closeAccountModal
    );

}


/* CLICK OUTSIDE */

if(accountModal){

    accountModal.addEventListener(
        "click",
        function(e){

            if(e.target === accountModal){

                closeAccountModal();

            }

        }
    );

}


/* LOGIN TAB */

if(loginTab){

    loginTab.addEventListener(
        "click",
        function(){

            loginTab.classList.add("active");

            registerTab.classList.remove("active");

            loginForm.classList.add("active");

            registerForm.classList.remove("active");

        }
    );

}


/* REGISTER TAB */

if(registerTab){

    registerTab.addEventListener(
        "click",
        function(){

            registerTab.classList.add("active");

            loginTab.classList.remove("active");

            registerForm.classList.add("active");

            loginForm.classList.remove("active");

        }
    );

}



/* =====================================================
   SEARCH
===================================================== */

const searchBtn =
    document.getElementById("searchBtn");

const mobileSearchBtn =
    document.getElementById("mobileSearchBtn");

const searchOverlay =
    document.getElementById("searchOverlay");

const searchClose =
    document.getElementById("searchClose");

const searchInput =
    document.getElementById("searchInput");


function openSearch(){

    if(!searchOverlay) return;

    navMenu.classList.remove("active");

    searchOverlay.classList.add("active");

    setTimeout(function(){

        if(searchInput){

            searchInput.focus();

        }

    },300);

}


/* DESKTOP SEARCH */

if(searchBtn){

    searchBtn.addEventListener(
        "click",
        openSearch
    );

}


/* MOBILE SEARCH */

if(mobileSearchBtn){

    mobileSearchBtn.addEventListener(
        "click",
        function(){

            openSearch();

        }
    );

}


/* CLOSE SEARCH */

if(searchClose){

    searchClose.addEventListener(
        "click",
        function(){

            searchOverlay.classList.remove("active");

        }
    );

}


/* CLICK OUTSIDE SEARCH */

if(searchOverlay){

    searchOverlay.addEventListener(
        "click",
        function(e){

            if(e.target === searchOverlay){

                searchOverlay.classList.remove("active");

            }

        }
    );

}


/* ESC */

document.addEventListener(
    "keydown",
    function(e){

        if(e.key === "Escape"){

            if(searchOverlay){

                searchOverlay.classList.remove("active");

            }

        }

    }
);



/* =================================================
   PRODUCT ELEMENTS
================================================= */

const products =
    [...document.querySelectorAll(".shop-product")];

const productGrid =
    document.getElementById("productGrid");

const resultCount =
    document.getElementById("resultCount");

const noProducts =
    document.getElementById("noProducts");



/* =================================================
   CATEGORY TABS
================================================= */

const categoryTabs =
    document.querySelectorAll(".category-tab");


categoryTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        categoryTabs.forEach(item =>
            item.classList.remove("active")
        );

        tab.classList.add("active");

        const category =
            tab.dataset.category;

        filterProducts(category);

    });

});


function filterProducts(category){

    let visible = 0;

    products.forEach(product => {

        if(
            category === "all" ||
            product.dataset.category === category
        ){

            product.style.display = "";

            visible++;

        }else{

            product.style.display = "none";

        }

    });

    updateResultCount(visible);

}


function updateResultCount(number){

    resultCount.textContent = number;

    if(number === 0){

        noProducts.style.display = "block";

    }else{

        noProducts.style.display = "none";

    }

}



/* =================================================
   CHECKBOX FILTERS
================================================= */

const categoryFilters =
    document.querySelectorAll(".category-filter");


categoryFilters.forEach(filter => {

    filter.addEventListener(
        "change",
        applyFilters
    );

});


function applyFilters(){

    const selected =
        [...categoryFilters]
        .filter(item => item.checked)
        .map(item => item.value);

    const maxPrice =
        Number(
            document.getElementById("priceRange").value
        );

    let visible = 0;

    products.forEach(product => {

        const category =
            product.dataset.category;

        const price =
            Number(product.dataset.price);

        const categoryMatch =
            selected.length === 0 ||
            selected.includes(category);

        const priceMatch =
            price <= maxPrice;

        if(categoryMatch && priceMatch){

            product.style.display = "";

            visible++;

        }else{

            product.style.display = "none";

        }

    });

    updateResultCount(visible);

}



/* =================================================
   PRICE RANGE
================================================= */

const priceRange =
    document.getElementById("priceRange");

const priceValue =
    document.getElementById("priceValue");


if(priceRange){

    priceRange.addEventListener(
        "input",
        () => {

            priceValue.textContent =
                Number(
                    priceRange.value
                ).toLocaleString();

            applyFilters();

        }
    );

}



/* =================================================
   CLEAR FILTERS
================================================= */

document.getElementById("clearFilters")
.addEventListener(
    "click",
    () => {

        categoryFilters.forEach(filter => {

            filter.checked = false;

        });

        priceRange.value = 10000;

        priceValue.textContent = "10,000";

        categoryTabs.forEach(tab => {

            tab.classList.remove("active");

        });

        categoryTabs[0].classList.add("active");

        products.forEach(product => {

            product.style.display = "";

        });

        updateResultCount(products.length);

    }
);



/* =================================================
   SORT PRODUCTS
================================================= */

const sortProducts =
    document.getElementById("sortProducts");


sortProducts.addEventListener(
    "change",
    () => {

        const value =
            sortProducts.value;

        const sorted =
            [...products].sort((a,b) => {

                if(value === "low"){

                    return Number(a.dataset.price) -
                           Number(b.dataset.price);

                }

                if(value === "high"){

                    return Number(b.dataset.price) -
                           Number(a.dataset.price);

                }

                if(value === "name"){

                    return a.dataset.name
                        .localeCompare(b.dataset.name);

                }

                return 0;

            });

        sorted.forEach(product => {

            productGrid.appendChild(product);

        });

    }
);



/* =================================================
   WISHLIST
===================================================== */


/* Product wishlist buttons */

document.querySelectorAll(".wishlist")
.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            button.classList.toggle("liked");

            if(button.classList.contains("liked")){

                button.textContent = "♥";

            }else{

                button.textContent = "♡";

            }

        }
    );

});


/* Desktop navbar wishlist */

const desktopWishlistBtn =
    document.getElementById("desktopWishlistBtn");


/* Mobile navbar wishlist */

const mobileWishlistBtn =
    document.getElementById("mobileWishlistBtn");


function toggleNavbarWishlist(button){

    if(!button) return;

    button.classList.toggle("liked");

    if(button.classList.contains("liked")){

        button.textContent = "♥";

    }else{

        button.textContent = "♡";

    }

}


if(desktopWishlistBtn){

    desktopWishlistBtn.addEventListener(
        "click",
        function(){

            toggleNavbarWishlist(
                desktopWishlistBtn
            );

        }
    );

}


if(mobileWishlistBtn){

    mobileWishlistBtn.addEventListener(
        "click",
        function(){

            toggleNavbarWishlist(
                mobileWishlistBtn
            );

        }
    );

}



/* =================================================
   CART
===================================================== */

let cartCount = 0;


/*
   IMPORTANT:
   Both desktop and mobile cart counters
   are selected so both remain synchronized.
*/

const cartCounters =
    document.querySelectorAll(".cart-count");


function updateCartCounters(){

    cartCounters.forEach(counter => {

        counter.textContent = cartCount;

    });

}


/* PRODUCT ADD TO CART */

document.querySelectorAll(".add-cart")
.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            cartCount++;

            updateCartCounters();

            const product =
                button.dataset.product;

            const original =
                button.textContent;

            button.textContent =
                "Added ✓";

            button.style.background =
                "#d4af37";

            button.style.color =
                "#111";

            setTimeout(() => {

                button.textContent =
                    original;

                button.style.background =
                    "";

                button.style.color =
                    "";

            },1500);

            console.log(
                product + " added to cart"
            );

        }
    );

});


/* Desktop cart */

const desktopCartBtn =
    document.getElementById("desktopCartBtn");


/* Mobile cart */

const mobileCartBtn =
    document.getElementById("mobileCartBtn");


function openCartMessage(){

    if(navMenu){

        navMenu.classList.remove("active");

    }

    if(cartCount === 0){

        alert(
            "Your cart is currently empty."
        );

    }else{

        alert(
            "You have " +
            cartCount +
            " item(s) in your cart."
        );

    }

}


if(desktopCartBtn){

    desktopCartBtn.addEventListener(
        "click",
        openCartMessage
    );

}


if(mobileCartBtn){

    mobileCartBtn.addEventListener(
        "click",
        openCartMessage
    );

}



/* =================================================
   QUICK VIEW
===================================================== */

const modal =
    document.getElementById("quickModal");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalPrice =
    document.getElementById("modalPrice");

let selectedProduct = null;


document.querySelectorAll(".quick-view")
.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            selectedProduct =
                button.closest(".shop-product");

            const image =
                selectedProduct
                .querySelector("img").src;

            const title =
                selectedProduct.dataset.name;

            const category =
                selectedProduct
                .querySelector(".product-category")
                .textContent;

            const price =
                selectedProduct.dataset.price;

            modalImage.src = image;

            modalTitle.textContent = title;

            modalCategory.textContent =
                category;

            modalPrice.textContent =
                "Rs. " +
                Number(price).toLocaleString();

            modal.classList.add("active");

        }
    );

});


modalClose.addEventListener(
    "click",
    () => {

        modal.classList.remove("active");

    }
);


modal.addEventListener(
    "click",
    e => {

        if(e.target === modal){

            modal.classList.remove("active");

        }

    }
);



/* =================================================
   QUICK VIEW QUANTITY
===================================================== */

let quantity = 1;

const quantityText =
    document.getElementById("quantity");


document.getElementById("minusQty")
.addEventListener(
    "click",
    () => {

        if(quantity > 1){

            quantity--;

            quantityText.textContent =
                quantity;

        }

    }
);


document.getElementById("plusQty")
.addEventListener(
    "click",
    () => {

        quantity++;

        quantityText.textContent =
            quantity;

    }
);



/* =================================================
   QUICK VIEW CART
===================================================== */

document.getElementById("modalCart")
.addEventListener(
    "click",
    () => {

        if(!selectedProduct) return;

        cartCount += quantity;

        updateCartCounters();

        modal.classList.remove("active");

        quantity = 1;

        quantityText.textContent = "1";

        alert(
            "Product added to your cart ✓"
        );

    }
);



/* =================================================
   MOBILE FILTER
===================================================== */

const filterSidebar =
    document.getElementById("filterSidebar");


document.getElementById("filterToggle")
.addEventListener(
    "click",
    () => {

        filterSidebar.classList.add("active");

    }
);


document.getElementById("closeFilters")
.addEventListener(
    "click",
    () => {

        filterSidebar.classList.remove("active");

    }
);



/* =================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY > 500){

            backTop.classList.add("show");

        }else{

            backTop.classList.remove("show");

        }

    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }
);



/* =================================================
   NEWSLETTER
===================================================== */

document.getElementById("newsletterForm")
.addEventListener(
    "submit",
    e => {

        e.preventDefault();

        alert(
            "Thank you for subscribing to Instaflora ♥"
        );

        e.target.reset();

    }
);



/* =================================================
   INITIAL COUNT
===================================================== */

updateResultCount(products.length);

updateCartCounters();