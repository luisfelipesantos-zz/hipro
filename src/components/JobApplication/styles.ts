import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    font-family: "Montserrat", sans-serif;
    max-width: 30em;
    width: 85%;
    margin: 10px auto;
    padding: 2px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    justify-content: space-between;
`

export const JobInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const ButtonDiv = styled.div`
    width: 30%;
    align-items: center;
`

export const Button = styled.button`
    height: 100%;
    width: 100%;
    border: none;
    background: none;

    :hover {
        cursor: pointer;
        background-color: #fbfbfb;
    }

    :active {
        background-color: #f2f2f2; 
    }
`

export const Label = styled.p`
    font-weight: bold;
    color: #7286EF;
    width: 100%;
`
