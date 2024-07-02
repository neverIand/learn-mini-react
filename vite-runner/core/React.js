// v2 react -> vdom -> js object
// const textEl = {
//   type: "TEXT_ELEMENT",
//   props: {
//     nodeValue: "app",
//     children: [],
//   },
// };

function createTextNode(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

// const el = {
//   type: "div",
//   props: {
//     id: "app",
//     children: [textEl],
//   },
// };

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        return typeof child === "string" ? createTextNode(child) : child;
      }),
    },
  };
}

// Render an element shares a similar process:
// 1. create element
// 2. assign props
// 3. append element
// const dom = document.createElement(App.type);
// dom.id = App.props.id;
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = textEl.props.nodeValue;
// dom.append(textNode);

function render(el, container) {
  nextWorkOfUnit = {
    dom: container,
    props: {
      children: [el],
    },
  };

  root = nextWorkOfUnit;
}

let root = null;
let nextWorkOfUnit = null;
function workLoop(deadline) {
  let shouldYeild = false;
  while (!shouldYeild && nextWorkOfUnit) {
    // execute current task and return next task
    nextWorkOfUnit = performWorkerOfUnit(nextWorkOfUnit);
    shouldYeild = deadline.timeRemaining() < 1;
  }

  // the tree has been converted to a linked list by this point
  // render all elements (avoid non-existent idle causing render stutter/incomplete render
  if (!nextWorkOfUnit && root) {
    commitRoot();
  }

  requestIdleCallback(workLoop);
}

function commitRoot() {
  commitWork(root.child);
  root = null;
}

function commitWork(fiber) {
  if (!fiber) {
    return;
  }
  let fiberParent = fiber.parent;
  while (!fiberParent.dom) {
    fiberParent = fiberParent.parent;
  }
  if (fiber.dom) {
    fiberParent.dom.append(fiber.dom);
  }
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

function createDOM(type) {
  return type === "TEXT_ELEMENT"
    ? document.createTextNode("")
    : document.createElement(type);
}

function updateProps(dom, props) {
  Object.keys(props).forEach((key) => {
    if (key !== "children") {
      dom[key] = props[key];
    }
  });
}

function initChildren(fiber, children) {
  let prevChild = null; // i.e. parent of this node
  children.forEach((child, index) => {
    // if we add the parent directly to vdom, it will break its structure, so we create a new variable here
    const newFiber = {
      type: child.type,
      props: child.props,
      child: null,
      parent: fiber,
      sibling: null,
      dom: null,
    };
    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevChild.sibling = newFiber;
    }
    prevChild = newFiber;
  });
}

function performWorkerOfUnit(fiber) {
  // console.log(fiber.type);
  const isFunctionComponent = typeof fiber.type === "function";
  if (!isFunctionComponent) {
    // 1. create dom
    if (!fiber.dom) {
      const dom = (fiber.dom = createDOM(fiber.type));

      // fiber.parent.dom.append(dom);

      // 2. handle props
      updateProps(dom, fiber.props);
    }
  }

  // 3. convert dom tree into linked list and set up the pointers (convertion happens during the traversal for efficiency)
  const children = isFunctionComponent ? [fiber.type()] : fiber.props.children;
  initChildren(fiber, children);

  // 4. return next task
  if (fiber.child) {
    return fiber.child;
  }
  if (fiber.sibling) {
    return fiber.sibling;
  }
  return fiber.parent?.sibling;
}

requestIdleCallback(workLoop);

const React = {
  render,
  createElement,
};

export default React;
