<template>
    <div>
        <div style="height:90px">
            <img src="../assets/login1.png" width="200px" height="30px" id="pic1" />
        </div>
        <div class="out">
            <div class="content">
                <div class="login">
                    <h4 style="position:relative;top:30px;">用户注册界面</h4>
                    <br/><br/>
                    <div class="login-user-div">
                    <i class="fa fa-envelope-open-o fa-2x" id="label1" ></i>
                    <input type="text" id="username" placeholder=" 请输入用户名/手机号" v-model="user.name" />
                    </div>
                    <br/><br/>
                    <div class="login-user-div">
                    <i class="fa fa-lock fa-3x" id="label2" ></i>
                    <input type="text" id="password" placeholder=" 设置密码" v-model="user.password" />
                    </div>
                    <br/><br/>
                    <div class="login-user-div">
                    <i class="fa fa-lock fa-3x" id="label2" ></i>
                    <input type="text" id="password2" placeholder=" 确认密码" v-model="confirmpassword" />
                    </div>
                    <br/><br/>
                    <div class="login-user-div">
                    <i class="fa fa-mobile-phone fa-3x" id="label2" ></i>
                    <input type="text" id="phone" placeholder=" 输入手机号" v-model="user.phone" />
                    </div>
                    <br/>
                    <input type="checkbox" style="margin-left:-40px;margin-top:10px" />点击表示您同意商城《服务协议》
                    <br/><br/>
                    <button @click="handleAddUserClick" class="ui basic red button" id="button1" >注册</button>
                </div>
            </div>
        </div>
        <div class="tmall-button">
            <ul style="margin-left:20px;">
                <li>关于天猫</li><li>帮助中心</li><li>开放平台</li>
                <li>诚聘英才</li><li>联系我们</li><li>网站合作</li>
                <li>法律声明</li><li>隐私权政策</li><li>知识产权</li>
                <li>廉正举报</li><li>规则意见征集</li>
            </ul>
            <ul id="ul2" style="margin-left:20px;transform:translateY(-3px)">
                <li>阿里巴巴集团</li><li>|</li><li>淘宝网</li><li>|</li><li>天猫</li><li>|</li>
                <li>聚划算</li><li>|</li><li>全球速卖通</li><li>|</li><li>阿里巴巴国际交易市场</li><li>|</li>
                <li>1688</li><li>|</li><li>阿里妈妈</li><li>|</li><li>飞猪</li><li>|</li>
                <li>阿里云计算</li><li>|</li><li>AliOS</li><li>|</li><li>阿里通信</li><li>|</li>
                <li>万网</li><li>|</li><li>高德</li><li>|</li><li>UC</li><li>|</li>
                <li>友盟</li><li>|</li><li>虾米</li><li>|</li><li>钉钉</li><li>|</li><li>支付</li>
            </ul>
            <ul style="margin-left:20px;transform:translateY(-8px)">
                <li style="color: #a4a4a4;">浙江省网络食品销售第三方平台提供者备案 ：浙网食A33010002</li>
                <li style="margin-left:60px;color: #a4a4a4;">12318举报</li>
            </ul>
            <ul style="margin-left:20px;transform:translateY(-18px)">
                <li style="color:#686868"><i class="fa fa-copyright" aria-hidden="true"></i> 2003-2020 TMALL.COM 版权所有</li>
            </ul>
            <img src="../assets/shoppinglist/button-1.gif" width="30px" height="30px" id="button-pic1">
            <img src="../assets/shoppinglist/button-2.jpg" width="80px" height="30px" id="button-pic2" style="margin-left:20px;">
        </div>
    </div>
</template>>

<script>
export default {
    props:['register'],
    data(){
        return {
            user:{name:"",password:"",phone:"",age:null,purchase:[],id:'00'},
            confirmpassword:"",
            usid:this.$store.state.usid
        }
    },
    methods: {
        addData(val){
        this.$axios.post("http://localhost:3000/users", val).then(()=>{})
        },
        handleAddUserClick () {
            if(this.user.password == this.confirmpassword && this.user.name!=""){
                console.log("add success");
                this.user.id = this.user.id + this.usid;
                this.addData(this.user);
                this.user = {name:"",password:"",phone:"",age:null,purchase:[],id:'00'};
                this.confirmpassword = "";
                this.$store.commit("setusid",{
                    usid: ++this.usid,
                })
                swal('注册','注册成功！','success');
                var _this = this
                setTimeout(function(){
                    _this.$router.push({path:'/'})
                },2000)
            }else{
                swal('注册','注册失败！','error');
                this.user = {name:"",password:"",phone:"",age:null,purchase:[],id:'00'};
                this.confirmpassword = "";
            }
        },
        // getid(){
        //     console.log(this.usid);
        // }
    },
}
</script>

<style scoped>
#pic1{
    float: left;
    margin-top: 30px;
    margin-left: 80px;
}
.out{
    width: 100%;
    background-color: lightblue;
}
.content{
    width: 1190px;
    height: 600px;
    background-image: url(../assets/register.png);
    margin: 0 auto;
}
.login{
    width: 350px;
    min-height: 430px;
    border: 1px solid red;
    color: #6c6c6c;
    background: #fff;
    margin-left: 800px;
    position: relative;
    top: 70px;
    text-align: center;
}
#username{
    width: 240px;
    height: 42px;
    position: relative;
    top: -3px;
    margin-left: -5px;
    border: none;
    font-size: 15px;
    border-left: 1px solid #ccc;
}
#password,#password2,#phone{
    width: 240px;
    height: 42px;
    position: relative;
    top: -10px;
    margin-left: -4px;
    border: none;
    border-left: 1px solid #ccc;
    font-size: 15px;
}
/* #phone{
    width: 250px;
    height: 42px;
    position: relative;
    top: -10px;
    left: 0px;
    border: 1px solid gray;
    font-size: 15px;
} */
.login input:focus{
    border-style:solid;
    border-color: #03a9f4;
    outline: #03a9f4;
	box-shadow: 0 0 10px #03a9f4;
}
#button1{
    width: 100px;
    height: 40px;
}
#label1{
    width: 42px;
    height: 42px;
    padding-top: 5px;
}
#label2{
    width: 42px;
    height: 42px;
    margin-left: -1px;
}
.tmall-button{
    height: 170px;
    border-top: 1px solid red; 
    background-color: black;
}
.tmall-button ul,.tmall-button li{
    font-size: 12px;
    color:white;
}
.tmall-button #ul2 li{
    margin-right: -15px;
}
#button-pic1,#button-pic2{
    position: relative;
    top: -20px;
    margin-left: 80px;
    float: left;
}
li{
    display: inline-block;
    font-size: 18px;
    margin-left: 20px;
    position: relative;
    top: 1px;
}
.login-user-div{
    width: 283px;
    height: 44px;
    border: 1px solid #ccc;
    margin: auto;
    margin-bottom: -20px;
}
</style>