Vue
===

*单文件组件*

Vue 项目中，.vue 文件是单文件组件。每个单文件组件包含对应功能或模块的 HTML, js 及 css.

HTML 被放在 &lt;template&gt; 标签中

Javascript 被放在 &lt;script&gt; 标签中

css 被放在 &lt;style&gt; 标签中


*层级组件之间的数据传递方式*

有两张方法：

简单情况下，父级组件向子级组件传递数据使用 props; 子级组件向父级组件传递数据使用 $emit;

复查情况下，建议使用 vuex 来统一管理数据



