import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appSelected]',
})
export class SelectedDirective implements OnChanges {
  @Input() public appSelected: boolean;

  @HostBinding('style.backgroundColor') private backgroundColor: string;
  @HostBinding('style.fontWeight') private fontWeight: string;
  @HostBinding('style.color') private color: string;

  ngOnChanges(): void {
    if (this.appSelected) {
      this.backgroundColor = 'rgb(192 132 252 / var(--tw-bg-opacity))';
      this.color = 'rgb(147 51 234 / var(--tw-bg-opacity))';
      this.fontWeight = 'bold';
    } else {
      this.backgroundColor = 'rgb(255 255 255 / var(--tw-bg-opacity))';
      this.color = 'rgb(241 245 249 / var(--tw-text-opacity))';
      this.fontWeight = 'normal';
    }
  }

  constructor() {
    this.appSelected = false;
    this.backgroundColor = 'bg-slate-100';
    this.color = 'text-slate-900';
    this.fontWeight = 'text-normal';
  }
}
