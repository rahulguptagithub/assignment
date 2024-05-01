import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { IntegrationComponent } from './integration/integration.component';
import { PdfGenerationComponent } from './pdf-generation/pdf-generation.component';
import { PdfDownloadComponent } from './pdf-download/pdf-download.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    IntegrationComponent,
    PdfGenerationComponent,
    PdfDownloadComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
