(function(window, document, undefined){

    // code that should be taken care of right away
    
    window.onload = init;
    
      function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        let hamburgerButton=document.getElementById('menu-btn');
console.log(hamburgerButton)
const hamburgerMenu=document.getElementById('hamburger-menu');
hamburgerButton.addEventListener('click',test)
function test(){
    hamburgerButton.classList.toggle('open')
    hamburgerMenu.classList.toggle('flex');
    hamburgerMenu.classList.toggle('hidden');
    
}
      }
    
    })(window, document, undefined);
