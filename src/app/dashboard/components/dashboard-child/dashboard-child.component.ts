import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.scss'],
})
export class DashboardChildComponent implements OnInit {
  @Input()
  text: string = '';
  @Output()
  textChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Se cambió el dashboard child', changes);
  }

  ngOnInit(): void {
    console.log('Se inicializó el dashboard-child');
  }

  handleClick() {
    this.text = 'Dashboar text changed by the child';
    this.textChange.emit(this.text);
  }
}
