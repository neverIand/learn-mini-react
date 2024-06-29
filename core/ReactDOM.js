import React from "./React.js";

// To make it compatible to the real React API, we also need a ReactDOM object
const ReactDOM = {
  createRoot(container) {
    return {
      render(App) {
        React.render(App, container);
      },
    };
  },
};

export default ReactDOM;
