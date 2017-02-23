import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { CKEditorModule } from 'ng2-ckeditor';

import { AppComponent } from './app.component';
import { DashboardComponent }    from './dashboard/dashboard.component';
import { CkeditorComponent }    from './ckeditor/ckeditor.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ckeditor', component: CkeditorComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        CkeditorComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CKEditorModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
