import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {ShopItem} from "../store/shopList.interface";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor() { }

  public getAll(): Observable<ShopItem[]> {
    return of(
      [
        {
          id: 1,
          name: 'To Kill a Mockingbird',
          price: 10,
          description: 'A novel by Harper Lee',
          category: 'Novel',
          image: 'https://example.com/book1.jpg',
          rating: 4.5
        },
        {
          id: 2,
          name: '1984',
          price: 15,
          description: 'A dystopian novel by George Orwell',
          category: 'Dystopian',
          image: 'https://example.com/book2.jpg',
          rating: 4.7
        },
        {
          id: 3,
          name: 'The Great Gatsby',
          price: 12,
          description: 'A novel by F. Scott Fitzgerald',
          category: 'Novel',
          image: 'https://example.com/book3.jpg',
          rating: 4.3
        },
        {
          id: 4,
          name: 'Moby Dick',
          price: 18,
          description: 'A novel by Herman Melville',
          category: 'Novel',
          image: 'https://example.com/book4.jpg',
          rating: 4.1
        },
        {
          id: 5,
          name: 'War and Peace',
          price: 20,
          description: 'A novel by Leo Tolstoy',
          category: 'Historical Novel',
          image: 'https://example.com/book5.jpg',
          rating: 4.6
        }
      ]
    )
  }

  public addNewItem(item: ShopItem): Observable<ShopItem> {
    return of({
      id: Math.floor(Math.random() * 1000000),
      ...item
    })
  }

}
