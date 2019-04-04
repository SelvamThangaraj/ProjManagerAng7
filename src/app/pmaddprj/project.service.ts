import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
import { map,catchError } from 'rxjs/operators';
import { BaseprojectService } from './baseproject.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseprojectService {
  constructor(private http: HttpClient) {
      super();
  }

  
  public getProjects(): Observable<any> {
      
          return this.http.get(super.baseurl() + '/projects')
          //   .pipe(map((res: Response) => {
          //     console.log("getusers() res=>"+res);
          //     const data = res['users'];
          //    // const data = res;
          //     return data;
          //   }))
            .pipe(catchError(this.handleError));
      
        }
  
  addProject(project:Project): Observable<any> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      console.log("Service addUser=>"+project);
      return this.http.post(super.baseurl() + '/project',project)
          // .pipe(map((res: Response) => {
          //     const data = super.extractData(res);
          //     console.log("addUser Service response=>"+data);
          //     return data;
          // }))
          .pipe(catchError(this.handleError));
  }

  updateProject(project:Project): Observable<any> {      
      return this.http.put(super.baseurl() + '/project',project,{
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

 deleteProject(project:Project): Observable<any> {
      return this.http.delete(super.baseurl() + '/project/'+project.projectId)
          // .pipe(map((res: Response) => {
          //     const data = super.extractData(res);
          //     return data;
          // }))
          .pipe(catchError(this.handleError));
  }

  sortProjects(sortItem:string):Observable<any>{
      return this.http.get(super.baseurl() + '/projects/sort/'+sortItem)
      // .pipe(map((res: Response) => {
      //   console.log("getusers() res=>"+res);
      //   const data = res['users'];
      //  // const data = res;
      //   return data;
      // }))
      .pipe(catchError(this.handleError));
  }
}
