import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry } from 'rxjs';
import { MediaItem } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  URL = '/assets/data.json';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MediaItem[]> {
    return this.http.get<MediaItem[]>(this.URL).pipe(
      map((data: MediaItem[]) => {
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
