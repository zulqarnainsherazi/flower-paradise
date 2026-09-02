/* =====================================================
   INSTAFLOWER OCCASIONS JAVASCRIPT
===================================================== */


/* =====================================================
   NAVBAR
===================================================== */

const navbar = document.getElementById("navbar");

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


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});



/* =====================================================
   SEARCH
===================================================== */

const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const searchClose = document.getElementById("searchClose");
const searchInput = document.getElementById("searchInput");

if(searchBtn){

    searchBtn.addEventListener("click", () => {

        searchOverlay.classList.add("active");

        setTimeout(() => {
            searchInput.focus();
        }, 300);

    });

}


if(searchClose){

    searchClose.addEventListener("click", () => {

        searchOverlay.classList.remove("active");

    });

}


/* Close when clicking outside */

searchOverlay.addEventListener("click", (e) => {

    if(e.target === searchOverlay){

        searchOverlay.classList.remove("active");

    }

});


/* Close with ESC */

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        searchOverlay.classList.remove("active");

    }

});
/* =====================================================
   LOGIN / REGISTER MODAL
===================================================== */

const accountBtn = document.getElementById("accountBtn");
const mobileAccountBtn = document.getElementById("mobileAccountBtn");

const accountModal = document.getElementById("accountModal");
const accountClose = document.getElementById("accountClose");

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");


function openAccountModal(){

    accountModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeAccountModal(){

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

accountClose.addEventListener(
    "click",
    closeAccountModal
);


/* CLICK OUTSIDE */

accountModal.addEventListener(
    "click",
    function(e){

        if(e.target === accountModal){

            closeAccountModal();

        }

    }
);


/* LOGIN TAB */

loginTab.addEventListener(
    "click",
    function(){

        loginTab.classList.add("active");

        registerTab.classList.remove("active");

        loginForm.classList.add("active");

        registerForm.classList.remove("active");

    }
);


/* REGISTER TAB */

registerTab.addEventListener(
    "click",
    function(){

        registerTab.classList.add("active");

        loginTab.classList.remove("active");

        registerForm.classList.add("active");

        loginForm.classList.remove("active");

    }
);