import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item:WishItem) => item,
  (item:WishItem) => !item.isComplete,
  (item:WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  standalone: false,
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit{

  ngOnInit(): void {
    this.updateFilter('0');
  }
  
  @Input() filter:any;
  @Output() filterChange = new EventEmitter<any>();

  listFilter:any = '0';

  updateFilter(value:any){
    this.filter = filters[value]
    this.filterChange.emit(this.filter)
  }
}
