import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { AppComponent } from './app/app.component';
import { LandingPageComponent } from "./app/pages/landing-page.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, LandingPageComponent],
    imports: [
        UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: LandingPageComponent, pathMatch: 'full' }
        ])
    ]
})
export class MainModule {

}
