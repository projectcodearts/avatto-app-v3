import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  searchform: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchform = this.fb.group({
      name: ['', Validators.required]
    });
  }
  onSearch(name: string) {
    this.router.navigate(['/search-result', name])
 }

}
