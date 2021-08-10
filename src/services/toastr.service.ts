import { ToastrMessage } from '@/models/toastr.model';
import { Subject } from 'rxjs';

class ToastrService {

    public toastrSubject$ = new Subject();

    public success(title: string, content: string): any {
        const toastrObj: ToastrMessage = {
            title,
            content,
            type: 'success'
        }
        this.toastrSubject$.next(toastrObj);
    }

    public info(title: string, content: string): any {
        const toastrObj: ToastrMessage = {
            title,
            content,
            type: 'info'
        }
        this.toastrSubject$.next(toastrObj);
    }

    public warning(title: string, content: string): any {
        const toastrObj: ToastrMessage = {
            title,
            content,
            type: 'warning'
        }
        this.toastrSubject$.next(toastrObj);
    }

    public error(title: string, content: string): any {
        const toastrObj: ToastrMessage = {
            title,
            content,
            type: 'error'
        }
        this.toastrSubject$.next(toastrObj);
    }
}

export default new ToastrService();