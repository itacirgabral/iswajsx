function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 8L0 3l.719-.719L5.406 7H11v1H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 5.031L6.594 5 2.28.719 3 0l4 4h5v1.031zM20 8l5-5-.719-.719L19.594 7H14v1h6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 5.031L18.406 5 22.72.719 22 0l-4 4h-5v1.031z"
}));

export default SvgComponent;