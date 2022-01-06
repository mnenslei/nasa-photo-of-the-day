import React from "react";
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: orange;
    border: none;
    border-radius: 8px;
    padding: 2%;
    text-align: center;
`
const StyledDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const StyledHeader = styled.header`
    padding: 2%;
`

const Header = (props) => {
    return (
        <StyledHeader>
            <h1>Welcome to Michael's Nasa Photo of the Day API</h1>
            <StyledDiv>
                <StyledButton>Home</StyledButton>
                <StyledButton>Photo</StyledButton>
                <StyledButton>About</StyledButton>
            </StyledDiv>
        </StyledHeader>
    )
}

export default Header