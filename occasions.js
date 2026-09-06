/* =====================================================
   INSTAFLOWER
   OCCASIONS PAGE JAVASCRIPT
===================================================== */


/* =====================================================
   NAVBAR
===================================================== */

const navbar = document.getElementById("navbar");

if(navbar){

    window.addEventListener("scroll", function(){

        if(window.scrollY > 40){

            navbar.classList.add("scrolled");

        }else{

            navbar.classList.remove("scrolled");

        }

    });

}


/* =====================================================
   MOBILE MENU
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

if(navMenu){

    navMenu.querySelectorAll("a").forEach(function(link){

        link.addEventListener("click", function(){

            navMenu.classList.remove("active");

        });

    });

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


/* =====================================================
   OPEN SEARCH
===================================================== */

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


/* =====================================================
   DESKTOP SEARCH
===================================================== */

if(searchBtn){

    searchBtn.addEventListener(
        "click",
        function(){

            openSearch();

        }
    );

}


/* =====================================================
   MOBILE SEARCH
===================================================== */

if(mobileSearchBtn){

    mobileSearchBtn.addEventListener(
        "click",
        function(){

            if(navMenu){

                navMenu.classList.remove("active");

            }

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
        function(){

            if(searchOverlay){

                searchOverlay.classList.remove("active");

            }

        }
    );

}


/* =====================================================
   CLOSE SEARCH BY CLICKING OUTSIDE
===================================================== */

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


/* =====================================================
   ESCAPE CLOSE SEARCH
===================================================== */

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


/* =====================================================
   WISHLIST
===================================================== */

const wishlistButtons =
    document.querySelectorAll(
        "#desktopWishlistBtn, #mobileWishlistBtn"
    );


wishlistButtons.forEach(function(button){

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

const cartCounts =
    document.querySelectorAll(
        ".cart-count"
    );


let cartItems = 0;


/* =====================================================
   UPDATE CART COUNT
===================================================== */

function updateCartCount(){

    cartCounts.forEach(function(count){

        count.textContent =
            cartItems;

    });

}


/* =====================================================
   CART MESSAGE
===================================================== */

function openCart(){

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


/* =====================================================
   ADD TO CART
===================================================== */

cartButtons.forEach(function(button){

    button.addEventListener(
        "click",
        function(){

            cartItems++;

            updateCartCount();


            const originalText =
                this.textContent;


            this.textContent =
                "Added ✓";


            setTimeout(function(){

                button.textContent =
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
        function(){

            openCart();

        }
    );

}


/* =====================================================
   MOBILE CART
===================================================== */

if(mobileCartBtn){

    mobileCartBtn.addEventListener(
        "click",
        function(){

            if(navMenu){

                navMenu.classList.remove(
                    "active"
                );

            }

            openCart();

        }
    );

}


/* =====================================================
   INITIAL CART COUNT
===================================================== */

updateCartCount();


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

    accountModal.classList.add("show");

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

    accountModal.classList.remove("show");

    document.body.style.overflow =
        "";

}


/* =====================================================
   DESKTOP ACCOUNT
===================================================== */

if(accountBtn){

    accountBtn.addEventListener(
        "click",
        function(){

            openAccountModal();

        }
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


            if(navMenu){

                navMenu.classList.remove(
                    "active"
                );

            }


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
        function(){

            closeAccountModal();

        }
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

if(loginTab && registerTab && loginForm && registerForm){

    loginTab.addEventListener(
        "click",
        function(){

            loginTab.classList.add("active");

            registerTab.classList.remove("active");

            loginForm.classList.add("active");

            registerForm.classList.remove("active");

        }
    );


    /* =================================================
       REGISTER TAB
    ================================================= */

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
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById(
        "backTop"
    );


if(backTop){

    window.addEventListener(
        "scroll",
        function(){

            if(window.scrollY > 500){

                backTop.classList.add("show");

            }else{

                backTop.classList.remove("show");

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