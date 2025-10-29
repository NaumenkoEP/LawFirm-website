// HANDLE PHONE NUMBERS CONTAINER
$(document).ready(function () {
    const $phoneNumsButton = $("#phonenums-button");
    const $phoneNumsContainer = $(".phonenums-container");
    const $phoneNumsArrow = $("#arrow");

    // Function to toggle phone numbers container
    const showPhoneNums = () => {
        const { width, left } = $phoneNumsButton[0].getBoundingClientRect();

        $phoneNumsContainer.css({
            width: `${width}px`,
            left: `${left}px`,
            display: $phoneNumsContainer.css("display") === "flex" ? "none" : "flex",
        });

        $phoneNumsArrow.css("transform", $phoneNumsContainer.css("display") === "flex" ? "rotate(180deg)" : "rotate(0deg)");
    };

    // Event listener for click on button
    $phoneNumsButton.on("click", showPhoneNums);

    // Update position on window resize
    $(window).on("resize", () => {
        if ($phoneNumsContainer.css("display") === "flex") {
            const { width, left } = $phoneNumsButton[0].getBoundingClientRect();
            $phoneNumsContainer.css({ width: `${width}px`, left: `${left}px` });
        }
    });

    // Hide container when clicking outside
    $(document).on("click", (event) => {
        if (!$phoneNumsButton.is(event.target) && !$phoneNumsContainer.has(event.target).length) {
            $phoneNumsContainer.css("display", "none");
            $phoneNumsArrow.css("transform", "rotate(0deg)");
        }
    });
});


// HANDLE SWIPERS
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const swiper2 = new Swiper('.swiper-2', {
    loop: true,
    slidesPerView: 1, 
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    },
    speed: 0, // Disable animation speed (instant change)
    allowTouchMove: false, // Optional: Disable touch/mouse drag swiping
    effect: 'none',
});


// HANDLE PRODUCT BACKGROUNDS
imageSources = [
    "https://s3-alpha-sig.figma.com/img/900c/9764/1944b311cdf6e7fafef40bd6bdcc8b17?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a96zVWzvb~BfWaSfQz~PnNYIirbj8oUb52uOMa2sTTMXgKcNpaInjj9g08OCuYTvkIrnsAak57fHzduo793s35RbRV-3KF6Wr2-Q7AUPkJImbe0gbonQ7MD1AfqbYyCWmS7P1od~VxloUZWifn6KUjSvItBGmGcMu2hDFfSy5~HiPxgdbmmZSjqDKaSr42p4rkF4yc2FPN~3sWnB9O5MdGkkzRsvaKxAZUK9BTOFN4Mmi2e~qHpmPA8Uvh43dn2vkmlujJBs2EQBFQj1anyevaphtOXLEGVCkitLhPbud4MJgzr~Hml3Yt7arHcYmQyQECYyjou4~6u6efesEFoHQQ__", 
    "https://s3-alpha-sig.figma.com/img/031f/2550/5b59e3a0b7671b5960b8bbf3da51eedd?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aRMDtybmLf~C2AHTgzgRAMsKBHfITC0RqBNIYrMJBklXcSltgU06YTrG5q5ySIT-zaYKIZ1lztVdjLwmObuQj9tT8V2dXyRN~SxeVFl1hothWeIMY5LwKCKOQr-n-ShOEkSJjEiBihUOG90XJgcikZQPscvm9xw8XmYFG3pabROBApzUstY0GcoER-Thcw-YDz~vh32yiiKakVHkiu1ymAOfi5QIvAq3HXTlTYZY9OEiH3h4kww62LUG4NktKVThDz98ZYbJuFWjJbJFU77I3BqMwSMmuaGKotkxTL-kM-5AbBthUsY7qUvtOxvNjc3ZwW~1l9leU6X9Xx6-YjTObw__", 
    "https://s3-alpha-sig.figma.com/img/9998/bbf7/972b3958fd8a321e839c133ff7d18277?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Lax25JittmW~CXMJlSboCbF~Sygcxu8daDVr2ngGNrksmS3NWV9Wxg5KUQdd5WAa58EKSHh0E4h-LVR0622L4Am5FmQ~KDKA63YV792wrq69lDTtRQeDhWJ~lMoh4W4YejMd6sk8sgM3Dp2qV5XJboUltpP56zORX33hTJXPRr7D~VCtqsrIZOF5r4jippZnOcqcVA8USZdj~R3m-RHRJN0NdfW-mIUBzU0Bf4ACxQhGOGC8ObigQnqEaz5fpa8HnupJR9IeQwgkHgGJ2EhYt2056UuDwdtvPOIu1r8rcQhd4xupFhQ9j22WlOFSw06mxQwlIxtBfYeW1nodQvwo-g__", 
    "https://s3-alpha-sig.figma.com/img/9998/bbf7/972b3958fd8a321e839c133ff7d18277?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Lax25JittmW~CXMJlSboCbF~Sygcxu8daDVr2ngGNrksmS3NWV9Wxg5KUQdd5WAa58EKSHh0E4h-LVR0622L4Am5FmQ~KDKA63YV792wrq69lDTtRQeDhWJ~lMoh4W4YejMd6sk8sgM3Dp2qV5XJboUltpP56zORX33hTJXPRr7D~VCtqsrIZOF5r4jippZnOcqcVA8USZdj~R3m-RHRJN0NdfW-mIUBzU0Bf4ACxQhGOGC8ObigQnqEaz5fpa8HnupJR9IeQwgkHgGJ2EhYt2056UuDwdtvPOIu1r8rcQhd4xupFhQ9j22WlOFSw06mxQwlIxtBfYeW1nodQvwo-g__"
]
$(document).ready(function () {
    $(".product").each(function(index) {
        $(this).css("background-image", "url('" + imageSources[index] + "')");
    });
})

