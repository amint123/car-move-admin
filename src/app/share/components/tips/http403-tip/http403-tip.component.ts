import {Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalConst} from '../../../global-const';

@Component({
  selector: 'app-http403-tip',
  templateUrl: './http403-tip.component.html',
  styleUrls: ['./http403-tip.component.less']
})
export class Http403TipComponent {
  constructor(private renderer2: Renderer2, private router: Router) {
  }

  @ViewChild('pageDiv') public pageDiv: ElementRef;

  private flag = false;

  public get http403Flag(): boolean {
    return this.flag;
  }

  @Input()
  public set http403Flag(flag: boolean) {
    this.renderer2.setStyle(this.pageDiv.nativeElement, 'display', flag ? 'block' : 'none');
    this.flag = flag;
    this.displayStateChanged.emit({displayState: flag});
  }

  @Output('displayStateChanged') public displayStateChanged = new EventEmitter();

  public onHomeBtnClick() {
    this.router.navigateByUrl(GlobalConst.HomePath);
  }
}
