import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPoolComponent } from './sections/section-pool/section-pool.component';
import { SectionWelcomeComponent } from './sections/section-welcome/section-welcome.component';
import { SectionInfoComponent } from './sections/section-info/section-info.component';
import { SectionFaqComponent } from './sections/section-faq/section-faq.component';
import { SectionCheckInComponent } from './sections/section-check-in/section-check-in.component';
import { MenuComponent } from './menu/menu.component';
import { InfoItemComponent } from './info-item/info-item.component';
import { HttpClientModule } from '@angular/common/http';
import { IconComponent } from './icon/icon.component';
import { BypassHtmlSanitizerPipe } from './pipes/bypass-html-sanitizer.pipe';

const COMPONENTS = [
    IconComponent,
    // SECTIONS
    SectionPoolComponent,
    SectionWelcomeComponent,
    SectionInfoComponent,
    SectionFaqComponent,
    SectionCheckInComponent,
    //
    MenuComponent,
    InfoItemComponent,
    BypassHtmlSanitizerPipe
];

const MODULES = [
    HttpClientModule
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, HttpClientModule],
    exports: [...COMPONENTS, ...MODULES],
})
export class SharedModule {}
