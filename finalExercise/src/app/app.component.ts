import { Component } from '@angular/core';
import { MyHttpService} from './my-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts;
  pipeargs:string='';
  title = 'final exercise';
  constructor(private myhttp:MyHttpService){
    this.myhttp.getPosts().subscribe(
      response=>{
        this.posts = response.json();
      },
      error=>{console.log(error)},
      ()=>{console.log('get post data finished')}
    );
  }
}
