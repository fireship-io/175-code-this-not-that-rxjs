import { fromEvent } from 'rxjs';
import { debounceTime, throttleTime, bufferCount, map } from 'rxjs/operators';

const event = fromEvent(document, 'mousemove').pipe(map(_ => Math.random() + '💩'));

// event.subscribe(console.log)

const debounced = event.pipe(debounceTime(1000));

debounced.subscribe(console.log);

const throttled = event.pipe(throttleTime(1000));

// throttled.subscribe(console.log);

const buffered = event.pipe(bufferCount(20));

// buffered.subscribe(console.log);