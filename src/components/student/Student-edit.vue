<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学生管理</el-breadcrumb-item>
      <el-breadcrumb-item>修改学生信息</el-breadcrumb-item>
    </el-breadcrumb>

    <el-col :span="18">
      <el-form label-width="160px">
        <el-form-item label="学生姓名">
          <el-input type="text" v-model="stuName" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="gender">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input type="number" v-model="age" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input type="number" v-model="phone" placeholder="请输入内容" maxlength="11" required></el-input>
        </el-form-item>
        <el-form-item label="家庭住址">
          <el-input type="text" v-model="address" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item label="所在班级">
          <el-select v-model="classId" placeholder="筛选年级">
            <el-option
              v-for="item in options"
              :key="item.classId"
              :label="item.className"
              :value="item.classId">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入学时间">
          <el-date-picker
            v-model="entranceTime"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="status">
            <el-option label="正常" value="1"></el-option>
            <el-option label="删除" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stuName: '',
      gender: 1,
      age: 0,
      phone: '',
      address: '',
      classId: '',
      options: [],
      status: '',
      entranceTime: '',
      sid: ''
    }
  },
  mounted: function() {
    this.$http.get('/schoolManager/class/classList.json').then(response => {
      const body = response.body;
      if(body.code == 200) {
        this.options = body.detail.rows;
      }
    }, response => {})
    this.sid = this.$route.query.sid;
    this.$http.get('/schoolManager/stu/stuInfo?stuId=' + this.sid).then(response => {
      const body = response.body;
      if(body.code == 200) {
        this.stuName = body.detail.stuName;
        this.gender = body.detail.gender;
        this.age = body.detail.age;
        this.phone = body.detail.phone;
        this.address = body.detail.address;
        this.status = body.detail.status;
        this.classId = body.detail.classId;
        this.entranceTime = body.detail.entranceTime;
      }
    }, response => {})
  },
  methods: {
    onSubmit: function() {
      const query = '/schoolManager/stu/editStuInfo.json';
      const param = {
        stuId: this.sid,
        stuName: this.stuName,
        gender: this.gender,
        age: this.age,
        phone: this.phone,
        address: this.address,
        status: this.status,
        classId: this.classId,
        entranceTime: this.entranceTime
      }
      this.$http.post(query, param, {emulateJSON: false}).then(response => {
        const body = response.body;
        if(body.code == 200) {
          this.$router.push({path: '/student_list'});
        }
      })
    }
  }
}
</script>
