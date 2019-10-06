  import React from 'react';
  import { withRouter } from 'react-router-dom';
  // import { Button } from 'reactstrap';
  // import logo from '../imgFED/logo.png';

  class BoxGet extends React.Component {
    handleClick(ev) {
      ev.preventDefault();
      this.props.history.push('/Home');
    }
    
    render() {

        return (
            <section className={'box-password'}>
              <section className={'box-center'}>
                <h3>
                  <strong>Ingresa tu contraseña</strong>
                </h3>

                <input type="password" className={'input-password'}></input>
                <div className={'box-buttons'}>
                  <div>
                    <input className={'btn-number'} type="button" value="7"></input>
                    <input className={'btn-number'} type="button" value="8"></input>
                    <input className={'btn-number'} type="button" value="9"></input>
                  </div>

                  <div>
                    <input className={'btn-number'} type="button" value="4"></input>
                    <input className={'btn-number'} type="button" value="5"></input>
                    <input className={'btn-number'} type="button" value="6"></input>
                  </div>

                  <div>
                    <input className={'btn-number'} type="button" value="1"></input>
                    <input className={'btn-number'} type="button" value="2"></input>
                    <input className={'btn-number'} type="button" value="3"></input>
                  </div>

                  <div>
                    <input className={'btn-number'} type="button" value="<"></input>
                    <input className={'btn-number'} type="button" value="0"></input>
                    <input className={'btn-number'} type="button" value="C"></input>
                  </div>
                </div>

                <button className={'btn-valid-password'} onClick={this.handleClick.bind(this)} >Flecha</button>
              </section>
            </section>
        );
    }
  }

  export default withRouter(BoxGet);
  