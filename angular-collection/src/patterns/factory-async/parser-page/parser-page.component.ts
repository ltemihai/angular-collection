import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from "@angular/material/radio";
import {BaseParserService, ParserType} from "./services/base-parser.service";
import {FormsModule} from "@angular/forms";
import {getParser} from "./factory/parser.factory";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-parser-page',
  standalone: true,
  imports: [CommonModule, MatRadioModule, FormsModule, MatButtonModule],
  templateUrl: './parser-page.component.html',
  styleUrls: ['./parser-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParserPageComponent {

  constructor(readonly cdr: ChangeDetectorRef) {
  }

  protected text = '';
  protected parsedText = '';

  protected readonly ParserType = ParserType;

  protected option!: ParserType;

  protected parserService!: BaseParserService;

  async changeParser(type: ParserType): Promise<void> {
    this.parserService = await getParser(type);
    this.text = ''
    this.parsedText = '';
    this.cdr.detectChanges();
  }

  parse(): void {
    this.parsedText = this.parserService.parse(this.text)
  }

  read(): void {
    this.parsedText = this.parserService.read(this.text);
  }

}
