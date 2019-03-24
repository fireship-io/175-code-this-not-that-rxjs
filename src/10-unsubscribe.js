import { interval, timer } from 'rxjs';
import { takeLast, takeWhile, takeUntil } from 'rxjs/operators';

const source = interval(100);


const example = source.pipe(
    takeWhile(v => v <= 10)
);

example.subscribe(console.log);

const example2 = source.pipe(
    takeUntil(timer(2000))
);

example2.subscribe(console.log);
