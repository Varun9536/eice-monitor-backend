
import { fetchRequest } from "../services/fetch.service.js";
import { sessionStore } from "../store/tokenStore.js";


export async function getHostGroups(req, res) {

  const data = await fetchRequest({
    jsonrpc: "2.0",
    method: "hostgroup.get",
    params: { output: ["groupid", "name"] },
    id: 2,
  });

  if (data.error) {
    sessionStore.token = null
    return res.status(401).json({ message: "SESSION_EXPIRED" });
  }

  res.json(data.result);
}


export async function getHostsByGroup(req, res) {
  const { groupid } = req.body;


  if (!groupid) {
    return res.status(400).json({ message: "groupid required" });
  }

  const data = await fetchRequest({
    jsonrpc: "2.0",
    method: "host.get",
    params: {
      output: ["hostid", "host", "status"],
      selectGroups: [`${groupid}`],
      selectInterfaces: ["ip"]
    },
    id: 2,
  });

  if (data.error) {
    return res.status(401).json({ message: "SESSION_EXPIRED" });
  }


  res.json(data.result);
}



// Retrieve list of hosts with status information.
export async function getHostsListAndInfo(req, res) {


  const data = await fetchRequest(
    {
      jsonrpc: "2.0",
      method: "host.get",
      params: {
        output: ["hostid", "host", "name", "status", "description"],
        selectInterfaces: ["interfaceid", "ip", "port", "type", "main"],
        selectHostGroups: ["groupid", "name"],
        sortfield: "name",
        sortorder: "ASC"
      },
      id: 1
    }
  );

  if (data.error) {
    return res.status(401).json({ message: "SESSION_EXPIRED" });
  }


  res.json(data.result);
}





