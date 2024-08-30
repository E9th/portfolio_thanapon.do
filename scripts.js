document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel img');
    const totalImages = carouselImages.length;
    const carousel = document.querySelector('.carousel');

    // ตั้งค่าความกว้างของภาพในคาร์เซล
    const imageWidth = carousel.clientWidth / totalImages; // กำหนดความกว้างเป็นขนาดจริงแทนที่จะใช้เปอร์เซ็นต์

    carouselImages.forEach(image => {
        image.style.width = `${imageWidth}px`; // กำหนดความกว้างเป็น pixel เพื่อควบคุมขนาดภาพ
    });

    // เพิ่มฟังก์ชันการเลื่อนภาพ
    const leftButton = document.querySelector('.left-card');
    const rightButton = document.querySelector('.right-card');
    let scrollAmount = 0;
    const scrollStep = carousel.clientWidth / 3; // ขนาดของการเลื่อนภาพต่อครั้ง

    rightButton.addEventListener('click', () => {
        scrollAmount += scrollStep;
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    leftButton.addEventListener('click', () => {
        scrollAmount -= scrollStep;
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper_img",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: true
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});

