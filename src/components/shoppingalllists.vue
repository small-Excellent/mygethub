<template>
    <div>
        <div class="navigation">
            <font class="p">喵，欢迎来天猫</font>
            <font class="p p1"><i class="fa fa-sign-in fa-1x"></i><router-link to="/login"> 请登录</router-link></font>
            <font class="p p1"><i class="fa fa-registered fa-1x" ></i><router-link to="/register"> 免费注册</router-link></font>
            <font class="p p2"><i class="fa fa-shopping-basket fa-1x" ></i><router-link to="/"  style="text-decoration:none;color:orange"> 商城首页</router-link></font>
            <font class="p p1"><i class="fa fa-shopping-cart fa-1x"  ></i><router-link to="/shoppingcar"> 购物车</router-link></font>
            <font class="p p1"><i class="fa fa-user fa-1x"  ></i>             
            <a style="text-decoration:none" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <font v-if="usname.login == null">个人中心</font>
                <font v-if="usname.login == 1">你好，{{usname.name}}</font>
            </a></font>
            <font class="p p1"><i class="fa fa-heart fa-1x"  ></i> 收藏夹</font>
        </div>
        <div class="collapse" id="collapseExample" style="float:right;width:180px;margin-right:80px">
            <div class="card card-body">
                <font v-if="usname.login == null">抱歉，<br/>您还未登陆</font>
                <font v-if="usname.login == 1">用户名：{{usname.name}}<br>phone：{{usname.phone}}</font>
            </div>
        </div>
        <div class="header">
            <img src="../assets/mainpage-1.gif" width="290px" height="130px" style="margin-left:55px;" />
            <form id="mallsearch-form">
                <input type="text" id="mallsearch-text" placeholder=" 请输入关键字" />
                <button type="submit" id="mallsearch-button">搜索</button>
            </form>
        </div>
        <div class="shopping-all-lists">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">商品信息</th>
                        <th scope="col">商品单价</th>
                        <th scope="col">商家地址</th>
                        <th scope="col">商家手机号</th>
                        <th scope="col">购买</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in showLists" :key="item.name" >
                        <th style="width:450px;" scope="row">
                            <pic-zoom :url="item.pic" :scale="3" style="width:210px;height:210px;"></pic-zoom>
                            <div class="shopping-all-lists-word">{{item.shopname}}</div></th>
                        <td>{{item.price}}</td>
                        <td>{{item.address}}</td>
                        <td>{{item.sellerphone}}</td>
                        <td><router-link to="/shopdetail"><button id="all-shopping-btn" @click="storeshop(index)" >详细信息</button></router-link>
                            <!-- <router-link to="/shoppingcar" style="color:white;text-decoration:none" ><button id="all-shopping-btn" @click="addtoshoppingcar(index)">加入购物车</button></router-link> -->
                            </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <nav aria-label="Page navigation example" style="margin-left:600px">
            <ul class="pagination">
                <li class="page-item" v-if="cur>1" v-on:click="cur--">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-if="cur==1" style="cursor:not-allowed;">
                    <a class="page-link" href="#" aria-label="Previous" style="cursor:not-allowed;">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-for="index in indexs" :key="index" v-bind:class="{ 'active': cur == index}" v-on:click="btnClick(index)">
                    <a class="page-link" href="#">{{index}}</a></li>
                <li class="page-item" v-if="cur!=all" v-on:click="cur++">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
                <li class="page-item" v-if="cur==all" style="cursor:not-allowed;">
                    <a style="cursor:not-allowed;" class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="shoppingcar-button">
            <ul id="shoppingcar-ul1" style="margin-left:-40px;margin-top:5px">
                <li id="shoppingcar-li1">商城首页</li>
                <li id="shoppingcar-li1">支付宝</li>
                <li id="shoppingcar-li1">物流</li>
            </ul>
            <p style="margin-left:20px;font-size:12px">合作伙伴 联系我们 网站地图 
                <i class="fa fa-copyright" aria-hidden="true"></i> 2020 cslg-web 版权所有</p>
        </div>
    </div>
</template>

<script>
import PicZoom from 'vue-piczoom'
export default {
    components:{
        PicZoom
    },
    data(){
        return {
            imgurl: require("../assets/promote-pic6.png"),
            usname:this.$store.state.name,
            usphone:this.$store.state.phone,
            shopping:{
                pic:"",
                shopname:"",
                price:"",
                address:"",
                sellerphone:""
            },
            shoppinglist:[],
            usshopping:this.$store.state,
            cur:1,
            pageSize:5,
            all:5
        };
    },
    mounted(){
        this.getData();
    },
    methods: {
        getData(){
            if(this.$store.state.type.type == '衣服'){
                this.$axios.get("http://localhost:3000/shoppings").then((res) => {
                    this.shoppinglist = res.data;
                    this.all = 4;
                })
            }
            if(this.$store.state.type.type == '潮电'){
                this.$axios.get("http://localhost:3000/shoppings2").then((res) => {
                    this.shoppinglist = res.data;
                })
            }
        },
        storeshop(index){
            this.$store.commit("showShopping",{
                pic: this.shoppinglist[(this.cur-1)*this.pageSize+index].pic,
                shopname: this.shoppinglist[(this.cur-1)*this.pageSize+index].shopname,
                price: this.shoppinglist[(this.cur-1)*this.pageSize+index].price,
                address2: this.shoppinglist[(this.cur-1)*this.pageSize+index].address,
                sellerphone: this.shoppinglist[(this.cur-1)*this.pageSize+index].sellerphone
            })
        },
        btnClick: function(data){
            if(data != this.cur){
                this.cur = data;
            }
        },
    },
    computed: {
        indexs: function(){
            var left = 1;
            var right = this.all;
            var ar = [];
            while (left <= right){
                ar.push(left)
                left ++
            }
            return ar
        },
        showLists(){
            return this.shoppinglist.slice((this.cur-1)*this.pageSize,this.cur * this.pageSize);
        }
    }
}
</script>

<style scoped>
.shopping-all-lists{
    margin: auto;
    margin-top: 20px;
    width: 1200px;
}
.table{
    text-align: center;
}
.shopping-all-lists th{
    display:table-cell; 
    vertical-align:middle
}
.shopping-all-lists td{
    display:table-cell; 
    vertical-align:middle
}
.shopping-all-lists-word{
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    white-space: normal;
    word-break: break-all;
    width: 150px;
    height: 300xp;
    font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
    font-size: 16px;
    position: absolute;
    transform:translateY(-150px)
}
#all-shopping-btn{
    width: 100px;
    height: 35px;
    background-color: orangered;
    color: white;
    border: none;
    outline: orangered;
}
.shoppingcar-button{
    margin: auto;
    width: 1200px;
    height: 100px;
    border-top: 2px solid orangered; 
    margin-top:20px;
}
#all-shopping-btn:hover{
    border: 1px solid orangered;
    outline: orangered;
	box-shadow: 0 0 13px orangered;
}
#shoppingcar-ul1,#shoppingcar-li1{
    font-size: 15px;
}

.mouse-cover-canvas{
    width:300px!important;
    height:300px!important;
}
ul li{
    margin-left: 0px;
}
</style>