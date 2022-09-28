import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  apiCount = 0;
  public loader$ = new BehaviorSubject(false);

  public show(): void {
    this.apiCount++;
    this.loader$.next(true);
  }

  public hide(): void {
    this.apiCount--;
    if (this.apiCount <= 0) {
      this.loader$.next(false);
      this.apiCount = 0;
    }
  }
}
