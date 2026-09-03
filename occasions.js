/* =====================================================
   INSTAFLOWER OCCASIONS JAVASCRIPT
===================================================== */


/* =====================================================
   NAVBAR
===================================================== */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


if(menuToggle && navMenu){

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING NORMAL LINK
===================================================== */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});



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


/* =====================================================
   OPEN SEARCH FUNCTION
===================================================== */

function openSearch(){

    if(!searchOverlay){
        return;
    }

    searchOverlay.classList.add("active");


    setTimeout(() => {

        if(searchInput){

            searchInput.focus();

        }

    },300);

}


/* =====================================================
   DESKTOP SEARCH
===================================================== */

if(searchBtn){

    searchBtn.addEventListener(
        "click",
        openSearch
    );

}


/* =====================================================
   MOBILE SEARCH
===================================================== */

if(mobileSearchBtn){

    mobileSearchBtn.addEventListener(
        "click",
        () => {

            /* Close mobile menu */

            if(navMenu){

                navMenu.classList.remove("active");

            }


            /* Open same search overlay */

            openSearch();

        }
    );

}


/* =====================================================
   CLOSE SEARCH
===================================================== */

if(searchClose){

    searchClose.addEventListener(
        "click",
        () => {

            searchOverlay.classList.remove(
                "active"
            );

        }
    );

}


/* =====================================================
   CLOSE SEARCH OUTSIDE BOX
===================================================== */

if(searchOverlay){

    searchOverlay.addEventListener(
        "click",
        (e) => {

            if(e.target === searchOverlay){

                searchOverlay.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =====================================================
   ESC CLOSE SEARCH
===================================================== */

document.addEventListener(
    "keydown",
    (e) => {

        if(e.key === "Escape"){

            if(searchOverlay){

                searchOverlay.classList.remove(
                    "active"
                );

            }

        }

    }
);



/* =====================================================
   WISHLIST
===================================================== */

const wishlistButtons =
    document.querySelectorAll(
        "#desktopWishlistBtn, #mobileWishlistBtn"
    );


wishlistButtons.forEach(button => {

    button.addEventListener(
        "click",
        function(){

            if(this.textContent.trim() === "♡"){

                this.textContent = "♥";

                this.style.color = "#b97973";

            }else{

                this.textContent = "♡";

                this.style.color = "";

            }

        }
    );

});



/* =====================================================
   CART
===================================================== */

const desktopCartBtn =
    document.getElementById(
        "desktopCartBtn"
    );

const mobileCartBtn =
    document.getElementById(
        "mobileCartBtn"
    );


const cartButtons =
    document.querySelectorAll(
        ".add-cart"
    );


/*
   IMPORTANT:

   There are now two cart-count elements:

   1. Desktop cart count
   2. Mobile cart count

   So querySelector() is not enough.

   We use querySelectorAll() so both
   counters stay synchronized.
*/

const cartCounts =
    document.querySelectorAll(
        ".cart-count"
    );


let cartItems = 0;



/* =====================================================
   UPDATE ALL CART COUNTS
===================================================== */

function updateCartCount(){

    cartCounts.forEach(count => {

        count.textContent =
            cartItems;

    });

}



/* =====================================================
   PRODUCT ADD TO CART
===================================================== */

cartButtons.forEach(button => {

    button.addEventListener(
        "click",
        function(){

            cartItems++;

            updateCartCount();


            const originalText =
                this.textContent;


            this.textContent =
                "Added ✓";


            setTimeout(() => {

                this.textContent =
                    originalText;

            },1200);

        }
    );

});



/* =====================================================
   DESKTOP CART
===================================================== */

if(desktopCartBtn){

    desktopCartBtn.addEventListener(
        "click",
        () => {

            /*
                Your current page does not have
                a separate cart page/modal.

                The button is kept functional
                without changing the page design.
            */

            if(cartItems === 0){

                alert(
                    "Your cart is currently empty."
                );

            }else{

                alert(
                    "You have " +
                    cartItems +
                    " item(s) in your cart."
                );

            }

        }
    );

}


/* =====================================================
   MOBILE CART
===================================================== */

if(mobileCartBtn){

    mobileCartBtn.addEventListener(
        "click",
        () => {

            if(cartItems === 0){

                alert(
                    "Your cart is currently empty."
                );

            }else{

                alert(
                    "You have " +
                    cartItems +
                    " item(s) in your cart."
                );

            }

        }
    );

}



/* =====================================================
   LOGIN / REGISTER MODAL
===================================================== */

const accountBtn =
    document.getElementById(
        "accountBtn"
    );

const mobileAccountBtn =
    document.getElementById(
        "mobileAccountBtn"
    );


const accountModal =
    document.getElementById(
        "accountModal"
    );

const accountClose =
    document.getElementById(
        "accountClose"
    );


const loginTab =
    document.getElementById(
        "loginTab"
    );

const registerTab =
    document.getElementById(
        "registerTab"
    );


const loginForm =
    document.getElementById(
        "loginForm"
    );

const registerForm =
    document.getElementById(
        "registerForm"
    );



/* =====================================================
   OPEN ACCOUNT MODAL
===================================================== */

function openAccountModal(){

    if(!accountModal){
        return;
    }

    accountModal.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";

}



/* =====================================================
   CLOSE ACCOUNT MODAL
===================================================== */

function closeAccountModal(){

    if(!accountModal){
        return;
    }

    accountModal.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";

}



/* =====================================================
   DESKTOP ACCOUNT
===================================================== */

if(accountBtn){

    accountBtn.addEventListener(
        "click",
        openAccountModal
    );

}



/* =====================================================
   MOBILE ACCOUNT
===================================================== */

if(mobileAccountBtn){

    mobileAccountBtn.addEventListener(
        "click",
        function(e){

            e.preventDefault();


            /* Close menu */

            if(navMenu){

                navMenu.classList.remove(
                    "active"
                );

            }


            /* Open modal */

            openAccountModal();

        }
    );

}



/* =====================================================
   CLOSE ACCOUNT
===================================================== */

if(accountClose){

    accountClose.addEventListener(
        "click",
        closeAccountModal
    );

}



/* =====================================================
   CLICK OUTSIDE ACCOUNT MODAL
===================================================== */

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

            loginTab.classList.add(
                "active"
            );

            registerTab.classList.remove(
                "active"
            );


            loginForm.classList.add(
                "active"
            );

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

            registerTab.classList.add(
                "active"
            );

            loginTab.classList.remove(
                "active"
            );


            registerForm.classList.add(
                "active"
            );

            loginForm.classList.remove(
                "active"
            );

        }
    );

}



/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById(
        "backTop"
    );


if(backTop){

    window.addEventListener(
        "scroll",
        () => {

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
        () => {

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        }
    );

}