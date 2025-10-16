import 'zone.js';
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import './styles.css';
import '@touchspin/renderer-vanilla/css';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
