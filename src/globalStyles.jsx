import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    html {
        font-size: 62.5%;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        font-family: 'Spartan', sans-serif;
        font-size: 1.6rem;
        background-image: url('/background-stars.svg');
        background-color: ${({ theme }) => theme.colors.bodyBackground};
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    h1 {
        font-family: 'Antonio', sans-serif;
        font-size: 8rem;
        line-height: 10.3rem;
        font-weight: 500;
    }

    h2 {
        font-family: 'Spartan', sans-serif;
        font-size: 1.1rem;
        line-height: 2.5rem;
        font-weight: 700;
        letter-spacing: .1rem;
    }

    h3 {
        font-family: 'Antonio', sans-serif;
        font-size: 4rem;
        line-height: 5.2rem;
        font-weight: 500;
        letter-spacing: -.15rem;


    }

    h4 {
        font-family: 'Spartan', sans-serif;
        font-size: 1.2rem;
        line-height: 2.5rem;
        font-weight: 700;
        letter-spacing: 2.6rem;
    }
`;

export default GlobalStyle;