function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.532 6L4.688 8.844l.719.687L8.219 6.72 7.532 6zM3.281 1.781L.47 4.594l.688.718L4 2.47l-.719-.688z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 4.243v4.95l-.994-.023-.022-3.91-4.22-.023-.023-4.22L.83.993.808 0h4.95v4.243H10z"
}));

export default SvgComponent;