// HANDLE PRODUCT-DETAILS-WINDOW
const productWindow = $(".product-details-window")
const productsGrid = $(".products .grid")
const showProductDetails = () => {
    productWindow.css({
        display: "flex"
    })
    productsGrid.css({
        opacity: 0
    })

}
$(".product .info-container .buttons-container .type-1").each(function(){
    $(this).on("click", showProductDetails)
})
const hideProductDetails = () => {
    productWindow.css({
        display: "none"
    })
    productsGrid.css({
        opacity: 1
    })
}
$(".product-details-window .cancel-button").on("click", hideProductDetails)


// HANDLE TRY-ON WINDOW
const tryonWindow = $(".products .try-on")
const title = $(".products .body-title")
const showTryonWindow = () => {
    productWindow.css({
        display: "none"
    })
    title.css({
        display: "none"
    })
    tryonWindow.css({
        display: "flex"
    })
}
$(".product-details-window .info-container button").each(function(){
    $(this).on("click", showTryonWindow)
})
const hideTryonWindow = () => {
    productWindow.css({
        display: "flex"
    })
    title.css({
        display: "block"
    })
    tryonWindow.css({
        display: "none"
    })
}
$(".products .try-on .cancel-button").each(function(){
    $(this).on("click", hideTryonWindow)
})


