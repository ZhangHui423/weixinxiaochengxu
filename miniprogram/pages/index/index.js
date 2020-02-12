const app=getApp()
Page({

  data: {
    motto: '出门走好路，出口说好话，出手做好事',
    birthday: 0,
    year: 0,
    month: 0,
    distance: 0,
    end: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
     let now=new Date();
     this.setData({
       end:`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`
     })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  changeBirthday(e){
    console.log('e....',e)
    let value=e.detail.value.split('-');
    let distance = this.getDistanceMonth(e.detail.value, this.data.end);
    this.setData({
      birthday:e.detail.value,
      year:value[0],
      month:value[1],
      distance,
      
    })
  },
  getDistanceMonth(pre,now){
    console.log(pre,now)
    let preArr=pre.split('-'),
        nowArr=now.split('-');
    return Number((nowArr[0]-preArr[0])*12)+Number(nowArr[1]-preArr[1])
  },
  clear(){
    let now = new Date();
    this.setData({
      birthday: 0,
      month: String(now.getMonth() + 1).padStart(2, '0'),
      year: now.getFullYear(),
      distance: 0
    })
  }
 
})