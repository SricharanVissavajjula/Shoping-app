import { createReducer, on } from "@ngrx/store";
import { increment, decrement } from "./product-details.actions";

export const initialCount = 0

export const counterReducer = createReducer(
    initialCount,
    on(increment, (state)=> state + 1),
    on(decrement, (state)=> state - 1)
)