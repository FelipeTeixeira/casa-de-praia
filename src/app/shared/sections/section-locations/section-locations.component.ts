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
            time: 'A apenas alguns passos, basta sair da casa e virar à esquerda!',
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
            time: 'A apenas alguns passos, basta sair da casa e virar à esquerda!',
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
        {
            name: 'Farmácia Farma Ponte',
            address: 'Av. José Herculano, 5894 - Porto Novo',
            time: '5 min',
            distance: '1,7 km',
            logo: 'logo-farma-ponte.png',
            link: 'https://maps.app.goo.gl/UYZRq3HqY98TRn3u7',
        },

        // https://wa.me/5512997695607?text=Ol%C3%A1+Felipe%2C+quero+ligar+a+cascata+ou+hidro
    ];
}
