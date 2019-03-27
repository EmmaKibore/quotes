import { Component, OnInit,EventEmitter, } from '@angular/core';
import { Quote } from '../quote';
import { VoteCountPipe } from '../vote-count.pipe';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Science is organised knowledge.Wisdom is organised life','By Emma Kibore',new Date(2019,1,1),0,0),
    new Quote(2,'Try to be a rainbow in someones cloud','By Michelle Kibias',new Date(2019,2,2),0,0),
    new Quote(3,'Life is too short for long term grudges','By Amira princess',new Date(2019,6,6),0,0),
    new Quote(4,'Childhood is a short season','By Evance Kipruto',new Date(2019,10,10),0,0),
    new Quote(5,'Shortcuts make long delays','By Khadija Farid',new Date(2019,4,4),0,0),
    new Quote(6,'Your perception of me is a reflection of you','By Emma Kibore',new Date(2019,5,5),0,0),
    new Quote(7,'Keep your face to the sunshine and you cannot see a shadow','By Eddy Bombo',new Date(2019,11,11),0,0),
    new Quote(8,'Your positive action combined with positive thinking result in success.','By Hussein Django',new Date(2019,12,15),0,0)
    new Quote(9,'Shortcuts make long delays','By Shirley Katumbo',new Date(2019,11,11),0,0),
    new Quote(10,'Childhood is a short season','By Cherry Shah',new Date(2019,5,12),0,0),
  ]

  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete=confirm('Are you sure you want to this quote')

      if(toDelete){
      this.quotes.splice(index,1)
    }
    // addNewQuote(quote){
    //   let quoteLength = this.quotes.length;
    //   quote.id=quoteLength+1;
    //   quote.voteCount=new Vote(Quote.voteCount);
    //   this.quotes.push(Quote);
    // }
  }
  }
  seeDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  ngOnInit() {
  }

}
