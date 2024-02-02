import { Component } from '@angular/core';
import { SectionIds } from 'src/app/core/interfaces/section-id';

@Component({
    selector: 'app-section-pool',
    templateUrl: './section-pool.component.html',
    styleUrls: ['./section-pool.component.scss'],
})
export class SectionPoolComponent {
    sectionIds = SectionIds;
}
