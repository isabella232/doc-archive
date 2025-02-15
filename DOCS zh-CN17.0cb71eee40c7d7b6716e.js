(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[298],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/container.md?vue&type=template&id=0b78a628

const containervue_type_template_id_0b78a628_hoisted_1 = {
  class: "content element-doc"
};

const containervue_type_template_id_0b78a628_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Container 布局容器 ");

const containervue_type_template_id_0b78a628_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>用于布局的容器组件，方便快速搭建页面的基本结构：</p><p><code>&lt;el-container&gt;</code>：外层容器。当子元素中包含 <code>&lt;el-header&gt;</code> 或 <code>&lt;el-footer&gt;</code> 时，全部子元素会垂直上下排列，否则会水平左右排列。</p><p><code>&lt;el-header&gt;</code>：顶栏容器。</p><p><code>&lt;el-aside&gt;</code>：侧边栏容器。</p><p><code>&lt;el-main&gt;</code>：主要区域容器。</p><p><code>&lt;el-footer&gt;</code>：底栏容器。</p><div class=\"tip\"><p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，<code>&lt;el-container&gt;</code> 的子元素只能是后四者，后四者的父元素也只能是 <code>&lt;el-container&gt;</code>。</p></div>", 7);

const containervue_type_template_id_0b78a628_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("常见页面布局 ");

const containervue_type_template_id_0b78a628_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"common-layout\">\n  <el-container>\n    <el-header>Header</el-header>\n    <el-main>Main</el-main>\n  </el-container>\n\n  <el-container>\n    <el-header>Header</el-header>\n    <el-main>Main</el-main>\n    <el-footer>Footer</el-footer>\n  </el-container>\n\n  <el-container>\n    <el-aside width=\"200px\">Aside</el-aside>\n    <el-main>Main</el-main>\n  </el-container>\n\n  <el-container>\n    <el-header>Header</el-header>\n    <el-container>\n      <el-aside width=\"200px\">Aside</el-aside>\n      <el-main>Main</el-main>\n    </el-container>\n  </el-container>\n\n  <el-container>\n    <el-header>Header</el-header>\n    <el-container>\n      <el-aside width=\"200px\">Aside</el-aside>\n      <el-container>\n        <el-main>Main</el-main>\n        <el-footer>Footer</el-footer>\n      </el-container>\n    </el-container>\n  </el-container>\n\n  <el-container>\n    <el-aside width=\"200px\">Aside</el-aside>\n    <el-container>\n      <el-header>Header</el-header>\n      <el-main>Main</el-main>\n    </el-container>\n  </el-container>\n\n  <el-container>\n    <el-aside width=\"200px\">Aside</el-aside>\n    <el-container>\n      <el-header>Header</el-header>\n      <el-main>Main</el-main>\n      <el-footer>Footer</el-footer>\n    </el-container>\n  </el-container>\n</div>\n\n<style>\n  .el-header,\n  .el-footer {\n    background-color: #b3c0d1;\n    color: var(--el-text-color-primary);\n    text-align: center;\n    line-height: 60px;\n  }\n\n  .el-aside {\n    background-color: #d3dce6;\n    color: var(--el-text-color-primary);\n    text-align: center;\n    line-height: 200px;\n  }\n\n  .el-main {\n    background-color: #e9eef3;\n    color: var(--el-text-color-primary);\n    text-align: center;\n    line-height: 160px;\n  }\n\n  body > .el-container {\n    margin-bottom: 40px;\n  }\n\n  .el-container:nth-child(5) .el-aside,\n  .el-container:nth-child(6) .el-aside {\n    line-height: 260px;\n  }\n\n  .el-container:nth-child(7) .el-aside {\n    line-height: 320px;\n  }\n</style>\n")], -1);

const containervue_type_template_id_0b78a628_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("实例 ");

