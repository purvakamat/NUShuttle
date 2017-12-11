import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import {environment} from "../../environments/environment";
import {SharedService} from "./shared.service";
import {Router} from '@angular/router';
import {User} from "../models/user.model.client";

@Injectable()
export class UserService{

  baseURL : string;

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router ){
    this.baseURL = environment.baseUrl;
  }

  login(username: String, password: String) {
    let requestOptions = new RequestOptions();
    requestOptions.withCredentials = false; // jga
    const body = {
      username : username,
      password : password
    };

    return this.http.post(this.baseURL + '/api/login', body, requestOptions)
      .map(
        (res: Response) => {
          const data = res.json();
          this.sharedService.user = data;
          return data;
        }
      );
  }

  logout() {
    let requestOptions = new RequestOptions();
    requestOptions.withCredentials = true;
    return this.http.post(this.baseURL + '/api/logout', '', requestOptions)
      .map(
        (res: Response) => {
          this.sharedService.user = null;
        }
      );
  }

  register(user: User) {
    let requestOptions = new RequestOptions();
    requestOptions.withCredentials = true;

    return this.http.post(this.baseURL + '/api/register', user, requestOptions)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  loggedIn() {
    let requestOptions = new RequestOptions();
    requestOptions.withCredentials = true;
    return this.http.get(this.baseURL + '/api/loggedin', requestOptions)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user; // setting user so as to share with all components
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  createUser(user : any){
    return this.http.post(this.baseURL + '/api/user', user).map((response: Response) => {
      return response.json();
    });
  }

  findUserById(userId : String){
    return this.http.get(this.baseURL+ '/api/user' + "/" + userId).map((response: Response) => {
      return response.json();
    });
  }

  findUserByUsername(username : string){
    let requestOptions = new RequestOptions();
    let params = new URLSearchParams();
    params.set("username", username);
    requestOptions.params = params;
    return this.http.get(this.baseURL+ '/api/user',requestOptions).map((response: Response) => {
      return response.json();
    });
  }

  findUserByCredentials(username : string, password : string){
    let requestOptions = new RequestOptions();
    let params = new URLSearchParams();
    params.set("username", username);
    params.set("password", password);
    requestOptions.params = params;
    requestOptions.withCredentials = true;
    return this.http.get(this.baseURL+ '/api/user',requestOptions).map((response: Response) => {
      return response.json();
    });
  }

  updateUser(userId : String, user : any){
    return this.http.put(this.baseURL + '/api/user/' + userId, user).map((response: Response) => {
      return response.json();
    });
  }

  deleteUser(userId : String){
    return this.http.delete(this.baseURL+ '/api/user/' + userId).map((response: Response) => {
      this.sharedService.user = null;
      return response.json();
    });
  }

}



