<template>
 <div id="app">
  <magnifier></magnifier>
 </div>
</template>
<script>
// 引入放大镜组件
import Magnifier from './Magnify'
import $ from 'jquery'
export default {
name: 'app',
components: {
 // 注册
 Magnifier
 }
}
</script>