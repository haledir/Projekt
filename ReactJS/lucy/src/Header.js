import React, { Component } from 'react';
import logo from './logo.svg';
import './Login/Login.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
          <header className="w3-container w3-theme w3-padding" id="myHeader">
              <div className="w3-center">
                  <h4>Lerne einfach und schnell Java mit</h4>
                  <h1 className="w3-xxxlarge w3-animate-bottom">Lucy</h1>
                  <div className="w3-padding-32">
                      <button className="w3-btn w3-xlarge w3-theme-dark w3-hover-teal" onClick="document.getElementById('id02').style.display='block'" style={{fontWeight:900}}>Anmelden</button>
                      <button className="w3-btn w3-xlarge w3-theme-dark w3-hover-teal" onClick="document.getElementById('id01').style.display='block'" style={{fontWeight:900}}>Registrieren</button>
                  </div>
              </div>
          </header>
          <div id="id01" className="w3-modal">
              <div className="w3-modal-content w3-card-4 w3-animate-top">
                  <header className="w3-container w3-theme"> 
        <span onClick="document.getElementById('id01').style.display='none'"
              className="w3-button w3-display-topright">&times;</span>
                      <h4>Registieren</h4>
                  </header>
                  <div className="w3-padding">
                      <form className="w3-container w3-card-4">
                          <div className="w3-section">
                              <input id="benutzername" className="w3-input" type="text" required/>
                                  <label>Benutzername</label>
                          </div>
                          <div className="w3-row">
                              <div className="w3-half">
                                  <div className="w3-section">
                                      <input id="vorname" className="w3-input" type="text" required/>
                                          <label>Vorname</label>
                                  </div>
                              </div>
                              <div className="w3-half">
                                  <div className="w3-section">
                                      <input id="nachname" className="w3-input" type="text" required/>
                                          <label>Nachname</label>
                                  </div>
                              </div>
                          </div>
                          <div className="w3-section">
                              <input id="matrikelnummer" className="w3-input" type="text" required/>
                                  <label>Matrikelnummer</label>
                          </div>
                          <div className="w3-section">
                              <input id="email" className="w3-input" type="email" required/>
                                  <label>E-Mail</label>
                          </div>
                          <div className="w3-section">
                              <input id="email-w" className="w3-input" type="email" required/>
                                  <label>E-Mail wiederholen</label>
                          </div>
                          <div className="w3-section">
                              <input id="passwort" className="w3-input" type="password" required/>
                                  <label>Passwort</label>
                          </div>
                          <div className="w3-section">
                              <input id="passwort-w" className="w3-input" type="password" required/>
                                  <label>Passwort wiederholen</label>
                          </div>
                          <div className="w3-padding">
                              <button type="button" className="w3-button w3-blue-grey" id="btnRegister">Registrieren</button>
                          </div>
                      </form>
                  </div>
                  <footer className="w3-container w3-theme">
                      <p>Vielen Dank für dein Interesse und viel Erfolg beim lernen.</p>
                  </footer>
              </div>
          </div>
          <div id="id02" className="w3-modal">
              <div className="w3-modal-content w3-card-4 w3-animate-top">
                  <header className="w3-container w3-theme"> 
        <span onClick="document.getElementById('id02').style.display='none'"
              className="w3-button w3-display-topright">&times;</span>
                      <h4>Anmelden</h4>
                  </header>
                  <div className="w3-padding">
                      <form className="w3-container w3-card-4">
                          <div className="w3-section">
                              <input id="benutzername" className="w3-input" type="text" required/>
                                  <label>Benutzername</label>
                          </div>
                          <div className="w3-section">
                              <input id="passwort" className="w3-input" type="password" required/>
                                  <label>Passwort</label>
                          </div>
                          <div className="w3-padding">
                              <button type="button" className="w3-button w3-blue-grey" id="btnAnmelden">Anmelden</button>
                          </div>
                      </form>
                  </div>
                  <footer className="w3-container w3-theme">
                      <p>Melde dich an und beginne deine Tour!</p>
                  </footer>
              </div>
          </div>
          <div className="w3-row-padding w3-center w3-margin-top">
              <div className="w3-third">
                  <div className="w3-card-2 w3-container" style={{minHeight:'460px'}}>
                      <h3>Anfänger</h3><br />
                      <i className="fa fa-desktop w3-margin-bottom w3-text-theme" style={{fontSize:"120px"}}></i>
                      <p>Du bist neu auf der Insel?</p>
                      <p>Lerne Java von Grund auf</p>
                      <p>Zahlreiche Aufgaben</p>
                      <p>Schritt für Schritt Anleitungen</p>
                  </div>
              </div>

              <div className="w3-third">
                  <div className="w3-card-2 w3-container" style={{minHeight:'460px'}}>
                      <h3>Fortgeschritten</h3><br/>
                      <i className="fa fa-code w3-margin-bottom w3-text-theme" style={{fontSize:'120px'}}></i>
                      <p>Du hast schon Erfahrung auf der Insel?</p>
                      <p>Verwende bereits gelerntes</p>
                      <p>Zahlreiche Aufgaben</p>
                      <p>Einige Hilfestellungen</p>
                  </div>
              </div>

              <div className="w3-third">
                  <div className="w3-card-2 w3-container" style={{minHeight:'460px'}}>
                      <h3>Experte</h3><br/>
                      <i className="fa fa-graduation-cap w3-margin-bottom w3-text-theme" style={{fontSize:'120px'}}></i>
                      <p>Du kennst jeden Stein auf der Insel?</p>
                      <p>Stürze dich ins Abenteuer</p>
                      <p>Zahlreiche Herausforderungen</p>
                      <p>Keinerlei Hilfestellung</p>
                  </div>
              </div>
          </div>
          <div className="w3-container">
              <br/>
          </div>

          <footer className="w3-container w3-theme-dark">
              <h3>Lucy - Automatische Java Korrektur</h3>
              <p>Powered by WWI 2014 G</p>
              <div style={{position:'relative',bottom:'55px'}} className="w3-tooltip w3-right">
                  <span className="w3-text w3-theme w3-padding">Go To Top</span>&nbsp;
                  <a className="w3-text-white" href="#myHeader"><span className="w3-xlarge">
    <i className="fa fa-chevron-circle-up"></i></span></a>
              </div>
              <p>Entwickelt von&nbsp;&nbsp;<div className="w3-btn w3-theme">Laura Goldfuss</div>&nbsp;&nbsp;<div className="w3-btn w3-theme">Jean-Marie Kern</div>&nbsp;&nbsp;<div className="w3-btn w3-theme">Michael Möllmann</div>&nbsp;&nbsp;<div className="w3-btn w3-theme">Thore Pils</div>&nbsp;&nbsp;<div className="w3-btn w3-theme">Christian Schuster</div></p>
          </footer>
      </div>
    );
  }
}

export default Header;
