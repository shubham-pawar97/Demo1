import { createAction ,props } from '@ngrx/store';

export const add = createAction('add',props<{name:string, email:string, city:string}>());