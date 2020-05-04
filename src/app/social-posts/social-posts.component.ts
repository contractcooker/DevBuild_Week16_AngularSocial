import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  posts:Post[] = [
    {title: "Angular is awesome: a case study in sarcasm", thought: "see above" }
  ]

}
