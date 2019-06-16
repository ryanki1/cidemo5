import {Component, Input, Output, EventEmitter, Inject, ElementRef, ViewChild} from '@angular/core';
import {Product} from '../../product';
import {select, Store} from '@ngrx/store';
import * as reviewActions from '../../state/review.actions';
import * as fromReview from '../../state/review.reducer';
import {Observable} from 'rxjs';
import {Log} from '../../../log/state/log.reducer';
import {getAllLogs, getFilteredLogs, getLogsFilter} from '../../../log/state';
import {BaseFilterCellComponent, FilterService} from '@progress/kendo-angular-grid';
import {LogFilterState} from '../../../log/state/filter.reducer';
import {LogFilterAction} from '../../../log/state/filter.action';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends BaseFilterCellComponent {
  pageTitle = 'Products';

  public log$: Observable<Log[]>;

  @Input() errorMessage: string;
  @Input() products: Product[];
  @Input() displayCode: boolean;
  @Input() selectedProduct: Product;
  @Output() checked = new EventEmitter<boolean>();
  @Output() initializeNewProduct = new EventEmitter<void>();
  @Output() selected = new EventEmitter<Product>();
  @ViewChild('kendo-grid') grid: ElementRef;
  public defaultItem: { textField: string, valueField: number } =
    {
      textField: 'Please select..',
      valueField: 0
    };
  public selectedValue = 0;
  public textField: string;
  public valueField: number;
  public dataDropdown: string[] = ['[Log] User Logon',
    '[Log] User Logoff',
    '[Log] Product select',
    '[Log] User Logon Complete',
    '[Log] User Logoff Complete',
  ];

  constructor(private store: Store<fromReview.ReviewState>,
              private filterStore: Store<LogFilterState>,
              @Inject('AppSettings') private appSettings,
              filterService: FilterService) {
    super(filterService);
    console.log('ProductList: ' + appSettings.dateFormat);
    this.log$ = store.pipe(select(getFilteredLogs));
    this.log$
      .subscribe((logStream) => {
          console.log(JSON.stringify(logStream));
        }
      );
  }

  public onChange(item, grid): void {
    const filter = {
      filter: {
        logic: 'and',
        filters: [
          {
            field: 'action',
            operator: 'eq',
            value: item
          }
        ]
      }
    };
    this.filterStore.dispatch(new LogFilterAction(filter));
    // const result = process(grid.data.data,
  }


  checkChanged(value: boolean): void {
    this.checked.emit(value);
  }

  newProduct(): void {
    this.initializeNewProduct.emit();
  }

  productSelected(product: Product): void {
    this.store.dispatch(new reviewActions.LoadReview(product.id));
    this.selected.emit(product);
  }

}
