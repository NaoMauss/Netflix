console.log('je marche')

var bout = document.querySelector('.buttonright');

bout.onclick = function(){
    alert('test')
}



const listclass = [ "testimg1", "testimg2", "testimg3", "testimg4", "testimg5", "testimg6" ]
const srcimg = './assets/img/pepo_happy.png'




function changeimg(idimg, srcimg){
    var img = document.querySelector('.'+`${idimg}`);
    img.src = srcimg
}

for (let i = 0; i < listclass.length; i++){
    changeimg(listclass[i], srcimg )
}


changeimg('testimg', null)
