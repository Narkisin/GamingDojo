let currentSlide = 0; 
const slides = document.querySelectorAll('.slide'); 
const dots = document.querySelectorAll('.dot');
const popup = document.getElementById('popup');
const openPopupBtn = document.getElementById('openPopupBtn');
const closeBtn = document.querySelector('.close-btn');


function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            dots[index].classList.add('active');
        } else {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
            
        }
    });
}


function moveSlide(direction) {
    currentSlide += direction;

    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

function increaseCartCount() {
    const countCart = document.querySelector('.count-cart');
    

    let currentCount = parseInt(countCart.textContent);
    
    countCart.textContent = currentCount + 1;
}
showSlide(currentSlide);
openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'flex'; 
});
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; 
});
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none'; 
    }
});