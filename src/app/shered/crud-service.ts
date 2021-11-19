import {HttpClient, HttpHeaders} from '@angular/common/http';
import {delay, tap, take, map} from 'rxjs/operators';

interface IdNumber {
  id: number;
}


export class CrudService<T extends IdNumber> {

  constructor(protected http: HttpClient, private API_URL: string) {}

  list() {
    return this.http.get<T[]>(this.API_URL)
      .pipe(
        delay(500),
        tap((obj:any) => obj)
        // tap(console.log)
      );
  }

  loadByID(id: number) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private create(record: T) {
    return this.http.post(this.API_URL, record).pipe(take(1)).pipe(
      // tap(dados => console.log(record as T))
    );
  }

  private update(record: T) {
    return this.http.put(`${this.API_URL}/${record.id}`, record).pipe(take(1));
  }

  save(record: T) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  remove(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
