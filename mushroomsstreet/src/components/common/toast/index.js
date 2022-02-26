import Toast from './Toast.vue'

const obj = {}

obj.install = function (vue) {
  // console.log('执行了obj的install函数', vue);
  // 1.创建组件构造器
  const toastcontrustor = vue.extend(Toast);
  // 2.通过new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastcontrustor();
  // 3.将组件对象，手动挂在到某一个元素上
  toast.$mount(document.createElement("div"));
  // 4.toast.el对应的就是div
  document.body.appendChild(toast.$el);
  vue.prototype.$toast = toast;
}
export default obj