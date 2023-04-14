const app = require("./app");

const PORT = process.env.POST || 3002;

app.listen(PORT, () => {
  console.log("########################");
  console.log("####### API REST #######");
  console.log("########################");
  // console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
});
