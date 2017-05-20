import React, {Component} from 'react';
// import './App.css';

class Footer extends Component {
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <div className="w3-container">
                    <br />
                </div>
                <div className="w3-container w3-theme-dark">
                    <h3>Lucy - Automatische Java Korrektur</h3>
                    <p>Powered by WWI 2014 G</p>
                    <div style={{position:'relative', bottom:'55px'}} className="w3-tooltip w3-right">
                        <span className="w3-text w3-theme w3-padding">Go To Top</span>&nbsp;
                        <a className="w3-text-white" href="#myHeader">
                            <span className="w3-xlarge">
                                <i className="fa fa-chevron-circle-up"></i>
                            </span>
                        </a>
                    </div>
                    <p>Entwickelt von&nbsp;&nbsp;
                        <div className="w3-btn w3-theme">Laura Goldfuss</div>
                        &nbsp;&nbsp;
                        <div className="w3-btn w3-theme">Jean-Marie Kern</div>
                        &nbsp;&nbsp;
                        <div className="w3-btn w3-theme">Michael Möllmann</div>
                        &nbsp;&nbsp;
                        <div className="w3-btn w3-theme">Thore Pils</div>
                        &nbsp;&nbsp;
                        <div className="w3-btn w3-theme">Christian Schuster</div>
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;
