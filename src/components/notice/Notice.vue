<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>通知中心</el-breadcrumb-item>
    </el-breadcrumb>
    
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="{item, i} in rows" :title="row.title" :name="i" :key="i">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      rows: []
    };
  },
  mounted: function() {
    this.$http.get('/schoolManage/notice/getNoticeList.json').then(response => {
      const result = response.body;
      if(body.code == 200) {
        this.rows = result.detail.rows;
      }else{
        this.snerr = '网络链接错误，请刷新重试'
      }
    }, response => {
      this.snerr = '网络链接错误，请刷新重试'
    })
  },
  methods: {
    handleChange(val) {
      console.log(val[0]);
    }
  }
};
</script>