function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.757 1.657L8.444 12.97a4 4 0 01-5.657 0C.053 10.237-.263 6.12 2.08 3.778l1.414 1.414c-1.562 1.562-1.246 4.412.707 6.364a2 2 0 002.828 0l3.27-3.27a3.5 3.5 0 114.066-4.066L18.344.243l1.414 1.414zm-7.424 1.768a2 2 0 10-2.829 2.828 2 2 0 002.829-2.828z"
}));

export default SvgComponent;