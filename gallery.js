/* =====================================================
   INSTaflora GALLERY JS
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


/* CLOSE MOBILE MENU WHEN LINK CLICKED */

document
.querySelectorAll(".nav-menu > a")
.forEach(function(link){

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

    if(!searchOverlay) return;

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


if(mobileSearchBtn){

    mobileSearchBtn.addEventListener(
        "click",
        function(){

            navMenu.classList.remove("active");

            openSearch();

        }
    );

}


if(searchClose){

    searchClose.addEventListener(
        "click",
        function(){

            searchOverlay.classList.remove("active");

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


/* ESCAPE */

document.addEventListener(
    "keydown",
    function(e){

        if(e.key === "Escape"){

            if(searchOverlay){

                searchOverlay.classList.remove(
                    "active"
                );

            }

            if(lightbox){

                lightbox.classList.remove(
                    "active"
                );

                document.body.style.overflow = "";

            }

        }

    }
);


/* SEARCH SUBMIT */

function performSearch(){

    const query =
        searchInput
        ? searchInput.value.trim()
        : "";

    if(!query){

        alert("Please enter something to search.");

        return;

    }

    window.location.href =
        "shop.html?search=" +
        encodeURIComponent(query);

}


if(searchSubmit){

    searchSubmit.addEventListener(
        "click",
        performSearch
    );

}


if(searchInput){

    searchInput.addEventListener(
        "keydown",
        function(e){

            if(e.key === "Enter"){

                e.preventDefault();

                performSearch();

            }

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


const desktopCartBtn =
    document.getElementById(
        "desktopCartBtn"
    );

const mobileCartBtn =
    document.getElementById(
        "mobileCartBtn"
    );

const cartCounts =
    document.querySelectorAll(
        ".cart-count"
    );


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

            navMenu.classList.remove(
                "active"
            );

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
    document.getElementById(
        "desktopWishlistBtn"
    );

const mobileWishlistBtn =
    document.getElementById(
        "mobileWishlistBtn"
    );


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

            navMenu.classList.remove(
                "active"
            );

            openWishlist();

        }
    );

}


/* =====================================================
   GALLERY FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(
        ".gallery-filter"
    );

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );

const galleryEmpty =
    document.getElementById(
        "galleryEmpty"
    );


filterButtons.forEach(function(button){

    button.addEventListener(
        "click",
        function(){

            filterButtons.forEach(
                function(btn){

                    btn.classList.remove(
                        "active"
                    );

                }
            );

            this.classList.add("active");


            const filter =
                this.dataset.filter;

            let visibleCount = 0;


            galleryItems.forEach(
                function(item){

                    const category =
                        item.dataset.category;


                    if(
                        filter === "all" ||
                        category === filter
                    ){

                        item.style.display =
                            "block";

                        item.style.animation =
                            "none";

                        void item.offsetWidth;

                        item.style.animation =
                            "galleryAppear .7s ease both";

                        visibleCount++;

                    }else{

                        item.style.display =
                            "none";

                    }

                }
            );


            if(galleryEmpty){

                if(visibleCount === 0){

                    galleryEmpty.style.display =
                        "block";

                }else{

                    galleryEmpty.style.display =
                        "none";

                }

            }

        }
    );

});


/* =====================================================
   LIGHTBOX
===================================================== */

const lightbox =
    document.getElementById(
        "lightbox"
    );

const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );

const lightboxTitle =
    document.getElementById(
        "lightboxTitle"
    );

const lightboxCategory =
    document.getElementById(
        "lightboxCategory"
    );

const lightboxClose =
    document.getElementById(
        "lightboxClose"
    );

const lightboxPrev =
    document.getElementById(
        "lightboxPrev"
    );

const lightboxNext =
    document.getElementById(
        "lightboxNext"
    );


let currentImageIndex = 0;


/* GET VISIBLE ITEMS */

function getVisibleGalleryItems(){

    return Array.from(
        galleryItems
    ).filter(function(item){

        return (
            item.style.display !== "none"
        );

    });

}


/* OPEN */

function openLightbox(index){

    const visibleItems =
        getVisibleGalleryItems();

    if(
        !visibleItems.length ||
        !lightbox
    ){

        return;

    }


    currentImageIndex = index;

    const item =
        visibleItems[currentImageIndex];

    const image =
        item.querySelector("img");

    const title =
        item.querySelector(
            ".gallery-overlay h3"
        );

    const category =
        item.querySelector(
            ".gallery-overlay span"
        );


    lightboxImage.src =
        image.src;

    lightboxImage.alt =
        image.alt;


    if(title){

        lightboxTitle.textContent =
            title.textContent;

    }


    if(category){

        lightboxCategory.textContent =
            category.textContent;

    }


    lightbox.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

}


/* CLOSE */

function closeLightbox(){

    if(!lightbox) return;

    lightbox.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


/* NEXT */

function showNextImage(){

    const visibleItems =
        getVisibleGalleryItems();

    if(!visibleItems.length) return;


    currentImageIndex =
        (currentImageIndex + 1)
        %
        visibleItems.length;

    openLightbox(
        currentImageIndex
    );

}


/* PREVIOUS */

function showPreviousImage(){

    const visibleItems =
        getVisibleGalleryItems();

    if(!visibleItems.length) return;


    currentImageIndex =
        (
            currentImageIndex -
            1 +
            visibleItems.length
        )
        %
        visibleItems.length;

    openLightbox(
        currentImageIndex
    );

}


/* VIEW BUTTONS */

galleryItems.forEach(function(item){

    const viewButton =
        item.querySelector(
            ".view-image"
        );


    if(viewButton){

        viewButton.addEventListener(
            "click",
            function(e){

                e.preventDefault();

                e.stopPropagation();


                const visibleItems =
                    getVisibleGalleryItems();

                const index =
                    visibleItems.indexOf(
                        item
                    );


                openLightbox(index);

            }
        );

    }


    /* CLICK IMAGE */

    const image =
        item.querySelector("img");

    if(image){

        image.addEventListener(
            "click",
            function(){

                const visibleItems =
                    getVisibleGalleryItems();

                const index =
                    visibleItems.indexOf(
                        item
                    );

                openLightbox(index);

            }
        );

    }

});


if(lightboxClose){

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


if(lightboxNext){

    lightboxNext.addEventListener(
        "click",
        showNextImage
    );

}


if(lightboxPrev){

    lightboxPrev.addEventListener(
        "click",
        showPreviousImage
    );

}


/* CLICK OUTSIDE */

if(lightbox){

    lightbox.addEventListener(
        "click",
        function(e){

            if(e.target === lightbox){

                closeLightbox();

            }

        }
    );

}


/* KEYBOARD NAVIGATION */

document.addEventListener(
    "keydown",
    function(e){

        if(
            !lightbox ||
            !lightbox.classList.contains(
                "active"
            )
        ){

            return;

        }


        if(e.key === "ArrowRight"){

            showNextImage();

        }


        if(e.key === "ArrowLeft"){

            showPreviousImage();

        }

    }
);


/* =====================================================
   ACCOUNT MODAL
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


function openAccountModal(){

    if(!accountModal) return;

    accountModal.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";

}


function closeAccountModal(){

    if(!accountModal) return;

    accountModal.classList.remove(
        "show"
    );

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

            navMenu.classList.remove(
                "active"
            );

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

            if(
                e.target ===
                accountModal
            ){

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


/* REGISTER TAB */

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
   ACCOUNT FORM DEMO
===================================================== */

if(loginForm){

    loginForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            alert(
                "Login system will be connected here."
            );

        }
    );

}


if(registerForm){

    registerForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            alert(
                "Registration system will be connected here."
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


window.addEventListener(
    "scroll",
    function(){

        if(
            window.scrollY > 500
        ){

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

document
.querySelectorAll("img")
.forEach(function(image){

    image.addEventListener(
        "error",
        function(){

            this.style.background =
                "#e9e3d6";

            this.style.minHeight =
                "150px";

        }
    );

});