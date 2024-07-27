Shery.mouseFollower();

Shery.makeMagnet(`.magnet`);

Shery.hoverWithMediaCircle(`.hover`, { videos: 
    [`assets/videos/0.mp4`, `assets/videos/2.mp4`, `assets/videos/3.mp4`]
});


gsap.to(`#pro-left .elem`, {
    y: `-300%`,
    // ease: Expo.easeInOut,
    ease: Power2,
    scrollTrigger: {
        trigger: `#projects`,
        pin: true,
        start: `top top`,
        end: `bottom bottom`,
        endTrigger: `.last`,
        scrub: 1,
    }
});


let sections = document.querySelectorAll(`#pro-left .elem`);
// console.log(sections);
Shery.imageEffect("#pro-right .images", {
    style: 2,
    config: { onMouse: { value: 1} },
    slideStyle: (setScroll) => {
        sections.forEach(function(e, index){
            ScrollTrigger.create({
                trigger: e,
                start: `top top`,
                scrub: 1,
                onUpdate: function(dets){
                    setScroll(dets.progress + index);
                }
            });
        });
    },
});

