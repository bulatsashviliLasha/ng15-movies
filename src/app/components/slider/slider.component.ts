import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {state, style, trigger, transition, animate} from "@angular/animations";
import {IMAGES_SIZES} from "../../constants/images.sizes";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', [animate('1s')]),
    ])
  ]
})
export class SliderComponent implements OnInit{
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;
  currentSliderIndex: number = 0;
  readonly imagesSizes =IMAGES_SIZES;
  ngOnInit(): void {
    if(!this.isBanner){
      setInterval(() => {
        this.currentSliderIndex = ++this.currentSliderIndex % this.items.length;
      }, 5000)
    }
  }

}
