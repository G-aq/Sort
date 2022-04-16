// subpkg/rooms/rooms.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.gCeS6pGusV61ZBuKp4zaMgHaDp?w=343&h=172&c=7&r=0&o=5&dpr=1.25&pid=1.7',
    src02: 'https://dimg20.c-ctrip.com/images/70030n000000e34vwB318.jpg',
    src03: 'https://dimg04.c-ctrip.com/images/700o1a0000018ybax5DBF.jpg',
    date: '',
    showDate: false,
    showPer: false,
    numPer: '1',
    numRoom: '1',
    decimalRoom: 'disabled',
    decimalPer: 'disabled',
    valueNumber: ''
  },

  onChangePage() {
    wx: wx.navigateTo({
      url: './list/list'
    })
  },

  onDisplay() {
    this.setData({ showDate: true });
  },
  onCloseDate() {
    this.setData({ showDate: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    const [start, end] = event.detail;
    this.setData({
      showDate: false,
      date: `${this.formatDate(start)} - ${this.formatDate(end)}`,
    });
  },
  showPopup() {
    this.setData({ showPer: true });
  },
  onClose() {
    this.setData({ showPer: false });
  },
  //选择房间人数数量
  bindDecimal: function (e) {

    if (e.currentTarget.id == 'numRoom') {
      // var num = this.data.numRoom;
      let count = this.data.numRoom;
      if (count > 1) {
        count--;
      }
      var decimal = count <= 1 ? 'disabled' : 'normal';
      this.setData({
        numRoom: count,
        decimalRoom: decimal
      });
    } else {
      let count = this.data.numPer;
      if (count > 1) {
        count--;
      }
      var decimal = count <= 1 ? 'disabled' : 'normal';
      //var num = this.data.numPer;
      this.setData({
        numPer: count,
        decimalPer: decimal
      });
    }
    // this.setData({
    //   // num:num,
    //   decimal:decimal
    // });
  },

  bindAdd: function (e) {

    if (e.currentTarget.id == 'numRoom') {
      let count = this.data.numRoom;
      count++;
      var decimal = count < 1 ? 'disabled' : 'normal';
      // var num = this.data.numRoom;
      this.setData({
        numRoom: count,
        decimalRoom: decimal
      });

    } else {
      let count = this.data.numPer;
      count++;
      var decimal = count < 1 ? 'disabled' : 'normal';
      //var num = this.data.numPer;
      this.setData({
        numPer: count,
        decimalPer: decimal
      });

    }


    // this.setData({ 
    //   //num: num, 
    //   decimal: decimal 
    // }); 
  },
  bindManual: function (e) {
    console.log(e)
    var num = e.detail.value;
    // 将数值与状态写回 
    this.setData({
      num: num
    });
  },
  onConfirmNumber: function (e) {
    // console.log(e.detail.value)
    let a = e.detail.value;

    this.setData({
      showPer: false,
      valueNumber: a.valueRoom + '间--' + a.valuePer + '人'
    })
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})