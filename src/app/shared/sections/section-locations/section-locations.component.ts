import { Component } from '@angular/core';

@Component({
    selector: 'app-section-locations',
    templateUrl: './section-locations.component.html',
    styleUrls: ['./section-locations.component.scss'],
})
export class SectionLocationsComponent {
    locations = [
        {
            name: 'Mercearia do Goiano',
            time: 'Fica na vizinhança, bem pertinho de casa.',
            icon: 'market',
        },
        {
            name: 'Mercado Tida',
            address: 'Alameda Cristóvão de Barros, 626 - Porto Novo',
            time: '3 min',
            distance: '900 m',
            logo: 'logo-tida.jpeg',
            link: 'https://maps.app.goo.gl/P1n8mS9NNaVeTd3MA',
        },
        {
            name: 'Mercado Piratininga',
            address: 'Av. José Herculano, 7040 - Travessão',
            time: '7 min',
            distance: '2,7 km',
            logo: 'logo-piratininga.jpeg',
            link: 'https://maps.app.goo.gl/q2wM7LHcimiKYcHV9',
        },
        {
            name: 'Mercado Atacadão',
            address: 'Rodovia Rio-Santos BR 101 KM 111 - Travessão',
            time: '11 min',
            distance: '4,1 km',
            logo: 'logo-atacadao.jpeg',
            link: 'https://maps.app.goo.gl/dFkSqX5WPeAE2L6GA',
        },
        {
            name: 'Pizzaria Lunamar',
            time: 'Fica na vizinhança, bem pertinho de casa.',
            logo: 'logo-lunamar.jpeg',
        },
        {
            name: 'Surfs Pizzaria choperia e Restaurante',
            address: 'R. Padre Anchieta, 931 - Centro',
            time: '14 min',
            distance: '8,5 km',
            logo: 'logo-surfs.jpeg',
            link: 'https://maps.app.goo.gl/SWQwChnReCwjDXTaA',
        },
    ];
}
