<template>
  <div class="user-info">
    <div class="full-screen" @click="hadleScreenClick">
      <img src="@/assets/img/fullscreen.png" alt="" />
    </div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-circle-close" @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'
import screenfull from 'screenfull'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const name = computed(() => store.state.login.userInfo.name)

    const handleExitClick = () => {
      router.push('/login')
      localCache.deleteChahe('token')
    }
    const hadleScreenClick = () => {
      console.log('全屏')
      if (screenfull.isEnabled) {
        screenfull.toggle()
      }
    }

    return {
      name,
      handleExitClick,
      hadleScreenClick
    }
  }
})
</script>

<style scoped lang="less">
.user-info {
  display: flex;
}
.el-dropdown-link {
  display: flex;
  cursor: pointer;
  align-items: center;
}
.full-screen {
  padding: 0 15px;
  cursor: pointer;
  img {
    width: 30px;
    line-height: 30px;
  }
}
</style>
