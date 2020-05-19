function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 12a8 8 0 100 16 8 8 0 000-16zM1 0v12.875a9.906 9.906 0 012-1.531V0H1zM12 3v7.813A9.978 9.978 0 0114 12V3h-2zM20 11l-3.594 3.594c.376.583.689 1.216.938 1.875l4.062-4.063L20 11z"
}));

export default SvgComponent;