window.addEventListener('scroll',function(){
    let navbar = this.document.getElementById("menu-bar")
    if(this.window.pageYOffset >= 190){
navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky')
    }
});
