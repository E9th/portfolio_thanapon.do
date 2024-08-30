document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel img');
    const totalImages = carouselImages.length;
    const carousel = document.querySelector('.carousel');

        // ตั้งค่าความกว้างของภาพในคาร์เซล
    const imageWidth = 100 / totalImages; // เปอร์เซ็นต์ของความกว้างที่ต้องการให้ภาพแต่ละภาพใช้

    carouselImages.forEach(image => {
        image.style.width = `${imageWidth}%`; // ใช้ backtick และ template literals
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

console.clear();

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
    .to(".image-container", {
      scale: 5,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
});

document.querySelector('.myButton').addEventListener('click', function() {
    document.querySelector('#mySection').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
