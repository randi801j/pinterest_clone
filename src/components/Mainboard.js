import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'


function Mainboard() {
  return (
    <Wrapper>
        <Box>
          <Pin/>
        </Box>
    </Wrapper>
  )
}

export default Mainboard

const Wrapper = styled. div`
  background-color: White;
  display: incline-flex;
  width 100%;
  height:100%;
  margin-top: 15px;
  justify-content: center;
`
const Box = styled.div`
  diplay: flex;
  width: 80%;
  background-color: white;
`