import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private _items: string[] = [];
    private itemsSubject = new BehaviorSubject<string[]>(this._items);
    items$ = this.itemsSubject.asObservable();

    get items(): string[]{
        return this._items;
    }

    addItem(item: string){
        this._items = [...this._items,item];
        this.itemsSubject.next(this._items);
    }
}