// HANDLE SWIPER MOBILE VERSION
const handleSwiperMobile = () => {
    if(window.innerWidth <= 630){
        $(".about .bottom .swiper .swiper-wrapper").html(
            `
            <div class="swiper-slide grid">
                <div style="background-color: #b44cf2;position: relative;" class="card">
                    <div class="img-container"><img src="img/protected-logo1.png"></div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                    <div class="dotted-pattern"></div>
                </div>
            </div>
            <div class="swiper-slide grid">
                <div style="background-color: #7879f9;" class="card">
                    <div class="img-container"><img src="img/auction-logo1.png"></div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                </div>
            </div>
            <div class="swiper-slide grid">
                <div style="background-color: #ff4faa;" class="card">
                    <div class="img-container"><img src="img/legal-logo1.png"></div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                </div>
            </div>
            <div class="swiper-slide grid">
                <div style="background-color: #4b6bf2;position: relative;" class="card">
                    <div class="img-container"><img src="img/protected-logo2.png"></div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                    <div class="dotted-pattern"></div>
                </div>
            </div>
            <div class="swiper-slide grid">
                <div style="background-color: #ff6f7c;" class="card">
                    <div class="img-container"><img src="img/auction-logo2.png"></div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                </div>
            </div>
            <div class="swiper-slide grid">
                <div style="background-color: #ff4ff0;" class="card">
                    <div class="img-container"><img src="img/legal-logo2.png"></div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                </div>
            </div>
            `
        ) 
    } else {
        $(".about .bottom .swiper .swiper-wrapper").html(
            `
            <div class="swiper-slide grid">
                        <div style="background-color: #b44cf2;position: relative;" class="card">
                            <div class="img-container"><img src="img/protected-logo1.png"></div>
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                            <div class="dotted-pattern"></div>
                        </div>
                        <div style="background-color: #7879f9;" class="card auction1">
                            <div class="img-container"><img src="img/auction-logo1.png"></div>
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                        </div>
                        <div style="background-color: #ff4faa;" class="card">
                            <div class="img-container"><img src="img/legal-logo1.png"></div>
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                        </div>
                    </div>
                    <div class="swiper-slide grid">
                        <div style="background-color: #4b6bf2;position: relative;" class="card">
                            <div class="img-container"><img src="img/protected-logo2.png"></div>
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                            <div class="dotted-pattern"></div>
                        </div>
                        <div style="background-color: #ff6f7c;" class="card">
                            <div class="img-container"><img src="img/auction-logo2.png"></div>
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                        </div>
                        <div style="background-color: #ff4ff0;" class="card">
                            <div class="img-container"><img src="img/legal-logo2.png"></div>
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                        </div>
                    </div>
            `
        )
    }
}
$(window).on("resize", handleSwiperMobile);
$(document).ready(handleSwiperMobile)


// HANDLE HEADER MOBILE VERSION
const handleHeaderMobile = () => {
    if(window.innerWidth <= 630){
        $("header .top").css({
            display: "none"
        })
        $("header .bottom").html(
            `
            <div style="display: flex;  gap: 35vw;">
                <div style="border-radius: 50%; background-color: #fb6c47; 
                        width: 44px; height: 44px; display: flex; 
                        justify-content: center; align-items: center;
                        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);">
                    <i style="color: #FFFFFF;" class="fas fa-phone"></i>
                </div>

                <img style="height: 60px;" src="img/logo.png">

                <img style="cursor: pointer;" class="burger-button" src="img/burger.png">
            </div>
            <div class="mobile-header-bottom" style="display: none; flex-flow: column nowrap; gap: 40px; align-items: center; padding-bottom: 30px;">
                <a style = "font-size: 28px;">Lorem ipsum</a>
                <a style = "font-size: 28px;">Dolor sit amet</a>
                <a style = "font-size: 28px;">Donec sodales</a>

                <span style="color: #1315A5; font-size: 15px; cursor: pointer;" id="phonenums-button"><i class="fas fa-phone"></i> Телефоны для связи <i style="transition: 0.5s ease;" id="arrow" class="fas fa-caret-down"></i></span>
                <span style="color: #1315A5; font-size: 15px;"><i class="fas fa-map-marker-alt"></i> Улица: Пушкина 27 <i class="fas fa-caret-down"></i></span>
                <span style="color: #1315A5; font-size: 15px;"><i class="far fa-clock"></i> Режим работы <i class="fas fa-caret-down"></i></span>
                <span style="color: #1315A5; font-size: 15px;"><i class="far fa-envelope"></i> example@mail.ru</span>
            </div>
            `
        )
    } else {
        $("header .top").css({
            display: "flex"
        })
        $("header .bottom").html(
            `
            <div class="bottom">
            <div class="left-section">
                <img src="img/logo.png">
                <a style="text-decoration: none;">Lorem ipsum</a>
                <a style="text-decoration: none;">Dolor sit amet</a>
                <a style="text-decoration: none;">Donec sodales</a>
                </div>
            </div>
            <button>Aenean commodo</button>
            `
        )
    }
    
}
$(document).on("click", ".burger-button", function () {
    let mobileMenu = $(".mobile-header-bottom");
    
    if (mobileMenu.css("display") === "none") {
        mobileMenu.css("display", "flex");
    } else {
        mobileMenu.css("display", "none");
    }
});

$(window).on("resize", handleHeaderMobile);
$(document).ready(handleHeaderMobile)