import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class IconService {
    constructor(private http: HttpClient) {}

    getSvgContent(iconName: string): Observable<string> {
        const svgPath = `assets/icons/${iconName}.svg`;
        return this.http.get(svgPath, { responseType: 'text' });
    }
}
