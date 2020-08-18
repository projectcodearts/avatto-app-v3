import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudyMaterialService {

  constructor() { }
  getmstudymaterialtabledata(){
    return [
      {
        testmode:"online",
        testdetails:[
          {
            testname: "Mock test 1",
            testprice: "Rs 0 (FREE)",
            buttontext: "Attempt Now",
            buttonlink: ""
          },
          {
            testname: "Mock test 1",
            testprice: "Rs 0 (FREE)",
            buttontext: "Buy Now",
            buttonlink: ""
          },
          {
            testname: "Mock test 1",
            testprice: "Rs 0 (FREE)",
            buttontext: "Buy Now",
            buttonlink: ""
          }
        ]
      },
      {
        testmode:"postal course",
        testdetails:[
          {
            testname: "Mock test 1",
            testprice: "Rs 0 (FREE)",
            buttontext: "Attempt Now",
            buttonlink: ""
          },
          {
            testname: "Mock test 1",
            testprice: "Rs 0 (FREE)",
            buttontext: "Buy Now",
            buttonlink: ""
          },
          {
            testname: "Mock test 1",
            testprice: "Rs 0 (FREE)",
            buttontext: "Buy Now",
            buttonlink: ""
          }
        ]
      }
    ]
  }
}
