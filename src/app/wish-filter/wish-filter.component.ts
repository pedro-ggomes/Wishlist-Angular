import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item:WishItem) => item,
  (item:WishItem) => !item.isComplete,
  (item:WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit{

  ngOnInit(): void {
    this.changeFilter('0');
  }
  
  @Output() filter = new EventEmitter<any>();

  listFilter:any = '0';

  changeFilter(value:any){
    this.filter.emit(filters[value])
  }
}
