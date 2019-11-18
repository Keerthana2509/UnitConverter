import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import '../style.css';

export default class Time extends React.Component {
    constructor() {
        super();
        this.state={
            output: '',
            input: '',
            from:'Seconds',
            to:'Minutes'
        };
        this.takeinput = this.takeinput.bind(this);
        this.fromselect = this.fromselect.bind(this);
        this.toselect = this.toselect.bind(this);
        this.output = this.output.bind(this);
    }
    takeinput(e) {
        let val = e.target.value;
        val=Number(val);
        this.setState({
            input: val
        });
        this.output(val);
    }
    output(val) {
        if(this.state.from === 'Seconds'){
            if(this.state.to === 'Minutes') {
                val = val/60;
            }
            else if(this.state.to === 'Hours') {
                val = val/3600;
            }
            else if(this.state.to === 'Days') {
                val = val/86400;
            }
            else if(this.state.to === 'Weeks') {
                val = val/604800;
            }
            else if(this.state.to === 'Months') {
                val = val/2628000;
            }
            else if(this.state.to === 'Years') {
                val = val/31540000;
            }
            else;
        }
        else if(this.state.from === 'Minutes') {
            if(this.state.to === 'Seconds') {
                val = val*60;
            }
            else if(this.state.to === 'Hours') {
                val = val/60;
            }
            else if(this.state.to === 'Days') {
                val = val/1440;
            }
            else if(this.state.to === 'Weeks') {
                val = val/10080;
            }
            else if(this.state.to === 'Months') {
                val = val/43800.048;
            }
            else if(this.state.to === 'Years') {
                val = val/525600;
            }
            else;
        }
        else if(this.state.from === 'Hours') {
            if(this.state.to === 'Minutes') {
                val = val*60;
            }
            else if(this.state.to === 'Seconds') {
                val = val/3600;
            }
            else if(this.state.to === 'Days') {
                val = val/24;
            }
            else if(this.state.to === 'Weeks') {
                val = val/168;
            }
            else if(this.state.to === 'Months') {
                val = val/730.001;
            }
            else if(this.state.to === 'Years') {
                val = val/8760;
            }
            else;
        }
        else if(this.state.from === 'Days') {
            if(this.state.to === 'Seconds') {
                val = val*86400;
            }
            else if(this.state.to === 'Minutes') {
                val = val*1440;
            }
            else if(this.state.to === 'Hours') {
                val = val*24;
            }
            else if(this.state.to === 'Weeks') {
                val = val/7;
            }
            else if(this.state.to === 'Months') {
                val = val/30.417;
            }
            else if(this.state.to === 'Years') {
                val = val/365;
            }
            else;
        }
        else if(this.state.from === 'Weeks') {
            if(this.state.to === 'Seconds') {
                val = val*604800;
            }
            else if(this.state.to === 'Minutes') {
                val = val*10080;
            }
            else if(this.state.to === 'Hours') {
                val = val*168;
            }
            else if(this.state.to === 'Days') {
                val = val*7;
            }
            else if(this.state.to === 'Months') {
                val = val/4.345;
            }
            else if(this.state.to === 'Years') {
                val = val/52.143;
            }
            else;
        }
        else if(this.state.from === 'Months') {
            if(this.state.to === 'Seconds') {
                val = val*2628000;
            }
            else if(this.state.to === 'Minutes') {
                val = val*43800.048;
            }
            else if(this.state.to === 'Hours') {
                val = val*730.001;
            }
            else if(this.state.to === 'Days') {
                val = val*30.417;
            }
            else if(this.state.to === 'Weeks') {
                val = val*4.345;
            }
            else if(this.state.to === 'Years') {
                val = val/12;
            }
            else;
        }
        else  {
            if(this.state.to === 'Seconds') {
                val = val*31540000;
            }
            else if(this.state.to === 'Minutes') {
                val = val*525600;
            }
            else if(this.state.to === 'Hours') {
                val = val*8760;
            }
            else if(this.state.to === 'Days') {
                val = val*365;
            }
            else if(this.state.to === 'Weeks') {
                val = val*52.143;
            }
            else if(this.state.to === 'Months') {
                val = val*12;
            }
            else;
        }
        this.setState({
            output: val
        });
    }
    fromselect(e) {
        let select = e.target.value;
        this.setState({
            from: select,
        });
        this.output(this.state.input);
    }
    toselect(e) {
        let selectto = e.target.value;
        this.setState({
            to: selectto,
        });
        this.output(this.state.input);
    }
    render() {
        return(
            <div>
                <Header/>
                <div className="input_block text-center">
                    <h2>NOTE: Double click on the unit to covert</h2><br/>
                    <div className="row block">
                    <div className="col">
                        <div className="row">
                            <input type="number" placeholder="from" value={this.state.input} onChange={this.takeinput} className="col-8"/>
                            <p className="col-1 unit_color">{this.state.from}</p>
                        </div>
                        <select size="5" className="row select_block" onClick={this.fromselect}>
                            <option value="Seconds">Seconds</option>
                            <option value="Minutes">Minutes</option>
                            <option value="Hours">Hours</option>
                            <option value="Days">Days</option>
                            <option value="Weeks">Weeks</option>
                            <option value="Months">Months</option>
                            <option value="Years">Years</option>
                        </select>
                    </div>
                    <div className="col">
                        <div className="row">
                            <input type="number" placeholder="to" value={this.state.output} className="col-8"/>
                            <p className="col-1 unit_color">{this.state.to}</p>
                        </div>
                        <select size="5" className="row select_block" onClick={this.toselect}>
                            <option value="Seconds">Seconds</option>
                            <option value="Minutes">Minutes</option>
                            <option value="Hours">Hours</option>
                            <option value="Days">Days</option>
                            <option value="Weeks">Weeks</option>
                            <option value="Months">Months</option>
                            <option value="Years">Years</option>
                        </select>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}