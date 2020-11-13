const express = require("express");
const socketServer = require("socket.io");
const http = require("http");
const si = require("systeminformation");
const { log } = require("console");
const app = express();
const server = http.Server(app);
const io = socketServer.listen(server);
server.listen(1155);
console.log("Server - Waiting connection at port: 1155");

let systemInfo = null;
io.on("connection", (socket) => {
  setInterval(() => {
    si.mem().then((data) => {
      socket.emit("ram", {
        total: Math.floor(data.total / 1000000000),
        used: Math.floor(data.used / 1000000000),
        inuse: Math.floor((data.used / data.total) * 100),
      });
    });
    si.currentLoad().then((data) => {
      socket.emit("cpuspeed", {
        speed: Math.floor(data.currentload),
      });
    });
    si.processes().then((data) => {
      socket.emit("process", data);
    });
    si.fsSize().then((data) => {
      socket.emit("disk", {
        usedDiskC: data[0].use,
        usedDiskD: data[1].use,
        usedDiskE: data[2].use,
      });
    });
    si.networkInterfaces().then((data) => {
      socket.emit("network", data);
    });
  }, 5000);
  si.cpu().then((data) => {
    socket.emit("cpu", {
      manufacturer: data.manufacturer,
      brand: data.brand,
      speed: data.speed,
      cores: data.cores,
    });
  });
  si.osInfo().then((data) => {
    socket.emit("os", {
      os: data.platform,
    });
  });
  si.system().then((data) => {
    socket.emit("system", {
      model: data.model,
    });
  });
});

// server.listen(3000)

// const getSystemInfomation = async () => {
//   const cpu = await si.cpu();
//   const memory = await si.mem();
//   const network = await si.networkInterfaces();
//   const disk = await si.diskLayout();
//   const gpu = await si.graphics();
//   const os = await si.osInfo();
//   systemInfo = {
//     cpu,
//     memory,
//     network,
//     disk,
//     gpu,
//     os,
//   };
// };

// const getCurrentCpu = async () => {
//   const currentSpeed = await si.cpuCurrentspeed();
//   const cache = await si.cpuCache();
//   const temperature = await si.cpuTemperature();
//   return  { currentSpeed, cache, temperature }
// }
// const getCurrentMemory = async () => {
//   const ram = await si.mem();
//   return {ram}
// }

// const getCurrentDisk = async () => {
//   const disk = await si.diskLayout();
//   return {disk};
// }

// const getCurrentNetwork = async () => {
//   const network = await si.networkInterfaces();
//   return {network}

// }

// const realtime=async ()=>{
// 	const cpu=await getCurrentCpu();
// 	const network= await getCurrentNetwork();
// 	const disk=await getCurrentDisk();
// 	const memory= await getCurrentMemory();
// 	io.sockets.emit("realtime", { cpu, network, disk,memory });
// }

// const run = async () => {
//   await getSystemInfomation();
//   app.get("/systemInfo", (req, res) => {
//     res.json({ data: { ...systemInfo } });
//   });

// }

// setInterval(realtime, 2000)

// run();
