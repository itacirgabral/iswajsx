function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.613.488v9.899l9.9-9.9h-9.9zM4.464 6.536L3.05 7.95l2.829 2.828-4.243 4.243 4.243 4.242L2.343 22.8l1.414 1.414 4.95-4.95-4.243-4.242 4.243-4.243-4.243-4.242z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 3L6.586 4.414l6.364 6.364-4.243 4.243 4.243 4.242-7.071 7.072 1.414 1.414 8.485-8.486-4.242-4.242 4.242-4.243L8 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.586 4.414L4.464 6.536l4.243 4.242-4.243 4.243 4.243 4.242-4.95 4.95 2.122 2.122 7.07-7.072-4.242-4.242 4.243-4.243-6.364-6.364z",
  fill: "#fff"
}));

export default SvgComponent;