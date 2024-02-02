import { Component } from '@angular/core';

@Component({
  selector: 'app-section-faq',
  templateUrl: './section-faq.component.html',
  styleUrls: ['./section-faq.component.scss']
})
export class SectionFaqComponent {
    faqActive: 'cascata' | 'hidro' | undefined;


    toogleFaq(faq: 'cascata' | 'hidro' | undefined): void {

        if (faq === this.faqActive) {
            this.faqActive = undefined;
            return;
        }

        this.faqActive = faq;
    }
}
