import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/mapTo';


export function createSensorMock(options) {
    const {
        minDelay,
        maxDelay,
        minValue,
        maxValue
    } = options;

    return Observable.of("")
        .switchMap(() => Observable
            .timer(random(minDelay, maxDelay))
            .mapTo(random(minValue, maxValue)))
        .repeat();
}

function random(bottom, top) {
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}
