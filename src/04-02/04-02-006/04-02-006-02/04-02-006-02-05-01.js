function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 8V3.937c-.413-.04-.816-.085-1.187-.218l-.844 3.156L3 6.594l.906-3.344c-.21-.132-.412-.245-.593-.406-.029-.026-.035-.068-.063-.094L1.156 4.844.47 4.125l2.125-2.156A3.673 3.673 0 012 0h1c0 .138.016.276.063.406C3.389 1.318 4.809 2 6.5 2 8.433 2 10 1.105 10 0h1c0 .276-.034.552-.093.813-.096.412-.274.8-.5 1.156l2.124 2.156-.687.719L9.75 2.75c-.027.026-.034.068-.062.094-.182.161-.384.274-.594.406L10 6.594l-.969.281-.843-3.156c-.25.09-.512.138-.782.187-.13.024-.27.018-.406.031V8H6z"
}));

export default SvgComponent;