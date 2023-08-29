//@ts-nocheck
import mockjs from 'mockjs';

const MockSearchKey = (req, key, wantKey, type = 'query') => {
  const newkey = req[type]?.[key];
  if (newkey) {
    return newkey;
  } else {
    return wantKey;
  }
};

export default {
  'POST /getSelectDict': {
    code: 200,
    msg: '请求成功',
    success: true,
    data: [
      {
        label: '测试1',
        value: 1,
      },
      {
        label: '测试2',
        value: 2,
      },
      {
        label: '测试3',
        value: 3,
      },
    ],
  },
  'GET /getActivityList': (req, res) => {
    setTimeout(() => {
      res.send({
        code: 200,
        data: {
          ...mockjs.mock({
            'list|30': [
              {
                name: '@city',
                title: '@ctitle',
                desc: '@cparagraph',
                'value|1-100': 50,
                'type|0-2': 1,
                'activeStatus|0-2': 1,
                activityCode: '@guid',
                activityName: MockSearchKey(req, 'activityName', '@ctitle'),
                type: req.query?.activityType,
                [`activityType|${MockSearchKey(req, 'activityType', '0-2')}`]: 1,
                activityStartTime: '@datetime',
                activityEndTime: '@datetime',
                'activityStatus|0-2': 1,
                activityDesc: '@cparagraph',
                activityRule: '@cparagraph',
                activityRuleDesc: '@cparagraph',
                activityPrice: '@float(100, 10000, 2, 2)',
              },
            ],
          }),
          page: req.query.page,
          pageSize: 30,
          totalPage: 1,
          total: 30,
        },
        message: 'string',
        success: true,
        unSuccess: true,
      });
    }, 0);
  },
  'GET /getActivityListTotal': (req, res) => {
    setTimeout(() => {
      res.send({
        code: 200,
        data: {
          ...mockjs.mock({
            'list|2': [
              {
                name: '@city',
                'value|1-100': 50,
                'type|0-2': 1,
                'activeStatus|0-2': 1,
                activityCode: '@guid',
                activityName: '合计',
                type: req.query?.activityType,
                [`activityType|${MockSearchKey(req, 'activityType', '0-2')}`]: 1,
                activityStartTime: '@datetime',
                activityEndTime: '@datetime',
                'activityStatus|0-2': 1,
                activityDesc: '@cparagraph',
                activityRule: '@cparagraph',
                activityRuleDesc: '@cparagraph',
                activityPrice: '@float(100, 10000, 2, 2)',
              },
            ],
          }),
          page: req.query.page,
          pageSize: 3,
          total: 3,
        },
        message: 'string',
        success: true,
        unSuccess: true,
      });
    }, 0);
  },
  'POST /updateActivityList': (req, res) => {
    res.send({
      code: 200,
      data: 'success',
      msg: `${req.body.isEdit ? '编辑' : '新增'}成功`,
      success: true,
      unSuccess: true,
    });
  },

  'POST /deleteActivityList': (req, res) => {
    if (req.body.idDel) {
      res.send({
        code: 200,
        data: 'success',
        msg: '删除成功',
        success: true,
        unSuccess: true,
      });
    }
  },

  'POST /flow/upload': {
    code: 200,
    msg: '请求成功',
    success: true,

    data: mockjs.mock({
      fileId: '@float(100, 10000, 2, 2)',
      id: '@float(100, 10000, 2, 2)',
      url: 'http://xxxx/xxx/1.pdf',
      name: '1.pdf',
      fileSize: 646983,
      fdDownLoadUrl: 'http://xxxx/xxx/1.pdf',
      fdEntityKey: 'file',
      fdExternalAttachId: '@float(100, 10000, 2, 2)',
      fdFileName: '1.pdf',
      fdFileSize: '@float(100, 10000, 2, 2)',
      flowId: '@float(100, 10000, 2, 2)',
      fileName: '1.pdf',
    }),
  },
};
