import styled from "styled-components";

export const Container = styled.div`
    width: 60%;
    margin: auto;
    margin-top: 30px;
    background-color: #FFF;
    padding: 20px 40px;
    box-shadow: 0 0 10px #CCC;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media (max-width: 425px) {
        width: 90%;
        padding: 20px;
        margin-top: 30px;
        flex-direction: column;
        // display: block;
    }

`;

export const Input = styled.input`
    width: 550px;
    height: 30px;
    outline: none;
    border: 0;
    border-bottom: 1px solid rgba(18, 10, 143, .6);
    font-size: 16px;
    padding: 0 0 1px 10px;
    
    &:focus {
        border-bottom: 2px solid rgba(18, 10, 143, 1);
    }

    @media (max-width: 425px) {
        
        width: 100%;
        margin-bottom: 20px;
    }
    
    @media (max-width: 768px) {
        width: 60%;
        margin-right: 20px;
    }

    @media (max-width: 1024px) {
        width: 70%;
    }
`;
    
export const Button = styled.button`
    width: 150px;
    font-size: 14px;
    height: 30px;
    border: 0;
    border-radius: 5px;
    color: #FFF;
    background-color: rgba(18, 10, 143, .6);
    transition: all ease .3s;
    cursor: pointer;
    
    &:hover {
        background-color: rgba(18, 10, 143, 1);
    }
`;