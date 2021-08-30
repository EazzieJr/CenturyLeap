    // INTRO FOR BIG SCREENS
gsap.to('.intro', {
    display: 'flex',
    delay: 10,
})
gsap.to('.cl-text', {
    y: 0,
    stagger: 1,
    delay: 10.5
})
gsap.to('.social-icons, .c-s', {
    duration: 1,
    scale: 1,
    delay: 13, 
    ease: 'back'
})


    // INTRO FOR SMALL SCREENS
var tl = gsap.timeline()

tl.to('.s-cl-texts div p', {
    duration: 2,
    y: 0,
    delay: 11.5
})


tl.to('.social-icons div', {
    duration: 1,
    x: 0,
    // delay: 1,
    ease: 'elastic'
})

tl.to('.s-cs', {
    duration: 1,
    text: 'Coming soon',
    // delay: 1
})

tl.to('.rdd', {
    opacity: 1,
    duration: 1,
    delay: -1
})