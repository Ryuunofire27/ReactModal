'use strict';var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactDom = require('react-dom');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Modal = function Modal(props) {
  return (
    _react2.default.createElement('div', { id: 'exampleModal', className: 'modal fade', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'exampleModalLabel', 'aria-hidden': 'true' },
      _react2.default.createElement('div', { className: 'modal-dialog', role: 'document' },
        _react2.default.createElement('div', { className: 'modal-content' },
          _react2.default.createElement('div', { className: 'modal-header' },
            _react2.default.createElement('h5', { id: 'exampleModalLabel', className: 'modal-title formulario-cotizar-titulo' }, 'Cotiza el servicio'),
            _react2.default.createElement('button', { className: 'close', id: 'cerrar-modal-x', type: 'button', 'data-dismiss': 'modal', 'aria-label': 'Close' },
              _react2.default.createElement('span', { 'aria-hidden': 'true' }, '\xD7'))),


          _react2.default.createElement('div', { className: 'modal-body' },
            _react2.default.createElement('form', { id: 'servise-1', action: 'https://formspree.io/mespinoza@starter.pe', method: 'POST' },
              _react2.default.createElement('div', { className: 'form-group' },
                _react2.default.createElement('label', { className: 'col-form-label formulario-cotizar', htmlFor: 'recipient-type' }, 'Tipo de Empresa:'),
                _react2.default.createElement('center', null,
                  _react2.default.createElement('select', { id: 'recipient-type', className: 'form-control input-cotizar', type: 'text', placeholder: 'Nombre', name: 'nombre', value: '' },
                    _react2.default.createElement('option', { value: '0' }, ' Tipo'),
                    _react2.default.createElement('option', { value: '1' }, 'Peque\xF1a'),
                    _react2.default.createElement('option', { value: '2' }, 'Mediana'),
                    _react2.default.createElement('option', { value: '3' }, 'Grande')))),



              _react2.default.createElement('div', { className: 'form-group' },
                _react2.default.createElement('label', { className: 'col-form-label formulario-cotizar', htmlFor: 'recipient-name' }, 'Nombre:'),
                _react2.default.createElement('center', null,
                  _react2.default.createElement('input', { id: 'recipient-name', className: 'form-control input-cotizar', type: 'text', placeholder: 'Nombre', name: 'nombre', value: '' }))),


              _react2.default.createElement('div', { className: 'form-group' },
                _react2.default.createElement('label', { className: 'col-form-label formulario-cotizar', htmlFor: 'recipient-email' }, 'Correo:'),
                _react2.default.createElement('center', null,
                  _react2.default.createElement('input', { id: 'recipient-email', className: 'form-control input-cotizar', type: 'email', placeholder: 'Correo', name: 'correo' }))),


              _react2.default.createElement('div', { className: 'form-group' },
                _react2.default.createElement('label', { className: 'col-form-label formulario-cotizar', htmlFor: 'recipient-message' }, 'Mensaje:'),
                _react2.default.createElement('center', null,
                  _react2.default.createElement('input', { id: 'recipient-message', className: 'form-control input-cotizar', type: 'text', placeholder: 'Mensaje', name: 'mensaje' }))))),




          _react2.default.createElement('div', { className: 'modal-footer' },
            _react2.default.createElement('button', { className: 'btn btn-secondary', id: 'boton-cerrar-modal', type: 'button', 'data-dismiss': 'modal' }, 'Cerrar'),
            _react2.default.createElement('a', { className: 'btn btn-primary', type: 'submit' }, 'Enviar cotizaci\xF2n'))))));





};

(0, _reactDom.render)(_react2.default.createElement(Modal, null), document.getElementById("modal-react-render"));