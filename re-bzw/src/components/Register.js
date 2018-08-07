import React from 'react'
import $ from 'jquery'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'

//引入组件
import  Login from './Login'
import  Foot from './Foot'

//引入图片
import  lyd_logbg2  from '../img/lyd-logbg2.jpg'



class Register extends React.Component {
    constructor(props){
        super(props)
    }

    //登录
    log(){
        console.log(1);
        this.props.history.push('/log')
    }
    //首页
    home(){
        console.log(1);
        this.props.history.push('/home')

    }

    render(){
        return(
            <div>
                {/*头*/}

                <div  className='lyd_hw'>
                    <div className='lyd_h'>
                      <span onClick={this.home.bind(this)}>
                      <img src={lyd_logbg2} alt="dsa "/>
                      </span>


                      <span>
                          已有账号?立即
                          <i onClick={this.log.bind(this)}>登录</i>
                      </span>

                    </div>

                </div>


                {/*main*/}
                <div className='lyd_mw'>
                    <div className='lyd_m'>
                        {/*z*/}
                        <div className='lyd_ml'>

                        </div>
                        {/*y*/}
                        <div className='lyd_my'>
                            {/*t*/}
                            <div className='lyd_myt' >
                                <strong>注册新用户</strong>
                            </div>

                            {/*x*/}
                            <div className='lyd_myb' >
                                <ul>
                                    <li className="lyd_li">
                                        <p className="lyd_user">用户名：</p>
                                        <p className="lyd_f4">
                                            <input type="text"  className="inpx1"/>
                                        </p>
                                        <p className="lyd_bh" >
                                            <span className="lyd_bh1">* 可以注册</span>
                                        </p>
                                    </li>
                                    <li className="lyd_li">
                                        <p className="lyd_user">用户名：</p>
                                        <p className="lyd_f4">
                                            <input type="text"  className="inpx1"/>
                                        </p>
                                        <p className="lyd_bh" >
                                            <span className="lyd_bh1">* 可以注册</span>
                                        </p>
                                    </li>
                                    <li className="lyd_li">
                                        <p className="lyd_user">用户名：</p>
                                        <p className="lyd_f4">
                                            <input type="text"  className="inpx1"/>
                                        </p>
                                        <p className="lyd_bh" >
                                            <span className="lyd_bh1">* 可以注册</span>
                                        </p>
                                    </li>
                                    <li className="lyd_li">
                                        <p className="lyd_user">用户名：</p>
                                        <p className="lyd_f4">
                                            <input type="text"  className="inpx1"/>
                                        </p>
                                        <p className="lyd_bh" >
                                            <span className="lyd_bh1">* 可以注册</span>
                                        </p>
                                    </li>
                                    <li className="lyd_li">
                                        <p className="lyd_user">用户名：</p>
                                        <p className="lyd_f4">
                                            <input type="text"  className="inpx1"/>
                                        </p>
                                        <p className="lyd_bh" >
                                            <span className="lyd_bh1">* 可以注册</span>
                                        </p>
                                    </li>
                                    <li className="lyd_li">
                                        <p className="lyd_user">用户名：</p>
                                        <p className="lyd_f4">
                                            <input type="text"  className="inpx1"/>
                                        </p>
                                        <p className="lyd_bh" >
                                            <span className="lyd_bh1">* 可以注册</span>
                                        </p>
                                    </li>
                                    <li className="lyd_li">
                                        <p className="lyd_user">用户名：</p>
                                        <p className="lyd_f4">
                                            <input type="text"  className="inpx1"/>
                                        </p>
                                        <p className="lyd_bh" >
                                            <span className="lyd_bh1">* 可以注册</span>
                                        </p>
                                    </li>
                                    <li className="lyd_li">
                                        <p className="lyd_user">用户名：</p>
                                        <p className="lyd_f4">
                                            <input type="text"  className="inpx1"/>
                                        </p>
                                        <p className="lyd_bh" >
                                            <span className="lyd_bh1">* 可以注册</span>
                                        </p>
                                    </li>

                                    <li className="lyd_li">
                                        <p className="lyd_user"></p>
                                        <p className="lyd_f4 lyd_inp">
                                            <input type="checkbox"  className="inpx1 lyd_dx"/>
                                        </p>
                                        <p className="lyd_bh lyd_xy" >
                                            已阅读并接受《和茶用户协议》
                                        </p>
                                    </li>

                                    <li className="lyd_li lyd_dl">
                                        <button  className="lyd_zc"></button>
                                        <span className="lyd_dl1" onClick={this.log.bind(this)}>直接登入</span>
                                    </li>

                                    <li className="lyd_tx4">您提供的所有信息，绝不会被公开或用作其他用途，请放心填写。</li>
                                </ul>


                            </div>



                        </div>





                    </div>

                </div>



                {/*foot*/}

                    <Foot/>




            </div>
        )
    }




}



export  default  Register