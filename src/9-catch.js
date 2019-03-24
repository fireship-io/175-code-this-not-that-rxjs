import { of, Subject, interval } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


const sub = new Subject();


sub.pipe(
    catchError(err => of('something broke, but we handled it 🕶️')),
    // retry(2)
)
.subscribe({
    next: val => console.log(val),
    error: val => console.log(val)
})

sub.next('good');
sub.error('💥 broken!');


