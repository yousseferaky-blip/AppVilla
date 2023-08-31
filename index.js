
// Start Style NavBar

let Header = document.getElementById("Header")

onscroll = () => {
    if( scrollY >= 80 ){
        Header.style.background = "#d63384"
    }else{
        Header.style.background = "transparent"
    }
} 

// Start Hide And Show Links


let Bars = document.querySelector(".fa-bars")
let Mobil = document.querySelector(".Link")

Bars.addEventListener("click",()=>{
    Mobil.classList.toggle('Mobile') 
})

// Start Testimonial


let Testimonial = [
    {
        Name:' Musharof Chowdhury ',
        ImgPerson : './img/test1.jpg',
        ImgPrand : './img/brand1.svg',
        para:'"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has"',
        Jop:'CEO - Ayro UI'
    },
    {
        Name:' Musharof Chowdhury ',
        ImgPerson : './img/test2.jpg',
        ImgPrand : './img/brand2.svg',
        para:'"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has"',
        Jop:'CEO - GrayGrids'
    },
    {
        Name:'  Naimur Rahman  ',
        ImgPerson : './img/test3.jpg',
        ImgPrand : './img/brand3.svg',
        para:'"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has"',
        Jop:'CEO - WpthemesGrid'
    },
]

let NumTestimonial = 0

let TestimonialH4 = document.querySelector(".Testimonial-H4")
let TestimonialH5 = document.querySelector(".Testimonial-H5")
let TestimonialBrand = document.querySelector(".Testimonial-Brand")
let TestimonialParagraph = document.querySelector(".Testimonial-Paragraph")
let TestimonialPerson = document.querySelector(".Testimonial-Person")

UpDateTestimonial()

function UpDateTestimonial () {
    let Review = Testimonial[NumTestimonial]
    TestimonialH4.innerHTML = Review.Name
    TestimonialH5.innerHTML = Review.Jop
    TestimonialParagraph.innerHTML = Review.para
    TestimonialBrand.src = Review.ImgPrand
    TestimonialPerson.src = Review.ImgPerson

    NumTestimonial++
    if( NumTestimonial == Testimonial.length ){
        NumTestimonial = 0
    }

    setTimeout(()=>{
        UpDateTestimonial()
    },3000)

}

// Strat Click Up


let ArrowUp = document.querySelector(".fa-arrow-up")

onscroll = () =>{
    if(scrollY >= 200){
        ArrowUp.style.display = 'block'  
    }else{
        ArrowUp.style.display = 'none'  
    }
}

ArrowUp.addEventListener("click",()=>{
    scroll({
        top:0,
        left:0,
    })
})



