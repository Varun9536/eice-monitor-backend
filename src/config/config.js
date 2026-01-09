export const serverURL = "http://192.168.1.35:8082/api_jsonrpc.php";
if (!serverURL) {
  throw new Error("serverURL is not defined in .env");
}
