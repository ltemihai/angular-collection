import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ConnectionStatus, ConnectivityService} from "../connectivity.service";
import {Observable} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent {

  protected readonly ConnectionStatus = ConnectionStatus;

  status$: Observable<ConnectionStatus>

  constructor(private connectivityService: ConnectivityService) {
    this.status$ = this.connectivityService.isOnline;
  }

}
