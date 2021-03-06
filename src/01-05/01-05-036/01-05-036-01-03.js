function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v20c8 0 8-8 8-8V8c0-8-8-8-8-8zM9 4V0C0 0 0 8 0 8h2c0-4 7-4 7-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.656 7.5l-.281.313-4.406 4.406a8.791 8.791 0 01-1.125 3.625L16 16l.781-.781 6.282-6.281L22.125 8l-.469-.5z"
}));

export default SvgComponent;