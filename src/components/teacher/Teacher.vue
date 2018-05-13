<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>教师管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="teacherName"
        label="姓名"
        width="190">
      </el-table-column>
      <el-table-column
        prop="level"
        label="教师等级"
        :formatter="levelFormat">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="editTeacher(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pager-cont">
      <el-pagination
        layout="prev, pager, next"
        :total="totalCount"
        @current-change="pagerChange">
      </el-pagination>
    </div>
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
    this.$http.get('/schoolManager/teacher/teacherList').then(response => {
      const body = response.body;
      if(body.code == 200) {
        this.tableData = body.detail.rows;
      }
    }, response => {})
  },
  methods: {
    pagerChange: function() {},
    levelFormat: function(row) {
      return row.level == 1 ? '高级' : (row.level == 2 ? '中级' : '初级');
    },
    editTeacher: function(row) {
      this.$router.push({name: 'TeacherEdit', query: {tid: row.teacherId}})
    }
  }
}
</script>
