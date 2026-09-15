/* =====================================================
   INSTAF LORA
   TERMS & CONDITIONS PAGE JS
===================================================== */


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
   CLOSE MOBILE MENU AFTER LINK CLICK
===================================================== */

if (navMenu) {

    navMenu.querySelectorAll("a").forEach(function (link) {

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

const searchOverlay =
    document.getElementById("searchOverlay");

const searchClose =
    document.getElementById("searchClose");

const searchInput =
    document.getElementById("searchInput");

const searchSubmit =
    document.getElementById("searchSubmit");


if (searchBtn && searchOverlay) {

    searchBtn.addEventListener("click", function () {

        searchOverlay.classList.add("active");

        if (searchInput) {

            setTimeout(function () {

                searchInput.focus();

            }, 100);

        }

    });

}


if (searchClose && searchOverlay) {

    searchClose.addEventListener("click", function () {

        searchOverlay.classList.remove("active");

    });

}


/* =====================================================
   CLOSE SEARCH WITH ESC
===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (searchOverlay) {

            searchOverlay.classList.remove("active");

        }

        if (navMenu) {

            navMenu.classList.remove("active");

        }

    }

});


/* =====================================================
   SEARCH FUNCTION
===================================================== */

if (searchSubmit && searchInput) {

    searchSubmit.addEventListener("click", function () {

        const searchValue =
            searchInput.value.trim().toLowerCase();

        if (!searchValue) {

            alert("Please enter something to search.");

            return;

        }

        /*
            Basic website search routing.
            You can connect this later with your
            actual shop/product search system.
        */

        if (
            searchValue.includes("flower") ||
            searchValue.includes("bouquet") ||
            searchValue.includes("rose")
        ) {

            window.location.href =
                "shop.html";

        } else if (
            searchValue.includes("gift") ||
            searchValue.includes("hamper") ||
            searchValue.includes("cake") ||
            searchValue.includes("chocolate")
        ) {

            window.location.href =
                "shop.html";

        } else if (
            searchValue.includes("occasion") ||
            searchValue.includes("birthday") ||
            searchValue.includes("wedding") ||
            searchValue.includes("anniversary")
        ) {

            window.location.href =
                "occasions.html";

        } else {

            alert(
                "No matching result found. Please try another search."
            );

        }

    });

}


/* =====================================================
   ENTER KEY SEARCH
===================================================== */

if (searchInput) {

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            if (searchSubmit) {

                searchSubmit.click();

            }

        }

    });

}


/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backTop");


if (backTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });


    backTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =====================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener("click", function (event) {

    if (!navMenu || !menuToggle) {
        return;
    }

    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedToggle =
        menuToggle.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedToggle
    ) {

        navMenu.classList.remove("active");

    }

});