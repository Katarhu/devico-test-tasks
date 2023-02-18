

export const styles = {
    container: `
        display: grid; 
        grid-template-columns: repeat(8, 125px); 
        grid-template-rows: repeat(8, 125px);
        `,

    block: `
            display: grid;
            place-items: center;
            --background: transparent;
            background: var(--background);
            color: #000;
            font-weight: bold;
            font-size: 2rem;
            border: 1px solid #000;
            `,
    blockRectangle: `
                    grid-row: span 2;
                    grid-column: span 4;
                    `,
    blockRectangleSmall: `
                        grid-column: span 2;
                        grid-row: span 1;
                        `,
    blockSquare: `
                  grid-row: span 4;
                  grid-column: span 4;
                  `,
    blockSquareSmall: `
                  grid-row: span 2;
                  grid-column: span 2;
                  `
}