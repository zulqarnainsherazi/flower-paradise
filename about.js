/* =====================================================
   INSTAFLORA ABOUT PAGE JAVASCRIPT
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


/* Close menu after clicking links */

document
    .querySelectorAll(".nav-menu a")
    .forEach(function(link){

        link.addEventListener("click", function(){

            navMenu.classList.remove("active");

        });

    });



/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar =
    document.getElementById("navbar");


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
   SHOPPING CART
===================================================== */

let cartItems = 0;


const cartButton =
    document.getElementById("cartBtn");

const mobileCartButton =
    document.getElementById("mobileCartBtn");


const cartCounts =
    document.querySelectorAll(".cart-count");


function updateCartCount(){

    cartCounts.forEach(function(counter){

        counter.textContent = cartItems;

    });

}


function openCart(){

    if(cartItems === 0){

        alert(
            "Your Shopping Cart is Empty."
        );

    }else{

        alert(
            "You have " +
            cartItems +
            " item(s) in your Shopping Cart."
        );

    }

}


if(cartButton){

    cartButton.addEventListener(
        "click",
        openCart
    );

}


if(mobileCartButton){

    mobileCartButton.addEventListener(
        "click",
        function(){

            navMenu.classList.remove("active");

            openCart();

        }
    );

}



/* =====================================================
   WISHLIST
===================================================== */

const wishlistButton =
    document.getElementById("wishlistBtn");

const mobileWishlistButton =
    document.getElementById("mobileWishlistBtn");


if(wishlistButton){

    wishlistButton.addEventListener(
        "click",
        function(){

            alert(
                "Your Wishlist is currently empty."
            );

        }
    );

}


if(mobileWishlistButton){

    mobileWishlistButton.addEventListener(
        "click",
        function(){

            navMenu.classList.remove("active");

            alert(
                "Your Wishlist is currently empty."
            );

        }
    );

}



/* =====================================================
   ACCOUNT MODAL
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

    document.body.style.overflow =
        "hidden";

}


function closeAccountModal(){

    if(!accountModal){
        return;
    }

    accountModal.classList.remove("show");

    document.body.style.overflow =
        "";

}


if(accountBtn){

    accountBtn.addEventListener(
        "click",
        openAccountModal
    );

}


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


if(accountClose){

    accountClose.addEventListener(
        "click",
        closeAccountModal
    );

}


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


/* =====================================================
   LOGIN TAB
===================================================== */

if(loginTab){

    loginTab.addEventListener(
        "click",
        function(){

            loginTab.classList.add("active");

            registerTab.classList.remove(
                "active"
            );

            loginForm.classList.add("active");

            registerForm.classList.remove(
                "active"
            );

        }
    );

}


/* =====================================================
   REGISTER TAB
===================================================== */

if(registerTab){

    registerTab.addEventListener(
        "click",
        function(){

            registerTab.classList.add("active");

            loginTab.classList.remove(
                "active"
            );

            registerForm.classList.add("active");

            loginForm.classList.remove(
                "active"
            );

        }
    );

}


/* =====================================================
   FORM DEMO
===================================================== */

if(loginForm){

    loginForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            alert(
                "Login system will be connected with the backend."
            );

        }
    );

}


if(registerForm){

    registerForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const passwords =
                registerForm.querySelectorAll(
                    'input[type="password"]'
                );

            if(
                passwords.length >= 2 &&
                passwords[0].value !== passwords[1].value
            ){

                alert(
                    "Passwords do not match."
                );

                return;

            }

            alert(
                "Registration system will be connected with the backend."
            );

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

const searchSubmit =
    document.getElementById("searchSubmit");



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


function closeSearch(){

    if(searchOverlay){

        searchOverlay.classList.remove(
            "active"
        );

    }

}


if(searchBtn){

    searchBtn.addEventListener(
        "click",
        openSearch
    );

}


if(mobileSearchBtn){

    mobileSearchBtn.addEventListener(
        "click",
        function(){

            navMenu.classList.remove(
                "active"
            );

            openSearch();

        }
    );

}


if(searchClose){

    searchClose.addEventListener(
        "click",
        closeSearch
    );

}


if(searchOverlay){

    searchOverlay.addEventListener(
        "click",
        function(e){

            if(e.target === searchOverlay){

                closeSearch();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    function(e){

        if(e.key === "Escape"){

            closeSearch();

            closeAccountModal();

        }

    }
);



/* =====================================================
   SEARCH SUBMIT
===================================================== */

if(searchSubmit){

    searchSubmit.addEventListener(
        "click",
        function(){

            const query =
                searchInput.value.trim();

            if(!query){

                alert(
                    "Please enter something to search."
                );

                return;

            }

            alert(
                "Searching for: " +
                query
            );

        }
    );

}


if(searchInput){

    searchInput.addEventListener(
        "keydown",
        function(e){

            if(e.key === "Enter"){

                e.preventDefault();

                if(searchSubmit){

                    searchSubmit.click();

                }

            }

        }
    );

}



/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;


function animateCounters(){

    if(countersStarted){
        return;
    }

    const statsSection =
        document.querySelector(
            ".stats-section"
        );

    if(!statsSection){
        return;
    }

    const sectionPosition =
        statsSection.getBoundingClientRect();


    if(
        sectionPosition.top <
        window.innerHeight - 100
    ){

        countersStarted = true;


        counters.forEach(function(counter){

            const target =
                Number(
                    counter.dataset.target
                );

            let current = 0;

            const duration = 1800;

            const startTime =
                performance.now();


            function update(){

                const now =
                    performance.now();

                const progress =
                    Math.min(
                        (now - startTime) /
                        duration,
                        1
                    );


                const eased =
                    1 -
                    Math.pow(
                        1 - progress,
                        3
                    );


                current =
                    Math.floor(
                        target * eased
                    );


                counter.textContent =
                    current.toLocaleString();


                if(progress < 1){

                    requestAnimationFrame(
                        update
                    );

                }else{

                    counter.textContent =
                        target.toLocaleString() +
                        (
                            target === 98
                            ? ""
                            : "+"
                        );

                }

            }


            requestAnimationFrame(update);

        });

    }

}


window.addEventListener(
    "scroll",
    animateCounters
);


/* Run once in case section is already visible */

animateCounters();



/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backTop");


if(backTop){

    window.addEventListener(
        "scroll",
        function(){

            if(window.scrollY > 500){

                backTop.classList.add(
                    "show"
                );

            }else{

                backTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backTop.addEventListener(
        "click",
        function(){

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }
    );

}



/* =====================================================
   IMAGE FALLBACK
===================================================== */

document
    .querySelectorAll("img")
    .forEach(function(image){

        image.addEventListener(
            "error",
            function(){

                this.style.background =
                    "linear-gradient(135deg,#173b32,#708b78)";

                this.style.minHeight =
                    "200px";

            }
        );

    });



/* =====================================================
   REVEAL ON SCROLL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".story-image, .mission-image, .value-card, .process-card, .collection-card"
    );


const revealObserver =
    new IntersectionObserver(
        function(entries){

            entries.forEach(
                function(entry){

                    if(
                        entry.isIntersecting
                    ){

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold:.12
        }
    );


revealElements.forEach(
    function(element){

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .8s ease, transform .8s ease";

        revealObserver.observe(
            element
        );

    }
);