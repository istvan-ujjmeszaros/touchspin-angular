import 'zone.js';
import '@angular/compiler';
import { bootstrapApplication, enableDebugTools } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import './styles.css';
import '@touchspin/renderer-vanilla/css';
import { ApplicationRef, isDevMode } from '@angular/core';

bootstrapApplication(AppComponent)
  .then((appRef: ApplicationRef) => {
    if (isDevMode()) {
      enableDebugTools(appRef);
    }
  })
  .catch((err) => console.error(err));