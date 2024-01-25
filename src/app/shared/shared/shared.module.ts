import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPoolComponent } from './icons/icon-pool/icon-pool.component';
import { SectionPoolComponent } from './sections/section-pool/section-pool.component';
import { SectionWelcomeComponent } from './sections/section-welcome/section-welcome.component';
import { SectionInfoComponent } from './sections/section-info/section-info.component';
import { SectionFaqComponent } from './sections/section-faq/section-faq.component';
import { SectionCheckInComponent } from './sections/section-check-in/section-check-in.component';
import { IconKeyComponent } from './icons/icon-key/icon-key.component';
import { MenuComponent } from './menu/menu.component';
import { IconInfoComponent } from './icons/icon-info/icon-info.component';
import { IconParkingComponent } from './icons/icon-parking/icon-parking.component';
import { IconRemoteControlComponent } from './icons/icon-remote-control/icon-remote-control.component';
import { InfoItemComponent } from './info-item/info-item.component';

const COMPONENTS = [
    // ICONS
    IconPoolComponent,
    IconInfoComponent,
    IconKeyComponent,
    IconParkingComponent,
    IconRemoteControlComponent,
    // SECTIONS
    SectionPoolComponent,
    SectionWelcomeComponent,
    SectionInfoComponent,
    SectionFaqComponent,
    SectionCheckInComponent,
    //
    MenuComponent,
    InfoItemComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule],
    exports: [...COMPONENTS],
})
export class SharedModule {}
