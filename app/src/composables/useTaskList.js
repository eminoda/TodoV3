import { ref, computed, onMounted } from 'vue';

function fetchTaskList() {
  return Promise.resolve([
    { id: 1, type: 1, done: false, typeName: '前端', name: 'vue3 learn' },
    { id: 2, type: 1, done: false, typeName: '前端', name: 'react learn' },
    { id: 3, type: 1, done: false, typeName: '前端', name: 'flutter learn' },
    { id: 4, type: 2, done: false, typeName: '家庭', name: '幼儿园报名' },
    { id: 5, type: 2, done: false, typeName: '家庭', name: '打扫厨房' },
  ]);
}
export default function useTaskList() {
  const taskList = ref([]);
  const activeNode = ref([]);
  const getTaskList = async () => {
    taskList.value = await fetchTaskList();
  };
  const taskTree = computed(() => {
    return taskList.value.reduce((acc, cur) => {
      const createNode = () => {
        acc.push({ type: cur.type, typeName: cur.typeName, children: [cur] });
      };
      if (acc.length == 0) {
        createNode();
      } else {
        let matched = false;
        for (let item of acc) {
          if (item.type == cur.type) {
            item.children.push(cur);
            matched = true;
            break;
          }
        }
        if (!matched) {
          createNode();
        }
      }

      return acc;
    }, []);
  });

  onMounted(getTaskList);

  return { taskList, taskTree, getTaskList, activeNode };
}
