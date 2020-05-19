function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.594 2.665a6 6 0 018.486 0l7.07 7.072 9.193 9.192-1.414 1.414-6.762-6.762a3.99 3.99 0 01-1.016 1.812 4 4 0 11-5.657-5.656 3.99 3.99 0 011.812-1.017l-4.64-4.64a4 4 0 00-5.657 0 3 3 0 000 4.242l2.12 2.122-1.413 1.414-2.122-2.121a5 5 0 010-7.072zm11.314 8.486a2 2 0 102.829 2.828 2 2 0 00-2.829-2.828z"
}));

export default SvgComponent;