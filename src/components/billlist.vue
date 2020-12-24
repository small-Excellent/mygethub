<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/" style="text-decoration:none"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a v-if="usname.login == 1" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{usname.name}},欢迎您
                        </a>
                        <a v-if="usname.login == null" class="nav-link">
                        <router-link to="/login"> 请登录</router-link>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">name:{{usname.name}}</a>
                            <a class="dropdown-item" href="#">phone:{{usname.phone}}</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">普通会员</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link to="/shoppingcar" style="text-decoration:none"><a class="nav-link" href="#">返回购物车 <span class="sr-only">(current)</span></a></router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" style="margin-right:50px">我的历史账单</a>
                    </li>
                </form>
            </div>
        </nav>
        <div class="shoppingcar-page">
            <table class="table table-bordered" style="margin-top:20px;text-align:center" v-if="usname.login == 1">
                <thead>
                    <tr>
                        <th scope="col">#商品序号</th>
                        <th scope="col">商品信息</th>
                        <th scope="col">商品尺寸</th>
                        <th scope="col">数量</th>
                        <th scope="col">配送地址</th>
                    </tr>
                </thead>
                <tbody class="shoppingcar-tbody" v-for="bills in abills" :key="bills.price">  <!-- 利用两层v-for 第一层输出生成了几次订单，第二层输出每次订单的订单量和信息 -->
                    <tr v-for="(item,index) in bills" :key="item.name">
                        <th style="width:100px;" scope="row"><div class="shopping-all-lists-word">{{index+1}}</div></th>
                        <td >
                            <img :src="item.pic"  style="width:100px;height:100px" >
                            <div style="width:200px;border:1px;display: inline-block;vertical-align: middle;">{{item.shopname}}</div></td>
                        <td>{{item.size}}</td>
                        <td >{{item.num}}</td>
                        <td >{{bills.address}}</td>
                    </tr>
                </tbody>
            </table>
            <p v-if="usname.login == 1" style="float:right;margin-right:30px;font-size:18px;font-family:'楷体;font-weight:900">以上是您的订单记录</p>
            <p v-if="usname.login == null" style="float:right;margin-right:30px;font-size:18px;font-family:'楷体;font-weight:900">订单空空如也</p>
            <br/><br/>
            <div class="payment">
                <p style="float:right;">收货人：{{usname.name}} 联系方式：{{usname.phone}}</p><br/><br/>
            </div>
            <div class="shoppingcar-button">
                <ul id="shoppingcar-ul1" style="margin-left:-40px">
                    <li id="shoppingcar-li1">商城首页</li>
                    <li id="shoppingcar-li1">支付宝</li>
                    <li id="shoppingcar-li1">物流</li>
                </ul>
                <p style="margin-left:20px;font-size:12px">合作伙伴 联系我们 网站地图 
                    <i class="fa fa-copyright" aria-hidden="true"></i> 2020 cslg-web 版权所有</p>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'billlist',
    data(){
        return{
            bills:this.$store.state.bills[0],
            abills:this.$store.state.bills,
            usname:this.$store.state.name,
        }
    },
    methods: {

    },
}

</script>

<style scoped>
.shoppingcar-page{
    width: 980px;
    margin: 0 auto;
    /* border: 1px solid red; */
}
.payment{
    width: 300px;
    height: 170px;
    float: right;
}

.shoppingcar-button{
    width: 980px;
    height: 100px;
    border-top: 2px solid orangered; 
    margin-top:50px;
}
#shoppingcar-ul1,#shoppingcar-li1{
    font-size: 15px;
}
#numcontrol{
    border: none;
}
.shoppingcar-tbody td{
    display:table-cell; 
    vertical-align:middle
}
.shopping-all-lists-word{
    display: inline-block;
    vertical-align: middle;
    width: 150px;
    font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
    font-size: 16px;
    line-height: 100px;
    /* position: absolute;
    margin-left: 20px; */
    /* transform:translateY(-150px) */
}
</style>