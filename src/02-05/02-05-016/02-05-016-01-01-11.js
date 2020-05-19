function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 9v2h-9V9h9zM13 9v2H0V9h13z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0a3 3 0 013 3v8a4 4 0 004 4h-9a4 4 0 004-4V3a2 2 0 00-4 0v4H9V3a3 3 0 013-3zM19 15l-4.5 4.5L10 15h9zM25 3v14l7-7-7-7z"
}));

export default SvgComponent;