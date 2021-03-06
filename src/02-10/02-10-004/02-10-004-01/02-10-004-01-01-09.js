function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 12H0l6-6 6 6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 0C12.985 0 15 3.806 15 8.5v8c0 4.694-2.015 8.5-4.5 8.5h-2c-2.022 0-3.714-2.532-4.281-6h3.937c.346 2.9 1.259 5 2.344 5 1.38 0 2.5-3.358 2.5-7.5v-8C13 4.358 11.88 1 10.5 1c-.957 0-1.77 1.624-2.188 4H4.406C5.112 2.06 6.68 0 8.5 0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 18H0l6-6 6 6z"
}));

export default SvgComponent;