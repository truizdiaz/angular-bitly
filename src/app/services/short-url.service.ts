import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  url = 'https://api-ssl.bitly.com/v4/shorten';
  token = '81c5bc644ff2c3c008f4ea79456cc9d34e7cc806'
  constructor(private http: HttpClient) { }

  getUrlShort(nombreUrl: string): Observable<any> {
    const tokenHeader = new HttpHeaders({Authorization: 'Bearer '+ this.token});

    const body = {
      long_url: nombreUrl
    }

    return this.http.post(this.url, body, { headers: tokenHeader });
  }
}
