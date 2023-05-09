export interface BaseParserService {
  type: ParserType;
  parse(text: string): string
  read(text: string): string
}

export enum ParserType {
  XML = 'XML',
  CSV = 'CSV'
}
