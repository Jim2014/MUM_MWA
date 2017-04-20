import { Injectable }       from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot,Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { DbService } from '../db.service';

@Injectable()
export class MyCanActivateGuard implements CanActivate {
  constructor(private db:DbService, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log('----MyCanActivateGuard----');
    console.log(route.url[1].path);
    console.log(route);
    console.log(state);
    let id = parseInt(route.url[1].path);
    if(id<=0||id>this.db.getData().length){
       this.router.navigate(['/error']);
       return false;
    }   
    return true;
  }
}
