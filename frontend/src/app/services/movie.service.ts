import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, Category } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:8080/api/movies';
  private http = inject(HttpClient);

  getMovies(category?: Category): Observable<Movie[]> {
    let params = new HttpParams();
    if (category) {
      params = params.append('category', category);
    }
    return this.http.get<Movie[]>(this.apiUrl, { params });
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }
}
