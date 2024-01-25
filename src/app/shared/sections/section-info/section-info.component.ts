import { Component } from '@angular/core';

@Component({
    selector: 'app-section-info',
    templateUrl: './section-info.component.html',
    styleUrls: ['./section-info.component.scss'],
})
export class SectionInfoComponent {
    password = 'fernandocarros';
    showMessage = false;

    async copy() {
        try {
            this.showMessage = true;
            await navigator.clipboard.writeText(this.password);
            setTimeout(() => {
                this.showMessage = false;
            }, 2000);
        } catch (err) {
            console.error('Erro ao copiar texto:', err);
        }
    }
}
