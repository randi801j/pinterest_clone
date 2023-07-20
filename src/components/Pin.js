import React from 'react'
import styled from 'styled-components'

function Pin(props) {

let {urls} = props;

return (
    <Wrapper>
        <Box>
            <img src={urls?.regular} alt="pin"/>
        </Box>
    </Wrapper>
    )
}

export default Pin

const Wrapper = styled.div`
    display: incline-flex;
    padding: 8px;
`
const Box = styled.div`
    display:flex;
    align- item: center;
    box-sizing: border-box;
    width:236px;

    img{
        display: flex;
        width:100%;
        cursor:zoom-in;
        border-radius: 16px;
        object-fit:cover;
        }
`