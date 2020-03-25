import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Booking } from '../Booking';
import { BookingService} from '../BookingService';
import {Router} from '@angular/router';
import { topics } from '../classes/topics';

interface Board{
  value:String;
  display:String;
}
interface Class{
  value:number;
  display:number;
}
interface Location{
  display:String;
  value:String
}
interface Subject{
  value:String;
  display:String;
}
interface Topics{
  value:String;
  display:String;
}
interface Times{
  value:String;
  display:String;
}
@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})

export class BookingPageComponent implements OnInit {
 /*step1*/
board:Board[]=[
  {display:'CBSE',value:'CBSE'},
  {display:'ICSE',value:'ICSE'}]
  
class:Class[]=[
   {display:9,value:9}, {value:10,display:10},  {value:11,display:11},  {value:12,display:12} ];

location:Location[]=[
 {display:'sector-3',value:'sector-3'}, {display:'sector-1',value:'sector-1'}, 
 {display:'sector-4',value:'sector-4'}, {display:'sector-5',value:'sector-5'}
];
subject:Subject[]=[
{display:'physics',value:'physics'},{ display:'chemistry',value:'chemistry'},
 {display:'biology',value:'biology'}, {display:'mathematics',value:'mathematics'},
  {display:'computer',value:'computer'}
];

/*step3*/
   todaydate=new Date();
date1= this.todaydate.setDate(this.todaydate.getDate() + 1);
getdate1=this.todaydate.getDate();
firstdate=('0'+this.getdate1).slice(-2)
getmonth1=this.todaydate.getMonth()+1;
firstmonth=('0'+this.getmonth1).slice(-2)
 firstyear=this.todaydate.getFullYear();
 selectDate1:string=this.firstyear+'-'+this.firstmonth+'-'+this.firstdate;

 date2= this.todaydate.setDate(this.todaydate.getDate() + 1);
 getdate2=this.todaydate.getDate();
seconddate=('0'+this.getdate2).slice(-2)
getmonth2=this.todaydate.getMonth()+1;
secondmonth=('0'+this.getmonth2).slice(-2)
secondyear=this.todaydate.getFullYear();
selectDate2:string=this.secondyear+'-'+this.secondmonth+'-'+this.seconddate;

date3= this.todaydate.setDate(this.todaydate.getDate() + 1);
getdate3=this.todaydate.getDate()
thirddate=('0'+this.getdate3).slice(-2)
getmonth3=this.todaydate.getMonth()+1;
thirdmonth=('0'+this.getmonth3).slice(-2)
thirdyear=this.todaydate.getFullYear();
selectDate3:string=this.thirdyear+'-'+this.thirdmonth+'-'+this.thirddate;



/*step*/
  times:Times[]=[
    {display:'9:00A.M-10:00A.M',value:'09:00:00'},{display:'10:00A.M-11:00A.M',value:'10:00:00' },
   {display:'11:00A.M-12:00P.M',value:'11:00:00' },{display:'12:00P.M-1:00P.M',value:'12:00:00' },
   {display:'1:00P.M-2:00P.M',value:'13:00:00' },
   {display:'2:00P.M-3:00P.M',value:'14:00:00' },{display:'3:00P.M-4:00P.M',value:'15:00:00' },
   {display:'4:00P.M-5:00P.M',value:'16:00:00' },{display:'5:00P.M-6:00P.M',value:'17:00:00' },
   {display:'6:00P.M-7:00P.M',value:'18:00:00' },
   {display:'7:00P.M-8:00P.M',value:'19:00:00' },{display:'8:00P.M-9:00P.M',value:'20:00:00' },
  ];
  

constructor(private bookingservice: BookingService,
            private router:Router) {}

 formSubmitted: boolean=false;
 mySelections: string[];
 amount:number;
 date:string
 time:string
 address:string

 Step1: FormGroup;
 Step2:FormGroup;
 Step3:FormGroup;
 Step4:FormGroup;

 booking=new Booking();

 topicsSelected:topics
 checktopic:string[]

ngOnInit() {

        this. Step1=new FormGroup({
         'board':new  FormControl(null, Validators.required),
          'class': new   FormControl(null,Validators.required),
          'location': new  FormControl(null, Validators.required),
         'subject':new FormControl(null,Validators.required)
         });
     
      this.Step2 = new FormGroup({
        'topic': new FormControl(null, Validators.required),
         
       });
       this.Step3 = new FormGroup({
        'date': new FormControl(null, Validators.required),
        'time':new FormControl(null,Validators.required),
        'line1':new FormControl(null,Validators.required),
        'line2':new FormControl(''),
        'city':new FormControl(null,Validators.required),
        'pincode':new FormControl(null,Validators.required)
         });
         
         this.Step4=new FormGroup({
           'method':new FormControl(null, Validators.required)
         });
        }
      
       changed() {
        if (this.Step2.get('topic').value.length < 3) {
          this.mySelections =this.Step2.get('topic').value;
          this.amount=this.Step2.get('topic').value.length*100.00;
        } else {
          this.Step2.get('topic').setValue(this.mySelections);
        }
      }
     
  
    getTopics()
    {
      this.bookingservice.subjectname=this.Step1.get('subject').value;;
     this.bookingservice.class=this.Step1.get('class').value.toString();
      this.bookingservice.getTopicsbyparameters().subscribe
      (
        data=>{
          this.topicsSelected=data;
          this.checktopic=this.topicsSelected.topics;
          
        }
      )
    } 
  
saveDetails()
{
  this.booking.board=this.Step1.get('board').value;
  this.booking.classNumber=this.Step1.get('class').value.toString();
  this.booking.subject=this.Step1.get('subject').value;
  this.booking.topic=this.Step2.get('topic').value.join(",")
 
 this.date=this.Step3.get('date').value;
  this.time=this.Step3.get('time').value;
  this.booking.schedule=this.date+'T'+this.time+'.000';
  
  this.booking.line1=this.Step3.get('line1').value;
  this.booking.line2=this.Step3.get('line2').value;
  this.booking.city=this.Step3.get('city').value;
  this.booking.pincode=this.Step3.get('pincode').value;
  this.address=this.booking.line1+' '+this.booking.line2+' '+
                this.booking.city+' '+this.booking.pincode 

  
 
  this.booking.amount=this.Step2.get('topic').value.length*100.00;

  
}
     
      
    Submit()
  {
    if( (this.Step1.invalid)||(this.Step2.invalid)||(this.Step3.invalid) ||(this.Step4.invalid)){
      return;	
       } 
    this.booking.method=this.Step4.get('method').value;
  console.log('submitted');
  this.formSubmitted = true;
  
  console.log(this.booking.topic)
  console.log(this.booking);

  this.bookingservice.BookingPost(this.booking).subscribe(
   (response:any)=>{
         console.log(response.body)
         alert("Booking Placed")
          },
   
      error=>{
             console.log(error)
             alert("Booking Placed")
             this.router.navigate(['/userpage/booking'])
             
            }
  )
  
 }

 go(){
     this.formSubmitted=false;
     this.Step1.reset();
     this.Step2.reset();
     this.Step3.reset();
     this.Step4.reset();
   

  }

}




