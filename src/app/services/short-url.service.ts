import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  url = 'https://api-ssl.bitly.com/v4/shorten';
  token = '81c5bc644ff2c3c008f4ea79456cc9d34e7cc806'
  constructor() { }
}
