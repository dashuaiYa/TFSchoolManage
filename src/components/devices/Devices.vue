<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>设备管理</el-breadcrumb-item>
      <el-breadcrumb-item>设备列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="deviceName"
        label="设备名称"
        width="190">
      </el-table-column>
      <el-table-column
        prop="isDamage"
        label="是否损坏"
        :formatter="damageFormat">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        :formatter="stateFormat">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <!-- <el-button type="text" size="small" @click="delDevice(scope.row)">删除</el-button> -->
          <el-button type="text" size="small" @click="editDevice(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- <div class="pager-cont">
      <el-pagination
        layout="prev, pager, next"
        :total="totalCount"
        @current-change="pagerChange">
      </el-pagination>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      totalCount: 0
    }
  },
  mounted: function() {
    this.$http.get('/schoolManager/device/findDeviceList').then(response => {
      const body = response.body;
      if(body.code == 200) {
        this.tableData = body.detail;
      }
    }, response => {})
  },
  methods: {
    pagerChange: function() {},
    damageFormat: function(row) {
      return row.isDamage == 1 ? '未损坏' : '已损坏';
    },
    stateFormat: function(row) {
      return row.state == 1 ? '正常' : '删除';
    },
    editDevice: function(row) {
      this.$router.push({name: 'DevicesEdit', query: {did: row.id}})
    },
    delDevice: function(row) {
      
    }
  }
}
</script>
