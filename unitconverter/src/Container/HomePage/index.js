import React, {Component} from 'react';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import '../style.css';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container home_page">
                    <h1 className="text-center">Unit Converter</h1>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BN539SdZ10WF31_-M19rADl1x5-TfM9D9vG45MOBpdmP3wdZ0g&s" className="image"/>
                    <h3>"Conversion of units is the conversion between different units of measurement for
                         the same quantity, typically through multiplicative conversion factors."</h3>
                    <h3>Conversion factors</h3>
                    <p>A conversion factor is used to change the units of a measured quantity without
                        changing its value. The unity bracket method of unit conversion consists of a 
                        fraction in which the denominator is equal to the numerator, but they are in 
                        different units. Because of the identity property of multiplication, the value of 
                        a quantity will not change as long as it is multiplied by one. Also, if the numerator 
                        and denominator of a fraction are equal to each other, then the fraction is equal to one.
                         So as long as the numerator and denominator of the fraction are equivalent, they will
                          not affect the value of the measured quantity.
                    </p>
                </div>
                <Footer/>
            </div>
        );
    }
}