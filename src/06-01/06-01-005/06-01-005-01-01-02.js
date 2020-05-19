function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.5 1C8.835 1 1 8.835 1 18.5S8.835 36 18.5 36 36 28.165 36 18.5 28.165 1 18.5 1zm0 1.5c8.836 0 16 7.163 16 16s-7.164 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16zM7.906.125L.125 7.906l.688.688L8.593.813 7.907.125zM1.53 2.237a3 3 0 000 4.242l.706-.707a2 2 0 010-2.828l.707-.707a2 2 0 012.829 0l.707-.708a3 3 0 00-4.243 0l-.707.708z"
}));

export default SvgComponent;