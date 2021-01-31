const cp = require("child_process");

cp.exec("node readStream", (err, data, sterr) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
