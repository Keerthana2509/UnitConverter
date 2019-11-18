import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default class Footer extends Component {
    render() {
        return(
            <div className="bg-dark text-light marign_down">
                <div className="text_position">
                    <a href="#!" className="text-light">About US </a> |
                    <a href="#!" className="text-light">Terms of use </a> |
                    <a href="#!" className="text-light">Privacy policy</a> |
                    <a href="#!" className="text-light">Sitemap</a> |
                    <span>copyright :  2008 - 2019</span>
                    <a href="#!" className="text-light">unitconverters.net</a>
                </div>
            </div>
        );
    }
}