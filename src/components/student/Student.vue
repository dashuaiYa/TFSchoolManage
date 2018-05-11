<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学生管理</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="filter-cont">
      <el-select v-model="value" placeholder="筛选班级" @change="filterClass">
        <el-option
          v-for="item in options"
          :key="item.classId"
          :label="item.className"
          :value="item.classId">
        </el-option>
      </el-select>
    </div>

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="80">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="紧急联系人">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        :formatter="genderFormat">
      </el-table-column>
      <el-table-column
        prop="entrancetime"
        label="入学时间"
        :formatter="dateFormat">
      </el-table-column>
      <el-table-column
        prop="address"
        label="家庭地址">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="50">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="stuEdit(scope.row)">编辑</el-button>
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
      options: [],
      value: '',
      tableData: [],
      totalCount: 0
    }
  },
  mounted: function() {
    this.$http.get('/schoolManager/class/classList.json').then(response => {
      const body = response.body;
      if(body.code == 200) {
        this.options = body.detail.rows;
      }
    }, response => {});
    this.$http.get('/schoolManager/stu/stuList').then(response => {
      const body = response.body;
      if(body.code == 200) {
        this.tableData = body.detail.rows;
      }
    }, response => {})
  },
  methods: {
    filterClass: function() {},
    pagerChange: function() {},
    genderFormat: function(row, column) {
      return row.gender == 1 ? '男' : '女';
    },
    dateFormat: function(row) {
      return row.entrancetime ? row.entrancetime.substr(0,10) : '';
    },
    handleClick(row) {
      console.log(row);
    },
    stuEdit(row) {
      console.log(row);
    }
  }
}
</script>
