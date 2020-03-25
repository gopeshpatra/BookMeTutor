import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BookingResponse } from 'src/app/Response/bookingResponse';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cancel } from '../../classes/cancel';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UpdateBooking } from '../../classes/updateBooking';

interface Times{
  value:String;
  display:String;
}
@Component({
  selector: 'app-yourbookings',
  templateUrl: './yourbookings.component.html',
  styleUrls: ['./yourbookings.component.css']
})
export class YourbookingsComponent implements OnInit {
//Dates
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

//Times

times:Times[]=[
  {display:'9:00A.M-10:00A.M',value:'09:00:00'},{display:'10:00A.M-11:00A.M',value:'10:00:00' },
 {display:'11:00A.M-12:00P.M',value:'11:00:00' },{display:'12:00P.M-1:00P.M',value:'12:00:00' },
 {display:'1:00P.M-2:00P.M',value:'13:00:00' },
 {display:'2:00P.M-3:00P.M',value:'14:00:00' },{display:'3:00P.M-4:00P.M',value:'15:00:00' },
 {display:'4:00P.M-5:00P.M',value:'16:00:00' },{display:'5:00P.M-6:00P.M',value:'17:00:00' },
 {display:'6:00P.M-7:00P.M',value:'18:00:00' },
 {display:'7:00P.M-8:00P.M',value:'19:00:00' },{display:'8:00P.M-9:00P.M',value:'20:00:00' },
];

@Input() booking:BookingResponse

@Output() statusChange = new EventEmitter<void>();

  constructor(private http:HttpClient) { }

  panelOpenState = false;
  isDisabled=false
  date:string;
  time:string;

  cancelForm:FormGroup;
  rescheduleForm:FormGroup;

  

  cancel=new Cancel()
  updatebooking=new UpdateBooking()

serverUrl='http://bookmetutor-backend.ap-southeast-1.elasticbeanstalk.com';

httpOptions={
  headers:new HttpHeaders({
   'Content-Type':'application/json',
   'Authorization':localStorage.getItem('token')
     } )
   };
  

deleteOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':localStorage.getItem('token')
    } ),
    body:{
      reason :this.cancel.reason
    }
 }

  ngOnInit() {
     this. cancelForm=new FormGroup({
      'cancelReason':new  FormControl(null, Validators.required)});

      this.rescheduleForm = new FormGroup({
        'date': new FormControl(null, Validators.required),
        'time':new FormControl(null,Validators.required),
        'comment':new FormControl(),
        'score':new FormControl(),
      });

      if(this.booking.rescheduled===true)
      {
        this.isDisabled=true
      }
  }

  cancelBooking(){
  this.cancel.reason= this.cancelForm.get('cancelReason').value;
    console.log(this.cancel.reason)
    this.http
    .delete( this.serverUrl +'/user/'+localStorage.getItem('mail')+'/booking/'+this.booking.id,this.deleteOptions)
    .subscribe(
      data => this.statusChange.emit(),
      error => console.log(error)
    );
      }

      updateBooking(){
   
        this.date=this.rescheduleForm.get('date').value;
        this.time=this.rescheduleForm.get('time').value;
        this.updatebooking.new_date=this.date+'T'+this.time+'.000';
        this.updatebooking.comment=this.rescheduleForm.get('comment').value;
        this.updatebooking.score=this.rescheduleForm.get('score').value;
        
   this.http.put( this.serverUrl +'/user/'+localStorage.getItem('mail')+'/booking/'+this.booking.id,this.updatebooking,this.httpOptions)
    .subscribe(
      data => this.statusChange.emit(),
     error => console.log(error)
   
    );
   


      }

}
