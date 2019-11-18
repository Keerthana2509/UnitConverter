import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import '../style.css';

export default class Weight extends React.Component {
    constructor() {
        super();
        this.state={
            output: '',
            input: '',
            from:'Gram',
            to:'Kilogram'
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
        if(this.state.from === 'Gram'){
            if(this.state.to === 'Kilogram') {
                val = val/1000;
            }
            else if(this.state.to === 'Milligram') {
                val = (val*1000);
            }
            else;
        }
        else if(this.state.from === 'Kilogram') {
            if(this.state.to === 'Gram') {
                val = val*1000;
            }
            else if(this.state.to === 'Milligram') {
                val = val*1000000;
            }
            else;
        }
        else {
            if(this.state.to === 'Gram') {
                val = val/1000;
            }
            else if(this.state.to === 'Kilogram') {
                val = val/1000000;
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
                        <select size="3" className="row select_block" onClick={this.fromselect}>
                            <option value="Gram">Gram</option>
                            <option value="Kilogram">Kilogram</option>
                            <option value="Milligram">Milligram</option>
                        </select>
                    </div>
                    <div className="col">
                        <div className="row">
                            <input type="number" placeholder="to" value={this.state.output} className="col-8"/>
                            <p className="col-1 unit_color">{this.state.to}</p>
                        </div>
                        <select size="3" className="row select_block" onClick={this.toselect}>
                            <option value="Gram">Gram</option>
                            <option value="Kilogram">Kilogram</option>
                            <option value="Milligram">Milligram</option>
                        </select>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}