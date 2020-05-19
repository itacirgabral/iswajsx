function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 54,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 10h42v4H0v-4zM54 15l-5 5-.719-.719L52.563 15l-4.282-4.281L49 10l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M50 17v-1h-6v1h6zM50 14v-1h-6v1h6zM54 5l-5 5-.719-.719L52.563 5 48.28.719 49 0l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M50 7V6h-6v1h6zM50 4V3h-6v1h6z"
}));

export default SvgComponent;