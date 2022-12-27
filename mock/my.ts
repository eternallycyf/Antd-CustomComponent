export default {
  "GET /api/getMockMessage": {
    code: 200,
    msg: "请求成功",
    success: true,
    data: [
      {
        label: "测试1",
        value: 1,
      },
      {
        label: "测试2",
        value: 2,
      },
      {
        label: "测试3",
        value: 3,
      },
    ],
  },
  'GET /admin-site/marketing/activity/activityList': (req, res) => {
    if (req.query.page === '1') {
      res.send({
        code: 200,
        data: {
          list: [
            {
              // 活动状态(0 待发布 1进行中 2手动结束 3自动结束)
              activeStatus: 0,
              // 活动编码
              activityCode: 'HD-CS248',
              activityEndTime: '2022-01-30T04:32:46.516Z',
              // 活动名称
              activityName: 'N站上新-站点用户满减活动',
              activityStartTime: '2022-01-14T04:32:46.516Z',
              // 优惠类型 0 满折 1满减 2立减
              activityType: 0,
            },
          ],
          page: 1,
          pageSize: 1,
          total: 31,
        },
        message: 'string',
        success: true,
        unSuccess: true,
      });
    }

    if (req.query.page === '2') {
      res.send({
        code: 200,
        data: {
          list: [
            {
              // 活动状态(0 待发布 1进行中 2手动结束 3自动结束)
              activeStatus: 1,
              // 活动编码
              activityCode: '阿斯达速度',
              activityEndTime: '2022-01-30T04:32:46.516Z',
              // 活动名称
              activityName: 'N站上新22222222',
              activityStartTime: '2022-01-10T04:32:46.516Z',
              // 优惠类型 0 满折 1满减 2立减
              activityType: 1,
            },
          ],
          page: 2,
          pageSize: 1,
          total: 31,
        },
        message: 'string',
        success: true,
        unSuccess: true,
      });
    }
  },
};
