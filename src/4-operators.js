import { from } from 'rxjs';
import { map, filter, first, take, scan } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const modified = source.pipe(
    map(n => Math.pow(n, 2)),
    scan((acc, val) => acc + val),
    filter(v => v > 10),
    take(3),  // first(),
)


modified.subscribe(console.log);

// Debounce