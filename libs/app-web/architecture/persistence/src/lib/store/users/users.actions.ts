import { createAction, props } from "@ngrx/store";

export const saveUser = createAction(
    '[Users] Save User',
    props<any>()
);