import { Component } from '@angular/core';

@Component({
  selector: 'app-conditionaldirective',
  templateUrl: './conditionaldirective.component.html',
  styleUrls: ['./conditionaldirective.component.css']
})
export class ConditionaldirectiveComponent {
  videos= [
    {title: 'My video 1', share: 415, likes: 257, dislikes: 12, thumbnail: 'assets/images/image1.jpg'},
    {title: 'My video 2', share: 215, likes: 325, dislikes: 12, thumbnail: 'assets/images/image2.jpg'},
    {title: 'My video 3', share: 513, likes: 105, dislikes: 12, thumbnail: 'assets/images/image3.jpg'}
  ];
  mostLikedVideo = this.getmostlikedVideo();

  getmostlikedVideo(){
    let videoCopy = [...this.videos];
    return videoCopy.sort((curr, next) => next.likes - curr.likes)[0];
  }
}
