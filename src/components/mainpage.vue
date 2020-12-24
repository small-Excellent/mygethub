<template>
    <div>
        <div class="navigation">
            <font class="p">喵，欢迎来天猫</font>
            <font class="p p1"><i class="fa fa-sign-in fa-1x"></i><router-link to="/login"> 请登录</router-link></font>
            <font class="p p1"><i class="fa fa-registered fa-1x" ></i><router-link to="/register"> 免费注册</router-link></font>
            <font class="p p2"><i class="fa fa-shopping-basket fa-1x" ></i> 商城首页</font>
            <font class="p p1"><i class="fa fa-shopping-cart fa-1x"  ></i><router-link to="/shoppingcar"> 购物车</router-link></font>
            <font class="p p1"><i class="fa fa-user fa-1x"  ></i>             
            <a style="text-decoration:none" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <font v-if="usname.login == null">个人中心</font>
                <font v-if="usname.login == 1">你好，{{usname.name}}</font>
            </a></font>
            <font class="p p1"><i class="fa fa-heart fa-1x"  ></i> 收藏夹</font>
        </div>
        <div class="collapse" id="collapseExample" style="float:right;width:180px;margin-right:50px">
            <div class="card card-body">
                <font v-if="usname.login == null">抱歉，<br/>您还未登陆<br><router-link to="/login" style="font-decoration:none">请登录</router-link></font>
                <font v-if="usname.login == 1">用户名：<a style="font-size:16px;font-family:'微软雅黑'">{{usname.name}}</a><br>phone：<a style="font-size:16px;font-family:'微软雅黑'">{{usname.phone}}</a>
                <br/> <hr/>普通会员<b style="cursor: pointer;margin-left:20px;font-size:16px;color:orange" @click="logoff">注销</b></font>
            </div>
        </div>
        <!-- <div><router-view></router-view></div> -->
        <div class="header">            <!-- 搜索区 -->
            <img src="../assets/mainpage-1.gif" width="290px" height="130px" style="margin-left:55px;" />
            <form id="mallsearch-form">
                <input type="text" id="mallsearch-text" placeholder=" 请输入关键字" />
                <button type="submit" id="mallsearch-button">搜索</button>
            </form>
        </div>


        <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
        <div class="content" id="list-item-1">
            <div class="inner-con">
                <div id="categories">商品分类</div>
                <a id="a1"><img src="../assets/inner-1.png" width="100px" height="30px" /> </a>
                <a id="a1" ><img src="../assets/inner-2.png" width="100px" height="30px" /> </a>
                <ul id="ul1">
                    <li id="li1">天猫会员</li>
                    <li>电器城</li>
                    <li>喵鲜生</li>
                    <li>医药馆</li>
                    <li>营业厅</li>
                    <li>魅力惠</li>
                    <li>飞猪旅行</li>
                </ul>
            </div>
            <div class="malltypelist">
                <ul>
                    <li id="li2" class="li2-first" style="margin-top:10px"><img src="../assets/cloth.png" width="20px" height="20px" style="margin-left:20px;" /> 男装/户外
                    <div class="li1-extend">
                        <a style="color:gray; padding-top:15px;">
                            <font style="margin-left:20px;">当季流行 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:red">电器城</li>
                                <li style="color:orange">运动卫衣</li>
                                <li>喵鲜生</li>
                                <li>医药馆</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">精选上装 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgba(177, 31, 55, 0.623)">毛呢外套</li>
                                <li>丝绒卫衣</li>
                                <li>毛针织衫</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">男士外套 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:lightblue">棒球服</li>
                                <li>西服套装</li>
                                <li>运动服</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">男士内搭 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">短袖T恤</li>
                                <li>POLO衫</li>
                                <li>运动服</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">男士裤装 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">小脚裤</li>
                                <li style="color:rgb(2, 78, 165)">9分裤</li>
                                <li>休闲裤</li>
                                <li style="color:blue">潮男裤</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">户外鞋服 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">冲锋衣</li>
                                <li>抓绒衣</li>
                                <li>户外休闲衣</li>
                            </ul>
                        </a>
                    </div>
                    </li>
                    <li id="li2" class="li2-first" ><i class="fa fa-camera fa-1x" ></i> 数码/相机
                        <div class="li1-extend">
                            <a style="color:gray; padding-top:15px;">
                                <font style="margin-left:20px;">热门手机&gt; </font>
                                <ul id="ul2">
                                    <li style="color:red">华为</li>
                                    <li>小米</li>
                                    <li>iPhone</li>
                                    <li>OPPO</li>
                                </ul>
                                <hr size="1" style="border:1px dashed #ccc;width:80%" />
                                <font style="margin-left:20px;">特色手机&gt; </font>
                                <ul id="ul2">
                                    <li style="color:rgba(177, 31, 55, 0.623)">AliOS</li>
                                    <li style="color:orange">千元指纹</li>
                                    <li>联通</li>
                                    <li>电信</li>
                                </ul>
                                <hr size="1" style="border:1px dashed #ccc;width:80%" />
                                <font style="margin-left:20px;">手机特惠&gt; </font>
                                <ul id="ul2">
                                    <li style="color:lightblue">打折秒杀</li>
                                    <li>新品特卖</li>
                                    <li>实惠精选</li>
                                </ul>
                                <hr size="1" style="border:1px dashed #ccc;width:80%" />
                                <font style="margin-left:20px;">电脑整机&gt; </font>
                                <ul id="ul2">
                                    <li style="color:rgb(2, 78, 165)">笔记本</li>
                                    <li>平板电脑</li>
                                    <li>台式机</li>
                                </ul>
                                <hr size="1" style="border:1px dashed #ccc;width:80%" />
                                <font style="margin-left:20px;">智能数码&gt; </font>
                                <ul id="ul2">
                                    <li style="color:rgb(2, 78, 165)">VR眼镜</li>
                                    <li>智能摄像</li>
                                    <li>智能健康</li>
                                </ul>
                                <hr size="1" style="border:1px dashed #ccc;width:80%" />
                                <font style="margin-left:20px;">数码配件&gt; </font>
                                <ul id="ul2">
                                    <li style="color:rgb(2, 78, 165)">手机配件</li>
                                    <li>苹果配件</li>
                                    <li>平板配件</li>
                                </ul>
                            </a>
                        </div>
                    </li>
                    <li id="li2" class="li2-first">&nbsp;<i class="fa fa-child fa-1x" ></i> 母婴玩具
                    <div class="li1-extend">
                        <a style="color:gray; padding-top:15px;">
                            <font style="margin-left:20px;">童装 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li>商城同款</li>
                                <li>套装</li>
                                <li>裤子</li>
                                <li>纸尿布</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">婴儿服 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:red">连体衣</li>
                                <li>内衣套装</li>
                                <li>家居服</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">童鞋 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:lightblue">学步鞋</li>
                                <li>运动鞋</li>
                                <li>亲子鞋</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">喂养 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:red">奶瓶</li>
                                <li>奶嘴</li>
                                <li>辅食机</li>
                                <li>婴儿奶粉</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">玩具 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:red">婴儿玩具</li>
                                <li style="color:rgb(2, 78, 165)">积木</li>
                                <li>儿童自行车</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">洗护 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">洗发水</li>
                                <li>沐浴露</li>
                                <li>洗衣皂</li>
                            </ul>
                        </a>
                    </div>
                    </li>
                    <li id="li2" class="li2-first">&nbsp;<i class="fa fa-cutlery fa-1x" ></i> 街头美食
                    <div class="li1-extend">
                        <a style="color:gray; padding-top:15px;">
                            <font style="margin-left:20px;">进口食品 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li>进口零食</li>
                                <li>进口糖果</li>
                                <li>进口饮料</li>
                            </ul>
                            <hr size="1" style="border:1px dashed gray;width:80%" />
                            <font style="margin-left:20px;">休闲零食 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgba(177, 31, 55, 0.623)">零食</li>
                                <li>浆果</li>
                                <li>鱿鱼丝</li>
                                <li>小熊饼干</li>
                            </ul>
                            <hr size="1" style="border:1px dashed gray;width:80%" />
                            <font style="margin-left:20px;">酒类 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:lightblue">白酒</li>
                                <li>红酒</li>
                                <li style="color:orange">葡萄酒</li>
                                <li>威士忌</li>
                            </ul>
                            <hr size="1" style="border:1px dashed gray;width:80%" />
                            <font style="margin-left:20px;">茶叶 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">西湖龙井</li>
                                <li>安吉白茶</li>
                                <li>铁观音</li>
                            </ul>
                            <hr size="1" style="border:1px dashed gray;width:80%" />
                            <font style="margin-left:20px;">乳品冲饮 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">牛奶</li>
                                <li style="color:rgb(2, 78, 165)">成人奶粉</li>
                                <li>滤挂咖啡</li>
                            </ul>
                            <hr size="1" style="border:1px dashed gray;width:80%" />
                            <font style="margin-left:20px;">生鲜水果 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">牛排</li>
                                <li>芒果</li>
                                <li>奇异果</li>
                            </ul>
                        </a>
                    </div>
                    </li>
                    <li id="li2" class="li2-first">&nbsp;<i class="fa fa-home fa-1x" ></i> 家具建材
                        <div class="li1-extend">
                            <a style="color:gray; padding-top:15px;">
                                <font style="margin-left:20px;">成套家具&gt; </font>
                                <ul id="ul2">
                                    <li style="color:red">客厅成套家具</li>
                                    <li>餐厅成套家具</li>
                                </ul>
                                <hr size="1" style="border:1px dashed #ccc;width:80%" />
                                <font style="margin-left:20px;">客厅餐厅&gt; </font>
                                <ul id="ul2">
                                    <li style="color:rgba(177, 31, 55, 0.623)">布艺沙发</li>
                                    <li>实木沙发</li>
                                    <li>餐边柜</li>
                                </ul>
                                <hr size="1" style="border:1px dashed #ccc;width:80%" />
                                <font style="margin-left:20px;">卧室家具&gt; </font>
                                <ul id="ul2">
                                    <li style="color:lightblue">简易衣柜</li>
                                    <li>实木床</li>
                                    <li>乳胶床垫</li>
                                </ul>
                                <hr size="1" style="border:1px dashed #ccc;width:80%" />
                                <font style="margin-left:20px;">家装主材&gt; </font>
                                <ul id="ul2">
                                    <li style="color:red">强化复合地板</li>
                                    <li>瓷砖</li>
                                    <li>背景墙</li>
                                </ul>
                                <hr size="1" style="border:1px dashed #ccc;width:80%" />
                                <font style="margin-left:20px;">厨房卫浴&gt; </font>
                                <ul id="ul2">
                                    <li >浴霸</li>
                                    <li style="color:rgb(2, 78, 165)">集成吊顶</li>
                                    <li style="color:red">水槽套餐</li>
                                </ul>
                                <hr size="1" style="border:1px dashed #ccc;width:80%" />
                                <font style="margin-left:20px;">装修设计&gt; </font>
                                <ul id="ul2">
                                    <li style="color:red">装修特权</li>
                                    <li style="color:red">全局装修</li>
                                    <li>软装配饰</li>
                                </ul>
                            </a>
                        </div>
                    </li>
                    <li id="li2" class="li2-first"><i class="fa fa-shopping-basket fa-1x" ></i> 新鲜水果
                    <div class="li1-extend">
                        <a style="color:gray; padding-top:15px;">
                            <font style="margin-left:20px;">新鲜蔬菜 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:orangered">土豆</li>
                                <li>番薯</li>
                                <li>山药</li>
                                <li>冬笋</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">冰淇淋 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgba(177, 31, 55, 0.623)">冰淇淋</li>
                                <li>哈根达斯</li>
                                <li>本杰瑞</li>
                                <li>雪糕</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">蛋类 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:lightblue">鸡蛋</li>
                                <li>鸭蛋</li>
                                <li>送花皮蛋</li>
                                <li>鹌鹑蛋</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">海鲜水产 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:orange">三文鱼</li>
                                <li>金枪鱼</li>
                                <li>北极贝</li>
                                <li>鱼子酱</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">新鲜水果 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">奇异果</li>
                                <li style="color:rgb(2, 78, 165)">车厘子</li>
                                <li>火龙果</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">精选干货 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">干贝</li>
                                <li>大虾干</li>
                                <li>墨鱼干</li>
                                <li>咸肉干</li>
                            </ul>
                        </a>
                    </div></li>
                    <li id="li2" class="li2-first"><i class="fa fa-diamond fa-1x" ></i> 珠宝饰品
                    <div class="li1-extend">
                        <a style="color:gray; padding-top:15px;">
                            <font style="margin-left:20px;">黄金首饰 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:red">耳钉</li>
                                <li>黄金项链</li>
                                <li>婚嫁套饰</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">钻石彩宝 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgba(177, 31, 55, 0.623)">结婚戒指</li>
                                <li>钻石吊坠</li>
                                <li>红蓝宝石</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">珍珠玉翠 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:lightblue">海水珍珠</li>
                                <li>和田玉</li>
                                <li>翡翠手镯</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">潮流饰品 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">明星同款</li>
                                <li>传统银饰</li>
                                <li>木手串</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">腕表 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">瑞士名表</li>
                                <li style="color:rgb(2, 78, 165)">日韩港表</li>
                                <li>石英表</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">眼镜 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">太阳镜</li>
                                <li>墨镜</li>
                                <li>3D眼镜</li>
                                <li style="color:blue">圣光眼镜</li>
                            </ul>
                        </a>
                    </div></li>
                    <li id="li2" class="li2-first"><i class="fa fa-car fa-1x" aria-hidden="true"></i> 豪华汽车
                    <div class="li1-extend">
                        <a style="color:gray; padding-top:15px;">
                            <font style="margin-left:20px;">整车 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:blue">超级试驾</li>
                                <li>订金购车</li>
                                <li>轿车</li>
                                <li>载客车</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">坐垫脚垫 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgba(177, 31, 55, 0.623)">秋冬坐垫</li>
                                <li>汽车脚垫</li>
                                <li>女性坐垫</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">机油轮胎 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:lightblue">全合成机油</li>
                                <li>雪地胎</li>
                                <li style="color:red">防爆胎</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">电子导航 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">行车记录仪</li>
                                <li>车载导航</li>
                                <li>后视镜</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">维修保养 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">雨刮器</li>
                                <li style="color:rgb(2, 78, 165)">空调滤芯</li>
                                <li>刹车片</li>
                            </ul>
                            <hr size="1" style="border:1px dashed #ccc;width:80%" />
                            <font style="margin-left:20px;">美容清洗 &nbsp;&gt; </font>
                            <ul id="ul2">
                                <li style="color:rgb(2, 78, 165)">洗衣机</li>
                                <li>车蜡</li>
                                <li>玻璃水</li>
                                <li>雨刮器</li>
                            </ul>
                        </a>
                    </div></li>
                </ul>
            </div>                      <!-- 轮播区 -->
            <div id="carouselExampleIndicators" class="carousel slide swiper-box" data-ride="carousel" data-interval="3000">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner item">
                    <div class="carousel-item active">
                    <img src="https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg" class="d-block w-100" width="698px" height="348px">
                    </div>
                    <div class="carousel-item">
                    <img src="https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg" class="d-block w-100" width="698px" height="348px">
                    </div>
                    <div class="carousel-item">
                    <img src="https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i2/6000000002149/O1CN01ICHnEi1RkHmpkpSpW_!!6000000002149-0-octopus.jpg" class="d-block w-100" width="698px" height="348px">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="shopping-news">
                <span style="font-size:18px;color:red"><b>商城头条</b></span>
                <hr style="transform:translateY(-2px)" >
                <img id="news-pic" src="../assets/shoppinglist/news-user.png" width="50px" height="50px">
                <div class="news-user-word">
                    <font>Hi,小叮当<br/>
                    <a href="#" style="color:red;">点击更多优惠活动</a></font>
                </div>
                <button id="news-but"><router-link to="/login" style="color:white">登录</router-link></button>
                <button id="news-but"><router-link to="/register" style="color:white">注册</router-link></button><br/>
                <a>[特惠]天猫狂欢 1分秒杀</a><br />
                <a>[公告]商城与长春市签署战略合作</a>
                <a>[特惠]特定假日，商品满300减100</a>
                <a>[活动]双12购物节 | 购物送积分福利</a>
                <a>[公告]家电狂欢千亿礼券</a>
            </div>
        </div>
        <div class="promote" id="list-item-2">
            <div class="promote1 promote-1">
                <br/><br/><h2 style="font-weight:550;margin-top:3px;">国民男装</h2>
                <font style="font-size:18px;">超值抢购</font>
                <img src="../assets/promote-pic1.png" width="200px" height="200px" />
            </div>
            <div class="promote2 promote-2">
                <h2 style="margin-left:30px;"><br/>潮电工厂</h2>
                <font style="font-size:18px;margin-left:30px;">0点抢五折</font>
                <img src="../assets/promote-pic2.png" width="130px" height="130px" style="transform:translateY(-70px);margin-left:200px;" />
            </div>
            <div class="promote2 promote-3">
                <h2 style="margin-left:30px;"><br/>奶粉尿裤</h2>
                <font style="font-size:18px;margin-left:30px;">满600减360</font>
                <img src="../assets/promote-pic3.png" width="130px" height="130px" style="transform:translateY(-70px);margin-left:200px;" />
            </div>
            <div class="promote2 promote-4">
                <h2 style="margin-left:30px;"><br/>厨房用具</h2>
                <font style="font-size:18px;margin-left:30px;">大牌不只三折</font>
                <img src="../assets/promote-pic4.png" width="130px" height="130px" style="transform:translateY(-70px);margin-left:200px;" />
            </div>
            <div class="promote2 promote-5">
                <h2 style="margin-left:30px;"><br/>数码新品</h2>
                <font style="font-size:18px;margin-left:30px;">爆款抢五折</font>
                <img src="../assets/promote-pic5.png" width="130px" height="130px" style="transform:translateY(-70px);margin-left:200px;" />
            </div>
            <div class="promote1 promote-6">
                <br/><br/><h2 style="font-weight:550;margin-top:3px;">国民男装</h2>
                <font style="font-size:18px;">超值抢购</font>
                <img src="../assets/promote-pic6.png" width="200px" height="200px" />
            </div>
        </div>
        <shoppinglist></shoppinglist>       <!-- 商品板块区，分为潮电区和衣服区 -->
        </div>
        <div id="list-example" class="list-group">        <!-- 板块跳转 -->
            <a class="list-group-item list-group-item-action" href="#list-item-1">导航</a>
            <a class="list-group-item list-group-item-action" href="#list-item-2">推荐</a>
            <a class="list-group-item list-group-item-action" href="#list-item-3">潮电</a>
            <a class="list-group-item list-group-item-action" href="#list-item-4">着装</a>
            <a class="list-group-item list-group-item-action" href="#list-item-5" style="background-color:#808080;border: 1px solid rgba(0,0,0,.125);">End</a>
        </div>
    </div>
