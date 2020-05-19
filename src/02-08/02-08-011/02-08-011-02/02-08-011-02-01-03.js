function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.686 19H12V7.686L.686 19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.1 2.03a6 6 0 000 8.485l3.536 3.535 1.414-1.414-3.535-3.535a4 4 0 115.657-5.657L28.97 23.243a5 5 0 007.07 0l1.415-1.415c4.686-4.686 4.686-12.284 0-16.97l-8.485 8.485c3.514 3.515 5.73 6.997 4.95 7.778-1.172 1.172-2.755 1.488-3.536.707L10.585 2.03a6 6 0 00-8.484 0z"
}));

export default SvgComponent;