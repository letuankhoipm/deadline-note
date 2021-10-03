import { IUser } from '@/models/user.modal';

export interface IBoard {
    id: string;
    name: string;
    createAt: string;
    deletedAt: string;
    lists: IList[];
    updatedAt: string;
    userBoards: IUser[];
    shortDescription?: string;
    boardId?: string;
    type?: string;
    projectId?: string;
}

export interface IBoardDetail {
    createAt: string;
    id: string;
    lists: IList[],
    members: IUser[],
    name: string;
}

export interface IList {
    pos: string;
    boardId: string;
    createAt: string;
    id: string;
    tickets: ITicket[];
    title: string;
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
    pos: string;
}

export interface IBoardRequest {
    name: string;
    projectId: string;
}

export interface IListRequest {
    name: string;
    pos: string;
    boardId: string;
}

export interface ITicketRequest {
    title: string;
    description: string;
    pos: string;
    listId: string;
    memberIds: string[];
}

export interface IListMoveRequest {
    pos: string;
}