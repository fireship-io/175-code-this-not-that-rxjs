import {
  Observable,
  of,
  interval,
  fromEvent,
  from,
  asyncScheduler
} from 'rxjs';

const basic = Observable.create(observer => {
  observer.next('A');
  observer.next('B');
  observer.complete();
  observer.next('C');
});

// basic.subscribe(console.log);


const hello = of('hello');
hello.subscribe(console.log);

const world = from('world', asyncScheduler);
world.subscribe(console.log);

const event = fromEvent(document, 'click');
event.subscribe(console.log);

const periodic = interval(500);
periodic.subscribe(console.log);
