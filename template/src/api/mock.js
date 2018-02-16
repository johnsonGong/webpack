/**
 * 用户 数据交互api.
 *
 */
import axios from 'axios'
import qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
  /**
   * [首页]--用户进入-初始化订单列表
   *
   * @param {Function} cb     回调函数
   *
   */
  initPage: function (cb) {
    axios({
      method: 'post',
      url: '/mock/initPage.json',
      responseType: 'json',
      data: qs.stringify({userName: 'johnson'})
    }).then(function (response) {
      cb(response)
    }).catch(function (error) {
      cb(error)
    })
  }
}
