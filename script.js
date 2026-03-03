 const dot = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

window.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
});

(function loop() {
    rx += (mx - rx) * .12;
    ry += (my - ry) * .12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
})();

document.querySelectorAll('.job, .project-card, .chip').forEach(el => {
    el.addEventListener('mouseenter', () => {
        ring.style.width = '52px';
        ring.style.height = '52px';
        ring.style.borderColor = '#0f2549';
        ring.style.opacity = '.4';
    });
    el.addEventListener('mouseleave', () => {
        ring.style.width = '28px';
        ring.style.height = '28px';
        ring.style.borderColor = '#2563eb';
        ring.style.opacity = '.6';
    });
});
