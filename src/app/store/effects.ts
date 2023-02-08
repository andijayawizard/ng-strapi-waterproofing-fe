import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductService } from '../shared/services/product.service';
import { ActionTypes } from './actions';

@Injectable()
export class ShopEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }

  // @createEffect()
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(({ payload: { page, limit } }) =>
      this.productService.getAll(page, limit).pipe(
        map(products => {
          return { type: ActionTypes.LoadSuccess, payload: products };
        }),
        catchError(() => EMPTY)
      )
    )
  ))
}
