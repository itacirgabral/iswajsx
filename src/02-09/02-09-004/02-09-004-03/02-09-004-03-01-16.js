function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 41
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M33 17V0l8.5 8.5L33 17zM33 7v3H22.5a4.5 4.5 0 000 9 8.5 8.5 0 010 17H17c-1.38 0-2.492-.731-3.531-1.469-1.54-1.093-2.24-3.128-3.781-4.218C8.748 29.648 7.742 29 6.5 29A4.5 4.5 0 002 33.5V41H0v-7.5A6.5 6.5 0 016.5 27c1.795 0 3.417.73 4.594 1.906 0 0 2.973 3.094 4.906 3.094h8.5a4.5 4.5 0 000-9H24a8 8 0 110-16h9z"
}));

export default SvgComponent;