import { Component, OnInit } from '@angular/core';
import {Project} from './project';
import {ProjectService} from './project.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pmaddprj',
  templateUrl: './pmaddprj.component.html',
  styleUrls: ['./pmaddprj.component.scss']
})
export class PmaddprjComponent implements OnInit {
  
  projectToAdd:Project;
  projects:Array<Project>;
  showUpdateButton:boolean;
  showAddButton:boolean;
  
  constructor(private http: HttpClient,private projectService:ProjectService) {
   
    this.projects = new Array<Project>();
  }

  ngOnInit():void {
    this.projectToAdd=new Project();
    this.getProjects();
    this.showAddButton=true;
    this.showUpdateButton=false;
  }
  onAdd(project){
    console.log("in addition");
    this.projectService.addProject(project)
         .subscribe(data => {
          console.log("POST Request is successful ", data);
          this.getProjects();
          this.resetAll();
          this.showAddButton=true;
          this.showUpdateButton=false;
        },
        error => {
          console.log("Error", error);
        }
      );    
  }

  getProjects(){
    this.projectService.getProjects().subscribe((projects) => {
      console.log(JSON.stringify(projects));
      this.projects = projects;
    },
      (error) => {
      });
  
  }

  editProject(project){
    console.log("project=>"+project);
    this.projectToAdd=project;
    this.showAddButton=false;
    this.showUpdateButton=true;
  }

  onUpdate(project){
    this.projectService.updateProject(project)
          .subscribe(
            data => {
              console.log("Update Request is successful ", data);
              this.getProjects();
              this.resetAll();
              this.showAddButton=true;
              this.showUpdateButton=false;
            },
            error => {
              console.log("Error", error);
            }

          );
  }

  suspendProject(){

  }
  sortProject(attr){
    console.log("sortProject attr=>"+attr);
    this.projectService.sortProjects(attr).subscribe((projects) => {
      console.log(JSON.stringify(projects));
      this.projects = projects;
    },
      (error) => {
      });
  }
  resetAll() {
    this.projectToAdd = new Project();

  };

}
