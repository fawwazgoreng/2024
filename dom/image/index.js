const jumbo = document.querySelector('.container')
const small = document.querySelector('.jumbo');
const smallImg = document.querySelectorAll('.small-img');

jumbo.addEventListener('click', function(e){
    if(e.target.className == 'small-img'){
        small.src = e.target.src;
        small.classList.add('fade');
        setTimeout(function() {
            small.classList.remove('fade');
        }, 500)
        
        smallImg.forEach(function(smal){
            if ( smal.classList.contains('fade-active')) {
                smal.classList.remove('fade-active');
            }
        }
        );

        e.target.classList.add('fade-active');
    }
});