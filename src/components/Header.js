import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
//import IconButton from '@mui/icons-material/IconButton'
import styled from 'styled-components'

function Header() {
  return (
    <div>
      <Wrapper>
        <LogoWrapper>
          <PinterestIcon/>
        </LogoWrapper>
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