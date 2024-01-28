import { Component } from '@angular/core';
import { SectionIds } from './core/interfaces/section-id';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    sectionIds = SectionIds;
}
