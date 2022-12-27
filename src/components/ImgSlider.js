import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function ImgSlider () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
   
    }
  return (
    <Carousel {...settings}>
        
        <Wrap>
            <img src='/images/slider-badging.jpg' />
           
        </Wrap>
        <Wrap>
            <img src='/images/slider-badag.jpg' />
        </Wrap>
        <Wrap>
            <img src='/images/slider-scale.jpg' />
        </Wrap>
        <Wrap>
            <img src='/images/slider-scales.jpg' />
        </Wrap>
     
    </Carousel>
  )
}

export default ImgSlider


const Carousel = styled(Slider)`
     margin-top: 20px;  

    ul li button{
        &::before{
            font-size: 10px;
            color: rgb(150, 158, 171); //for the button under the slider
        }
    }
    li.slick-activ button:before{
        color: white;
    }

     .slick-list{
        overflow: visible; // to make the imgs mext to each oter without 
     }
     button{
        z-index: 1;
     }


`
const Wrap = styled.div`
     cursor: pointer;
    img{
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transition-duration: 300ms; // the time of the hover



        &:hover{
            border: 4px solid rgba(249,249,249, 0.8 );
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
        }
    }
`
