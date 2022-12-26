import React from 'react'
import styled from 'styled-components'

function Viewrs() {
  return (
    <Container>
        <Wrap>
            <img src='/images/viewers-disney.png' />
        </Wrap>
        <Wrap>
            <img src='/images/viewers-pixar.png' />
        </Wrap>
        <Wrap>
            <img src='/images/viewers-marvel.png' />
        </Wrap>
        <Wrap>
            <img src='/images/viewers-starwars.png' />
        </Wrap>
        <Wrap>
            <img src='/images/viewers-national.png' />
        </Wrap>
    </Container>
  )
}

export default Viewrs


const Container = styled.div`
    cursor: pointer;
    padding: 30px 0 26px;
    margin-top: 30px;
    display: grid;
    grid-gap: 25px; //to give it a space btween
    grid-template-columns: repeat(5, minmax(0, 1fr)) ;

`
const Wrap = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.49 ) 0s;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
        transform: scale(1.05);
        border-color: rgba(249, 249 , 249 0.8);
    }
`