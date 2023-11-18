import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit ,OnDestroy{

  selectedCourse:Course
CourseId:number

courseService:CourseService=inject(CourseService)
activeRoute:ActivatedRoute=inject(ActivatedRoute)
parammapObs;
ngOnInit(): void {
//this.CourseId=this.activeRoute.snapshot.params['id']

//snapshot emit only one and can not change more time 

// this.CourseId=+this.activeRoute.snapshot.paramMap.get('id')
// this.selectedCourse=this.courseService.courses.find(c=>c.id===this.CourseId)

//-------use observable to make vale emit more than one 

// this.CourseId=+this.activeRoute.params.subscribe(d=>{
// this.CourseId=+d['id']
// this.selectedCourse=this.courseService.courses.find(c=>c.id===this.CourseId)
// })

//-----can also use
this.parammapObs=+this.activeRoute.paramMap.subscribe(d=>{
this.CourseId=+d.get('id')
this.selectedCourse=this.courseService.courses.find(c=>c.id===this.CourseId)
})


console.log(this.CourseId)
}
ngOnDestroy() {
 this.parammapObs.unsubscribe()
}


}
