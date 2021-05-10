<template>
  <Title />
  <van-collapse v-model="activeNode">
    <van-collapse-item
      :title="item.typeName"
      :name="index"
      v-for="(item, index) in taskTree"
      :key="index"
    >
      <van-checkbox
        class="task-wrap"
        v-model="task.done"
        v-for="(task, index) in item.children"
        :key="index"
        checked-color="#07c160"
        shape="square"
      >
        {{ task.name }}
      </van-checkbox>
    </van-collapse-item>
  </van-collapse>
</template>

<script>
import Title from '@/components/Title.vue'
import useTaskList from '@/composables/useTaskList'
export default {
  components: { Title },
  setup() {
    const { taskTree, activeNode } = useTaskList()
    return { taskTree, activeNode }
  }
}
</script>

<style lang="less" scoped>
.task-wrap {
  padding: 5% 3%;
  background: #07c160;
  margin-bottom: 10px;
  font-size: 18px;
  /deep/.van-checkbox__icon .van-icon {
    border-color: #fff;
    border-width: 2px;
  }
  /deep/.van-checkbox__label {
    color: #fff;
    margin-left: 15px;
  }
}
</style>