import React from "react";
import { CustomButtonContainer, CustomButtonContainerLink } from './customButton.styles';

const CustomButton = ({ children, href, darkMode }) => {
    return (
        <CustomButtonContainerLink href={href} target='_blank' rel='noreferrer'>
            <CustomButtonContainer darkMode={darkMode}>{ children }</CustomButtonContainer>
        </CustomButtonContainerLink>
    )
}

export default CustomButton;