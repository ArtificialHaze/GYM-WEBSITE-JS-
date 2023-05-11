$(document).ready(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 150) {
      $(".navbar").css("background", "#000");
      $(".navbar").css("box-shadow", "rgba(0,0,0,0.1) 0px 4px 12px");
    } else {
      $(".navbar").css("background", "transparent");
      $(".navbar").css("box-shadow", "none");
    }
  });
  let navbarHeight = $(".navbar").outerHeight();
  $(".menus a").click(function (e) {
    let targetHref = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(targetHref).offset().top - navbarHeight,
      },
      1000
    );
    e.preventDefault();
  });
  const mobileMenuToggler = document.querySelector(".menu-toggle");
  const mobileLink = document.querySelector(".menus");

  mobileMenuToggler.addEventListener("click", () => {
    mobileMenuToggler.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
  });

  mobileLink.addEventListener("click", () => {
    const menuBars = document.querySelectorAll(".is-active");
    if (window.innerWidth <= 768 && menuBars) {
      mobileMenuToggler.classList.toggle("is-active");
      mobileLink.classList.remove("active");
    }
  });
});
