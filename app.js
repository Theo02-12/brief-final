const container = document.querySelector('.container')

fetch('http://localhost:1337/api/chambres/?populate=*')
.then(res => res.json())
.then(data => {

    let i = 0;
    
    data.data.forEach(element => {
        console.log(element);

        i++;
        console.log(i);
        const imgs = element.attributes.image.data

        const card = document.createElement('div')
        card.classList.add('card')
        const carouselSlide = document.createElement('div')
        carouselSlide.classList.add('carousel', 'slide')
        carouselSlide.id = `carouselExample${i}`;
        const carouselInner = document.createElement('div')
        carouselInner.classList.add('carousel-inner')
        

        // BOUTON PREV
            const buttonPrev = document.createElement('button')
            buttonPrev.classList.add('carousel-control-prev')
            buttonPrev.dataset.bsTarget = `#carouselExample${i}`;
            buttonPrev.dataset.bsSlide = "prev";
            const spanPrev = document.createElement('span')
            const spanPrev2 = document.createElement('span')
            spanPrev.classList.add('carousel-control-prev-icon')
            spanPrev.setAttribute("aria-hidden", "true");
            spanPrev2.classList.add('visually-hidden')
            
    // BOUTON NEXT
            const buttonNext = document.createElement('button')
            buttonNext.classList.add('carousel-control-next')
            buttonNext.dataset.bsTarget = `#carouselExample${i}`;
            buttonNext.dataset.bsSlide = "next";
            const spanNext = document.createElement('span')
            const spanNext2 = document.createElement('span')
            spanNext.classList.add('carousel-control-next-icon')
            spanNext.setAttribute("aria-hidden", "true");
            spanNext2.classList.add('visually-hidden')

        
        buttonNext.append(spanNext, spanNext2)
        buttonPrev.append(spanPrev, spanPrev2)
        card.append(carouselSlide)
        container.append(card)
        
        
         imgs.forEach((images, index) => {

           
            
            const div = document.createElement('div')
            div.classList.add('carousel-item');
            
            const urlImage = images.attributes.url
            console.log(urlImage);

            let img = new Image();
            img.src = "http://localhost:1337" + urlImage
            img.classList.add= 'd-block w-100'
            
             if(index == 0){
                div.classList.add('active');
            }
            carouselSlide.append(carouselInner, buttonPrev, buttonNext)
            div.append(img)
            carouselInner.append(div)
        })

       
    });
})