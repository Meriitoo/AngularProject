import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Post } from '../types/post';


@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})

export class DetailsPostComponent {
  postId: string | undefined;
  post: Post | undefined;
  newPostText: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = params['postId'];
      this.apiService.getPosts().subscribe(posts => {
        console.log(posts);
        this.post = posts.find(post => post._id === this.postId);
        console.log(this.post); 
        if (this.post) {
          this.newPostText = this.post.text; 
        }
      });
    });
  }
  

  saveChanges() {
    if (this.post && this.postId) {
      this.apiService.updatePost(this.postId, this.newPostText).subscribe(
        updatedPost => {
          this.post = updatedPost; 
        },
        error => {
          console.error('Error updating post:', error);
        }
      );
    }
  }
}
