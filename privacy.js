/* =====================================================
   INSTAFLOWER
   PRIVACY POLICY PAGE JS
===================================================== */


/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (!navbar) {
        return;
    }

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}


/* =====================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
===================================================== */

if (navMenu) {

    const navLinks = navMenu.querySelectorAll(
        "a:not(.mobile-account)"
    );

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

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

const searchSubmit =
document.getElementById("searchSubmit");


function openSearch() {

    if (!searchOverlay) {
        return;
    }

    searchOverlay.classList.add("active");


    /* Close mobile menu */

    if (navMenu) {

        navMenu.classList.remove("active");

    }


    setTimeout(function () {

        if (searchInput) {

            searchInput.focus();

        }

    }, 300);

}


/* Desktop Search */

if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        openSearch
    );

}


/* Mobile Search */

if (mobileSearchBtn) {

    mobileSearchBtn.addEventListener(
        "click",
        openSearch
    );

}


/* Close Search */

function closeSearch() {

    if (searchOverlay) {

        searchOverlay.classList.remove(
            "active"
        );

    }

}


if (searchClose) {

    searchClose.addEventListener(
        "click",
        closeSearch
    );

}


/* Click outside search box */

if (searchOverlay) {

    searchOverlay.addEventListener(
        "click",
        function (e) {

            if (e.target === searchOverlay) {

                closeSearch();

            }

        }
    );

}


/* Search Submit */

if (searchSubmit) {

    searchSubmit.addEventListener(
        "click",
        function () {

            const value =
            searchInput
            ? searchInput.value.trim()
            : "";


            if (value) {

                alert(
                    'Searching Instaflora for "' +
                    value +
                    '"'
                );

            }

        }
    );

}


/* Search Enter Key */

if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function (e) {

            if (e.key === "Enter") {

                e.preventDefault();

                if (searchSubmit) {

                    searchSubmit.click();

                }

            }

        }
    );

}


/* =====================================================
   WISHLIST
===================================================== */

let wishlistItems =
Number(
    localStorage.getItem(
        "instafloraWishlistItems"
    )
) || 0;


function openWishlist() {

    if (wishlistItems === 0) {

        alert(
            "Your Wishlist is Empty."
        );

    } else {

        alert(
            "You have " +
            wishlistItems +
            " item(s) in your Wishlist."
        );

    }


    /* Close mobile menu */

    if (navMenu) {

        navMenu.classList.remove(
            "active"
        );

    }

}


/* Desktop Wishlist */

const wishlistBtn =
document.getElementById(
    "wishlistBtn"
);

if (wishlistBtn) {

    wishlistBtn.addEventListener(
        "click",
        openWishlist
    );

}


/* Mobile Wishlist */

const mobileWishlistBtn =
document.getElementById(
    "mobileWishlistBtn"
);

if (mobileWishlistBtn) {

    mobileWishlistBtn.addEventListener(
        "click",
        openWishlist
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


function updateCartCount() {

    document
    .querySelectorAll(".cart-count")
    .forEach(function (counter) {

        counter.textContent =
        cartItems;

    });

}


function openCart() {

    if (cartItems === 0) {

        alert(
            "Your Shopping Cart is Empty."
        );

    } else {

        alert(
            "You have " +
            cartItems +
            " item(s) in your Shopping Cart."
        );

    }


    /* Close mobile menu */

    if (navMenu) {

        navMenu.classList.remove(
            "active"
        );

    }

}


/* Desktop Cart */

const cartBtn =
document.getElementById(
    "cartBtn"
);

if (cartBtn) {

    cartBtn.addEventListener(
        "click",
        openCart
    );

}


/* Mobile Cart */

const mobileCartBtn =
document.getElementById(
    "mobileCartBtn"
);

if (mobileCartBtn) {

    mobileCartBtn.addEventListener(
        "click",
        openCart
    );

}


/* Update cart number */

updateCartCount();


/* =====================================================
   LOGIN / REGISTER POPUP
===================================================== */

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

const mobileAccountBtn =
document.getElementById(
    "mobileAccountBtn"
);


/* =====================================================
   OPEN ACCOUNT POPUP
===================================================== */

function openAccountModal() {

    if (!accountModal) {
        return;
    }

    accountModal.classList.add("active");


    /* Close mobile menu */

    if (navMenu) {

        navMenu.classList.remove(
            "active"
        );

    }

}


/* =====================================================
   CLOSE ACCOUNT POPUP
===================================================== */

function closeAccountModal() {

    if (!accountModal) {
        return;
    }

    accountModal.classList.remove(
        "active"
    );

}


/* Mobile Login/Register */

if (mobileAccountBtn) {

    mobileAccountBtn.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            openAccountModal();

        }
    );

}


/* Close button */

if (accountClose) {

    accountClose.addEventListener(
        "click",
        closeAccountModal
    );

}


/* Click outside popup */

if (accountModal) {

    accountModal.addEventListener(
        "click",
        function (e) {

            if (e.target === accountModal) {

                closeAccountModal();

            }

        }
    );

}


/* =====================================================
   LOGIN TAB
===================================================== */

if (loginTab) {

    loginTab.addEventListener(
        "click",
        function () {

            loginTab.classList.add(
                "active"
            );

            if (registerTab) {

                registerTab.classList.remove(
                    "active"
                );

            }


            if (loginForm) {

                loginForm.classList.add(
                    "active"
                );

            }


            if (registerForm) {

                registerForm.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =====================================================
   REGISTER TAB
===================================================== */

if (registerTab) {

    registerTab.addEventListener(
        "click",
        function () {

            registerTab.classList.add(
                "active"
            );

            if (loginTab) {

                loginTab.classList.remove(
                    "active"
                );

            }


            if (registerForm) {

                registerForm.classList.add(
                    "active"
                );

            }


            if (loginForm) {

                loginForm.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =====================================================
   LOGIN FORM
===================================================== */

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Login feature is coming soon."
            );

        }
    );

}


/* =====================================================
   REGISTER FORM
===================================================== */

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Registration feature is coming soon."
            );

        }
    );

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (e) {

        if (e.key === "Escape") {

            closeSearch();

            closeAccountModal();

            if (navMenu) {

                navMenu.classList.remove(
                    "active"
                );

            }

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


if (backTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 450) {

                backTop.classList.add(
                    "show"
                );

            } else {

                backTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   SMOOTH POLICY NAVIGATION
===================================================== */

const policyLinks =
document.querySelectorAll(
    ".policy-navigation a"
);


policyLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (e) {

                const targetId =
                link.getAttribute(
                    "href"
                );


                if (
                    !targetId ||
                    !targetId.startsWith("#")
                ) {

                    return;

                }


                const target =
                document.querySelector(
                    targetId
                );


                if (!target) {

                    return;

                }


                e.preventDefault();


                const offset = 110;


                const position =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                offset;


                window.scrollTo({

                    top: position,

                    behavior: "smooth"

                });


                if (navMenu) {

                    navMenu.classList.remove(
                        "active"
                    );

                }

            }
        );

    }
);


/* =====================================================
   END
===================================================== */