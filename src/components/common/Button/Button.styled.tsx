import styled from "styled-components";
import { ButtonProps } from "./Button.interface";

export const ButtonContainer = styled.button<ButtonProps>`
    width: 124px;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 4px 12px 4px;

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 12px;
    border-radius: 999px;
    border: ${props => props.darkMode ? '1px solid rgb(1, 254, 132);' : 'none'};

    box-shadow: ${props => props.darkMode ? 'none' : '0px 4px 59px 0px rgba(1, 254, 132, 0.4)'};
    background: ${props => props.darkMode ? 'black' : 'rgb(1, 254, 132)'};

    color:  ${props => props.darkMode ? 'rgb(1, 254, 132)' : 'black'};
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 2%;
    text-align: left;
`;
