// removes and adds placeholder onfocus/ blur (jQuery)
$('input, textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
          .attr('placeholder','');
}).blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
});

// removes and adds placeholder onfocus/ blur (ES6)
document.querySelectorAll('input, textarea').forEach(elem => {
    let temp; // temp storage for placeholder

    elem.addEventListener('focus', event => {
        temp = event.target.getAttribute('placeholder');
        event.target.setAttribute('placeholder', '');
    });

    elem.addEventListener('blur', event => {
        event.target.setAttribute('placeholder', temp);
    });
});
