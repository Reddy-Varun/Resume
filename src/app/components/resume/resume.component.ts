import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  experience: any;

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.resumeService.getExperience().subscribe(res => {
      this.experience = res.data;
    });
  }
}
