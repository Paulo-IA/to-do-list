import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ListTitle = styled.p`
    font-size: 25px;
    
    @media (max-width: 425px) {
        text-align: center;
    }
`;

export const List = styled.div`
    list-style: none;

    width: 60%;
    margin: auto;
    background-color: #FFF;
    margin: 30px 0;

    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    border-radius: 5px;
    box-shadow: 0 0 10px #CCC;

    @media (max-width: 425px) {
        width: 90%;
        margin-bottom: 50px;
        padding: 20px 20px;
    }
`;