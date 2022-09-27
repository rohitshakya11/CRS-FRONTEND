import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {

  selectedPaymentMethod: string = "UPI";
  amount: number = 0;
  studentId!: number;
  paymentId!: number;

  constructor(
    private studentService: StudentService,
    private paymentService: PaymentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.studentId = Number(this.route.snapshot.paramMap.get('studentId'));
    this.paymentId = Number(this.route.snapshot.paramMap.get('paymentId'));
    this.amount = Number(this.route.snapshot.paramMap.get('amount'));
  }

  makePayment(): void{
    this.paymentService.makePayment(this.studentId, this.selectedPaymentMethod)
      .subscribe((payment) =>{ 
        if(payment.paymentStatus){
          alert(`Payment Successful of ${payment.amount}!`);
        }
      });
  }

}
