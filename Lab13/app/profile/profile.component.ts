import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { DbService } from '../db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  private subscription: Subscription;
  id=0;
  stu={};

  constructor(private activatedRoute: ActivatedRoute,private db:DbService) {
    this.subscription = activatedRoute.queryParams.subscribe(
        (param: any) => {
          this.id = param['id'];
          this.stu = db.getData()[this.id];
      }
    );
    this.id = activatedRoute.snapshot.params['id'];
    this.stu = db.getData()[this.id-1];
    
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
