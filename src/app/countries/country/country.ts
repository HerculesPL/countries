export interface Country {
    name: string;
    capital: string;
    region: string;
    subregion: string;
    population: number;
    area: number;
    alpha3Code: string;
    flag: string;
    languages: Language;
    currencies: Currency;
    timezones: string[];
    callingCodes: string[];
}

interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

interface Currency {
    code:string;
    name:string;
    symbol:string;
}

