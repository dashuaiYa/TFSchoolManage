<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>设备管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加设备</el-breadcrumb-item>
    </el-breadcrumb>

    <el-col :span="18">
      <el-form label-width="160px">
        <el-form-item label="设备名字">
          <el-input type="text" v-model="deviceName" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item label="设备描述">
          <el-input type="text" v-model="deviceDesc" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item label="是否损坏">
          <el-select v-model="isDamage">
            <el-option label="未损坏" value="1"></el-option>
            <el-option label="已损坏" value="2"></el-option>
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
      deviceName: '',
      isDamage: 1,
      deviceDesc: ''
    }
  },
  mounted: function() {
    
  },
  methods: {
    onSubmit: function() {
      const query = '/schoolManager/device/insertDevice';
      const param = {
        deviceName: this.deviceName,
        isDamage: this.isDamage,
        deviceDesc: this.deviceDesc,
        schoolId: sessionStorage.getItem('schoolId')
      }
      
      this.$http.post(query, param, {emulateJSON: false}).then(response => {
        const body = response.body;
        if(body.code == 200) {
          this.$router.push({path: '/devices'});
        }
      })
    }
  }
}
</script>
