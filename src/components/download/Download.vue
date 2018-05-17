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
        prop="deviceName"
        label="课件名称">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="80">
        <template slot-scope="scope">
          <!-- <el-button type="text" size="small" @click="delDevice(scope.row)">删除</el-button> -->
          <el-button type="text" size="small" @click="downloadFile(scope.row)">下载</el-button>
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
  methods: {
    downloadFile: function(row) {}
  }
}
</script>
