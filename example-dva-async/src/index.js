import React from 'react';
import dva, { connect } from 'dva';
import request from './utils/request';
// import './style.css';

// 1. Initialize
const app = dva();

// console.log(2);

// 2. Model
app.model({
  namespace: 'count',
  state: {
    global:false,
    counter:10,
    test:'测试同步',
    request:[],
    requestIndex:1
  },
  reducers: {
    add  (count) {
      return {...count,counter:count.counter+1};
    },
    minus(count) {
      return {...count,counter:count.counter-1};
    },
    save(count,{payload:{data}}) {
      return {...count,request:data,requestIndex:count.requestIndex+1};
    },
  },
  effects: {
    *request(action, { call, put }) {
      let {num=1,pageNum=5} =action.payload?action.payload:{};
      const {data} = yield call(function (){
        return request(`/api/getBlog?type=all&num=${num++}&pageNum=${pageNum}`);
      });
      yield put({
        type:'save',
        payload:{
          data
        }
      })
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({ type: 'request' });
    },
  },
});


// 3. View
const App = connect(({ count }) => ({
  count
}))((props)=> {
  return (
    <div>
      <h2>{ props.count.counter }{props.count.test}</h2>
      <button key="add" onClick={() => { props.dispatch({type: 'count/add',payload:{num:3}})}}>+</button>
      <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
      <button key="request" onClick={() => { props.dispatch({type: 'count/request',payload:{num:props.count.requestIndex,pageNum:5}})}}>异步请求</button>
      <ul>
        {props.count.request.map((v,index)=>{
          return <li key={index}>{<a href="http://www.liuweibo.cn" target="_blank">{v.title}</a>}</li>
        })}
      </ul>
    </div>
  );
});

// 4. Router
app.router(() => <App />);

// 5. Start
app.start('#root');
