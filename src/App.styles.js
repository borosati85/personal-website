import styled, { css } from 'styled-components';
import { device } from './common/breakpoints';

const darkModeStyles = css`
    background-color: #333;
    color: #DDD;
`

const applyTheme = ({ darkMode }) => {
    return darkMode ? darkModeStyles : null
}

export const AppContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    background-color: white;
    color: #333;
    ${applyTheme};
`

export const AppWrapper = styled.div``

export const colorBackgroundPrimary = css``;
export const colorBackgroundSecondary = css``;

export const colorHeadLinePrimary = css``;
export const colorHeadLineSecondary = css``;

export const colorParagraphPrimary = css``;
export const colorParagraphSecondary = css``;

export const colorButtonPrimary = css``;
export const colorButtonSecondary = css``;

export const colorButtonTextPrimary = css``;
export const colorButtonTextSecondary = css``;

export const colorIllustrationStrokePrimary = css``;
export const colorIllustrationStrokeSecondary = css``;

export const colorIllustrationMainPrimary = css``
export const colorIllustrationMainSecondary = css``

export const colorIllustrationHighlightPrimary = css``
export const colorIllustrationHighlightSecondary = css``

export const colorIllustrationSecondaryPrimary = css``
export const colorIllustrationSecondarySecondary = css``

export const colorIllustrationTertiaryPrimary = css``
export const colorIllustrationTertiarySecondary = css``