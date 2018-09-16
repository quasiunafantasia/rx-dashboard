import {combineLatest, merge} from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/timestamp';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

//todo create factory to consume config

const NO_VALUE_DELAY = 1000;
const MAX_EMIT_FREQUENCY = 100;

export const createDashboard = (...sources$) => {
    const timedSources$ = sources$.map(source$ => {
        const emptyValue$ = source$.debounceTime(NO_VALUE_DELAY).mapTo('NA');
        return merge(source$, emptyValue$).timestamp();
    });

    return combineLatest(timedSources$, (...sources) => {
        const changed = sources.slice(0)
            .sort((a, b) => b.timestamp - a.timestamp)[0];

        const values = sources.map(s => s.value);
        return {
            values,
            trigger: changed.value
        }

    })
        .throttleTime(MAX_EMIT_FREQUENCY)
        .filter(({trigger}) => trigger !== 'NA')
        .map(({values}) => values)
}
