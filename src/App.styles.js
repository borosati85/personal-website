import styled, { css } from 'styled-components';
import { device } from './common/breakpoints';

export const AppContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    color: #333;
`

export const AppWrapper = styled.div`
    padding: 0 2%;

    @media only screen and ${device.lg} {
        padding: 0 10%;
    }

    @media only screen and ${device.xl} {
        padding: 0 20%;
    }
`

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