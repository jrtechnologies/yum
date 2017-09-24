import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';

export class CustomDateFormatter extends CalendarDateFormatter {
  // you can override any of the methods defined in the parent class

  public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, { weekday: 'narrow' }).format(date);
  }
 
}