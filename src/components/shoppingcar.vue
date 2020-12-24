<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent"> <!-- 导航栏 -->
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
                        <router-link to="/shoppingalllists" style="text-decoration:none"><a class="nav-link" href="#">继续购物 <span class="sr-only">(current)</span></a></router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" style="margin-right:80px">我的购物车</a>
                    </li>
                </form>
            </div>
        </nav>
        <div class="header">
            <img src="../assets/mainpage-1.gif" width="290px" height="130px" style="margin-left:55px;" />
            <form id="mallsearch-form">
                <input type="text" id="mallsearch-text" placeholder=" 请输入关键字" />
                <button type="submit" id="mallsearch-button">搜索</button>
            </form>
        </div>

        <div class="shoppingcar-page">
            <table class="table table-bordered" style="margin-top:20px;text-align:center">
                <thead>
                    <tr>
                        <th scope="col">选购</th>
                        <th scope="col">商品图片</th>
                        <th scope="col">商品单价</th>
                        <th scope="col">尺寸</th>
                        <th scope="col">数量</th>
                        <th scope="col">运送方式</th>
                        <th scope="col">删除</th>
                    </tr>
                </thead>
                <tbody class="shoppingcar-tbody">
                    <tr v-for="(item,index) in shops" :key="item.name">
                        <td><input type="checkbox" name="check" @click="setchoose(index)" checked ='checked' /></td>
                        <th style="width:450px;" scope="row">
                            <pic-zoom :url="item.shops.pic" :scale="3" style="width:210px;height:210px;"></pic-zoom>
                            <div class="shopping-all-lists-word">{{item.shops.shopname}}</div></th>
                        <td>{{item.shops.price}}</td>
                        <td>{{item.shops.size}}</td>
                        <td><button @click="add(index)" id="numcontrol">+</button> {{item.shops.num}} <button @click="reduce(index)" id="numcontrol">-</button></td>
                        <td>{{item.shops.address}}派送</td>
                        <td><button class="ui basic red button" @click="deletshop(index)">删除该商品</button></td>
                    </tr>
                </tbody>
            </table>
            <div class="checkbill">
                <font style="display:inline-block">
                    <i style="margin-left:30px"></i><input type="checkbox"  id="chiefbox" @click="allchooseornot" /> 全选 &nbsp;<b @click="cleancar" style="cursor: pointer;">清空购物车</b>
                    <!-- <a style="border:1px solid black;display:inline-block;width:35px;height:35px;text-align:center;vertical-align: middle">@</a> -->
                    <span class="input-group-text" id="addon-wrapping" style="transform:translateY(-1px);height:34px;display:inline-block;margin-left:40px;margin-right:-5px">@</span>
                    <input id="text1" type="text" style="display:inline-block;width:230px;height:34px" class="form-control" placeholder="请输入送货地址" aria-label="Username" aria-describedby="addon-wrapping" />
                    <button class="ui basic red button" style="height:35px" @click="saveaddress">保存</button>
                    <font style="margin-left:190px">已选商品 &nbsp;<a style="color:orange;font-size:18px">{{totalnum}}</a> 件 &nbsp;&nbsp;
                    合计： ¥ <a style="color:orange;font-size:18px">{{total}}</a>
                    </font>
                </font>
            </div>
            <button class="check-btn" @click="countchooseandnum()">去结算</button>
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
    </div>

</template>

