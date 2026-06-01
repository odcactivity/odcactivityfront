import { Component } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.sass'],
    imports: [FeatherModule]
})
export class FooterComponent {
  readonly buildTag = environment.appBuildTag || '';
}
