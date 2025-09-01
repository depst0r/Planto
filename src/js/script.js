import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { gsap } from 'gsap';

import '/src/sass/style.scss';

gsap.to(review, {
    duration: 2,
    x: 300,
    opacity: 0.5,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true
})