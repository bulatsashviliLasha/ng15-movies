import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../models/movie";
import scrollToTop from "../../utils/scrollToTop";
import {take} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = []
  genreId: string | null = null;
  searchValue: string = ''

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({genreId}) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getPagedMovies(1)
      }
    })
  }

  getPagedMovies(page: number, searchKeyword?: string) {
    this.moviesService.searchMovies(page, searchKeyword).subscribe(movies => {
      this.movies = movies;
    })
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.moviesService.getMoviesByGenre(genreId, page).subscribe(movies => {
      this.movies = movies;
    })
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber)
    } else {
      this.searchValue ? this.getPagedMovies(pageNumber, this.searchValue) : this.getPagedMovies(pageNumber);
    }
    scrollToTop();
  }

  searchChanged() {
    this.searchValue && this.getPagedMovies(1, this.searchValue);
  }
}