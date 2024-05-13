import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum ConnectionStatus {
  Offline,
  Online
}

@Injectable({
  providedIn: 'root'
})
export class ConnectivityService {
  private onlineStatus: BehaviorSubject<ConnectionStatus> = new BehaviorSubject<ConnectionStatus>(navigator.onLine ? ConnectionStatus.Online : ConnectionStatus.Offline);

  constructor() {
    window.addEventListener('online', () => this.updateOnlineStatus(ConnectionStatus.Online));
    window.addEventListener('offline', () => this.updateOnlineStatus(ConnectionStatus.Offline));
  }

  get isOnline(): Observable<ConnectionStatus> {
    return this.onlineStatus.asObservable();
  }

  private updateOnlineStatus(isOnline: ConnectionStatus) {
    this.onlineStatus.next(isOnline);
  }
}
