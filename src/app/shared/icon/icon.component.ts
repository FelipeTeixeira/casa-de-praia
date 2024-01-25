import { Component, Input, OnInit } from '@angular/core';
import { IconService } from './icon.service';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
})
export class IconComponent implements OnInit {
    @Input() icon: string = '';
    svgContent: string = '';

    constructor(private iconService: IconService) {}

    ngOnInit(): void {
        this.loadSvgContent();
    }

    loadSvgContent(): void {
        this.iconService.getSvgContent(this.icon).subscribe(
            (svgContent: string) => {
                this.svgContent = svgContent;
            },
            (error) => {
                console.error(`Error loading SVG for ${this.icon}: ${error}`);
            }
        );
    }
}
