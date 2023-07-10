import React from 'react'
import styled from 'styled-components'

function Pin() {
return (
    <Wrapper>
        <Box>
            <img src='https://images.unsplash.com/photo-1683442162288-693a6b3d527b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBob25kYSUyMHR5cGUlMjByfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'/>
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