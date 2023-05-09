import { Injectable } from '@angular/core';
import {BaseParserService, ParserType} from "./base-parser.service";

@Injectable({
  providedIn: 'root'
})
export class XmlParserService implements BaseParserService {

  readonly type = ParserType.XML;

  parse(text: string): string {
    return `${text} parsed to XML`;
  }

  read(text: string): string {
    return `${text} read to XML`;
  }

}
