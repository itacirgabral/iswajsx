function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 45,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M43.376 1.908c-1.952-1.953-5.435-1.636-7.778.707l-4.42 4.42c-.047-1.134-.436-2.205-1.237-3.006-1.952-1.952-5.435-1.636-7.778.708l-4.42 4.419c-.047-1.134-.436-2.205-1.237-3.005-1.953-1.953-5.435-1.636-7.778.707L.95 14.636l1.414 1.414 7.778-7.778c1.562-1.562 3.778-1.879 4.95-.707 1.171 1.172.855 3.388-.707 4.95l-2.829 2.828 1.415 1.414L23.577 6.151c1.562-1.562 3.778-1.879 4.95-.707 1.171 1.171.855 3.387-.707 4.95l-2.829 2.828 1.415 1.414L37.012 4.029c1.562-1.562 3.778-1.878 4.95-.707 1.172 1.172.855 3.388-.707 4.95l-2.829 2.829 1.415 1.414 2.828-2.829c2.343-2.343 2.66-5.825.707-7.778z"
}));

export default SvgComponent;