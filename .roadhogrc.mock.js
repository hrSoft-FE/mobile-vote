// status 0-unstart 1-curr 2-past
// type 1-vote 2-score
// gender 1-male 2-female
export default {
  '/api/votes/user': {
    'code': 0,
    'data': {
      'user_id': 10,
      'mobile': '15033517219',
      'name': 'Raoul',
      'gender': 1,
      'email': 'zhoubao@hrsoft.net'
    }
  },
  'POST /api/votes/register': (req, res) => {
    res.json(
      {
        'code': 0,
        'data': {'body': req.body}
      }
    )
  },
  'POST /api/votes/login': (req, res) => {
    res.json(
      {
        'code': 0,
        'data': {
          'user_id': 10,
          'mobile': '15033517219',
          'name': 'Raoul',
          'gender': 1,
          'email': 'zhoubao@hrsoft.net'
        },
        'token': 'gakkigakki'
      }
    )
  },
  '/api/votes/unstart': {
    'code': 0,
    'data': {
      'votes': [
        {
          'id': 9,
          'title': '投票测试Mock',
          'status': 0,
          'type': 1,
          'description': '投票项目测试',
          'startTime': '2017-10-08 12:00:00',
          'endTime': '2017-10-11 12:00:00',
          'createdAt': '2017-09-28 19:18:28',
          'updatedAt': '2017-09-28 19:18:28'
        }, {
          'id': 10,
          'title': '小姐姐是否温柔',
          'status': 0,
          'type': 1,
          'description': '小姐姐温不温柔',
          'startTime': '2017-10-12 12:00:00',
          'endTime': '2018-10-11 12:00:00',
          'createdAt': '2017-09-28 19:18:28',
          'updatedAt': '2017-09-30 19:18:28'
        }, {
          'id': 19,
          'title': '这个的名字就好长好长好长好长好长，超级长超级长超级长，长到页面上显示不下。再来一遍。这个的名字就好长好长好长好长好长，超级长超级长超级长，长到页面上显示不下。好了，enough',
          'status': 0,
          'type': 1,
          'description': '小姐姐唱歌好不好听',
          'startTime': '2018-10-12 12:00:00',
          'endTime': '2018-11-11 12:00:00',
          'createdAt': '2017-09-28 19:18:28',
          'updatedAt': '2017-10-01 19:18:28'
        }
      ],
      'totalCount': 10
    }
  },
  '/api/votes/past': {
    'code': 0,
    'data': {
      'votes': [
        {
          'id': 90,
          'title': '投票测试Mock--passed',
          'status': 2,
          'type': 1,
          'description': '投票项目测试',
          'startTime': '2017-09-08 12:00:00',
          'endTime': '2017-09-11 12:00:00',
          'createdAt': '2017-08-28 19:18:28',
          'updatedAt': '2017-08-28 19:18:28'
        }, {
          'id': 100,
          'title': '一不小心这个投票就变成了比我岁数还大的投票',
          'status': 2,
          'type': 1,
          'description': '老爷爷投票',
          'startTime': '1900-10-12 12:00:00',
          'endTime': '1900-10-11 12:00:00',
          'createdAt': '1900-09-28 19:18:28',
          'updatedAt': '1900-09-30 19:18:28'
        }, {
          'id': 190,
          'title': '这个的名字就好长好长好长好长好长，超级长超级长超级长，长到页面上显示不下。再来一遍。这个的名字就好长好长好长好长好长，超级长超级长超级长，长到页面上显示不下。好了，enough',
          'status': 2,
          'type': 1,
          'description': '小姐姐唱歌好不好听',
          'startTime': '1018-10-12 12:00:00',
          'endTime': '1018-11-11 12:00:00',
          'createdAt': '1017-09-28 19:18:28',
          'updatedAt': '1017-10-01 19:18:28'
        }
      ],
      'totalCount': 10
    }
  },
  '/api/votes/curr': {
    'code': 0,
    'data': {
      'votes': [
        {
          'id': 1,
          'title': '投票测试Mock--curr',
          'status': 1,
          'type': 1,
          'description': '投票项目测试',
          'startTime': '2017-09-08 12:00:00',
          'endTime': '2017-11-11 12:00:00',
          'createdAt': '2017-08-28 19:18:28',
          'updatedAt': '2017-08-28 19:18:28'
        }, {
          'id': 2,
          'title': '正在进行中的投票之----我们一定能写完',
          'status': 1,
          'type': 1,
          'description': '我们一定能写完',
          'startTime': '2017-09-08 12:00:00',
          'endTime': '2017-11-11 12:00:00',
          'createdAt': '2017-08-28 19:18:28',
          'updatedAt': '2017-08-28 19:18:28'
        }, {
          'id': 3,
          'title': '这个的名字就好长好长好长好长好长，超级长超级长超级长，长到页面上显示不下。再来一遍。这个的名字就好长好长好长好长好长，超级长超级长超级长，长到页面上显示不下。好了，enough',
          'status': 1,
          'type': 1,
          'description': '小姐姐唱歌好不好听',
          'startTime': '2017-07-08 12:00:00',
          'endTime': '2017-11-11 12:00:00',
          'createdAt': '2017-08-28 19:18:28',
          'updatedAt': '2017-08-28 19:18:28'
        }
      ],
      'totalCount': 10
    }
  },
  'GET /api/votes/content/:id': (req, res) => {
    const params = req.params || ''
    const query = req.query || ''
    if (params.id && (query.type === 1)) {
      res.json({
        'code': 0,
        'data': {
          'id': params.id,// the item id
          'type': query.type, // the type of this item.
          'content': [
            {
              'desc': 'this is the test item0',
              'startTime': '2017-09-08 12:00:00',
              'endTime': '2018-09-11 12:00:00'
            }, {
              'desc': 'this is the test item1',
              'startTime': '2017-09-08 12:00:00',
              'endTime': '2018-09-11 12:00:00'
            }
          ]
        }
      })
    }
    else if (params.id && (query.type === 2)) {
      res.json({
        'id': params.id,// the item id
        'type': query.type, // the type of this item.
        'dec': 1,// 1-十分制，2-百分制
        'content': [
          {
            'desc': 'this is the score item0',
            'startTime': '2017-09-08 12:00:00',
            'endTime': '2018-09-11 12:00:00'
          }, {
            'desc': 'this is the test item1',
            'startTime': '2017-09-08 12:00:00',
            'endTime': '2018-09-11 12:00:00'
          }
        ]
      })
    }
  },
  'POST /api/votes/submit': (req, res) => {
    res.json({
      req
    })
  },
  'GET /api/votes/voted': {
    'code': 0,
    'data': [{
      'id': 90,
      'title': '投票测试Mock--passed',
      'status': 2,
      'type': 1,
      'description': '投票项目测试',
      'startTime': '2017-09-08 12:00:00',
      'endTime': '2017-09-11 12:00:00',
      'createdAt': '2017-08-28 19:18:28',
      'updatedAt': '2017-08-28 19:18:28'
    }, {
      'id': 2,
      'title': '正在进行中的投票之----我们一定能写完',
      'status': 1,
      'type': 1,
      'description': '我们一定能写完',
      'startTime': '2017-09-08 12:00:00',
      'endTime': '2017-11-11 12:00:00',
      'createdAt': '2017-08-28 19:18:28',
      'updatedAt': '2017-08-28 19:18:28'
    }]
  },
  'GET /api/votes/search': (req, res) => {
    res.json(
      {
        'code': 0,
        'data': {
          'keyword': req.query,
          'votes': [
            {
              'id': 1,
              'title': '搜索到的结果',
              'status': 1,
              'type': 1,
              'description': '投票项目测试',
              'startTime': '2017-09-08 12:00:00',
              'endTime': '2017-11-11 12:00:00',
              'createdAt': '2017-08-28 19:18:28',
              'updatedAt': '2017-08-28 19:18:28'
            }, {
              'id': 2,
              'title': '正在进行中的投票之----我们一定能写完',
              'status': 1,
              'type': 1,
              'description': '我们一定能写完',
              'startTime': '2017-09-08 12:00:00',
              'endTime': '2017-11-11 12:00:00',
              'createdAt': '2017-08-28 19:18:28',
              'updatedAt': '2017-08-28 19:18:28'
            }, {
              'id': 3,
              'title': '这个的名字就好长好长好长好长好长，超级长超级长超级长，长到页面上显示不下。再来一遍。这个的名字就好长好长好长好长好长，超级长超级长超级长，长到页面上显示不下。好了，enough',
              'status': 1,
              'type': 1,
              'description': '小姐姐唱歌好不好听',
              'startTime': '2017-07-08 12:00:00',
              'endTime': '2017-11-11 12:00:00',
              'createdAt': '2017-08-28 19:18:28',
              'updatedAt': '2017-08-28 19:18:28'
            }
          ],
          'totalCount': 10
        }
      }
    )
  },
  'GET /api/votes/verify': {
    'code': 0, 'data': {'token': 'gakki,gakki,gakki'}
  }
}
