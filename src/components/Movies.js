import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recomended for You</h4>
        <Content>
            <Wrap>
            <img  src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            <Wrap>
            <img src='https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </Wrap>
            
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
    padding: 20px;

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr)) ;

`
const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.49 ) 0s;

    img{
        width: 100%;
    height: 100%;
    object-fit: cover; // cover up the div streact the img
    }
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
        transform: scale(1.05);
        border-color: rgba(249, 249 , 249 0.8);
    }
`

