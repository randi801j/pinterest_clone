import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import styled from 'styled-components'

function Header() {
  return (
    <div>
      <Wrapper>
        <LogoWrapper>
          <PinterestIcon/>
        </LogoWrapper>
        <HomePageButton>
          <a href='/'>HomePage</a>
        </HomePageButton>
        <FollowingButton>
        <a href='/'>Following</a>
        </FollowingButton>
        <SearchWrapper>
          <SearchBarWrapper>
            {/* <IconButton>
              <SearchIcon/>
            </IconButton> */}
            <form>
              <input type='text'/>
              <button type='submit'></button>
            </form>
          </SearchBarWrapper>
        </SearchWrapper>
      </Wrapper>
    </div>
  )
}

export default Header

const Wrapper = styled.div`
  display:flex;
  align-item:center;
  height:56px;
  padding: 12px 4px 4px 12px;
  background-color; white;
  color:black;
`
const LogoWrapper = styled.div`
  .MuiSvgIcon-root{
    color:#e60023;
    font-size: 32px;
    cursor: pointer;
  }
`
//Dont repeat code, use inherate to repeat the same style for buttons. Other buttons will take in the Homebutton style.
const HomeButton = styled.div` 
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items:center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`
const HomePageButton = styled(HomeButton)`
  background-color : rgb(17,17,17);

  a{
    text-decoration: none;
    color:white;
    font-weight:700;
  }
`
const FollowingButton = styled(HomeButton)`
  background-color : white;

  a{
    text-decoration: none;
    color:black;
    font-weight:700;
  }
  :hover{
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items:center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    background-color: #e1e1e1;
  }
`
const SearchWrapper = styled.div`
  flex:1;
`
const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height:48px;
  width:100%
  border-radius: 50px;
  border:none;
  padding-left:10px;

  form{
    display:flex;
    flex: 1;
  }
  form > input {
    background-color:transparent;
    border:none;
    width:100%
    margin-left:5px;
    font-size:16px;
  }
  form > button{
    display:none;
  }
  input:focus{
    outline: none;
  }
  
`