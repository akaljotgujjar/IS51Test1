import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexModalService } from '../shared-components/flex-modal/flex-modal.service';
import { Http } from '@angular/http';

interface IOrders {
  pid: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  orders: Array<any> = [[{
    'pid': '1',
    'image': 'assets/sm_android.jpeg',
    'description': 'Android',
    'price': 150.00,
    'quantity': null
  }, {
    'pid': '2',
    'image': 'assets/sm_iphone.jpeg',
    'description': 'IPhone',
    'price': 200.00,
    'quantity': null
  }, {
    'pid': '3',
    'image': 'assets/sm_windows.jpeg',
    'description': 'Windows Phone',
    'price': 110.00,
    'quantity': null
  }]];

  constructor(
    private router: Router,
    private flexModal: FlexModalService,
    private http: Http
  ) {
  }

  async ngOnInit() {

  }





}
