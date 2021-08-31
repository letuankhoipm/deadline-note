// import { IBoard } from './board.model';
import { IUser } from './user.modal';
export interface IProject {
    title: string;
    shortDescription: string;
    imageUrl?: string;
}

export interface IWiki {
    pageName: string;
    content: string;
}

export interface IProjectDetail {
    id: number;
    title: string;
    shortDescription: string;
    longDescription: string;
    imageUrl?: string;
    members?: IUser[];
    boards: IBoard[];
    projectStats?: {
        boards: number;
        member: number;
        ticket: number;
    },
    wiki: IWiki[];
    admin: IUser[];
}

export interface IBoard {
    title: string;
    shortDescription: string;
    type: string;
}