<script>
import PicZoom from 'vue-piczoom'
export default {
    name: 'shoppingcar',
    components:{
        PicZoom
    },
    data(){
        return{
            user: {
                name: "",
                phone: "",
                age: null
            },
            users: [],
            usname:this.$store.state.name,
            id:this.$store.state.id.id,
            shop:{},
            shops:[]
        }
    },
    mounted() {
        this.getData();
        this.getpurchase();
    },
    methods: {
        getData() {
            this.$axios.get("http://localhost:3000/users").then((res) => {
                this.users = res.data;
            })
        },
        getpurchase(){
            this.$axios.get("http://localhost:3000/users/"+this.id).then((res) => {
                this.shop = res.data;
                this.shops = this.shop.purchase
            })
        },
        add(index){
            this.shops[index].shops.num++;
            this.$store.commit("setnum",{
                shops: this.shops[index].shops,
            })
            this.$axios.patch("http://localhost:3000/users/"+this.id, {
                purchase:this.shops
            }).then(()=>{})
        },
        reduce(index){
            this.shops[index].shops.num--;
            this.$store.commit("setnum",{
                shops: this.shops[index].shops,
            })
            this.$axios.patch("http://localhost:3000/users/"+this.id, {
                purchase:this.shops
            }).then(()=>{})
        },
        setchoose(index){
            var checkboxs = document.getElementsByName("check");
            if(checkboxs[index].checked){
                this.shops[index].shops.choose = 1;
            }
            else{
                this.shops[index].shops.choose = 0;
            }
            this.$axios.patch("http://localhost:3000/users/"+this.id, {
                purchase:this.shops
            }).then(()=>{})
        },
        allchooseornot(){
            var chiefbox = document.getElementById("chiefbox");
            var checkboxs = document.getElementsByName("check");
            if(chiefbox.checked){
                for(var i = 0; i < this.shops.length; i++) {
                    checkboxs[i].checked = true;
                    this.shops[i].shops.choose = 1;
                }
            }
            else{
                for(var i = 0; i < this.shops.length; i++) {
                    checkboxs[i].checked = false;
                    this.shops[i].shops.choose = 0;
                }
            }
            this.$axios.patch("http://localhost:3000/users/"+this.id, {
                purchase:this.shops
            }).then(()=>{})
        },
        countchooseandnum(){
            if(this.$store.state.address.shops == null){
                swal('操作失败','您未添加送货地址，无法进入结算界面！','error');
            }
            else{
                this.$axios.patch("http://localhost:3000/users/"+this.id, {
                    purchase:this.shops
                }).then(()=>{})
                var _this = this;
                setTimeout(function(){
                    _this.$router.push({path:'/shoppingcheck'})
                },500)
            }
        },
        deletshop(index){
            swal({
                title: '删除该商品？',
                text:'该商品信息将从购物车中移除！',
                type:'warning',
                showCancelButton:true,
                confirmButtonColor:'#DD6B55',
                confirmButtonText:'删除！',
                closeOnConfirm:false
            },
            () => {
                this.$store.commit("deleteshop",{
                    shops: this.shops[index].shops,
                })
                this.shops.splice(index,1);
                this.$axios.patch("http://localhost:3000/users/"+this.id, {
                    purchase:this.shops
                }).then(()=>{})
                swal('删除','该商品已从购物车中移除！','success');
            });
        },
        saveaddress(){
            var i = document.getElementById("text1");
            this.$store.commit("setaddress",{
                shops: i.value,
            })
            swal('地址保存','地址保存成功！','success');
        },
        cleancar(){
            swal({
                title: '清空购物车',
                text:'确定清空购物车吗！',
                type:'warning',
                showCancelButton:true,
                confirmButtonColor:'#DD6B55',
                confirmButtonText:'确定',
                closeOnConfirm:false
            },
            () => {
                for(var i = 0; i < this.shops.length; i++) {
                    this.shops.splice(i,1);
                    i--;
                }
                this.$store.commit("updateshops",{
                    shops: this.shops,
                })
                this.$axios.patch("http://localhost:3000/users/"+this.id, {
                    purchase:this.shops
                }).then(()=>{})
                swal('清空购物车','购物车清空完毕！','success');
            });
        }
    },
    computed:{
        totalnum: function(){
            var totalnum = 0;
            for(var i = 0; i < this.shops.length; i++) {
                if(this.shops[i].shops.choose){
                    totalnum += this.shops[i].shops.num;
                }
            }
            return totalnum;
        },
        total: function(){
            var total = 0.0;
            for(var i = 0; i < this.shops.length; i++) {
                if(this.shops[i].shops.choose){
                    total += this.shops[i].shops.price * this.shops[i].shops.num;
                }
            }
            return parseFloat(total).toFixed(1);
        }
    }
}
</script>

<style scoped>
.shoppingcar-page{
    width: 1070px;
    margin: 0 auto;
    /* border: 1px solid red; */
}
.payment{
    width: 300px;
    height: 170px;
    float: right;
}
#pay-but{
    width: 100px;
    height: 30px;
    background-color: rgb(255, 102, 0);
    border: none;
    color: white;
    font-size: 15px;
}
.shoppingcar-button{
    width: 980px;
    height: 100px;
    border-top: 2px solid orangered; 
    margin-top:20px;
}
#shoppingcar-ul1,#shoppingcar-li1{
    font-size: 15px;
}
#numcontrol{
    border: none;
}
.checkbill{
    width: 980px;
    height: 42px;
    background-color: #ccc;
    line-height: 42px;
}
.check-btn{
    width: 80px;
    height: 41px;
    background-color: orangered;
    border: none;
    /* margin-left: 44px; */
    float: right;
    transform:translateY(-42px)
}
.shopping-all-lists-word{
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    white-space: normal;
    word-break: break-all;
    width: 150px;
    font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
    font-size: 16px;
    position: absolute;
    margin-left: 20px;
    transform:translateY(-165px)
}
.shoppingcar-tbody td{
    display:table-cell; 
    vertical-align:middle
}
</style>