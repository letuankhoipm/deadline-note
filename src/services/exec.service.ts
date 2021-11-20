import { Subject } from 'rxjs';

class ExecService {

  public refetch$ = new Subject<boolean>();
  public run$ = new Subject<boolean>();

  public refetch(): void {
    this.refetch$.next(true);
  }

  public run(): void {
    this.run$.next(true);
  }

}

export default new ExecService();
