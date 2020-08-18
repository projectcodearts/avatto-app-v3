import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MocktestService {

  constructor() { }
  getmocktest(){
    return [
      {
        icon: "assets/images/m-i1.png",
        link: "#",
        name: "Test_1"
      },
      {
        icon: "assets/images/m-i2.png",
        link: "#",
        name: "Test_2"
      },
      {
        icon: "assets/images/m-i3.png",
        link: "#",
        name: "Test_3"
      },
      {
        icon: "assets/images/m-i4.png",
        link: "#",
        name: "Test_4"
      },
      {
        icon: "assets/images/m-i5.png",
        link: "#",
        name: "Test_5"
      },
      {
        icon: "assets/images/m-i5.png",
        link: "#",
        name: "Test_6"
      }
      
    ]
  }

  getmocktesttabledata(){
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
