import {_get, _post} from './index'

//准备支付
export const initPay = (data) => {
  let req = {
    data,
    url: 'v1/pay'
  }
  return _post(req);
}

//获取订单信息
export const orderInfo = (data) => {
  let req = {
    url: `v1/order/${data.order_id}`
  }
  return _get(req);
}

//监听扫码支付状态
export const listenStatus = (data) => {
  let req = {
    data,
    url: 'v1/listen_status'
  }
  return _get(req)
}
