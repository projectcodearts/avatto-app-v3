import { Component, OnInit,ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CategoryServicesService } from '../../allServices/category-services.service';
/*import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';*/
@Component({
  selector: 'app-featured-category',
  templateUrl: './featured-category.component.html',
  styleUrls: ['./featured-category.component.scss'],
})
export class FeaturedCategoryComponent implements OnInit {
  lodemorebutton: boolean = false;
  fetching = false;
  fcategory: any = [];
  count:number = 1; 
  constructor(
    private _featuredCat: CategoryServicesService,
    private el: ElementRef,
    private renderer: Renderer2,
    ) { }
  ngOnInit() {
    this.fetching = true;
    this._featuredCat.getfeaturedCategory().pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.fcategory = JSON.parse(data);
      this.fetching = false;
      this.lodemorebutton = true;
      
    });
  }

  

  loadMore(){
    if(this.count == 1){

      for(let i=6;i<9;i++){
        let className = ".cat-name"+i;
        const cardElement = (<HTMLElement>this.el.nativeElement).querySelector(className); 
          this.renderer.setStyle(
            cardElement,
            'display',
            'block'
          );
  
      }

    }

    if(this.count == 2){

      for(let i=9;i<12;i++){
        let className = ".cat-name"+i;
        const cardElement = (<HTMLElement>this.el.nativeElement).querySelector(className); 
          this.renderer.setStyle(
            cardElement,
            'display',
            'block'
          );

          let btnClass =  ".load_more";
          const btnElement = (<HTMLElement>this.el.nativeElement).querySelector(btnClass);
          //const btnElement_less = (<HTMLElement>this.el.nativeElement).querySelector('.show_less');
          console.log(btnElement);
          
              this.renderer.setStyle(
                btnElement,
                'display',
                'none'
              );
  
      }

    }

    if(this.count == 3){

      // for(let i=12;i<14;i++){
      //   let className = ".cat-name"+i;
      //   const cardElement = (<HTMLElement>this.el.nativeElement).querySelector(className); 
      //     this.renderer.setStyle(
      //       cardElement,
      //       'display',
      //       'block'
      //     );
  
      // }
      let btnClass =  ".load_more";
      const btnElement = (<HTMLElement>this.el.nativeElement).querySelector(btnClass);
      //const btnElement_less = (<HTMLElement>this.el.nativeElement).querySelector('.show_less');
      console.log(btnElement);
       
          this.renderer.setStyle(
            btnElement,
            'display',
            'none'
          );

          // this.renderer.setStyle(
          //   btnElement_less,
          //   'display',
          //   'block'
          // );

    }

    this.count++;

    
  }
}