</template>

<script>
import shoppinglist from './shoppinglist'
import {swiper,swiperSlide} from 'vue-awesome-swiper';
import { Autoplay } from 'swiper';
import login from './login'

export default {
    components:{
        swiper,
        swiperSlide,
        shoppinglist,
        login
    },
    props:['mainpage'],

    data(){
        return {
            usname:this.$store.state.name,
            usphone:this.$store.state.phone,
        };
    },
    methods:{
        getvuex(){
            // console.log(this.$store.state.name)
        },
        logoff(){
            this.$store.commit("showPeople",{
                name: '',
                phone: '',
                login: null,
            })
            this.usname = this.$store.state.name;
            this.$store.commit("setid",{
                id: ''
            })
        }
    },
    computed: {

    },
    mounted() {
        this.getvuex();
    },
}
</script>

<style>
@import "./CSS/mainpage.css";
.list-group{
    position: fixed;
    top: 200px;
    width: 50px;
}
.list-group a{
    padding:0px;
    width:48px;
    height:48px;
    text-align:center;
    line-height:48px;
    font-size: 16px;
    font-family: '微软雅黑';
    color:white;
    background-color: grey
}

.li1-extend{
    display: none;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    position: fixed;
    min-width: 470px;
    height: 340px;
    top: -1px;
    left: 150px;
    background-color: white;
}
.li1-extend font{
    color: black;
    font-size: 17px;
}
.li1-extend li{
    font-size: 15px;
}
.malltypelist a{
    text-decoration: none;
    color: rgba(228, 217, 217, 0.068);
    display: block;
}
.li2-first:hover .li1-extend {
    display:block;
    color: black;
}
.li1-extend li:hover{
    background-color: #ccc
}
#ul2{
    display: inline-block;
    font-size: 18px;
    margin-left: -20px;
    /* margin-bottom: 5px;
    margin-top: 5px; */
}
.shopping-news{
    width: 220px;
    height: 250px;
    /* border: 1px solid red; */
    display: inline-block;
    margin-left: 20px;
    margin-top: 20px;
}
.shopping-news a{
    height: 25px;
    line-height: 25px;
    color: gray
}
#news-pic{
    /* border: 1px solid red; */
    background-color: rgba(82, 71, 71, 0.507);
    border-radius: 50%;
    display: inline;
}
#news-but{
    width: 80px;
    height: 25px;
    background-color: rgb(255, 136, 0);
    border: none;
    color: white;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
}
.news-user-word{
    display: inline-block;
    width: 150px;
    height: 50px;
    /* border: 1px solid red; */
    vertical-align: top;
}
.news-user-word font{
    position: relative;
    left: 5px;
    top: 10px;
}
.news-user-word a{
    position: relative;
    top: 0px;
}

.promote1:hover,.promote2:hover{
    border: 1px solid #ccc;
	box-shadow: 0 0 15px #ccc;
}
</style>