Page({
  listData: {
    projectWeek: [{
      imgUrl: 'https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png',
      title: '前端性能优化--6大角度综合型优化方案',
    }, {
      imgUrl: 'https://img2.mukewang.com/szimg/5c18d2d8000141c506000338.jpg',
      title: '剑指Java面试-Offer直通车',
    }, {
      imgUrl: 'https://img4.mukewang.com/szimg/5ac2dfe100014a9005400300.jpg',
      title: 'Vue2.5 开发去哪儿网App',
    }, {
      imgUrl: 'https://img3.mukewang.com/szimg/5d1032ab08719e0906000338.jpg',
      title: '计算机组成原理+操作系统+计算机网络',
    },{
      imgUrl: 'https://img1.mukewang.com/szimg/5f3cdd710925166812000676.png',
      title: 'Spark Streaming',
    }],
    projectMonth: [{
      imgUrl: 'https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png',
      title: '前端性能优化--6大角度综合型优化方案',
    }, {
      imgUrl: 'https://img3.mukewang.com/szimg/5d1032ab08719e0906000338.jpg',
      title: '计算机组成原理+操作系统+计算机网络',
    }, {
      imgUrl: 'https://img4.mukewang.com/szimg/5ac2dfe100014a9005400300.jpg',
      title: 'Vue2.5 开发去哪儿网App',
    }, {
      imgUrl: 'https://img1.mukewang.com/szimg/5f3cdd710925166812000676.png',
      title: 'Spark Streaming',
    },{
      imgUrl: 'https://img2.mukewang.com/szimg/5c18d2d8000141c506000338.jpg',
      title: '剑指Java面试-Offer直通车',
    }],
    pathWeek: [{
      imgUrl: 'https://img3.mukewang.com/szimg/5d1032ab08719e0906000338.jpg',
      title: '计算机组成原理+操作系统+计算机网络',
    }, {
      imgUrl: 'https://img4.mukewang.com/szimg/5ac2dfe100014a9005400300.jpg',
      title: 'Vue2.5 开发去哪儿网App',
    }, {
      imgUrl: 'https://img1.mukewang.com/szimg/5f3cdd710925166812000676.png',
      title: 'Spark Streaming',
    },{
      imgUrl: 'https://img2.mukewang.com/szimg/5c18d2d8000141c506000338.jpg',
      title: '剑指Java面试-Offer直通车',
    },{
      imgUrl: 'https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png',
      title: '前端性能优化--6大角度综合型优化方案',
    }],
    pathMonth: [{
      imgUrl: 'https://img4.mukewang.com/szimg/5ac2dfe100014a9005400300.jpg',
      title: 'Vue2.5 开发去哪儿网App',
    }, {
      imgUrl: 'https://img3.mukewang.com/szimg/5d1032ab08719e0906000338.jpg',
      title: '计算机组成原理+操作系统+计算机网络',
    },{
      imgUrl: 'https://img1.mukewang.com/szimg/5f3cdd710925166812000676.png',
      title: 'Spark Streaming',
    },{
      imgUrl: 'https://img2.mukewang.com/szimg/5c18d2d8000141c506000338.jpg',
      title: '剑指Java面试-Offer直通车',
    },{
      imgUrl: 'https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png',
      title: '前端性能优化--6大角度综合型优化方案',
    }]
  },
  data: {
    rankType: 'project',
    rankTypes: [{
      title: '实战排行',
      type: 'project'
    }, {
      title: '路径排行',
      type: 'path'
    }],
    rankPeriod: 'week',
    rankPeriods: [{
      title: '周',
      value: 'week'
    },{
      title: '月',
      value: 'month'
    }],
    currentList: [{
      imgUrl: 'https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png',
      title: '前端性能优化--6大角度综合型优化方案',
    }, {
      imgUrl: 'https://img2.mukewang.com/szimg/5c18d2d8000141c506000338.jpg',
      title: '剑指Java面试-Offer直通车',
    }, {
      imgUrl: 'https://img4.mukewang.com/szimg/5ac2dfe100014a9005400300.jpg',
      title: 'Vue2.5 开发去哪儿网App',
    }, {
      imgUrl: 'https://img3.mukewang.com/szimg/5d1032ab08719e0906000338.jpg',
      title: '计算机组成原理+操作系统+计算机网络',
    },{
      imgUrl: 'https://img1.mukewang.com/szimg/5f3cdd710925166812000676.png',
      title: 'Spark Streaming',
    }]
  },
  changeCurrentList(rankType, periodType) {
    let currentList = [];
    if(rankType === 'project' && periodType=== 'week') {
      currentList = this.listData.projectWeek;
    }else if(rankType === 'project' && periodType=== 'month') {
      currentList = this.listData.projectMonth;
    }else if(rankType === 'path' && periodType=== 'week') {
      currentList = this.listData.pathWeek;
    }else {
      currentList = this.listData.pathMonth;
    }
    this.setData({currentList});
  },
  handleTabChange(e) {
    const rankType = e.currentTarget.dataset.type;
    const { rankPeriod } = this.data;
    this.setData({rankType});
    this.changeCurrentList(rankType, rankPeriod);
  },
  handlePeriodChange(e) {
    const rankPeriod = e.currentTarget.dataset.type;
    const { rankType } = this.data;
    this.setData({rankPeriod});
    this.changeCurrentList(rankType, rankPeriod);
  },
})