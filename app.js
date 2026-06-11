window.onload = () => {

    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1000);

    const flowers = document.querySelectorAll(".sunflower");

    let angle = 0;

    function animateField() {

        angle += 0.015;

        flowers.forEach((flower, index) => {

            const sway =
                Math.sin(angle + index) * 4;

            flower.style.transform =
                `translateX(0px) rotate(${sway}deg)`;
        });

        requestAnimationFrame(animateField);
    }

    animateField();
};