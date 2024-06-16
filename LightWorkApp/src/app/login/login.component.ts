import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model: any = {};
  user: User;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient,
      private userService: UserService
  ) {this.user = new User('','') }


  login(){
    console.log('user info is : ' + this.user.username + ' password :' + this.user.password)
    this.userService.confirmUser(this.user).subscribe(result => {if (result == true){
      this.gotoRunList()
    }});
  }
  gotoRunList(){
    localStorage.setItem('username',this.user.username)
    console.log('local storage is : ' + localStorage.getItem('username'))
    this.router.navigate(['/runs'])
  }

  // ngOnInit() {
  //     sessionStorage.setItem('token', '');
  // }

  // login() {
  //     let url = 'http://localhost:8085/login';
  //     let result = this.http.post<Observable<boolean>>(url, {
  //         userName: this.model.username,
  //         password: this.model.password
  //       }).subscribe(isValid => {
  //         if (isValid) {
  //           sessionStorage.setItem(
  //             'token', 
  //             btoa(this.model.username)
  //           );
  //     this.router.navigate(['']);
  //       } else {
  //           alert("Authentication failed.")
  //       }
  //   });
  // }
}
