function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.435 10.15l1.414-1.413 1.414 1.414-1.414 1.414-1.414-1.414zm2.828-2.828l1.414-1.414 1.415 1.414-1.415 1.415-1.414-1.415zm2.829-2.828l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM9.268 14.458l.984-1.705 1.732 1L11 15.458l-1.732-1zm1.984-3.437l1-1.732 1.732 1-1 1.732-1.732-1zm2-3.464l1.016-1.76 1.732 1-1.016 1.76-1.732-1zM.542 5l1.705-.985 1 1.733-1.705.984L.542 5zm3.437-1.985l1.732-1 1 1.733-1.732 1-1-1.733zm3.464-2L9.203 0l1 1.732-1.76 1.016-1-1.733z"
}));

export default SvgComponent;