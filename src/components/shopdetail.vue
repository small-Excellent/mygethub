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
                        <router-link to="/shoppingcar" style="text-decoration:none"><a class="nav-link" href="#">我的购物车 <span class="sr-only">(current)</span></a></router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" style="margin-right:80px">商品详细信息</a>
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
        <div class="shopdetail-div">
            <div v-if="this.$store.state.type.type == '衣服'"  class="clothes-top"></div>
            <div v-if="this.$store.state.type.type == '潮电'"  class="play-top"></div>
            <figure class="figure" style="margin-left:100px">
                <pic-zoom :url="test.pic.pic" :scale="3" class="figure-img img-fluid rounded" style="width:350px;height:350px;display:inline-block"></pic-zoom>
                <div class="detail-content">
                    <p id="detail-word">{{test.pic.shopname}}</p>
                    <div style="height:40px;background-color:#ccc">
                        <font style="line-height:40px;margin-left:50px;margin-right:80px">价格</font><a style="font-size:20px;color:red"><b>¥ {{test.pic.price}}</b></a>
                    </div>
                    <div class="credit">
                        <font style="margin-left:70px;margin-right:80px;line-height:40px">累计评价 <b style="color:red">4823</b></font>|
                        <font style="margin-left:80px;line-height:40px">送天猫积分 <b style="color:green">85</b></font>
                    </div>
                    <div class="shop-size" v-if="this.$store.state.type.type == '衣服'">
                        <a style="margin-left:20px;margin-right:15px">尺码</a>
                        <button type="button" v-for="(si,index) in clothessizes" :key="si.size" style="width:65px;margin-left:5px;padding:7px" class="btn btn-outline-primary" @click="setsize(index)">{{si.size}}</button>
                    </div>
                    <div class="shop-size" v-if="this.$store.state.type.type == '潮电'">
                        <a style="margin-left:20px;margin-right:15px">尺码</a>
                        <button v-for="(si,index) in playsizes" :key="si.size" type="button" style="width:70px;height:35px;margin-left:5px" class="btn btn-outline-primary" @click="setsize(index)">{{si.size}}</button>
                    </div>
                    <div style="margin-top:10px;height: 40px;line-height:40px;text-align:center;background-color:rgb(240, 240, 240)">
                        <font style="font-size:16px;">商家发货地点：<a style="color:orange;font-size:20px;font-weight:600">{{test.pic.address2}}</a></font>
                    </div>
                    <div style="margin-top:20px">
                    <font style="margin-left:20px;margin-right:10px">商家联系热电：</font> <a style="font-size:18px;font-weight:600">{{test.pic.sellerphone}}</a>
                    </div>
                    <button class="addtocar-btn" @click="addtoshoppingcar()" >加入购物车</button>
                </div>
                <figcaption class="figure-caption" style="transform:translateY(-50px);margin-left:20px">A caption for the above image.</figcaption>
            </figure>
        </div>
        <div class="comment-public">
            <hr />
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" style="margin-left:80px;color: rgb(0, 102, 255)">大众评论区 <span class="sr-only">(current)</span></a>
                </li>
            </ul>
        <img v-if="this.$store.state.type.type == '衣服'" src="../assets/shoppinglist/public-comment.png" />
        <img v-if="this.$store.state.type.type == '潮电'" src="../assets/shoppinglist/public-comment2.png" />
        </div>
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
import PicZoom from 'vue-piczoom'      //实现放大镜
export default {
    components:{
        PicZoom
    },
    data(){
        return{
            test:this.$store.state,
            usname:this.$store.state.name,
            // shops:[],
            shop:{pic:"",shopname:"",price:"",address:"",sellerphone:"",num:1,choose:1,size:''},
            id:this.$store.state.id.id,
            clothessizes:[{size:"160/XS"},{size:"165/S"},{size:"170/M"},{size:"175/L"},{size:"180/XL"},{size:"185/XXL"}],
            playsizes:[{size:"size-20"},{size:"size-21"},{size:"size-22"},{size:"size-23"},{size:"size-24"}]
        }
    },
    methods: {
        // get(){
        //     console.log(this.test.pic.address2);
        // },
        setsize(index){
            if(this.$store.state.type.type == '衣服'){
                this.shop.size = this.clothessizes[index].size;
            }
            if(this.$store.state.type.type == '潮电'){
                this.shop.size = this.playsizes[index].size;
            }
        },
        addtoshoppingcar(){
            if(this.usname.login == 1){
                this.shop.pic = this.test.pic.pic;
                this.shop.shopname = this.test.pic.shopname;
                this.shop.price = this.test.pic.price;
                this.shop.address = this.test.pic.address2;
                this.shop.sellerphone = this.test.pic.sellerphone;
                if(this.shop.size !=''){
                    this.$store.commit("setshops",{
                        shops: this.shop,
                    })
                    // console.log(this.$store.state.shops[0].shops.price)
                    this.$axios.patch("http://localhost:3000/users/"+this.id, {
                        purchase:this.$store.state.shops
                    }).then(()=>{})
                    this.shop={pic:"",shopname:"",price:"",address:"",sellerphone:"",num:1,choose:1};
                    swal('购物车操作','加入购物车成功！','success');
                }
                else{
                    swal('购物车操作','添加失败，您未选择尺码(size)！','error');
                }
            }
            else{
                swal('购物操作','您尚未登录，无法购物','warning');
            }
        }
    },
    // mounted(){
    //     this.get();
    // }
}
</script>

<style scoped>
.shopdetail-div{
    width: 1200px;
    height: 550px;
    margin: auto;
    margin-top: 20px;
}
.clothes-top{
    width: 1198px;
    height: 150px;
    background: url(../assets/shoppinglist/shopdetail-toppic.png);
    margin: auto;
    margin-bottom: 20px;
}
.play-top{
    width: 1198px;
    height: 150px;
    background: url(../assets/shoppinglist/play-brand.png);
    margin: auto;
    margin-bottom: 20px;
}
.detail-content{
    width: 500px;
    height: 400px;
    display: inline-block;
    vertical-align: top;
    margin-left: 50px;
}
#detail-word{
    font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
    font-size: 18px;
    text-align: center;
    font-weight:600
}
.credit{
    margin-top: 10px;
    height: 40px;
    border-top: 1px dotted grey;
    border-bottom: 1px dotted grey;
}
.shop-size{
    height:50px;
    line-height: 50px
    /* margin-top: 10px */
}
.addtocar-btn{
    overflow: hidden;
    width: 178px;
    height: 40px;
    background-color: #ffeded;
    border: 1px solid #FF0036;
    color: #FF0036;
    font-family: 'Microsoft Yahei';
    font-size: 16px;
    margin-left:150px;
    margin-top: 20px;
    outline: #FF0036;
}
.addtocar-btn:focus{
    border: 1px solid #FF0036;
    outline: #FF0036;
	box-shadow: 0 0 13px #FF0036;
}
.shoppingcar-button{
    width: 1200px;
    height: 80px;
    border-top: 2px solid orangered; 
    margin: auto;
    margin-top:10px;
}
#shoppingcar-ul1,#shoppingcar-li1{
    font-size: 15px;
}
.comment-public{
    width: 1200px;
    margin: auto
}
</style>