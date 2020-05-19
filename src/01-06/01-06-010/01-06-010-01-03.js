function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15v15H7V15h8zM2.063 17.219L7 22.187V25L.625 18.625l1.438-1.406zM7 0h2v15H7zM12.5 4.5a2 2 0 01.5 3.938V15h-1V8.437a2.001 2.001 0 01.5-3.937zM16.5 10.5a2 2 0 110 4 2 2 0 010-4zM18.5 17.5a2 2 0 110 4 2 2 0 010-4z"
}));

export default SvgComponent;