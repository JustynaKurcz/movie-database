import {UUID} from "node:crypto";

export interface Movie {
    id: UUID;
    title: string;
    rate: number;
    image: string;
    content: string;
}