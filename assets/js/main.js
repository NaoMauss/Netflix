// function goRight (container) {
//     document.getElementById(container).scrollLeft += 304;
//   };
// function goLeft (container) {
//     document.getElementById(container).scrollLeft -= 304;
//   };


const scrollto = (el, of) => {
       let sect = document.getElementById(el)
       console.log(sect.scrollLeft)
       sect.scroll({
           left:  sect.scrollLeft + sect.offsetWidth * (of),
           behavior: 'smooth'
       })
}


