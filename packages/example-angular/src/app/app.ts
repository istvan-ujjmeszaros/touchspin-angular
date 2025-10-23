import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TouchSpinVanillaComponent],
  template: `
    <main class="container">
      <h1>TouchSpin Angular Demo</h1>

      <section class="panel">
        <h2>Quantity</h2>
        <touch-spin
          [(ngModel)]="quantity"
          [min]="0"
          [max]="10"
          [step]="1"
          ariaLabel="Quantity selector"
        ></touch-spin>
        <p>Selected quantity: {{ quantity }}</p>
      </section>

      <section class="panel">
        <h2>Price</h2>
        <touch-spin
          [(ngModel)]="price"
          [min]="0"
          [max]="100"
          [step]="0.5"
          [decimals]="2"
          prefix="$"
          ariaLabel="Price selector"
        ></touch-spin>
        <p>Selected price: {{ price | number: '1.2-2' }}</p>
      </section>
    </main>
  `,
  styleUrl: './app.css',
})
export class App {
  quantity = 2;
  price = 9.5;
}
