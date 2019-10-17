import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

  user:Array<any>
login:any;
constructor(private http:HttpClient,private route: ActivatedRoute,
private router: Router) { }

ngOnInit() {
this.login = this.route.snapshot.paramMap.get('userName');
console.log(this.login);
this.http.get("https://api.github.com/users/" + this.login + "/repos").subscribe((Data:any)=>{
this.user=Data;
});
}

}
