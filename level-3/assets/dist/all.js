var aboutBox=document.querySelector(".about"),aboutPhoto=document.querySelector(".about__photo img"),aboutBoxText=document.querySelector(".about__text"),mobileViewport=window.matchMedia("screen and (min-width: 768px)");407<aboutBoxText.offsetHeight&&(aboutBox.style.height="auto"),aboutBox.offsetHeight>aboutPhoto.height&&mobileViewport.matches&&(aboutPhoto.style.padding="2rem");