function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v20c8 0 8-8 8-8V8c0-8-8-8-8-8zM9 4V0C0 0 0 8 0 8h2c0-4 7-4 7-4zM9 20v-2c-8 0-8.038-3.928-8-4H0c0 6 9 6 9 6z"
}));

export default SvgComponent;