$(window).on("load", function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // On scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 200) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  });

  // Add remove class when window resize finished
  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);
  });

  // Add new js functions here -----------------------------------------------------------------

  // Masonry
  $(".masonry-grid").masonry({
    itemSelector: ".grid-item",
  });

  // Open Searchbar and Sidebar
  $(".search-btn").on("click", function () {
    $("body").toggleClass("open-search");
  });
  $(".overlay").on("click", function () {
    $("body").removeClass("open-search");
    $("body").removeClass("open-menu");
  });
  $(".menu-btn").on("click", function () {
    $("body").toggleClass("open-menu");
  });

  // Slider
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Smooth Scroll Animation
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollSmoother.create({
    // smooth: 1,   // seconds it takes to "catch up" to native scroll position
    effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    smoothTouch: 0.1,
    lag: 0.5,
    ease: true,
  });

  // Hero Banner Animation
  let tl = gsap.timeline({ default: { ease: "SlowMo.easeIn" } });
  tl.to(".hero-banner-heading #banner-h1 span", {
    y: "0",
    duration: 0.5,
    ease: "power1.out",
    opacity: 1,
    stragger: { each: 0.2 },
  });
  tl.to(".hero-banner-heading #banner-h2 span", {
    y: "0",
    duration: 0.5,
    ease: "power1.out",
    opacity: 1,
    stragger: { each: 0.2 },
  });
  tl.to(".hero-banner-heading #banner-h3 span", {
    y: "0",
    duration: 0.5,
    ease: "power1.out",
    opacity: 1,
    stragger: { each: 0.2 },
  });

  let heroRightTl = gsap.timeline();
  heroRightTl.to(".herp-right-banner img", { duration: 1.5, scale: 1 });

  var aboutFirstDesktopStart = "-150%";
  var aboutFirstDesktopEnd = "10%";
  if ($(window).width() < 1200 && $(window).width() > 992) {
    aboutFirstDesktopStart = "-120%";
    aboutFirstDesktopEnd = "-90%";
  } else if ($(window).width() < 992 && $(window).width() > 768) {
    aboutFirstDesktopStart = "-170%";
    aboutFirstDesktopEnd = "-90%";
  } else if ($(window).width() < 768) {
    aboutFirstDesktopStart = "-270%";
    aboutFirstDesktopEnd = "-90%";
  }

  // About Section Animation
  let aboutFirst = gsap.timeline({
    scrollTrigger: {
      trigger: $(".about-first"),
      scrub: 1,
      pin: false,
      start: aboutFirstDesktopStart,
      end: aboutFirstDesktopEnd,
    },
  });
  aboutFirst.fromTo(".about-first .card-img img", { y: "20%" }, { y: 0 }, "<");
  aboutFirst.fromTo(
    ".about-first .round-big",
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1 },
    "<"
  );
  aboutFirst.fromTo(
    ".about-first .round-small",
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1 },
    "<"
  );
  aboutFirst.fromTo(
    ".about-first .dotted-frame",
    { y: "-100%" },
    { y: 0 },
    "<"
  );

  let aboutSecond = gsap.timeline({
    scrollTrigger: {
      trigger: $(".about-second"),
      scrub: 1,
      pin: false,
      start: "-150%",
      end: "10%",
    },
  });
  aboutSecond.fromTo(
    ".about-second .card-img img",
    { y: "20%" },
    { y: 0 },
    "<"
  );
  aboutSecond.fromTo(
    ".about-second .round-big",
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1 },
    "<"
  );
  aboutSecond.fromTo(
    ".about-second .round-small",
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1 },
    "<"
  );
  aboutSecond.fromTo(
    ".about-second .dotted-frame",
    { y: "-70%" },
    { y: 0 },
    "<"
  );

  // Person Animation
  let person = gsap.timeline({
    scrollTrigger: {
      trigger: $(".person img"),
      scrub: 1,
      pin: false,
      start: "-150%",
      end: "-20%",
    },
  });
  person.fromTo(".person img", { x: "-40%" }, { x: "-50%" }, "<");

  // Checkbox Animation
  let Checkbox = gsap.timeline({
    scrollTrigger: {
      trigger: $(".checkbox-grid"),
      scrub: 1,
      pin: false,
      start: "-420%",
      end: "-280%",
    },
  });
  Checkbox.fromTo(
    ".checkbox-grid li",
    { opacity: 0, y: "10px" },
    { opacity: 1, y: 0, stagger: 2, ease: "power1.inOut", duration: 10 },
    "<"
  );

  // Masonary Animation
  let masonaryGrid = gsap.timeline({
    scrollTrigger: {
      trigger: $(".masonry-grid"),
      scrub: 1,
      pin: false,
      start: "-90%",
      end: "-30%",
    },
  });
  masonaryGrid.fromTo(
    ".masonry-grid .icon",
    { scale: 0.5 },
    { scale: 1, stagger: 0.3 },
    "<"
  );

  // Testimonial Section Animation
  let userOdd = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });
  userOdd.fromTo(
    ".user-odd",
    { scale: 0.8 },
    { duration: 1, ease: "power1.inOut", scale: 1 }
  );
  userOdd.to(".user-odd", { duration: 1.5, ease: "power1.inOut", scale: 0.8 });
  let userEven = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
  userEven.fromTo(
    ".user-even",
    { scale: 0.8 },
    { duration: 1, ease: "power1.inOut", scale: 1 }
  );
  userEven.to(".user-even", {
    duration: 1.5,
    ease: "power1.inOut",
    scale: 0.8,
  });

  // Subscribe Image Animation
  let subscribeImg = gsap.timeline({
    scrollTrigger: {
      trigger: $(".subscribe-section"),
      scrub: 1,
      pin: false,
      start: "-80%",
      end: "0",
    },
  });
  subscribeImg.fromTo(".subscribe-img", { scale: 0.9 }, { scale: 1 }, "<");

  // Footer Animation
  let footer = gsap.timeline({
    scrollTrigger: {
      trigger: $(".footer"),
      scrub: 1,
      pin: false,
      start: "-320%",
      end: "-200%",
    },
  });
  footer.fromTo(
    ".footer > div",
    { y: "50px", opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.3 },
    "<"
  );

  // Social Media Animation
  let socialMedia = gsap.timeline({
    scrollTrigger: {
      trigger: $(".bottom-footer"),
      scrub: 1,
      pin: false,
      start: "-1700%",
      end: "-1700%",
    },
  });
  socialMedia.fromTo(
    ".social-media > a",
    { y: "100%", opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.1 }
  );

  // Form Control
  //for adding class when user focuses control
  $("body").on("focus", ".floating-label .form-control", function () {
    var field = $(this);
    {
      field.closest(".floating-label").addClass("is-focused");
    }
  });
  //for removing class when user loses focus on control and also add value related class when there is value in control
  $("body").on("blur change", ".floating-label .form-control", function () {
    var field = $(this);
    var value = field.val();
    if (value) {
      value = value.trim();
    }
    if (value && value != "") {
      field
        .closest(".floating-label")
        .removeClass("is-focused")
        .addClass("has-value");
    } else {
      field.closest(".floating-label").removeClass("is-focused has-value");
    }
    field.val(value);
  });
  // check for values in controls initially
  $(".floating-label .form-control").each(function () {
    $(this).trigger("blur");
  });
  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
