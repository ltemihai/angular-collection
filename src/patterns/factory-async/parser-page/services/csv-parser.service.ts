import {Injectable} from "@angular/core";
import {BaseParserService, ParserType} from "./base-parser.service";

@Injectable({
  providedIn: 'root'
})
export class CsvParserService implements BaseParserService {

  readonly type = ParserType.CSV;

  parse(text: string): string {
    return `${text} parsed to CSV`;
  }

  read(text: string): string {
    return `${text} read to CSV`;
  }

}
