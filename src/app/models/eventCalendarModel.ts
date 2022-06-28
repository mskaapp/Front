export class eventCalendarModel{
  public title: string;
  public start: Date;
  public fin: Date=null;
  public description: string;

  constructor(title: string, start: Date, description: string, fin: Date){
    this.fin=fin;
    this.title=title;
    this.start=start;
    this.description=description;
  }
  }
