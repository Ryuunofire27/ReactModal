import React from 'react';
import { render } from 'react-dom';

const Modal = (props) => {
  return (
    <div id="exampleModal" className="modal fade" tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
      <div className="modal-dialog" role='document'>
        <div className="modal-content">
          <div className="modal-header">
            <h5 id="exampleModalLabel" className="modal-title formulario-cotizar-titulo">Cotiza el servicio</h5>
            <button className="close" id="cerrar-modal-x" type='button' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>×</span>
            </button>
          </div>
          <div className="modal-body">
            <form id="servise-1" action='https://formspree.io/mespinoza@starter.pe' method='POST'>
              <div className="form-group">
                <label className="col-form-label formulario-cotizar" htmlFor='recipient-type'>Tipo de Empresa:</label>
                <center>
                  <select id="recipient-type" className="form-control input-cotizar" type='text'placeholder='Nombre' name='nombre' value=''>
                    <option value="0"> Tipo</option>
                    <option value="1">Pequeña</option>
                    <option value="2">Mediana</option>
                    <option value="3">Grande</option>
                  </select>
                </center>
              </div>
              <div className="form-group">
                <label className="col-form-label formulario-cotizar" htmlFor='recipient-name'>Nombre:</label>
                <center>
                  <input id="recipient-name" className="form-control input-cotizar" type='text' placeholder='Nombre' name='nombre' value=''/>
                </center>
              </div>
              <div className="form-group">
                <label className="col-form-label formulario-cotizar" htmlFor='recipient-email'>Correo:</label>
                <center>
                  <input id="recipient-email" className="form-control input-cotizar" type='email' placeholder='Correo' name='correo'/>
                </center>
              </div>
              <div className="form-group">
                <label className="col-form-label formulario-cotizar" htmlFor='recipient-message'>Mensaje:</label>
                <center>
                  <input id="recipient-message" className="form-control input-cotizar" type='text' placeholder='Mensaje' name='mensaje'/>
                </center>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" id="boton-cerrar-modal" type='button' data-dismiss='modal'>Cerrar</button>
            <a className="btn btn-primary" type='submit'>Enviar cotizaciòn</a>
          </div>
        </div>
      </div>
    </div>
  )
}

render(<Modal/> , document.getElementById("modal-react-render"));