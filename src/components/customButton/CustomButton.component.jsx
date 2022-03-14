import React from "react";
import { CustomButtonContainer } from './customButton.styles';

const CustomButton = ({ children, href }) => {
    return (
        <a href={href}>
            <CustomButtonContainer>{ children }</CustomButtonContainer>
        </a>
    )
}

export default CustomButton;