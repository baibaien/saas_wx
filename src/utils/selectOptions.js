
// 选择复选框
export function selectedList(list, id) {
     const index = list.indexOf(id);
     index >= 0 ? list.splice(index, 1) : list.push(id);
     return list;
}