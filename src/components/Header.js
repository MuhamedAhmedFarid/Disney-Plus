import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" /> 
        <NavMenu>
            <a>
                <img src='/images/home-icon.svg' />
                <span>Home</span>
            </a>
            <a>
                <img src='/images/search-icon.svg' />
                <span>Search</span>
            </a>
            <a>
                <img src='/images/watchlist-icon.svg' />
                <span>WatchList</span>
            </a>
            <a>
                <img src='/images/original-icon.svg' />
                <span>Original</span>
            </a>
            <a>
                <img src='/images/movie-icon.svg' />
                <span>Movies</span>
            </a>
            <a>
                <img src='/images/series-icon.svg' />
                <span>Serise</span>
            </a>
        </NavMenu>
        <UserImg src='https://st.depositphotos.com/1734074/3427/v/450/depositphotos_34271411-stock-illustration-vector-profile-icon.jpg' />
    </Nav>
  )
}

export default Header


const Nav = styled.nav`
    height: 70px;
    display: flex;
    align-items: center;
    background-color: #090b13;
    padding: 0 32px; 
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 80px;
    
`

const NavMenu = styled.div`
    display: flex;
    flex: 1; //to move the img 
    margin-left: 30px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img{
            
            height: 20px;
        }
        span{
            font-size: 13px ;
            letter-spacing: 1.42px;
            text-transform: uppercase;
            position: relative;
            

            &::after{
                content: '';
                height: 2px;
                background-color: white;
                left: 0;
                right: 0;
                bottom: -6px;
                position: absolute;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.46, 0.94 ) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    
`