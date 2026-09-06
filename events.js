/* =====================================================
   INSTaflora EVENTS DÉCOR
   JAVASCRIPT
===================================================== */


/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){

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


if(menuToggle){

    menuToggle.addEventListener("click", function(){

        navMenu.classList.toggle("active");

    });

}


/* Close mobile menu when link clicked */

document.querySelectorAll(".nav-menu a").forEach(function(link){

    link.addEventListener("click", function(){

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


if(searchBtn){

    searchBtn.addEventListener("click", function(){

        openSearch();

    });

}


if(mobileSearchBtn){

    mobileSearchBtn.addEventListener("click", function(){

        navMenu.classList.remove("active");

        openSearch();

    });

}


if(searchClose){

    searchClose.addEventListener("click", function(){

        searchOverlay.classList.remove("active");

    });

}


if(searchOverlay){

    searchOverlay.addEventListener("click", function(e){

        if(e.target === searchOverlay){

            searchOverlay.classList.remove("active");

        }

    });

}


document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        if(searchOverlay){

            searchOverlay.classList.remove("active");

        }

        if(navMenu){

            navMenu.classList.remove("active");

        }

    }

});


/* Search submit */

if(searchSubmit){

    searchSubmit.addEventListener("click", function(){

        const query =
            searchInput.value.trim();

        if(query === ""){

            alert("Please enter something to search.");

            return;

        }

        alert(
            'Searching for "' +
            query +
            '"'
        );

    });

}


if(searchInput){

    searchInput.addEventListener("keydown", function(e){

        if(e.key === "Enter"){

            e.preventDefault();

            if(searchSubmit){

                searchSubmit.click();

            }

        }

    });

}



/* =====================================================
   CART SYSTEM
===================================================== */

let cartItems =
    Number(localStorage.getItem("instafloraCartItems")) || 0;


const desktopCartBtn =
    document.getElementById("desktopCartBtn");

const mobileCartBtn =
    document.getElementById("mobileCartBtn");

const cartCounts =
    document.querySelectorAll(".cart-count");


function updateCartCount(){

    cartCounts.forEach(function(counter){

        counter.textContent = cartItems;

    });

    localStorage.setItem(
        "instafloraCartItems",
        cartItems
    );

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


if(desktopCartBtn){

    desktopCartBtn.addEventListener(
        "click",
        openCart
    );

}


if(mobileCartBtn){

    mobileCartBtn.addEventListener(
        "click",
        function(){

            navMenu.classList.remove("active");

            openCart();

        }
    );

}


updateCartCount();



/* =====================================================
   WISHLIST
===================================================== */

let wishlistItems =
    Number(
        localStorage.getItem(
            "instafloraWishlistItems"
        )
    ) || 0;


const desktopWishlistBtn =
    document.getElementById("desktopWishlistBtn");

const mobileWishlistBtn =
    document.getElementById("mobileWishlistBtn");


function openWishlist(){

    if(wishlistItems === 0){

        alert(
            "Your Wishlist is Empty."
        );

    }else{

        alert(
            "You have " +
            wishlistItems +
            " item(s) in your Wishlist."
        );

    }

}


if(desktopWishlistBtn){

    desktopWishlistBtn.addEventListener(
        "click",
        openWishlist
    );

}


if(mobileWishlistBtn){

    mobileWishlistBtn.addEventListener(
        "click",
        function(){

            navMenu.classList.remove("active");

            openWishlist();

        }
    );

}



/* =====================================================
   PRODUCT / OTHER WISHLIST BUTTONS
   IF PRESENT ON THIS PAGE
===================================================== */

const wishlistButtons =
    document.querySelectorAll(".wishlist");


wishlistButtons.forEach(function(button){

    button.addEventListener("click", function(){

        if(this.classList.contains("liked")){

            this.classList.remove("liked");

            this.textContent = "♡";

            wishlistItems =
                Math.max(
                    0,
                    wishlistItems - 1
                );

        }else{

            this.classList.add("liked");

            this.textContent = "♥";

            wishlistItems++;

        }


        localStorage.setItem(
            "instafloraWishlistItems",
            wishlistItems
        );

    });

});



/* =====================================================
   ACCOUNT MODAL
===================================================== */

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
   FORM DEMO
===================================================== */

if(loginForm){

    loginForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            alert(
                "Login form submitted successfully."
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
                "Account registration submitted successfully."
            );

        }
    );

}



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


if(backTop){

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

document.querySelectorAll("img").forEach(function(img){

    img.addEventListener("error", function(){

        this.style.display = "none";

        if(this.parentElement){

            this.parentElement.style.background =
                "linear-gradient(135deg,#191919,#5d4a24)";

        }

    });

});