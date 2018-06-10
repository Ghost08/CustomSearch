import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Console } from '@angular/core/src/console';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  SearchText: string;
  SearchResult: any = [];
  HideFooter: boolean = false;

  constructor(private _SearchService: SearchService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  getCustomSearchResult() {
    console.log(this.SearchText);
    this.spinner.show();
    this._SearchService.getSearchResult(this.SearchText)
      .subscribe(
      (result) => this.SearchResult = result.items,
      (err) => console.log(err),
      () => this.showTableFooter());

  }

  showTableFooter() {
    this.spinner.hide()
    if (this.SearchResult.length > 0) {
      this.HideFooter = true;
      console.log(this.HideFooter);
    }
    else {
      this.HideFooter = false;
      console.log(this.HideFooter);
    }

  }


}
