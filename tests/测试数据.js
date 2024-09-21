const temp = {
  appId: "etl",
  dbConnId: "ETL_MYSQL_240722001",
  dbConnIdParentFlag: "MySql",
  deleteTable: "1",
  isExist: "undefined",
  pNodeId: "T00001",
  pNodeName: "创建数据库表",
  pNodeType: "createTableNode",
  processId: "66cd3739dbf68465fc006a91",
  sqlCode: "CREATE TABLE `2` (\n\t`2` varchar (50) NULL DEFAULT '' \n) ENGINE=InnoDB DEFAULT CHARSET=utf8",
  tableColumns:
    '[{"colId":"2","colName":"2","colLength":50,"primaryKey":false,"colType":"varchar","id":1724895124764,"isEdit":true}]',
  tableName: "2"
}

const tempCanvas = {
  processModel: {
    nodeDataArray: [
      {
        key: "T00001",
        nodeType: "createTableNode",
        nodeName: "创建数据库表",
        nodeText: "创建数据库表",
        nodeRole: "",
        id: 1724895094886,
        tip: "在指定的数据源中创建一个表",
        icon: "/res/iconres/images/componentimg/createTableNode.png",
        color: "",
        nodeConfigId: "64631c415727be7c6385a066",
        name: "T00001",
        x: 410,
        y: 180,
        ports: {
          groups: {
            top: {
              position: "top",
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: { visibility: "hidden" }
                }
              }
            },
            right: {
              position: "right",
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: { visibility: "hidden" }
                }
              }
            },
            bottom: {
              position: "bottom",
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: { visibility: "hidden" }
                }
              }
            },
            left: {
              position: "left",
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: { visibility: "hidden" }
                }
              }
            }
          },
          items: [
            { group: "top", id: "7cc5678f-e000-407f-8430-f5655942c813" },
            { group: "right", id: "4b317030-7e97-4566-9f3e-2aab2f4c79f2" },
            { group: "bottom", id: "589dce98-26bd-4c40-a6ff-2183b51217e5" },
            { group: "left", id: "f02e3de9-abd9-43a6-bd40-038e20985d72" }
          ]
        }
      },
      {
        key: "E00001",
        nodeType: "start",
        nodeName: "开始",
        nodeText: "开始",
        nodeRole: "",
        id: 1724895096755,
        tip: "只能有一个开始节点",
        icon: "/res/iconres/images/componentimg/start.png",
        color: "",
        nodeConfigId: "64631c425727be7c6385a0d2",
        name: "E00001",
        x: 130,
        y: 180,
        ports: {
          groups: {
            top: {
              position: "top",
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: { visibility: "hidden" }
                }
              }
            },
            right: {
              position: "right",
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: { visibility: "hidden" }
                }
              }
            },
            bottom: {
              position: "bottom",
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: { visibility: "hidden" }
                }
              }
            },
            left: {
              position: "left",
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: { visibility: "hidden" }
                }
              }
            }
          },
          items: [
            { group: "top", id: "6f54b16f-7e26-414e-b0d7-524ecfe20ba8" },
            { group: "right", id: "bcf53f4a-c0ee-44bf-9994-6bde3fdef77f" },
            { group: "bottom", id: "d3dee816-8cde-48ad-bd24-653f67ea4dfd" },
            { group: "left", id: "007ffc3e-3bdd-465d-b695-7a7fd46f2f82" }
          ]
        }
      },
      {
        key: "E00002",
        nodeType: "end",
        nodeName: "结束",
        nodeText: "结束",
        nodeRole: "",
        id: 1724895105049,
        tip: "结束流程运行",
        icon: "/res/iconres/images/componentimg/end.png",
        color: "",
        nodeConfigId: "64631c425727be7c6385a0d4",
        name: "E00002",
        x: 682,
        y: 186,
        ports: {
          groups: {
            top: {
              position: "top",
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: { visibility: "hidden" }
                }
              }
            },
            right: {
              position: "right",
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: { visibility: "hidden" }
                }
              }
            },
            bottom: {
              position: "bottom",
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: { visibility: "hidden" }
                }
              }
            },
            left: {
              position: "left",
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: { visibility: "hidden" }
                }
              }
            }
          },
          items: [
            { group: "top", id: "06d56fef-2562-41b0-9bf2-8b0a5c3922c3" },
            { group: "right", id: "ce0facca-5ccc-4fd7-b20c-abd1decf23b6" },
            { group: "bottom", id: "396f6694-b810-4443-ad1f-c4e512d8d0a3" },
            { group: "left", id: "7f335140-3fc9-4350-bed2-ef689d14d2b9" }
          ]
        }
      }
    ],
    linkDataArray: [
      {
        routerId: "R00001",
        from: "E00001",
        to: "T00001",
        key: "R00001",
        lineType: "Curved",
        id: "f9812088-cd8f-46ad-ade7-84c292fa85e0",
        source: { cell: 1724895096755, port: "bcf53f4a-c0ee-44bf-9994-6bde3fdef77f" },
        target: { cell: 1724895094886, port: "f02e3de9-abd9-43a6-bd40-038e20985d72" },
        attrs: { line: { stroke: "#A2B1C3", strokeWidth: 2, targetMarker: { name: "block", width: 12, height: 8 } } }
      },
      {
        routerId: "R00002",
        from: "T00001",
        to: "E00002",
        key: "R00002",
        lineType: "Curved",
        id: "307da6ab-902b-4654-86a2-39898acd3232",
        source: { cell: 1724895094886, port: "4b317030-7e97-4566-9f3e-2aab2f4c79f2" },
        target: { cell: 1724895105049, port: "7f335140-3fc9-4350-bed2-ef689d14d2b9" },
        attrs: { line: { stroke: "#A2B1C3", strokeWidth: 2, targetMarker: { name: "block", width: 12, height: 8 } } }
      }
    ]
  }
}

const tempRun = {}

console.log(temp, tempCanvas, tempRun)
