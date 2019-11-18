import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import '../style.css';

export default class Length extends React.Component {
    constructor() {
        super();
        this.state={
            output: '',
            input: '',
            from:'meter',
            to:'kilometer'
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
        if(this.state.from === 'meter'){
            if(this.state.to === 'kilometer') {
                val = val/1000;
            }
            else if(this.state.to === 'centimeter') {
                val = val*100;
            }
            else if(this.state.to === 'millimeter') {
                val = val*1000;
            }
            else if(this.state.to === 'micrometer') {
                val = val*1000000;
            }
            else;
        }
        else if(this.state.from === 'kilometer') {
            if(this.state.to === 'meter') {
                val = val*1000;
            }
            else if(this.state.to === 'centimeter') {
                val = val*100000;
            }
            else if(this.state.to === 'millimeter') {
                val = val*1000000;
            }
            else if(this.state.to === 'micrometer') {
                val = val*1000000000;
            }
            else;
        }
        else if(this.state.from === 'centimeter') {
            if(this.state.to === 'meter') {
                val = val/100;
            }
            else if(this.state.to === 'kilometer') {
                val = val/100000;
            }
            else if(this.state.to === 'millimeter') {
                val = val*10;
            }
            else if(this.state.to === 'micrometer') {
                val = val*10000;
            }
            else;
        }
        else if(this.state.from === 'millimeter') {
            if(this.state.to === 'meter') {
                val = val/1000;
            }
            else if(this.state.to === 'kilometer') {
                val = val/1000000;
            }
            else if(this.state.to === 'centimeter') {
                val = val/10;
            }
            else if(this.state.to === 'micrometer') {
                val = val*1000;
            }
            else;
        }
        else {
            if(this.state.to === 'meter') {
                val = val/1000000;
            }
            else if(this.state.to === 'kilometer') {
                val = val/1000000000;
            }
            else if(this.state.to === 'centimeter') {
                val = val/10000;
            }
            else if(this.state.to === 'millimeter') {
                val = val/1000;
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
                        <select size="4" className="row select_block" onClick={this.fromselect}>
                            <option value="meter">Meter</option>
                            <option value="kilometer">Kilometer</option>
                            <option value="centimeter">Centimeter</option>
                            <option value="millimeter">Millimeter</option>
                            <option value="micrometer">Micrometer</option>
                        </select>
                    </div>
                    <div className="col">
                        <div className="row">
                            <input type="number" placeholder="to" value={this.state.output} className="col-8"/>
                            <p className="col-1 unit_color">{this.state.to}</p>
                        </div>
                        <select size="4" className="row select_block" onClick={this.toselect}>
                            <option value="meter">Meter</option>
                            <option value="kilometer">Kilometer</option>
                            <option value="centimeter">Centimeter</option>
                            <option value="millimeter">Millimeter</option>
                            <option value="micrometer">Micrometer</option>
                        </select>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}