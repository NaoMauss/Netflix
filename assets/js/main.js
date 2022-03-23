const scrollto = (el, of) => {
       let sect = document.getElementById(el)
       console.log(sect.scrollLeft)
       sect.scroll({
           left:  sect.scrollLeft + sect.offsetWidth * (of),
           behavior: 'smooth'
       })
}

function changeimg(idimg, srcimg){
    let img = document.querySelector('.'+`${idimg}`);
    img.src = srcimg
}


const listMylist = [

]

const listAnime = [

]

const listDocu = [

]

const imgDocu = [
    './assets/img/image netflix/docu/arnaque.jpg',
    './assets/img/image netflix/docu/catchingkillers.jpg',
    './assets/img/image netflix/docu/college.jpg',
    './assets/img/image netflix/docu/dontfuckwithcats.jpg',
    './assets/img/image netflix/docu/formula1.jpg',
    './assets/img/image netflix/docu/gims.jpg',
    './assets/img/image netflix/docu/hitler.jpg',
    './assets/img/image netflix/docu/jeffrey.jpg',
    './assets/img/image netflix/docu/kanye.jpg',
    './assets/img/image netflix/docu/rolling.jpg'
]

const imgAnime = [
    './assets/img/image netflix/anime/baki.jpg',
    './assets/img/image netflix/anime/blackbullet.webp',
    './assets/img/image netflix/anime/bluethebeginning.jpg',
    './assets/img/image netflix/anime/inazuma.webp',
    './assets/img/image netflix/anime/pmomo.jpg',
    './assets/img/image netflix/anime/saiki.webp',
    './assets/img/image netflix/anime/sakamichi.webp',
    './assets/img/image netflix/anime/skyhighsurvival.jpg',
    './assets/img/image netflix/anime/wakfu.webp',
    './assets/img/image netflix/anime/blackbutler.webp'
]

function randMath(maxNumber){
    const mathrand = []
    for (let i = 0; i < maxNumber; i++){
        let rand = Math.floor(Math.random() * maxNumber)
        if (!mathrand.includes(rand)){
            mathrand.push(rand)
        }
        else{
            i -= 1
        }
    }
    return mathrand

}

function AllChangeImg(){
    for (let i = 1; i< 11; i++){
        listMylist.push('Mylist' + `${i}`)
        listAnime.push('listAnime' + `${i}`)
        listDocu.push('listDocu' + `${i}`)
    }
    const randomNumber = randMath(10);
    for (let y = 0; y< 10; y++){
        console.log(randomNumber[y])
        let img = document.querySelector('.'+`${listAnime[y]}`)
        console.log(`${imgAnime[randomNumber[y]]}`)
        img.src = imgAnime[randomNumber[y]]
        let img2 = document.querySelector('.'+`${listMylist[y]}`)
        console.log(`${imgDocu[randomNumber[y]]}`)
        img2.src = imgDocu[randomNumber[y]]
        let img3 = document.querySelector('.'+`${listDocu[y]}`)
        img3.src = imgDocu[y]
}
}

$(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 120) {
        $("#navbar").css("backgroundColor", "black");
      } else if ($(window).scrollTop() > 20) {
        $("#navbar").css("backgroundColor", "#181818");
      }
      else {
        $("#navbar").css("backgroundColor", "transparent");
      }
    });
  });

$(document).ready(function () {
    $("#video").css("display", "none"); //HIDE THE VIDEO INITIALLY
    $(".thumbnail").hover(function () 
            {
            $(".head-img").css("display", "none");
            $("#video").css("display", "block"); //SHOW THE VIDEO ON HOVER
            $(this).children("video")[0].play();
            }, 

    function () {
        var el = $(this).children("video")[0];
        el.pause();
        $("#video").css("display", "none");
        $(".head-img").css("display", "block");
    }); 
});


$(document).ready(function (){
    $(".overf").css("overflow-y", "hidden");
    $(".card").hover(function(){
        $(".overf").css("overflow-y", "hidden");
    },
    function (){
        $(".overf").css("overflow-y", "hidden");
    })
    
    
})


AllChangeImg()

console.log('coucou madame')