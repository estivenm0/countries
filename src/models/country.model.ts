export interface Country {
    name: {
        common: string
    },
    flags:{
        alt: string,
        png: string
    },
    region: string,
    cca3: string,
    capital: string[],
};