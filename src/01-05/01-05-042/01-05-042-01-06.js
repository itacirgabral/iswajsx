function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0C6.875 0 6.096 4.602 6 5.75V6c0 6 6 6 6 6H17.938c-1.632 2.497-4.664 2.931-5.625 3H12c-1.098 0-2.094-.098-3-.281L8.5 16.5c2.009.486 3.5.5 3.5.5 9 0 9-9 9-9 0-8-8-8-8-8zM1.906 9.719L0 10.813c1.718 2.744 4.282 4.275 6.594 5.124l.468-1.78c-2.5-.972-4.114-2.665-5.156-4.438z"
}));

export default SvgComponent;