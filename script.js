const sections = document.querySelectorAll("section");
const navA = document.querySelectorAll("header nav ul li a");

window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop - sectionHeight / 3){
            current = section.getAttribute('id');
        }
    })

    
    navA.forEach( a => {
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add('active')
        }
    })
})

