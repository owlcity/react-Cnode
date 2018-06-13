import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
// redux
// 步骤一：引入redux相关依赖
// 步骤二：创建所需reducer
//     applyMiddleware:中间件管理
//     thunk 中间件
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/index'


const store = createStore(reducer,applyMiddleware(thunk));


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
