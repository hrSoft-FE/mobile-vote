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
  '/api/votes/register': (req, res) => {
    res.json(
      {
        'code': 0,
        'data': {'body': req.body}
      }
    )
  },
  '/api/votes/login': (req, res) => {
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
  '/api/votes/will': {
    'code': 0,
    'data': {
      'votes': [
        {
          id: 1,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 2,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 3,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        }
      ],
      'totalCount': 10
    }
  },
  '/api/votes/done': {
    'code': 0,
    'data': {
      'votes': [
        {
          id: 11,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 12,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 13,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 14,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 15,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 16,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 17,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 18,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 19,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 20,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        }

      ],
      'totalCount': 10
    }
  },
  '/api/votes/doing': {
    'code': 0,
    'data': {
      'votes': [
        {
          id: 1,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 2,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 3,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 4,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 5,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 6,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 7,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 8,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 9,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        },
        {
          id: 10,
          start_time: 1507123590000,
          end_time: 1507123635000,
          title: '不是所有的兼职汪都需要风吹日晒'
        }
      ],
      'totalCount': 10
    }
  },
  'GET /api/votes/content': {
    'code': 0,
    'data':
      {
        'type': 0, // the type of this item.
        'content':
          ['this is the test item0', '2017-09-08 12:00:00', '2018-09-11 12:00:00']
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
