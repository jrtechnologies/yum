import { Component, OnInit, Input } from '@angular/core';
import { GlobalSettingsService } from './../../services/global-settings-service.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() selectedTab: number;
  public policy: Observable<string>;
  public terms: Observable<string>;

  constructor(public globalSettingsService: GlobalSettingsService) { }

  ngOnInit() {
    this.policy = this.globalSettingsService.getPolicy();
    this.terms = this.globalSettingsService.getTerms();
  }
}