const containervue_type_template_id_0b78a628_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-container style=\"height: 500px; border: 1px solid #eee\">\n  <el-aside width=\"200px\" style=\"background-color: rgb(238, 241, 246)\">\n    <el-menu :default-openeds=\"['1', '3']\">\n      <el-sub-menu index=\"1\">\n        <template #title><i class=\"el-icon-message\"></i>导航一</template>\n        <el-menu-item-group>\n          <template #title>分组一</template>\n          <el-menu-item index=\"1-1\">选项1</el-menu-item>\n          <el-menu-item index=\"1-2\">选项2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"分组2\">\n          <el-menu-item index=\"1-3\">选项3</el-menu-item>\n        </el-menu-item-group>\n        <el-sub-menu index=\"1-4\">\n          <template #title>选项4</template>\n          <el-menu-item index=\"1-4-1\">选项4-1</el-menu-item>\n        </el-sub-menu>\n      </el-sub-menu>\n      <el-sub-menu index=\"2\">\n        <template #title><i class=\"el-icon-menu\"></i>导航二</template>\n        <el-menu-item-group>\n          <template #title>分组一</template>\n          <el-menu-item index=\"2-1\">选项1</el-menu-item>\n          <el-menu-item index=\"2-2\">选项2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"分组2\">\n          <el-menu-item index=\"2-3\">选项3</el-menu-item>\n        </el-menu-item-group>\n        <el-sub-menu index=\"2-4\">\n          <template #title>选项4</template>\n          <el-menu-item index=\"2-4-1\">选项4-1</el-menu-item>\n        </el-sub-menu>\n      </el-sub-menu>\n      <el-sub-menu index=\"3\">\n        <template #title><i class=\"el-icon-setting\"></i>导航三</template>\n        <el-menu-item-group>\n          <template #title>分组一</template>\n          <el-menu-item index=\"3-1\">选项1</el-menu-item>\n          <el-menu-item index=\"3-2\">选项2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"分组2\">\n          <el-menu-item index=\"3-3\">选项3</el-menu-item>\n        </el-menu-item-group>\n        <el-sub-menu index=\"3-4\">\n          <template #title>选项4</template>\n          <el-menu-item index=\"3-4-1\">选项4-1</el-menu-item>\n        </el-sub-menu>\n      </el-sub-menu>\n    </el-menu>\n  </el-aside>\n\n  <el-container>\n    <el-header style=\"text-align: right; font-size: 12px\">\n      <el-dropdown>\n        <i class=\"el-icon-setting\" style=\"margin-right: 15px\"></i>\n        <template #dropdown>\n          <el-dropdown-menu>\n            <el-dropdown-item>查看</el-dropdown-item>\n            <el-dropdown-item>新增</el-dropdown-item>\n            <el-dropdown-item>删除</el-dropdown-item>\n          </el-dropdown-menu>\n        </template>\n      </el-dropdown>\n      <span>王小虎</span>\n    </el-header>\n\n    <el-main>\n      <el-table :data=\"tableData\">\n        <el-table-column prop=\"date\" label=\"日期\" width=\"140\">\n        </el-table-column>\n        <el-table-column prop=\"name\" label=\"姓名\" width=\"120\">\n        </el-table-column>\n        <el-table-column prop=\"address\" label=\"地址\"> </el-table-column>\n      </el-table>\n    </el-main>\n  </el-container>\n</el-container>\n\n<style>\n  .el-header {\n    background-color: #b3c0d1;\n    color: var(--el-text-color-primary);\n    line-height: 60px;\n  }\n\n  .el-aside {\n    color: var(--el-text-color-primary);\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      const item = {\n        date: '2016-05-02',\n        name: '王小虎',\n        address: '上海市普陀区金沙江路 1518 弄',\n      }\n      return {\n        tableData: Array(20).fill(item),\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const item = {\n        date: '2016-05-02',\n        name: '王小虎',\n        address: '上海市普陀区金沙江路 1518 弄',\n      };\n\n      const tableData = ref(Array(20).fill(item));\n\n      return {\n        tableData,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const containervue_type_template_id_0b78a628_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Container Attributes ");

