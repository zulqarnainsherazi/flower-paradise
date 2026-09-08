/* =====================================================
   INSTaflora FAQ JAVASCRIPT
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

document.querySelectorAll(".nav-menu a").forEach(function(link){

    link.addEventListener("click", function(){

        if(navMenu){
            navMenu.classList.remove("active");
        }

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
   FAQ ACCORDION
===================================================== */

const faqItems =
document.querySelectorAll(".faq-item");


faqItems.forEach(function(item){

    const question =
    item.querySelector(".faq-question");


    if(!question){
        return;
    }


    question.addEventListener("click", function(){

        const isActive =
        item.classList.contains("active");


        /* Close all */

        faqItems.forEach(function(otherItem){

            otherItem.classList.remove("active");

        });


        /* Open selected */

        if(!isActive){

            item.classList.add("active");

        }

    });

});


/* =====================================================
   FAQ FILTER
===================================================== */

const faqFilters =
document.querySelectorAll(".faq-filter");


const faqSearch =
document.getElementById("faqSearch");


const faqNoResults =
document.getElementById("faqNoResults");


function filterFAQs(){

    const activeFilter =
    document.querySelector(
        ".faq-filter.active"
    );


    const category =
    activeFilter
    ? activeFilter.dataset.category
    : "all";


    const searchText =
    faqSearch
    ? faqSearch.value
        .toLowerCase()
        .trim()
    : "";


    let visibleCount = 0;


    faqItems.forEach(function(item){

        const itemCategory =
        item.dataset.category || "";


        const itemQuestion =
        (
            item.dataset.question ||
            item.textContent
        ).toLowerCase();


        const categoryMatch =
        category === "all" ||
        itemCategory === category;


        const searchMatch =
        searchText === "" ||
        itemQuestion.includes(searchText);


        if(categoryMatch && searchMatch){

            item.classList.remove("hidden");

            visibleCount++;

        }else{

            item.classList.add("hidden");

            item.classList.remove("active");

        }

    });


    if(faqNoResults){

        if(visibleCount === 0){

            faqNoResults.classList.add("show");

        }else{

            faqNoResults.classList.remove("show");

        }

    }

}


/* Category buttons */

faqFilters.forEach(function(button){

    button.addEventListener("click", function(){

        faqFilters.forEach(function(btn){

            btn.classList.remove("active");

        });


        this.classList.add("active");


        filterFAQs();

    });

});


/* Search */

if(faqSearch){

    faqSearch.addEventListener(
        "input",
        filterFAQs
    );

}


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


            const emailInput =
            document.getElementById(
                "newsletterEmail"
            );


            const email =
            emailInput
            ? emailInput.value.trim()
            : "";


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
   CART
===================================================== */

let cartItems =
Number(
    localStorage.getItem(
        "instafloraCartItems"
    )
) || 0;


const cartButton =
document.getElementById("cartBtn");


const cartCounts =
document.querySelectorAll(".cart-count");


function updateCartCount(){

    cartCounts.forEach(function(counter){

        counter.textContent =
        cartItems;

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


if(cartButton){

    cartButton.addEventListener(
        "click",
        openCart
    );

}


updateCartCount();


/* =====================================================
   WISHLIST
===================================================== */

const wishlistButton =
document.getElementById("wishlistBtn");


let wishlistItems =
Number(
    localStorage.getItem(
        "instafloraWishlistItems"
    )
) || 0;


if(wishlistButton){

    wishlistButton.addEventListener(
        "click",
        function(){

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
    );

}
/* =========================================
   MOBILE WISHLIST
========================================= */

const mobileWishlistBtn =
document.getElementById(
    "mobileWishlistBtn"
);


if(mobileWishlistBtn){

    mobileWishlistBtn.addEventListener(
        "click",
        function(){

            alert("Your Wishlist is Empty.");

        }
    );

}


/* =========================================
   MOBILE CART
========================================= */

const mobileCartBtn =
document.getElementById(
    "mobileCartBtn"
);


if(mobileCartBtn){

    mobileCartBtn.addEventListener(
        "click",
        function(){

            const cartItems =
            Number(
                localStorage.getItem(
                    "instafloraCartItems"
                )
            ) || 0;


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
    );

}

/* =====================================================
   LOGIN / REGISTER MODAL
===================================================== */

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


/* Login tab */

if(loginTab && registerTab &&
   loginForm && registerForm){

    loginTab.addEventListener(
        "click",
        function(){

            loginTab.classList.add("active");

            registerTab.classList.remove("active");

            loginForm.classList.add("active");

            registerForm.classList.remove("active");

        }
    );


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
   SEARCH OVERLAY
===================================================== */

const searchBtn =
document.getElementById(
    "searchBtn"
);


const searchOverlay =
document.getElementById(
    "searchOverlay"
);


const searchClose =
document.getElementById(
    "searchClose"
);


const searchInput =
document.getElementById(
    "searchInput"
);


const searchSubmit =
document.getElementById(
    "searchSubmit"
);


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

    searchBtn.addEventListener(
        "click",
        openSearch
    );

}


if(searchClose){

    searchClose.addEventListener(
        "click",
        function(){

            searchOverlay.classList.remove(
                "active"
            );

        }
    );

}

/* Mobile Search */

if(mobileSearchBtn){

    mobileSearchBtn.addEventListener(
        "click",
        openSearch
    );

}


if(searchClose){

    searchClose.addEventListener(
        "click",
        function(){

            searchOverlay.classList.remove(
                "active"
            );

        }
    );

}


if(searchOverlay){

    searchOverlay.addEventListener(
        "click",
        function(e){

            if(e.target === searchOverlay){

                searchOverlay.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* Search submit */

if(searchSubmit){

    searchSubmit.addEventListener(
        "click",
        function(){

            const value =
            searchInput
            ? searchInput.value.trim()
            : "";


            if(value){

                alert(
                    'Searching Instaflora for "' +
                    value +
                    '"'
                );

            }

        }
    );

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(e){

        if(e.key === "Escape"){

            if(searchOverlay){

                searchOverlay.classList.remove(
                    "active"
                );

            }


            closeAccountModal();

        }

    }
);


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


/* =====================================================
   IMAGE FALLBACK
===================================================== */

document.querySelectorAll("img")
.forEach(function(image){

    image.addEventListener(
        "error",
        function(){

            this.style.background =
            "linear-gradient(135deg,#173b32,#708b78)";

            this.style.minHeight =
            "200px";

            this.alt =
            "Instaflora";

        }
    );

});
