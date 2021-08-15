import { IUser } from './user.modal';

export interface IBoard {
    listItem: IList[];
    boardName: string;
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