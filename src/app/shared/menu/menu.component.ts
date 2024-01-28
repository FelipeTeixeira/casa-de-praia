import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { SectionIds } from 'src/app/core/interfaces/section-id';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
    @Input() idSections: any;
    activeSection: SectionIds | null = null;
    menus = [
        {
            name: 'Check-in',
            icon: 'key',
            section: SectionIds.CheckIn,
        },
        {
            name: 'Informações',
            icon: 'message',
            section: SectionIds.Info,
        },
        {
            name: 'Piscina',
            icon: 'pool',
            section: SectionIds.Pool,
        },
        {
            name: 'Dicas locais',
            icon: 'location',
            section: SectionIds.Locations,
        },
        {
            name: 'Dúvidas',
            icon: 'faq',
            section: SectionIds.FAQ,
        },
    ];

    constructor(private el: ElementRef) {}

    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
        this.detectActiveSection();
    }

    detectActiveSection(): void {
        const sections = Object.values(SectionIds);

        for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 50 && rect.bottom >= 50) {
                    this.activeSection = sectionId as SectionIds;
                    break;
                }
            }
        }
    }

    scrollToSection(sectionId: SectionIds): void {
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
