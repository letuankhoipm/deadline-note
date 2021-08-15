import { Subject } from 'rxjs';

class NgvModalService {

    public ngv$ = new Subject();
    private _resolveSubj$ = new Subject();
    private _rejectSubj$ = new Subject();

    public open(component: any, inputObj = {}): Promise<any> {
        return new Promise((resolve, reject) => {
            const res = {
                component: component,
                inputObj: inputObj
            }
            this.ngv$.next(res);
            this._resolveSubj$.subscribe((res: any) => {
                resolve(res);
            });
            this._rejectSubj$.subscribe((res: any) => {
                reject(res);
            })

        })
    }

    public close(result?: any): void {
        const res = {
            component: null,
            inputObj: null
        }
        this.ngv$.next(res);
        this._resolveSubj$.next(result);
    }

    public dismiss(reason?: any): void {
        const res = {
            component: null,
            inputObj: null
        }
        this.ngv$.next(res);
        this._resolveSubj$.next(reason);

    }

}

export default new NgvModalService();