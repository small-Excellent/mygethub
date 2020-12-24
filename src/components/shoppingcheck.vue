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
                        <router-link to="/billlist" style="text-decoration:none"><a class="nav-link" href="#">我的账单 <span class="sr-only">(current)</span></a></router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" style="margin-right:50px">购物账单结算</a>
                    </li>
                </form>
            </div>
        </nav>
        <div class="shoppingcar-page">
            <table class="table table-bordered" style="margin-top:20px;text-align:center">
                <thead>
                    <tr>
                        <th scope="col">#商品序号</th>
                        <th scope="col">商品信息</th>
                        <th scope="col">商品尺寸</th>
                        <th scope="col">数量</th>
                        <th scope="col">配送方式</th>
                    </tr>
                </thead>
                <tbody class="shoppingcar-tbody">
                    <tr v-for="(item,index) in shops" :key="item.name">
                        <th v-if="item.shops.choose==1" style="width:100px;" scope="row"><div class="shopping-all-lists-word">{{index+1}}</div></th>
                        <td v-if="item.shops.choose==1">
                            <img :src="item.shops.pic"  style="width:100px;height:100px" >
                            <div style="width:250px;border:1px;display: inline-block;vertical-align: middle;">{{item.shops.shopname}}</div></td>
                        <td v-if="item.shops.choose==1">{{item.shops.size}}</td>
                        <td v-if="item.shops.choose==1">{{item.shops.num}}</td>
                        <td v-if="item.shops.choose==1">{{item.shops.address}}派送</td>
                    </tr>
                </tbody>
            </table>
            <p style="float:right;margin-right:30px;font-size:18px;font-family:'楷体;font-weight:900">欢迎本次消费</p>
            <br/><br/>
            <div class="payment">
                <p style="float:right;">实付款 ¥<font style="font-size:20px; color:orange">{{total}}</font></p><br/><br/>
                <p style="float:right;">送货地点：{{address}}</p><br/><br/>
                <p style="float:right;">收货人：{{usname.name}} 联系方式：{{usname.phone}}</p><br/><br/>
                <button style="float:right;" type="submit" id="pay-but" @click="checkbills">提交订单</button>
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
    name: 'shoppingcar',
    data(){
        return{
            user: {
                name: "",
                phone: "",
                age: null
            },
            users: [],
            num:0,
            usname:this.$store.state.name,
            id:this.$store.state.id.id,
            shop:{},
            shops:[],
            address:this.$store.state.address.shops,
            shopbills:[]
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
        add(){
            this.num ++;
        },
        reduce(){
            this.num --;
        },
        getpurchase(){
            this.$axios.get("http://localhost:3000/users/"+this.id).then((res) => {
                this.shop = res.data;
                this.shops = this.shop.purchase
            })
        },
        checkbills(){
            swal({
                title: '商品结算？',
                text:'确定结算订单！',
                type:'warning',
                showCancelButton:true,
                confirmButtonColor:'#DD6B55',
                confirmButtonText:'结算！',
                closeOnConfirm:false
            },
            () => {
                for(var i = 0; i < this.shops.length; i++) {    //将订单信息存入vuex中，方便后面的订单界面取出信息
                    if(this.shops[i].shops.choose){
                        this.shopbills.push(this.shops[i].shops)
                    }
                }
                if(this.shopbills.length > 0){
                    this.$store.commit("setbills",{
                        bills:this.shopbills
                    })
                }
                for(var i = 0; i < this.shops.length; i++) {
                    if(this.shops[i].shops.choose){
                        this.shops.splice(i,1);
                        i--;
                    }
                }
                this.$store.commit("updateshops",{
                    shops: this.shops,
                })
                this.$axios.patch("http://localhost:3000/users/"+this.id, {
                    purchase:this.shops
                }).then(()=>{})
                swal('结算','商品结算成功！','success');
            });
        }
    },
    computed:{
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
    width: 980px;
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
    margin-top:180px;
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