import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

   @Input() quote:Quote;
   @Output() isComplete = new EventEmitter<boolean>();

   upvotes:number=0;
   quoteUpvote(){
     this.upvotes++;
   }
   downVotes:number=0;
   quoteDownvote(){
     this.downVotes++;
   }
    

  constructor() { }

  ngOnInit() {
  }

}
