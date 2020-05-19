function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 6V1H5v4H1v1h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.95 2.828L2.12 0l-.707.707 2.829 2.829.707-.708zM3.536 4.243L.707 1.414 0 2.121 2.828 4.95l.708-.707z"
}));

export default SvgComponent;