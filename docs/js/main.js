document.querySelector(".main").addEventListener("scroll", e => {
    document.querySelector(".bg").style.transform = `translateY(-${(e.target.scrollTop / 6) % 128}px)`;
    console.log(e.target.scrollTop % 128);
});