const containervue_type_template_id_0b78a628_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>子元素的排列方向</td><td>string</td><td>horizontal / vertical</td><td>子元素中有 <code>el-header</code> 或 <code>el-footer</code> 时为 vertical，否则为 horizontal</td></tr></tbody></table>", 1);

const containervue_type_template_id_0b78a628_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Header Attributes ");

const containervue_type_template_id_0b78a628_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>顶栏高度</td><td>string</td><td>—</td><td>60px</td></tr></tbody></table>", 1);

const containervue_type_template_id_0b78a628_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Aside Attributes ");

const containervue_type_template_id_0b78a628_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>侧边栏宽度</td><td>string</td><td>—</td><td>300px</td></tr></tbody></table>", 1);

const containervue_type_template_id_0b78a628_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Footer Attributes ");

const containervue_type_template_id_0b78a628_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>底栏高度</td><td>string</td><td>—</td><td>60px</td></tr></tbody></table>", 1);

function containervue_type_template_id_0b78a628_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", containervue_type_template_id_0b78a628_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "container-bu-ju-rong-qi",
    content: "Container 布局容器",
    href: "#container-bu-ju-rong-qi",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_0b78a628_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#container-bu-ju-rong-qi"
    })]),
    _: 1
  }), containervue_type_template_id_0b78a628_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chang-jian-ye-mian-bu-ju",
    content: "常见页面布局",
    href: "#chang-jian-ye-mian-bu-ju",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_0b78a628_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chang-jian-ye-mian-bu-ju"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_0b78a628_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shi-li",
    content: "实例",
    href: "#shi-li",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_0b78a628_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-li"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_0b78a628_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "container-attributes",
    content: "Container Attributes",
    href: "#container-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_0b78a628_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#container-attributes"
    })]),
    _: 1
  }), containervue_type_template_id_0b78a628_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "header-attributes",
    content: "Header Attributes",
    href: "#header-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_0b78a628_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#header-attributes"
    })]),
    _: 1
  }), containervue_type_template_id_0b78a628_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "aside-attributes",
    content: "Aside Attributes",
    href: "#aside-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_0b78a628_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#aside-attributes"
    })]),
    _: 1
  }), containervue_type_template_id_0b78a628_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "footer-attributes",
    content: "Footer Attributes",
    href: "#footer-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_0b78a628_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#footer-attributes"
    })]),
    _: 1
  }), containervue_type_template_id_0b78a628_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/container.md?vue&type=template&id=0b78a628

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/container.md?vue&type=script&lang=ts

