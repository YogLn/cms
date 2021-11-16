<template>
  <div class="login-account">
    <el-form
      label-width="66px"
      :rules="accountRules"
      :model="account"
      ref="formRef"
    >
      <el-form-item label="账 号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密 码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { accountRules } from '../config/accout-config'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'
export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPwd: boolean) => {
      formRef.value?.validate((valid) => {
        if (!valid) return
        // 1.本地缓存存储用户名和密码
        if (isKeepPwd) {
          localCache.setCache('name', account.name)
          localCache.setCache('password', account.password)
        }
        // 2. 尽心的登录验证
        store.dispatch('login/accountLoginAction', { ...account })
        console.log('登录逻辑')
      })
    }

    return {
      account,
      accountRules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
