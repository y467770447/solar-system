const temp = {
  appId: "etl",
  dbConnId: "ETL_MYSQL_240722001",
  dbConnIdParentFlag: "MySql",
  deleteTable: 1,
  pNodeId: "T00001",
  pNodeName: "创建数据库表",
  pNodeType: "createTableNode",
  processId: "66cd33fe8e95ac0d111026e5",
  applicationId: "new_app_test",
  createTime: "2024-08-29 09:11:40",
  creator: "admin",
  creatorName: "管理员",
  expireAfterIndexTime: "Aug 29, 2024 9:11:40 AM",
  editTime: "2024-08-29 09:11:40",
  editor: "admin",
  editorName: "管理员",
  id: "66cfcacc201bab5a55ea2328",
  jsonBody: {
    appId: "etl",
    processId: "66cd33fe8e95ac0d111026e5",
    pNodeId: "T00001",
    pNodeName: "创建数据库表",
    pNodeType: "createTableNode",
    applicationId: "new_app_test",
    createTime: "2024-08-29 09:11:40",
    creator: "admin",
    creatorName: "管理员",
    expireAfterIndexTime: "Aug 29, 2024 9:11:40 AM",
    editTime: "2024-08-29 09:11:40",
    editor: "admin",
    editorName: "管理员",
    id: "66cfcacc201bab5a55ea2328"
  },
  sourceLinkNodeId: "E00001",
  targetLinkNodeId: "E00002",
  pNodeRole: "target",
  tableName: 1,
  tableColumns: [{ id: 1, EditFlag: true, colId: "1", colType: "varchar", colLength: "50", colName: "1" }],
  exceptionAssert: 0,
  assertAction: 1,
  sqlCode: "CREATE TABLE `1` ( + `1` varchar (50) NULL DEFAULT '' ) ENGINE=InnoDB DEFAULT CHARSET=utf8"
}

const tempCanvas = {
  processModel: {
    nodeDataArray: [
      {
        key: "E00001",
        nodeType: "start",
        nodeName: "开始",
        nodeText: "开始",
        nodeRole: "",
        id: "64631c425727be7c6385a0d2",
        tip: "只能有一个开始节点",
        icon: "/res/iconres/images/componentimg/start.png",
        color: "",
        text: "开始",
        name: "E00001",
        nodeConfigId: "64631c425727be7c6385a0d2",
        width: 160,
        height: 77,
        classify: "开始",
        locLeft: 700,
        locTop: 400
      },
      {
        key: "E00002",
        nodeType: "end",
        nodeName: "结束",
        nodeText: "结束",
        nodeRole: "",
        id: "64631c425727be7c6385a0d4",
        tip: "结束流程运行",
        icon: "/res/iconres/images/componentimg/end.png",
        color: "",
        text: "结束",
        name: "E00002",
        nodeConfigId: "64631c425727be7c6385a0d4",
        width: 160,
        height: 77,
        classify: "结束",
        locLeft: 1280,
        locTop: 420
      },
      {
        key: "T00001",
        nodeType: "createTableNode",
        nodeName: "创建数据库表",
        nodeText: "创建数据库表",
        nodeRole: "",
        id: "64631c415727be7c6385a066",
        tip: "在指定的数据源中创建一个表",
        icon: "/res/iconres/images/componentimg/createTableNode.png",
        color: "",
        text: "创建数据库表",
        name: "T00001",
        nodeConfigId: "64631c415727be7c6385a066",
        width: 160,
        height: 77,
        classify: "创建数据库表",
        locLeft: 1030,
        locTop: 410
      }
    ],
    linkDataArray: [
      {
        routerId: "R00001",
        from: "E00001",
        to: "T00001",
        label: "",
        lineType: "Curved",
        pointsList: [
          { x: 730, y: 400 },
          { x: 840, y: 400 },
          { x: 840, y: 410 },
          { x: 950, y: 410 }
        ]
      },
      {
        routerId: "R00002",
        from: "T00001",
        to: "E00002",
        label: "",
        lineType: "Curved",
        pointsList: [
          { x: 1110, y: 410 },
          { x: 1180, y: 410 },
          { x: 1180, y: 420 },
          { x: 1250, y: 420 }
        ]
      }
    ],
    transform: 1,
    translate: { x: 0, y: 0 },
    gridBg: true,
    sid: 63990
  }
}

const tempRun = [
  {
    id: 0,
    EditFlag: true,
    fieldType: "string",
    breakFlag: true,
    required: false,
    in: "query",
    defaultValue: "",
    maxLength: "0",
    minLength: "0",
    order: 1,
    fieldId: "123123",
    fieldName: "123"
  }
]

console.log(temp, tempCanvas, tempRun)
