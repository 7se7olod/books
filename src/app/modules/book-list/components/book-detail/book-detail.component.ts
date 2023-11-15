import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take, tap } from 'rxjs';
import { BooksDataService } from '../../../../services/books-data/books-data.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailComponent implements OnInit {
  book$ = this.booksDataService.book$;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly booksDataService: BooksDataService,
    private readonly router: Router,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => params.getAll('id')),
        tap((id) =>
          this.booksDataService
            .getBookFromId(id)
            .pipe(
              tap((book) => {
                if (!book) this.router.navigate(['/main']);
              })
            )
            .subscribe()
        ),
        take(1)
      )
      .subscribe();
  }

  toBackPage(): void {
    this.location.back();
  }
}
