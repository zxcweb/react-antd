import Mock from "mockjs";

const Random = Mock.Random;
Mock.mock("/table/list", {
    "code": 0,
    "msg": "",
    "result": [
      {
        "id|+1": 1,
        "userName": "@cname",
        "state|1-2": 1,
        "hobby|1-7": 6,
        borth: "2018-01-17",
        address: "青铜峡市"
      }
    ]
  });
