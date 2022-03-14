import React from "react";
import { AnimatedSpan } from "./animated.styles";

const AnimatedWrapper = ({ children, splitWord }) => {

    if (splitWord) {
        const reactArray = children.split('').map((letter, index) => <AnimatedSpan key={index}>{letter}</AnimatedSpan>)
        return <span>{reactArray}</span>
    } else {
        return <AnimatedSpan>{children}</AnimatedSpan>
    }
}

export default AnimatedWrapper;