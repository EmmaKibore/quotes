export class Quote {
    public showDetails:boolean;
    constructor(public id:number , public quote:string,public author:string,public Date:Date, public upVotes:number, public downVotes:number){
        this.showDetails=false
    }
}
         