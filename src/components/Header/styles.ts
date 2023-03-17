import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 90px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;

    box-shadow: 0 0 10px #CCC;

    @media (max-width: 425px) {
        width: 100vw;
    }
`;

export const Date = styled.div`
    font-size: 20px;
    letter-spacing: 2px
`;