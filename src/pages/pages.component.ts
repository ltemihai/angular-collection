import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagesComponent {

}
