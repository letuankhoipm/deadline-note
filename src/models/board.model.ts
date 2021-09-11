import { IUser } from './user.modal';

export interface IBoard {
    title: string;
    shortDescription: string;
    boardId?: string;
    type: string;
    projectId?: string;
}

export interface IBoardDetail {
    boardName?: string;
    boardId: string;
    listItem: IList[];
}

export interface IList {
    listTicket: ITicket[];
    listName: string;
}

export interface ITicket {
    id: number;
    ticketName: string;
    content: string;
    member: IUser[];
    date: string;
    label: {
        id: number,
        name: string
    };
}