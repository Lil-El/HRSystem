/**
 * @author Mino
 * @description 自动化全局组件注册
 * @date 2023-05-17 15:37
 */

const modulesFiles = require.context("./components", true, /\.vue$/);

const ui = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath);
  modules[value.default.name] = value.default;
  return modules;
}, {});

export default Vue => {
  for (const componentName in ui) {
    Vue.component(componentName, ui[componentName]);
  }
};
