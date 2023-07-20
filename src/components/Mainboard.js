import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'
import './Mainboardstyle.css'


function Mainboard(props) {

  let {pins} =props;
  

  return (
    <Wrapper>
        <Box className='.mainboard_box'>
          {pins.map((pin,index)=>{
            let {urls}=pin;
            return <Pin key={index} urls={urls}/>
          })}
        </Box>
    </Wrapper>
  )
}

export default Mainboard

const Wrapper = styled. div`
  background-color: White;
  display: flex;
  width 100%;
  height:100%;
  margin-top: 15px;
  justify-content: center;
`
const Box = styled.div`
  column-gap:10px;
  max-width:1260px;
  column-count:5;
  margin: 0 auto;
  height:100%;
  background-color: white;
`