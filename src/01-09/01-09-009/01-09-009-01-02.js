function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 21a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 15a6 6 0 000 12V15z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0C3 0 3 3 3 3v3h2V3c0-1 1-1 1-1 1 0 1 1 1 1v10.063a8.016 8.016 0 012 0V3c0-3-3-3-3-3zM13.906 3.031c-1.518.098-2.375 1.563-2.375 1.563l-1.5 2.593 1.75 1 1.5-2.593c.375-.65.952-.538 1.219-.438.057.033-.04-.033.125.063.866.5.375 1.375.375 1.375l-4.031 6.968c.628.25 1.212.576 1.75.97l4-6.938c1.5-2.598-1.094-4.094-1.094-4.094-.65-.375-1.213-.501-1.719-.469zM19.406 10.094c-.837.05-1.5.406-1.5.406L15.313 12l1 1.75 2.593-1.5c.866-.5 1.375.344 1.375.344.5.866-.375 1.375-.375 1.375l-5 3.031c.318.547.569 1.13.75 1.75l5.25-3.031c2.598-1.5 1.094-4.125 1.094-4.125-.75-1.3-1.757-1.55-2.594-1.5z"
}));

export default SvgComponent;