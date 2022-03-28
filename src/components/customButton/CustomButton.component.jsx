import React from "react";
import { CustomButtonContainer } from './customButton.styles';

const CustomButton = ({ children, href, darkMode }) => {
    return (
        <a href={href} target='_blank' rel='noreferrer'>
            <CustomButtonContainer darkMode={darkMode}>{ children }</CustomButtonContainer>
        </a>
    )
}

export default CustomButton;