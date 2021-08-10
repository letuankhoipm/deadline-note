export interface ToastrMessage {
    title: string;
    content: string;
    type: 'success' | 'warning' | 'info' | 'error';
}