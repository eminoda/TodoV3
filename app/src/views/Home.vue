<template>
  <Title />
  <van-tabs type="card">
    <van-tab title="进行中"
      ><van-collapse v-model="activeNode">
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
            shape="square"
            :key="index"
            :checked-color="item.checkedColor"
            :style="{
              'background-color': item.bgColor,
              'box-shadow': '5px 5px 8px #999'
            }"
          >
            {{ task.name }}
          </van-checkbox>
        </van-collapse-item>
      </van-collapse></van-tab
    >
    <van-tab title="已结束">历史</van-tab>
  </van-tabs>
  <van-button
    square
    type="primary"
    block
    style="position:fixed;
    bottom: 0;"
    @click="showSheet"
    >分类</van-button
  ><van-action-sheet
    v-model:show="show"
    :actions="actions"
    cancel-text="取消"
    description="这是一段描述信息"
    close-on-click-action
  />
</template>

<script>
import { ref } from 'vue';
import Title from '@/components/Title.vue'
import useTaskList from '@/composables/useTaskList'
export default {
  components: { Title },
  setup() {
    const show = ref(false);
    const actions = [
      { name: '选项一' },
      { name: '选项二' },
      { name: '选项三', subname: '描述信息' },
    ];
    const { taskTree, activeNode } = useTaskList()
    return { taskTree, activeNode, show, actions }
  },
  methods: {
    showSheet() {
      this.show = true
    }
  },
}
</script>

<style lang="less" scoped>
:deep(.van-tabs__nav--card) {
  margin: 0;
}
.task-wrap {
  padding: 5% 3%;
  background: #99ccff;
  margin-bottom: 10px;
  font-size: 18px;
  border-radius: 10px;
  :deep(.van-checkbox__icon .van-icon) {
    border-color: #fff;
    border-width: 2px;
  }
  :deep(.van-checkbox__label) {
    color: #fff;
    margin-left: 15px;
  }
}
</style>