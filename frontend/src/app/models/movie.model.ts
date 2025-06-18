export enum Category {
    DRAMA = 'DRAMA',
    COMEDY = 'COMEDY',
    FAMILY = 'FAMILY',
    ACTION = 'ACTION',
    HORROR = 'HORROR',
    SCI_FI = 'SCI_FI'
}

export interface Movie {
    id: number;
    title: string;
    category: Category;
    productionYear: number;
    description: string;
    price: number;
    posterFilename: string;
}
