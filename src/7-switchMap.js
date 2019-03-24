import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// Function to simulate database call
const fetchOrders = async(userId) => {
    return `${userId}'s order data`
}

const user$ = of({ uid: Math.random() });

const orders$ = user$.pipe(
    switchMap(user => {
        return fetchOrders(user.uid);
    })
)


user$.subscribe(console.log);

orders$.subscribe(console.log);

