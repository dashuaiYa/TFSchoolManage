<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>课件下载</el-breadcrumb-item>
    </el-breadcrumb>

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="课件名称">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="80">
        <template slot-scope="scope">
          <!-- <el-button type="text" size="small" @click="delDevice(scope.row)">下载</el-button> -->
          <a :href="scope.row.url" :download="scope.row.name">下载</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted: function(){
      this.$http.get('/cccourse').then(response => {
          this.tableData = response.body;
      }, response => {});
  },
  methods: {
    delDevice: function(scope) {
      console.log(scope);
    }
  }
}
</script>
