function clock(){
    const hour = document.querySelector('.hour')
    const min = document.querySelector(".min");
    const sec = document.querySelector(".sec");

    const date = new Date();
    const hr = date.getHours()
    const mn = date.getMinutes()
    const sc = date.getSeconds()
    // console.log(date)
    hour.style.transform = `rotateZ(${hr*30 + mn/12}deg)`
    min.style.transform = `rotateZ(${mn*6}deg)`
    sec.style.transform = `rotateZ(${sc*6}deg)`
}

setInterval(() => {
    clock()
}, 1000);


