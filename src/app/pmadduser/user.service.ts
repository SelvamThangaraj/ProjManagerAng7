import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { map,catchError } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class UserService extends BaseService {
    constructor(private http: HttpClient) {
        super();
    }

    
    public getUsers(): Observable<any> {
        
            return this.http.get(super.baseurl() + '/users')
            //   .pipe(map((res: Response) => {
            //     console.log("getusers() res=>"+res);
            //     const data = res['users'];
            //    // const data = res;
            //     return data;
            //   }))
              .pipe(catchError(this.handleError));
        
          }
    
    addUser(user:User): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("Service addUser=>"+user);
        return this.http.post(super.baseurl() + '/user',user)
            // .pipe(map((res: Response) => {
            //     const data = super.extractData(res);
            //     console.log("addUser Service response=>"+data);
            //     return data;
            // }))
            .pipe(catchError(this.handleError));
    }

    updateUser(user:User): Observable<any> {
        
        return this.http.put(super.baseurl() + '/user',user,{
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
            // .pipe(map((res: Response) => {
            //     const data = super.extractData(res);
            //     return data;
            // }))
            //.pipe(catchError(this.handleError));
    }

   deleteUser(user:User): Observable<any> {
        return this.http.delete(super.baseurl() + '/user/'+user.userId)
            // .pipe(map((res: Response) => {
            //     const data = super.extractData(res);
            //     return data;
            // }))
            .pipe(catchError(this.handleError));
    }

    sortUsers(sortItem:string):Observable<any>{
        return this.http.get(super.baseurl() + '/users/sort/'+sortItem)
        // .pipe(map((res: Response) => {
        //   console.log("getusers() res=>"+res);
        //   const data = res['users'];
        //  // const data = res;
        //   return data;
        // }))
        .pipe(catchError(this.handleError));
    }
}   