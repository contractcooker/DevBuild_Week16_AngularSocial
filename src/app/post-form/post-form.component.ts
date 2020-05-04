import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<Post>();
  title:string = ''
  thought:string = ''
  hideForm:boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  submitPost = function() {
    this.submitted.emit(this.post)
  }
  newThought = function() {
    this.hideForm = false
  }
}
