/* =====================================================
   INSTaflora BEST SELLERS JS
===================================================== */


/* =====================================================
   NAVBAR
===================================================== */

const navbar =
    document.getElementById("navbar");

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


/* NAVBAR SCROLL */

window.addEventListener("scroll", function(){

    if(window.scrollY > 40){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});


/* MOBILE MENU */

if(menuToggle){

    menuToggle.addEventListener("click", function(){

        navMenu.classList.toggle("active");

    });

}


/* CLOSE MOBILE MENU AFTER LINK CLICK */

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

const searchMessage =
    document.getElementById("searchMessage");


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


document.addEventListener(
    "keydown",
    function(e){

        if(e.key === "Escape"){

            if(searchOverlay){

                searchOverlay.classList.remove(
                    "active"
                );

            }

            if(quickModal){

                quickModal.classList.remove(
                    "active"
                );

            }

        }

    }
);



/* =====================================================
   PRODUCT SEARCH
===================================================== */

function performSearch(){

    const query =
        searchInput.value
        .trim()
        .toLowerCase();


    if(query === ""){

        searchMessage.textContent =
            "Please enter something to search.";

        return;

    }


    const products =
        document.querySelectorAll(".product-card");


    let found = 0;


    products.forEach(function(product){

        const name =
            product.dataset.name
            .toLowerCase();

        const category =
            product.dataset.category
            .toLowerCase();


        if(
            name.includes(query) ||
            category.includes(query)
        ){

            product.style.display = "";

            found++;

        }else{

            product.style.display = "none";

        }

    });


    document.getElementById(
        "bestCollection"
    ).scrollIntoView({
        behavior:"smooth"
    });


    if(found > 0){

        searchMessage.textContent =
            found +
            " product(s) found.";

    }else{

        searchMessage.textContent =
            "No products found.";

    }


    setTimeout(function(){

        searchOverlay.classList.remove(
            "active"
        );

    },700);

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


const cartButton =
    document.getElementById("cartButton");

const mobileCartBtn =
    document.getElementById("mobileCartBtn");

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
   ADD TO CART
===================================================== */

document
    .querySelectorAll(".add-cart")
    .forEach(function(button){

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
   WISHLIST
===================================================== */

let wishlistItems =
    Number(
        localStorage.getItem(
            "instafloraWishlistItems"
        )
    ) || 0;


const wishlistButton =
    document.getElementById(
        "wishlistButton"
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


if(wishlistButton){

    wishlistButton.addEventListener(
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


/* PRODUCT WISHLIST */

document
    .querySelectorAll(".wishlist")
    .forEach(function(button){

        button.addEventListener(
            "click",
            function(){

                if(
                    this.classList.contains(
                        "liked"
                    )
                ){

                    this.classList.remove(
                        "liked"
                    );

                    this.textContent = "♡";

                    wishlistItems =
                        Math.max(
                            0,
                            wishlistItems - 1
                        );

                }else{

                    this.classList.add(
                        "liked"
                    );

                    this.textContent = "♥";

                    wishlistItems++;

                }


                localStorage.setItem(
                    "instafloraWishlistItems",
                    wishlistItems
                );

            }
        );

    });



/* =====================================================
   CATEGORY FILTER
===================================================== */

const categoryButtons =
    document.querySelectorAll(
        ".category-btn"
    );

const productGrid =
    document.getElementById(
        "productGrid"
    );

const noProducts =
    document.getElementById(
        "noProducts"
    );


let selectedCategory = "all";


categoryButtons.forEach(function(button){

    button.addEventListener(
        "click",
        function(){

            categoryButtons.forEach(
                function(btn){

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            this.classList.add("active");


            selectedCategory =
                this.dataset.category;


            filterProducts();

        }
    );

});


function filterProducts(){

    const products =
        Array.from(
            document.querySelectorAll(
                ".product-card"
            )
        );


    let visibleProducts = 0;


    products.forEach(function(product){

        const category =
            product.dataset.category;


        if(
            selectedCategory === "all" ||
            category === selectedCategory
        ){

            product.style.display = "";

            visibleProducts++;

        }else{

            product.style.display = "none";

        }

    });


    if(visibleProducts === 0){

        noProducts.style.display =
            "block";

    }else{

        noProducts.style.display =
            "none";

    }

}



/* =====================================================
   SORT PRODUCTS
===================================================== */

const sortProducts =
    document.getElementById(
        "sortProducts"
    );


if(sortProducts){

    sortProducts.addEventListener(
        "change",
        function(){

            const products =
                Array.from(
                    document.querySelectorAll(
                        ".product-card"
                    )
                );


            const value =
                this.value;


            products.sort(function(a,b){

                if(value === "low"){

                    return (
                        Number(a.dataset.price) -
                        Number(b.dataset.price)
                    );

                }


                if(value === "high"){

                    return (
                        Number(b.dataset.price) -
                        Number(a.dataset.price)
                    );

                }


                if(value === "name"){

                    return a.dataset.name
                        .localeCompare(
                            b.dataset.name
                        );

                }


                return (
                    Number(b.dataset.popular) -
                    Number(a.dataset.popular)
                );

            });


            products.forEach(
                function(product){

                    productGrid.appendChild(
                        product
                    );

                }
            );


            filterProducts();

        }
    );

}



/* =====================================================
   QUICK VIEW
===================================================== */

const quickModal =
    document.getElementById(
        "quickModal"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const quickImage =
    document.getElementById(
        "quickImage"
    );

const quickName =
    document.getElementById(
        "quickName"
    );

const quickPrice =
    document.getElementById(
        "quickPrice"
    );

const quickDescription =
    document.getElementById(
        "quickDescription"
    );

const quantityValue =
    document.getElementById(
        "quantityValue"
    );

const minusQty =
    document.getElementById(
        "minusQty"
    );

const plusQty =
    document.getElementById(
        "plusQty"
    );

const modalCart =
    document.getElementById(
        "modalCart"
    );


let currentQuickProduct =
    null;

let quantity = 1;


document
    .querySelectorAll(".quick-view")
    .forEach(function(button){

        button.addEventListener(
            "click",
            function(){

                currentQuickProduct =
                    this;


                quickImage.src =
                    this.dataset.image;


                quickName.textContent =
                    this.dataset.name;


                quickPrice.textContent =
                    this.dataset.price;


                quickDescription.textContent =
                    this.dataset.description;


                const parentCard =
                    this.closest(
                        ".product-card"
                    );


                const category =
                    parentCard.querySelector(
                        ".product-category"
                    );


                document.getElementById(
                    "quickCategory"
                ).textContent =
                    category
                    ? category.textContent
                    : "BEST SELLER";


                quantity = 1;

                quantityValue.textContent =
                    quantity;


                quickModal.classList.add(
                    "active"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    });



/* CLOSE QUICK MODAL */

function closeQuickModal(){

    quickModal.classList.remove(
        "active"
    );

    document.body.style.overflow = "";

}


if(modalClose){

    modalClose.addEventListener(
        "click",
        closeQuickModal
    );

}


if(quickModal){

    quickModal.addEventListener(
        "click",
        function(e){

            if(e.target === quickModal){

                closeQuickModal();

            }

        }
    );

}



/* =====================================================
   QUANTITY
===================================================== */

if(minusQty){

    minusQty.addEventListener(
        "click",
        function(){

            if(quantity > 1){

                quantity--;

                quantityValue.textContent =
                    quantity;

            }

        }
    );

}


if(plusQty){

    plusQty.addEventListener(
        "click",
        function(){

            quantity++;

            quantityValue.textContent =
                quantity;

        }
    );

}



/* =====================================================
   MODAL ADD TO CART
===================================================== */

if(modalCart){

    modalCart.addEventListener(
        "click",
        function(){

            cartItems += quantity;

            updateCartCount();


            this.textContent =
                "Added ✓";


            setTimeout(function(){

                modalCart.textContent =
                    "Add To Cart";

                closeQuickModal();

            },900);

        }
    );

}



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

    accountModal.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";

}


function closeAccountModal(){

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
                e.target === accountModal
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
   DEMO LOGIN / REGISTER
===================================================== */

if(loginForm){

    loginForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            alert(
                "Login system will be connected with your backend."
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
                "Registration system will be connected with your backend."
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