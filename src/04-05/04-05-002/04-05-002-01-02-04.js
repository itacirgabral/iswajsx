function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M29.875 5.156c4.352 4.353 5.898 10.417 4.706 16.02-.361 1.849-1.514 3.67-1.635 5.613-.06.977.464 2.895.464 2.895.34 1.04.12 2.223-.707 3.05-.826.826-2.01 1.046-3.05.706 0 0-1.917-.524-2.894-.464-1.944.121-3.814 1.143-5.613 1.635-5.603 1.192-11.668-.354-16.02-4.706-6.834-6.834-6.834-17.915 0-24.749s17.914-6.834 24.749 0zM28.46 6.57C22.407.517 12.593.517 6.54 6.57c-6.053 6.053-6.053 15.867 0 21.92 3.83 3.83 9.163 5.215 14.098 4.199 1.882-.563 3.85-.722 5.79-.972 1.21.034 3.535.795 3.535.795a1.993 1.993 0 002.033-.486c.55-.55.712-1.34.486-2.033 0 0-.761-2.324-.795-3.535.17-1.959.473-3.89.972-5.79 1.016-4.935-.37-10.268-4.199-14.098z"
}));

export default SvgComponent;