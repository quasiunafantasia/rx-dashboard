import React from 'react';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
import { Widget } from './widget.component';
export class Dashboard extends React.Component {
    constructor(...args) {
        super(...args);
        this.destroyed$ = new Subject();
        this.state = {
            temperature: '--',
            pressure: '--',
            humidity: '--'
        };
    }
    componentDidMount() {
        this.props.dashboard$
            .takeUntil(this.destroyed$)
            .subscribe(newState => {
                this.setState(newState);
        }   );
    }

    componentWillUnmount() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    render() {
        return <div>
            <Widget name="Temperature" value={this.state.temperature} />
            <Widget name="Humidity" value={this.state.humidity} />
            <Widget name="Pressure" value={this.state.pressure} />
        </div>;
    }
}
