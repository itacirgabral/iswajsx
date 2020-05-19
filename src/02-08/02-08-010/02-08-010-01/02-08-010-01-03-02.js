function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0l7 7h-2l-5-5-5 5H5l7-7zM13 7v15a4 4 0 01-4 4H7c-3.866 0-7-2.686-7-6h7c0 2.21.895 4 2 4a2 2 0 002-2v-4.625a3.5 3.5 0 110-5.75V7h2zm-4 5.5a2 2 0 100 4 2 2 0 000-4z"
}));

export default SvgComponent;