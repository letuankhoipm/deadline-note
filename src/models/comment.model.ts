import { IUser } from "@/models/user.modal";
import { ITicket } from "./board.model";

export interface CommentRequest {
  content: string;
  userId: string;
  ticketId: string;
}

export interface IComment {
  content: string;
  createAt?: string;
  deleteAt?: string;
  id: string;
  ticket: ITicket;
  ticketId: string;
  updateAt?: string;
  user: IUser;
  userId: string;
}
