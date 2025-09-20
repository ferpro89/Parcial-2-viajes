import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.config';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      ReactiveFormsModule,
      MatCardModule,
      MatTableModule
    ),
    provideRouter(routes)
  ]
});
