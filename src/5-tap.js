import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const source = of('Jeff');

const tapped = source.pipe(
    tap(console.log),
    map(v => v.toUpperCase()),
    tap(console.log),
    map(v => `Hello 🐟 ${v}`),
    tap(async v => {
        await Promise.resolve();
        alert(v);
    })
)

tapped.subscribe();