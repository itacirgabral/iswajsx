function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 11c-7 0-7 6-7 6 0 6 6 6 6 6h5.938c-1.632 2.497-4.664 2.931-5.625 3H12c-5.519 0-8.484-2.54-10.094-5.281L0 21.812C3.872 27.997 12 28 12 28c9 0 9-9 9-9 0-8-8-8-8-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v16.75c.058-.697.398-2.656 2-4.094V0H6zM17 3v9c.692.346 1.39.81 2 1.438V3h-2zM26 9l-5.938 5.938c.324.603.56 1.321.72 2.124l6.624-6.656L26 9z"
}));

export default SvgComponent;