import React, { useState } from 'react';
import { CustomInputFormContainer, CustomInputContainer, CustomInputLabel, CustomTextAreaLabel, CustomTextAreaContainer } from './customInput.styles'

const CustomInput = ({ name, type, label, rows }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');

    return (
        <CustomInputFormContainer>
            {
                type==='textarea'
                ? 
                <>
                <CustomTextAreaLabel
                    htmlFor={name}
                    focused={focused}
                    value={value} 
                    >
                    {label}
                </CustomTextAreaLabel>
                <CustomTextAreaContainer
                    onFocus={()=> setFocused(true)}
                    onBlur={()=> setFocused(false)}
                    onChange={e=> setValue(e.target.value)}
                    name={name}
                    type={type}
                    rows='5'
                    >                    
                </CustomTextAreaContainer>
                </>
                :
                <>
                <CustomInputLabel
                    htmlFor={name}
                    focused={focused}
                    value={value} 
                    >
                    {label}
                </CustomInputLabel>
                <CustomInputContainer
                    onFocus={()=> setFocused(true)}
                    onBlur={()=> setFocused(false)}
                    onChange={e=> setValue(e.target.value)}
                    name={name}
                    type={type}>
                </CustomInputContainer>
                </>
            }
        </CustomInputFormContainer>
    )
}

export default CustomInput;