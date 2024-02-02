import { Component } from '@angular/core';

@Component({
    selector: 'app-section-info',
    templateUrl: './section-info.component.html',
    styleUrls: ['./section-info.component.scss'],
})
export class SectionInfoComponent {
    password = 'fernandocarros';
    showMessage = false;

    copy() {
        // Cria um elemento de input temporário
        const inputElement = document.createElement('input');
        inputElement.value = this.password;

        // Adiciona o elemento ao DOM
        document.body.appendChild(inputElement);

        // Seleciona o texto no campo de input
        inputElement.select();

        this.showMessage = true;
        document.execCommand('copy');

        // Remove o elemento de input temporário
        document.body.removeChild(inputElement);

        setTimeout(() => {
            this.showMessage = false;
        }, 2000);
    }
}
