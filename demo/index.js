let taskId = 1;
function workLoop(deadline) {
  taskId++;
  console.log(deadline.timeRemaining());

  let shouldYeild = false;
  while (!shouldYeild) {
    console.log(`run taskId: ${taskId}`);
    shouldYeild = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}

// requestIdleCallback(workLoop);
