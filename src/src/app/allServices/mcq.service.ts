import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class McqService {

  constructor() { }

  getmcqsetup(){
    return [
      {
        questionTitle: "Public communication tends to occur within a more",
        questionoption:[
          {
            id: 1,
            option:"Complex Structure",
            option_no: "a",
            iconoption: "right"
          },
          {
            id: 2,
            option:"Political Structure",
            option_no: "b",
            iconoption: "wrong"
          },
          {
            id: 3,
            option:"Convenient Structure",
            option_no: "c",
            iconoption: "wrong"
          },
          {
            id: 4,
            option:"Formal Structure",
            option_no: "d",
            iconoption: "wrong"
          }
        ],
        answareoption:[
          {
            id: 1,
            showOption: "a",
            showoptiontext: "Correct",
            explanation: `Explanation : The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form, accompanied by
            English versions from the 1914 translation by H. Rackham.`
          },
          {
            id: 2,
            showOption: "b",
            showoptiontext: "Wrong",
            explanation: `Explanation : No Explanation`
          },
          {
            id: 3,
            showOption: "c",
            showoptiontext: "Wrong",
            explanation: `Explanation : No Explanation`
          },
          {
            id: 4,
            showOption: "d",
            showoptiontext: "Wrong",
            explanation: `Explanation : No Explanation`
          },
        ],
        
      },
      {
        questionTitle: "Effective communication needs a supportive",
        questionoption:[
          {
            id: 1,
            option:"Economic Environment",
            option_no: "a",
            iconoption: "wrong"
          },
          {
            id: 2,
            option:"Political Environment",
            option_no: "b",
            iconoption: "right"
          },
          {
            id: 3,
            option:"Social Environment",
            option_no: "c",
            iconoption: "wrong"
          },
          {
            id: 4,
            option:"Multicultural Environment",
            option_no: "d",
            iconoption: "wrong"
          }
           
        ],
        answareoption:[
          {
            id: 1,
            showOption: "a",
            showoptiontext: "Wrong",
            explanation: `Explanation : No Explanation`
          },
          {
            id: 2,
            showOption: "b",
            showoptiontext: "Correct",
            explanation: `Explanation : The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form, accompanied by
            English versions from the 1914 translation by H. Rackham.`,
          },
          {
            id: 3,
            showOption: "c",
            showoptiontext: "Wrong",
            explanation: `Explanation : No Explanation`
          },
          {
            id: 4,
            showOption: "d",
            showoptiontext: "Wrong",
            explanation: `Explanation : No Explanation`
          },
        ],
        
      },
      {
        questionTitle: "Which of these is not a characteristic of T.V. ?",
        questionoption:[
          {
            id: 1,
            option:"A Democratic Medium",
            option_no: "a",
            iconoption: "wrong"
          },
          {
            id: 2,
            option:"A Mobile Medium",
            option_no: "b",
            iconoption: "wrong"
          },
          {
            id: 3,
            option:"A Living Room Medium",
            option_no: "c",
            iconoption: "right"
          },
          {
            id: 4,
            option:"A Medium of Immediacy",
            option_no: "d",
            iconoption: "wrong"
          },
          {
            id: 5,
            option:"A Hard of Immiunity",
            option_no: "e",
            iconoption: "wrong"
          }
           
        ],
        answareoption:[
          {
            id: 1,
            showOption: "a",
            showoptiontext: "Wrong",
            explanation: `Explanation : No Explanation`
          },
          {
            id: 2,
            showOption: "b",
            showoptiontext: "Wrong",
            explanation: `Explanation : No Explanation`
          },
          {
            id: 3,
            showOption: "c",
            showoptiontext: "Correct",
            explanation: `Explanation : The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form, accompanied by
            English versions from the 1914 translation by H. Rackham.`,
          },
          {
            id: 4,
            showOption: "d",
            showoptiontext: "Wrong",
            explanation: `Explanation : No Explanation`
          },
          {
            id: 5,
            showOption: "e",
            showoptiontext: "Wrong",
            explanation: `Explanation : No Explanation`
          }
        ],
        
      }
    ]
  }

  

}
