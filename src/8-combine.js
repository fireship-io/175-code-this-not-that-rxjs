import { Observable, combineLatest, merge } from 'rxjs';
import { delay } from 'rxjs/operators';

const randoAsync = Observable.create(o => o.next(Math.random()));

const delayed = randoAsync.pipe(delay(1000));


const combo = combineLatest([
    delayed,
    randoAsync,
    randoAsync,
    randoAsync,
]);

combo.subscribe(console.log)


const merged = merge(
    delayed,
    randoAsync,
    randoAsync,
    randoAsync,
)

merged.subscribe(console.log)