/* =====================================================
   INSTALFLORA HOMEPAGE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function(){

    navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav-menu a").forEach(function(link){

    link.addEventListener("click", function(){

        navMenu.classList.remove("active");

    });

});



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});



/* =====================================================
   HERO SLIDER
===================================================== */

const slides =
document.querySelectorAll(".hero-slide");

const dots =
document.querySelectorAll(".dot");

const nextSlide =
document.getElementById("nextSlide");

const prevSlide =
document.getElementById("prevSlide");

let currentSlide = 0;


function showSlide(index){

    if(index >= slides.length){

        currentSlide = 0;

    }else if(index < 0){

        currentSlide = slides.length - 1;

    }else{

        currentSlide = index;

    }


    slides.forEach(function(slide){

        slide.classList.remove("active");

    });


    dots.forEach(function(dot){

        dot.classList.remove("active");

    });


    slides[currentSlide].classList.add("active");

    dots[currentSlide].classList.add("active");

}


nextSlide.addEventListener("click", function(){

    showSlide(currentSlide + 1);

});


prevSlide.addEventListener("click", function(){

    showSlide(currentSlide - 1);

});


dots.forEach(function(dot){

    dot.addEventListener("click", function(){

        const slideNumber =
        Number(this.dataset.slide);

        showSlide(slideNumber);

    });

});


/* Automatic slider */

setInterval(function(){

    showSlide(currentSlide + 1);

}, 6000);



/* =====================================================
   PRODUCT FILTER
===================================================== */

const filterButtons =
document.querySelectorAll(".filter");

const products =
document.querySelectorAll(".product-card");


filterButtons.forEach(function(button){

    button.addEventListener("click", function(){

        filterButtons.forEach(function(btn){

            btn.classList.remove("active");

        });

        this.classList.add("active");


        const filter =
        this.dataset.filter;


        products.forEach(function(product){

            const category =
            product.dataset.category;


            if(
                filter === "all" ||
                category === filter
            ){

                product.classList.remove("hidden");

            }else{

                product.classList.add("hidden");

            }

        });

    });

});



/* =====================================================
   SHOPPING CART COUNTER
===================================================== */

const cartButtons =
document.querySelectorAll(".add-cart");

const cartCount =
document.querySelector(".cart-count");

let cartItems = 0;


cartButtons.forEach(function(button){

    button.addEventListener("click", function(){

        cartItems++;

        cartCount.textContent = cartItems;


        const originalText =
        this.textContent;

        this.textContent = "Added ✓";


        setTimeout(() => {

            this.textContent = originalText;

        }, 1200);

    });

});



/* =====================================================
   WISHLIST BUTTON
===================================================== */

const wishlistButtons =
document.querySelectorAll(".wishlist");


wishlistButtons.forEach(function(button){

    button.addEventListener("click", function(){

        if(this.textContent === "♡"){

            this.textContent = "♥";

            this.style.color = "#b97973";

        }else{

            this.textContent = "♡";

            this.style.color = "";

        }

    });

});



/* =====================================================
   REVIEW SLIDER
===================================================== */

const reviewCards =
document.querySelectorAll(".review-card");

const reviewNext =
document.getElementById("reviewNext");

const reviewPrev =
document.getElementById("reviewPrev");

let currentReview = 0;


function showReview(index){

    if(index >= reviewCards.length){

        currentReview = 0;

    }else if(index < 0){

        currentReview = reviewCards.length - 1;

    }else{

        currentReview = index;

    }


    reviewCards.forEach(function(card){

        card.classList.remove("active");

    });


    reviewCards[currentReview]
    .classList.add("active");

}


reviewNext.addEventListener("click", function(){

    showReview(currentReview + 1);

});


reviewPrev.addEventListener("click", function(){

    showReview(currentReview - 1);

});



/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters =
document.querySelectorAll(".counter");


let counterStarted = false;


function startCounters(){

    if(counterStarted){

        return;

    }


    const storySection =
    document.querySelector(".story-section");


    const position =
    storySection.getBoundingClientRect();


    if(position.top < window.innerHeight - 100){

        counterStarted = true;


        counters.forEach(function(counter){

            const target =
            Number(counter.dataset.target);

            let number = 0;

            const speed = target / 80;


            function updateCounter(){

                number += speed;


                if(number < target){

                    counter.textContent =
                    Math.ceil(number);

                    requestAnimationFrame(
                        updateCounter
                    );

                }else{

                    counter.textContent =
                    target + (target === 98 ? "" : "+");

                }

            }


            updateCounter();

        });

    }

}


window.addEventListener(
    "scroll",
    startCounters
);



/* =====================================================
   NEWSLETTER
===================================================== */

const newsletterForm =
document.getElementById("newsletterForm");


newsletterForm.addEventListener("submit", function(e){

    e.preventDefault();


    const email =
    document.getElementById("newsletterEmail").value.trim();


    if(!email){

        alert("Please enter your email address.");

        return;

    }


    alert(
        "Thank you for subscribing to Instaflora!"
    );


    newsletterForm.reset();

});



/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
document.getElementById("backTop");


window.addEventListener("scroll", function(){

    if(window.scrollY > 500){

        backTop.classList.add("show");

    }else{

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/* =====================================================
   IMAGE FALLBACK
===================================================== */

document.querySelectorAll("img")
.forEach(function(image){

    image.addEventListener("error", function(){

        this.style.background =
        "linear-gradient(135deg,#173b32,#708b78)";

        this.style.minHeight = "200px";

        this.alt = "Instaflora";

    });

});
/* =====================================================
   LOGIN / REGISTER MODAL
===================================================== */

const accountBtn = document.getElementById("accountBtn");
const mobileAccountBtn = document.getElementById("mobileAccountBtn");

const accountModal = document.getElementById("accountModal");
const accountClose = document.getElementById("accountClose");

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");


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

            openAccountModal();

        }
    );

}
/* CLOSE */

accountClose.addEventListener(
    "click",
    closeAccountModal
);


/* CLICK OUTSIDE */

accountModal.addEventListener(
    "click",
    function(e){

        if(e.target === accountModal){

            closeAccountModal();

        }

    }
);


/* LOGIN TAB */

loginTab.addEventListener(
    "click",
    function(){

        loginTab.classList.add("active");

        registerTab.classList.remove("active");

        loginForm.classList.add("active");

        registerForm.classList.remove("active");

    }
);


/* REGISTER TAB */

registerTab.addEventListener(
    "click",
    function(){

        registerTab.classList.add("active");

        loginTab.classList.remove("active");

        registerForm.classList.add("active");

        loginForm.classList.remove("active");

    }
);
/* =====================================================
   SEARCH
===================================================== */

const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const searchClose = document.getElementById("searchClose");
const searchInput = document.getElementById("searchInput");

if(searchBtn){

    searchBtn.addEventListener("click", () => {

        searchOverlay.classList.add("active");

        setTimeout(() => {
            searchInput.focus();
        }, 300);

    });

}


if(searchClose){

    searchClose.addEventListener("click", () => {

        searchOverlay.classList.remove("active");

    });

}


/* Close when clicking outside */

searchOverlay.addEventListener("click", (e) => {

    if(e.target === searchOverlay){

        searchOverlay.classList.remove("active");

    }

});


/* Close with ESC */

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        searchOverlay.classList.remove("active");

    }

});