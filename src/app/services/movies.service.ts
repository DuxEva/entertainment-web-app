import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry } from 'rxjs';
import { MediaElement } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  URL = '/assets/data.json';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MediaElement[]> {
    return this.http.get<MediaElement[]>(this.URL).pipe(
      map((data: MediaElement[]) => {
        return data;
      }),
      retry(3),
      catchError((error) => {
        console.error('Error:', error);
        throw error;
      })
    );
  }
}
