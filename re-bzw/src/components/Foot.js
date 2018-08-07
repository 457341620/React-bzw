import React from 'react'
import $ from 'jquery'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
//引入图片
import  lyd_fi  from '../img/lyd-logjl2.png'
import  lyd_fi2  from '../img/lyd-logjl3.png'
import  lyd_fi3 from '../img/lyd-logjl4.png'
import  lyd_fi4  from '../img/lyd-logjl1.jpg'
import  lyd_wx1  from '../img/lyd-logwx.jpg'




class Foot extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className='lyd_fw'>
                    <div   className='lyd_ftw'>
                    <div className='lyd_f'>
                        {/*yi*/}
                        <div   className='lyd_ft'>
                            <div className="lyd_item">
                                <a href="javascript:;">
                                    <img src={lyd_fi} alt="优" className="lyd_ico"/>
                                        <span>品质保障</span>
                                </a>
                            </div>


                            {/*er*/}

                            <div className="lyd_item">
                                <a href="javascript:;">
                                    <img src={lyd_fi2} alt="优" className="lyd_ico"/>
                                    <span>七天无理由退货</span>
                                </a>
                            </div>

                            {/*san*/}

                            <div className="lyd_item">
                                <a href="javascript:;">
                                    <img src={lyd_fi3} alt="优" className="lyd_ico"/>
                                    <span>特色服务体验</span>
                                </a>
                            </div>

                            {/*si*/}

                            <div className="lyd_item">
                                <a href="javascript:;">
                                    <img src={lyd_fi4} alt="优" className="lyd_ico"/>
                                    <span>帮助中心</span>
                                </a>
                            </div>

                         </div>
                        {/*mid*/}
                        <div   className='lyd_fmw'>
                            <div   className='lyd_fm'>
                                {/*1*/}
                                <div   className='lyd_fm1'>
                                    <h4>购物指南</h4>
                                    <p><a  href="javascript:;">会员介绍</a></p>
                                    <p><a  href="javascript:;">联系客服</a></p>
                                    <p><a  href="javascript:;">账号安全</a></p>
                                    <p><a  href="javascript:;">购物流程</a></p>
                                </div>
                                {/*2*/}
                                <div   className='lyd_fm1'>
                                    <h4>联系我们</h4>
                                    <p><a  href="javascript:;">广告服务</a></p>
                                    <p><a  href="javascript:;">关于我们</a></p>
                                    <p><a  href="javascript:;">营销服务</a></p>

                                </div>
                                {/*3*/}
                                <div   className='lyd_fm1'>
                                    <h4>配送方式</h4>
                                    <p><a  href="javascript:;">上门自提</a></p>
                                    <p><a  href="javascript:;">邮寄方式</a></p>
                                    <p><a  href="javascript:;">物流费用标准</a></p>
                                    <p><a  href="javascript:;">配送服务查询</a></p>
                                </div>
                                {/*4*/}
                                <div   className='lyd_fm1'>
                                    <h4>售后服务</h4>
                                    <p><a  href="javascript:;">取消订单</a></p>
                                    <p><a  href="javascript:;">退单说明</a></p>
                                    <p><a  href="javascript:;">价格保护</a></p>
                                    <p><a  href="javascript:;">售后政策</a></p>
                                </div>
                                {/*5*/}
                                <div   className='lyd_fm1'>
                                    <h4>支付方式</h4>
                                    <p><a  href="javascript:;">线下转账</a></p>
                                    <p><a  href="javascript:;">支付宝支付</a></p>
                                    <p><a  href="javascript:;">微信支付</a></p>

                                </div>

                                <div   className='lyd_fm1'>
                                    <h4>0371-68626769</h4>
                                    <p><a  href="javascript:;">周一至周日 8:00-18:00 </a></p>
                                    <p><a  href="javascript:;">支付宝支付</a></p>
                                    <p  className='lyd_fmp'>
                                        <a  href="javascript:;">在线客服</a>

                                        <a  href="javascript:;">
                                            <img src={lyd_wx1} alt=""/>
                                        </a>
                                        <a  href="javascript:;"> </a>


                                    </p>
                                </div>
                            </div>
                        </div>

                        {/*bot*/}
                        <div  className='lyd_fbw'>
                            包装网 版权所有 Copyright © 2016-2018   备案号：豫ICP备17043084号
                        </div>


                     </div>
                    </div>


                </div>
            </div>

        )
    }




}



export  default  Foot