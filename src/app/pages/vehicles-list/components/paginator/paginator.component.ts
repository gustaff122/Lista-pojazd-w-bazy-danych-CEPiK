import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {

  @Input() page: number = 1
  @Input() maxPage: number = 100

  @Output() pageVal = new EventEmitter<any>()
  
  goToPage(num: number) {
    this.pageVal.emit(num)
  }

}
