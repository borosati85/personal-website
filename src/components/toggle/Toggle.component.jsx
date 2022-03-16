import React, {useState} from "react";
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { ToggleContainer, ToggleImage, ToggleButton } from "./toggle.styles";

const Toggle = () => {

    const [position, setPosition] = useState('left');

    return (
        <ToggleContainer  onClick={()=>setPosition(prev => prev === 'left' ? 'right' : 'left')}>
            <ToggleImage src={Sun} alt=''/>
            <ToggleImage src={Moon} alt=''/>
            <ToggleButton position={position} />
        </ToggleContainer>
    )
}

export default Toggle;