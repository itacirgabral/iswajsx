function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.469 6l-.688.719L4.594 9.53l.718-.687L2.47 6zM6.719 1.781L6 2.47l2.844 2.844.687-.72L6.72 1.782z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 4.243v4.95l.994-.023.022-3.91 4.221-.023.022-4.22L9.17.993 9.192 0h-4.95v4.243H0zM15.469 6l-.688.719 2.813 2.812.718-.687L15.47 6zM19.719 1.781L19 2.47l2.844 2.844.687-.72-2.812-2.812z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 4.243v4.95l.994-.023.022-3.91 4.221-.023.022-4.22L22.17.993 22.192 0h-4.95v4.243H13z"
}));

export default SvgComponent;