import React, {Component} from 'react';

class Dashboard extends Component {
    runde(x, n) {
        if (n < 1 || n > 14) return false;
        let  e = Math.pow(10, n);
        let k = (Math.round(x * e) / e).toString();
        if (k.indexOf('.') == -1) k += '.';
        k += e.toString().substring(1);
        return k.substring(0, k.indexOf('.') + n+1);
    }
    render() {
        console.log(this.props.benutzeraufgaben[1]);
        let percentBegin = (this.props.benutzeraufgaben[1]/this.props.aufgaben)*100,
            percentExperienced = (this.props.benutzeraufgaben[2]/this.props.aufgaben)*100,
            percentExpert = (this.props.benutzeraufgaben[3]/this.props.aufgaben)*100,
            allExercises = this.props.aufgaben * Object.keys(this.props.benutzeraufgaben).length,
            allExercisesDone = 0,
            difficulties = Object.keys(this.props.benutzeraufgaben);
        for(let i=0; i < difficulties.length; i++){
            allExercisesDone += this.props.benutzeraufgaben[difficulties[i]];
        }
        let fullpercentage = (allExercisesDone/allExercises)*100;
        fullpercentage = this.runde(fullpercentage, 2);
        return (
            <div id="user-home">
                <div className="w3-container w3-content" style={{maxWidth:'1400px',marginTop:'80px'}}>
                    <div className="w3-row">
                        <div className="w3-col m3">
                            <div className="w3-card-2 w3-round w3-white">
                                <div className="w3-container">
                                    <h4 className="w3-center">Dashboard</h4>
                                    <p className="w3-center"><i className="fa fa-user fa-user-circle-o fa-5x"/></p>
                                    <hr />
                                        <p><i className="fa fa-user fa-fw w3-margin-right w3-text-theme"/>{this.props.benutzer.name}</p>
                                        <p><i className="fa fa-envelope fa-fw w3-margin-right w3-text-theme"/>{this.props.benutzer.email}</p>
                                        <p><i className="fa fa-tasks fa-fw w3-margin-right w3-text-theme"/>{fullpercentage + "%"}</p>
                                </div>
                            </div>
                        </div>

                        <div className="w3-col m9">

                            <div className="w3-row">

                                <div className="w3-row-padding w3-center">
                                    <div className="w3-half">
                                        <div className="w3-card-2 w3-container" style={{minHeight:"460px"}}>
                                            <h3>Anfängerkurs</h3><br />
                                            <i className="fa fa-desktop w3-margin-bottom w3-text-theme" style={{fontSize:"120px"}}/>
                                            <p>Du bist neu auf der Insel?</p>
                                            <p>Fortschritt:</p>
                                            <div>
                                                <div className="w3-light-grey w3-round-xlarge">
                                                    <div id="prog_Anfaenger" className="w3-container w3-round-xlarge w3-theme w3-padding" style={{width:percentBegin+"%"}}>{percentBegin}%</div>
                                                </div>
                                            </div>
                                            <button type="button" className="w3-button w3-blue-grey w3-margin-top" id="btnA_Start" onClick={this.props.startCourse.bind(null, 1)}>Kurs Starten</button>
                                        </div>
                                    </div>

                                    <div className="w3-half">
                                        <div className="w3-card-2 w3-container" style={{minHeight:"460px"}}>
                                            <h3>Fortgeschrittenkurs</h3><br />
                                            <i className="fa fa-code w3-margin-bottom w3-text-theme" style={{fontSize:"120px"}}/>
                                            <p>Du hast schon Erfahrung auf der Insel?</p>
                                            <p>Fortschritt:</p>
                                            <div>
                                                <div className="w3-light-grey w3-round-xlarge">
                                                    <div id="prog_Fortgeschritten" className="w3-container w3-round-xlarge w3-theme w3-padding" style={{width:percentExperienced+"%"}}>{percentExperienced}%</div>
                                                </div>
                                            </div>
                                            <button type="button" className="w3-button w3-blue-grey w3-margin-top" id="btnF_Start" onClick={this.props.startCourse.bind(null, 2)}>Kurs Starten</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w3-row w3-margin-top">

                                    <div className="w3-row-padding w3-center">
                                        <div className="w3-half">
                                            <div className="w3-card-2 w3-container" style={{minHeight:"460px"}}>
                                                <h3>Expertenkurs</h3><br />
                                                <i className="fa fa-desktop w3-margin-bottom w3-text-theme" style={{fontSize:"120px"}}/>
                                                <p>Du kennst jeden Stein auf der Insel?</p>
                                                <p>Stürze dich ins Abenteuer</p>
                                                <p>Zahlreiche Herausforderungen</p>
                                                <p>Keinerlei Hilfestellung</p>
                                                <p>Fortschritt:</p>
                                                <div>
                                                    <div className="w3-light-grey w3-round-xlarge">
                                                        <div id="prog_Experte" className="w3-container w3-round-xlarge w3-theme w3-padding" style={{width:percentExpert+"%"}}>{percentExpert}%</div>
                                                    </div>
                                                </div>
                                                <button type="button" className="w3-button w3-blue-grey w3-margin-top" id="btnE_Start" onClick={this.props.startCourse.bind(null, 3)}>Kurs Starten</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
