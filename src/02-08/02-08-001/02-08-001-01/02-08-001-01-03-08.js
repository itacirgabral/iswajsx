function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.95 3.1a4 4 0 010 5.657l-.707.707-.707-.707.707-.707a3 3 0 000-4.242l-.707-.707c-1.172-1.172-3.388-.855-4.95.707l-6.364 6.364c-2.322 2.321-3.536 9.192-3.536 9.192l-7.07-7.071s6.87-1.214 9.192-3.536l6.364-6.364a5 5 0 017.07 0l.708.708z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26.778 13H19V5.222l1.414 1.414v4.95h4.95L26.778 13z"
}));

export default SvgComponent;