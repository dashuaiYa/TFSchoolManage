<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>班级管理</el-breadcrumb-item>
      <el-breadcrumb-item>班级列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="filter-cont">
      <el-select v-model="value" placeholder="筛选年级" @change="filterGrades">
        <el-option
          v-for="item in options"
          :key="item.gid"
          :label="item.gname"
          :value="item.gid">
        </el-option>
      </el-select>
    </div>

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="className"
        label="班级名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="teacherCount"
        label="教师数量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="stuCount"
        label="学生数量">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pager-cont">
      <el-pagination
        layout="prev, pager, next"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        options: [],
        value: '',
        totalCount: 0
      }
    },
    mounted: function() {
      this.$http.get('/schoolManager/class/classList.json').then(response => {
        const body = response.body;
        if(body.code == 200) {
          this.tableData = body.detail.rows;
          this.totalCount = body.detail.totalCount;
        }
      },response => {})
      // this.getClassList;
      this.$http.get('/schoolManager/class/schoolGrades.json').then(response => {
        const body = response.body;
        if(body.code == 200) {
          this.options = body.detail;
        }
      },response => {})
    },
    methods: {
      filterGrades: function(val) {
        console.log(val);
        this.getClassList(val, 1);
      },
      getClassList: function(gid, no) {
        this.$http.get('/schoolManager/class/classList.json?gradeId=' + gid + '&pageNo=' + no).then(response => {
          const body = response.body;
          if(body.code == 200) {
            this.tableData = body.detail.rows;
            this.totalCount = body.detail.totalCount;
          }
        },response => {})
      }
    }
  }
</script>
