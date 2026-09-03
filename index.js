/* =====================================================
   INSTALFLORA HOMEPAGE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if(menuToggle && navMenu){

    menuToggle.addEventListener("click", function(){

        navMenu.classList.toggle("active");

    });

}


/* Close mobile menu after clicking normal links */

document.querySelectorAll(".nav-menu a").forEach(function(link){

    link.addEventListener("click", function(){

        navMenu.classList.remove("active");

    });

});



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.getElementById("navbar");

if(navbar){

    window.addEventListener("scroll", function(){

        if(window.scrollY > 50){

            navbar.classList.add("scrolled");

        }else{

            navbar.classList.remove("scrolled");

        }

    });

}



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

    if(!slides.length){
        return;
    }


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


    if(dots[currentSlide]){

        dots[currentSlide].classList.add("active");

    }

}


if(nextSlide){

    nextSlide.addEventListener("click", function(){

        showSlide(currentSlide + 1);

    });

}


if(prevSlide){

    prevSlide.addEventListener("click", function(){

        showSlide(currentSlide - 1);

    });

}


dots.forEach(function(dot){

    dot.addEventListener("click", function(){

        const slideNumber =
        Number(this.dataset.slide);

        showSlide(slideNumber);

    });

});


/* Automatic slider */

if(slides.length > 1){

    setInterval(function(){

        showSlide(currentSlide + 1);

    }, 6000);

}



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
   SHOPPING CART
===================================================== */

/*
   IMPORTANT:

   All cart buttons use the same cart system.

   cartItems = total products added
*/

let cartItems = 0;


/* Desktop cart button */

const cartButton =
document.getElementById("cartButton");


/* Mobile cart button */

const mobileCartButton =
document.getElementById("mobileCartBtn");


/* All cart counters */

const cartCounts =
document.querySelectorAll(".cart-count");



/* Update ALL cart counters */

function updateCartCount(){

    cartCounts.forEach(function(counter){

        counter.textContent = cartItems;

    });

}



/* Show cart message */

function openCart(){

    if(cartItems === 0){

        alert("Your Shopping Cart is Empty.");

    }else{

        alert(
            "You have " +
            cartItems +
            " item(s) in your Shopping Cart."
        );

    }

}



/* Desktop cart */

if(cartButton){

    cartButton.addEventListener("click", function(){

        openCart();

    });

}



/* Mobile cart */

if(mobileCartButton){

    mobileCartButton.addEventListener("click", function(){

        navMenu.classList.remove("active");

        openCart();

    });

}



/* =====================================================
   ADD TO CART BUTTONS
===================================================== */

const addCartButtons =
document.querySelectorAll(".add-cart");


addCartButtons.forEach(function(button){

    button.addEventListener("click", function(){

        cartItems++;

        updateCartCount();


        const originalText =
        this.textContent;


        this.textContent = "Added ✓";


        setTimeout(function(){

            button.textContent = originalText;

        },1200);

    });

});



/* =====================================================
   WISHLIST
===================================================== */

const wishlistButtons =
document.querySelectorAll(".wishlist");


wishlistButtons.forEach(function(button){

    button.addEventListener("click", function(){

        if(this.classList.contains("active")){

            this.textContent = "♡";

            this.style.color = "";

            this.classList.remove("active");

        }else{

            this.textContent = "♥";

            this.style.color = "#b97973";

            this.classList.add("active");

        }

    });

});



/* =====================================================
   MOBILE WISHLIST
===================================================== */

const mobileWishlistBtn =
document.getElementById("mobileWishlistBtn");


if(mobileWishlistBtn){

    mobileWishlistBtn.addEventListener("click", function(){

        navMenu.classList.remove("active");

        alert("Your Wishlist");

    });

}



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


    if(!storySection){

        return;

    }


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
                    target +
                    (target === 98 ? "" : "+");

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


if(newsletterForm){

    newsletterForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();


            const newsletterEmail =
            document.getElementById(
                "newsletterEmail"
            );


            const email =
            newsletterEmail.value.trim();


            if(!email){

                alert(
                    "Please enter your email address."
                );

                return;

            }


            alert(
                "Thank you for subscribing to Instaflora!"
            );


            newsletterForm.reset();

        }
    );

}



/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
document.getElementById("backTop");


if(backTop){

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

}



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

    if(!accountModal){

        return;

    }


    accountModal.classList.add("show");

    document.body.style.overflow = "hidden";

}



function closeAccountModal(){

    if(!accountModal){

        return;

    }


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

    if(!searchOverlay){

        return;

    }


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

            navMenu.classList.remove("active");

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



/* CLICK OUTSIDE */

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