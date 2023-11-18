import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  ngOnInit(): void {
   
    // this.searchString=this.activeRouter.snapshot.queryParams['search']
    // console.log(this.searchString)

    this.activeRouter.queryParamMap.subscribe(d=>{
      this.searchString=d.get('search')
    })
    if(this.searchString===undefined||this.searchString===''||this.searchString===null){
      this.AllCourses=this.coursesService.courses;
    }else{
      this.AllCourses=this.coursesService.courses
      .filter(c=>c.title.toLowerCase()
                                     .includes(this.searchString.toLowerCase()))
    }
  }
  coursesService = inject(CourseService);
  AllCourses: Course[] = this.coursesService.courses;

  activeRouter:ActivatedRoute=inject(ActivatedRoute)
  searchString:string;


}
