import {ParserType} from "../services/base-parser.service";

export const getParser = async (type: ParserType) => {
  switch (type) {
    case ParserType.XML:
      return new (await import('../services/xml-parser.service')).XmlParserService();
    case ParserType.CSV:
      return new (await import('../services/csv-parser.service')).CsvParserService();
    default:
      throw new Error("Unknown parser type");
  }
}