/* harmony default export */ var containervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "common-layout"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Header");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Main");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Header");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Main");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Footer");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("Aside");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("Main");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("Header");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("Aside");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("Main");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("Header");

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("Aside");

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("Main");

      const _hoisted_15 = /*#__PURE__*/_createTextVNode("Footer");

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("Aside");

      const _hoisted_17 = /*#__PURE__*/_createTextVNode("Header");

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("Main");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("Aside");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("Header");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("Main");

      const _hoisted_22 = /*#__PURE__*/_createTextVNode("Footer");

      function render(_ctx, _cache) {
        const _component_el_header = _resolveComponent("el-header");

        const _component_el_main = _resolveComponent("el-main");

        const _component_el_container = _resolveComponent("el-container");

        const _component_el_footer = _resolveComponent("el-footer");

        const _component_el_aside = _resolveComponent("el-aside");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_container, null, {
          default: _withCtx(() => [_createVNode(_component_el_header, null, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_main, null, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(() => [_createVNode(_component_el_header, null, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          }), _createVNode(_component_el_main, null, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          }), _createVNode(_component_el_footer, null, {
            default: _withCtx(() => [_hoisted_6]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(() => [_createVNode(_component_el_aside, {
            width: "200px"
          }, {
            default: _withCtx(() => [_hoisted_7]),
            _: 1
          }), _createVNode(_component_el_main, null, {
            default: _withCtx(() => [_hoisted_8]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(() => [_createVNode(_component_el_header, null, {
            default: _withCtx(() => [_hoisted_9]),
            _: 1
          }), _createVNode(_component_el_container, null, {
            default: _withCtx(() => [_createVNode(_component_el_aside, {
              width: "200px"
            }, {
              default: _withCtx(() => [_hoisted_10]),
              _: 1
            }), _createVNode(_component_el_main, null, {
              default: _withCtx(() => [_hoisted_11]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(() => [_createVNode(_component_el_header, null, {
            default: _withCtx(() => [_hoisted_12]),
            _: 1
          }), _createVNode(_component_el_container, null, {
            default: _withCtx(() => [_createVNode(_component_el_aside, {
              width: "200px"
            }, {
              default: _withCtx(() => [_hoisted_13]),
              _: 1
            }), _createVNode(_component_el_container, null, {
              default: _withCtx(() => [_createVNode(_component_el_main, null, {
                default: _withCtx(() => [_hoisted_14]),
                _: 1
              }), _createVNode(_component_el_footer, null, {
                default: _withCtx(() => [_hoisted_15]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(() => [_createVNode(_component_el_aside, {
            width: "200px"
          }, {
            default: _withCtx(() => [_hoisted_16]),
            _: 1
          }), _createVNode(_component_el_container, null, {
            default: _withCtx(() => [_createVNode(_component_el_header, null, {
              default: _withCtx(() => [_hoisted_17]),
              _: 1
            }), _createVNode(_component_el_main, null, {
              default: _withCtx(() => [_hoisted_18]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(() => [_createVNode(_component_el_aside, {
            width: "200px"
          }, {
            default: _withCtx(() => [_hoisted_19]),
            _: 1
          }), _createVNode(_component_el_container, null, {
            default: _withCtx(() => [_createVNode(_component_el_header, null, {
              default: _withCtx(() => [_hoisted_20]),
              _: 1
            }), _createVNode(_component_el_main, null, {
              default: _withCtx(() => [_hoisted_21]),
              _: 1
            }), _createVNode(_component_el_footer, null, {
              default: _withCtx(() => [_hoisted_22]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })])]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-message"
      }, null, -1);

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("导航一");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("分组一");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("选项2");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("选项3");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("选项4");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("选项4-1");

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("导航二");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("分组一");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("选项2");

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("选项3");

      const _hoisted_15 = /*#__PURE__*/_createTextVNode("选项4");

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("选项4-1");

      const _hoisted_17 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("导航三");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("分组一");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("选项1");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("选项2");

      const _hoisted_22 = /*#__PURE__*/_createTextVNode("选项3");

      const _hoisted_23 = /*#__PURE__*/_createTextVNode("选项4");

      const _hoisted_24 = /*#__PURE__*/_createTextVNode("选项4-1");

      const _hoisted_25 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting",
        style: {
          "margin-right": "15px"
        }
      }, null, -1);

      const _hoisted_26 = /*#__PURE__*/_createTextVNode("查看");

      const _hoisted_27 = /*#__PURE__*/_createTextVNode("新增");

      const _hoisted_28 = /*#__PURE__*/_createTextVNode("删除");

      const _hoisted_29 = /*#__PURE__*/_createElementVNode("span", null, "王小虎", -1);

      function render(_ctx, _cache) {
        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        const _component_el_sub_menu = _resolveComponent("el-sub-menu");

        const _component_el_menu = _resolveComponent("el-menu");

        const _component_el_aside = _resolveComponent("el-aside");

        const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        const _component_el_dropdown = _resolveComponent("el-dropdown");

        const _component_el_header = _resolveComponent("el-header");

        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _component_el_main = _resolveComponent("el-main");

        const _component_el_container = _resolveComponent("el-container");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_container, {
          style: {
            "height": "500px",
            "border": "1px solid #eee"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_aside, {
            width: "200px",
            style: {
              "background-color": "rgb(238, 241, 246)"
            }
          }, {
            default: _withCtx(() => [_createVNode(_component_el_menu, {
              "default-openeds": ['1', '3']
            }, {
              default: _withCtx(() => [_createVNode(_component_el_sub_menu, {
                index: "1"
              }, {
                title: _withCtx(() => [_hoisted_1, _hoisted_2]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, null, {
                  title: _withCtx(() => [_hoisted_3]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-1"
                  }, {
                    default: _withCtx(() => [_hoisted_4]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "1-2"
                  }, {
                    default: _withCtx(() => [_hoisted_5]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "分组2"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-3"
                  }, {
                    default: _withCtx(() => [_hoisted_6]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_sub_menu, {
                  index: "1-4"
                }, {
                  title: _withCtx(() => [_hoisted_7]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-4-1"
                  }, {
                    default: _withCtx(() => [_hoisted_8]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), _createVNode(_component_el_sub_menu, {
                index: "2"
              }, {
                title: _withCtx(() => [_hoisted_9, _hoisted_10]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, null, {
                  title: _withCtx(() => [_hoisted_11]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "2-1"
                  }, {
                    default: _withCtx(() => [_hoisted_12]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "2-2"
                  }, {
                    default: _withCtx(() => [_hoisted_13]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "分组2"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "2-3"
                  }, {
                    default: _withCtx(() => [_hoisted_14]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_sub_menu, {
                  index: "2-4"
                }, {
                  title: _withCtx(() => [_hoisted_15]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "2-4-1"
                  }, {
                    default: _withCtx(() => [_hoisted_16]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), _createVNode(_component_el_sub_menu, {
                index: "3"
              }, {
                title: _withCtx(() => [_hoisted_17, _hoisted_18]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, null, {
                  title: _withCtx(() => [_hoisted_19]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "3-1"
                  }, {
                    default: _withCtx(() => [_hoisted_20]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "3-2"
                  }, {
                    default: _withCtx(() => [_hoisted_21]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "分组2"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "3-3"
                  }, {
                    default: _withCtx(() => [_hoisted_22]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_sub_menu, {
                  index: "3-4"
                }, {
                  title: _withCtx(() => [_hoisted_23]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "3-4-1"
                  }, {
                    default: _withCtx(() => [_hoisted_24]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_container, null, {
            default: _withCtx(() => [_createVNode(_component_el_header, {
              style: {
                "text-align": "right",
                "font-size": "12px"
              }
            }, {
              default: _withCtx(() => [_createVNode(_component_el_dropdown, null, {
                dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
                  default: _withCtx(() => [_createVNode(_component_el_dropdown_item, null, {
                    default: _withCtx(() => [_hoisted_26]),
                    _: 1
                  }), _createVNode(_component_el_dropdown_item, null, {
                    default: _withCtx(() => [_hoisted_27]),
                    _: 1
                  }), _createVNode(_component_el_dropdown_item, null, {
                    default: _withCtx(() => [_hoisted_28]),
                    _: 1
                  })]),
                  _: 1
                })]),
                default: _withCtx(() => [_hoisted_25]),
                _: 1
              }), _hoisted_29]),
              _: 1
            }), _createVNode(_component_el_main, null, {
              default: _withCtx(() => [_createVNode(_component_el_table, {
                data: _ctx.tableData
              }, {
                default: _withCtx(() => [_createVNode(_component_el_table_column, {
                  prop: "date",
                  label: "日期",
                  width: "140"
                }), _createVNode(_component_el_table_column, {
                  prop: "name",
                  label: "姓名",
                  width: "120"
                }), _createVNode(_component_el_table_column, {
                  prop: "address",
                  label: "地址"
                })]),
                _: 1
              }, 8, ["data"])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {
        data() {
          const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          };
          return {
            tableData: Array(20).fill(item)
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/container.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/container.md



containervue_type_script_lang_ts.render = containervue_type_template_id_0b78a628_render

/* harmony default export */ var container = __webpack_exports__["default"] = (containervue_type_script_lang_ts);

/***/ })

}]);