import styled from "styled-components";

export const Container = styled.div`
    // width: 80%;
`;

export const Item = styled.li`
    margin: 20px 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 425px) {
        margin-left: 0;
        
    }
`;

export const NotCheck = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 25px;
        height: 25px;
        background-color: #F9F6EE;
        border: 1px solid rgba(18, 10, 143, .6);
        border-radius: 5px;
        cursor: pointer;
    }
`;
export const Check = styled.div`
    flex: 1;
    width: 100%;
    height: 30;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 25px;
        height: 25px;
        background-color: rgba(18, 10, 143, .6);
        border-radius: 5px;
        cursor: pointer;
        background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
        background-position: center;
    }
`;

export const Task = styled.div`
    flex: 5;
    width: 100%;
    height: 30px;
    font-size: 17px;    
    display: flex;
    align-items: center;
    opacity: .8;
`;

export const Del = styled.button`
    flex: 2;
    width: 150px;
    font-size: 14px;
    height: 30px;
    border: 0;
    border-radius: 5px;
    color: #FFF;
    background-color: rgba(199, 0, 0, .7);
    transition: all ease .3s;
    cursor: pointer;
    
    &:hover {
        background-color: rgba(199, 0, 0, 1);
    }
`;