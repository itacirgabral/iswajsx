function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 7.1V17h-9.9l1.415-1.414h7.07V8.515L20 7.1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.908 2.15a4 4 0 015.657 0l4.243 4.243c1.114 1.115 3.468 1.88 5.17 2.343l1.194 1.193-4.243 4.243-1.193-1.194c-.463-1.702-1.228-4.056-2.343-5.17L5.151 3.565a2 2 0 00-2.829 0 1 1 0 000 1.414l4.243 4.243-1.414 1.414L.908 6.393a3 3 0 010-4.242z"
}));

export default SvgComponent;