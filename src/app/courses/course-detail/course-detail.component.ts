import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  selectedCourse:Course
CourseId:number

courseService:CourseService=inject(CourseService)
activeRoute:ActivatedRoute=inject(ActivatedRoute)
ngOnInit(): void {
//this.CourseId=this.activeRoute.snapshot.params['id']
this.CourseId=+this.activeRoute.snapshot.paramMap.get('id')
this.selectedCourse=this.courseService.courses.find(c=>c.id===this.CourseId)
console.log(this.CourseId)
}


}
