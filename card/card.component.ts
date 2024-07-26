import { Component, Input } from '@angular/core';
import { Product } from '../interface/product.interface';

 
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product: Product = {
    id: 0,
    title: " ",
    description: "",
    thumbnail:"",
    category: ""
  };
}