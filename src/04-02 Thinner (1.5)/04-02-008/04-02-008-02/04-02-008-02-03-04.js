function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.594.469L1.78 3.28 2.47 4l2.844-2.844-.72-.687zM8.844 4.687L6 7.531l.719.688L9.53 5.406l-.687-.719z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 5.757V.807L.994.83l.022 3.91 4.221.023.022 4.22 3.911.023.022.994h-4.95V5.757H0z"
}));

export default SvgComponent;