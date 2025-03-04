import { app } from "./app";
import { getApiConfig, loadConfig } from "./configs/app_config";

console.log("puta que pariu");
loadConfig();

const host = getApiConfig().host;
const port = getApiConfig().port;

app.listen(port, host, () => {
    console.log(`Server listening on host: ${host} and port: ${port}`);
});