(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/upload.md?vue&type=template&id=67c77f24

const uploadvue_type_template_id_67c77f24_hoisted_1 = {
  class: "content element-doc"
};

const uploadvue_type_template_id_67c77f24_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Upload ");

const uploadvue_type_template_id_67c77f24_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Upload files by clicking or drag-and-drop", -1);

const uploadvue_type_template_id_67c77f24_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Click to upload files ");

const uploadvue_type_template_id_67c77f24_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Customize upload button type and text using "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "limit"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "on-exceed"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to limit the maximum number of uploads allowed and specify method when the limit is exceeded. Plus, you can abort removing a file in the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "before-remove"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" hook.")])], -1);

const uploadvue_type_template_id_67c77f24_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :before-remove=\"beforeRemove\"\n  multiple\n  :limit=\"3\"\n  :on-exceed=\"handleExceed\"\n  :file-list=\"fileList\"\n>\n  <el-button size=\"small\" type=\"primary\">Click to upload</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">jpg/png files with a size less than 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePreview(file) {\n        console.log(file)\n      },\n      handleExceed(files, fileList) {\n        this.$message.warning(\n          `The limit is 3, you selected ${\n            files.length\n          } files this time, add up to ${\n            files.length + fileList.length\n          } totally`\n        )\n      },\n      beforeRemove(file, fileList) {\n        return this.$confirm(`Cancel the transfert of ${file.name} ?`)\n      },\n    },\n  }\n</script>\n")], -1);

const uploadvue_type_template_id_67c77f24_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("User avatar upload ");

const uploadvue_type_template_id_67c77f24_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "before-upload"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" hook to limit the upload file format and size.")], -1);

const uploadvue_type_template_id_67c77f24_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  class=\"avatar-uploader\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :show-file-list=\"false\"\n  :on-success=\"handleAvatarSuccess\"\n  :before-upload=\"beforeAvatarUpload\"\n>\n  <img v-if=\"imageUrl\" :src=\"imageUrl\" class=\"avatar\" />\n  <i v-else class=\"el-icon-plus avatar-uploader-icon\"></i>\n</el-upload>\n\n<style>\n  .avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n  }\n  .avatar-uploader .el-upload:hover {\n    border-color: #409eff;\n  }\n  .avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 178px;\n    height: 178px;\n    line-height: 178px;\n    text-align: center;\n  }\n  .avatar {\n    width: 178px;\n    height: 178px;\n    display: block;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        imageUrl: '',\n      }\n    },\n    methods: {\n      handleAvatarSuccess(res, file) {\n        this.imageUrl = URL.createObjectURL(file.raw)\n      },\n      beforeAvatarUpload(file) {\n        const isJPG = file.type === 'image/jpeg'\n        const isLt2M = file.size / 1024 / 1024 < 2\n\n        if (!isJPG) {\n          this.$message.error('Avatar picture must be JPG format!')\n        }\n        if (!isLt2M) {\n          this.$message.error('Avatar picture size can not exceed 2MB!')\n        }\n        return isJPG && isLt2M\n      },\n    },\n  }\n</script>\n")], -1);

const uploadvue_type_template_id_67c77f24_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Photo Wall ");

const uploadvue_type_template_id_67c77f24_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "list-type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to change the fileList style.")], -1);

const uploadvue_type_template_id_67c77f24_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  list-type=\"picture-card\"\n  :on-preview=\"handlePictureCardPreview\"\n  :on-remove=\"handleRemove\"\n>\n  <i class=\"el-icon-plus\"></i>\n</el-upload>\n<el-dialog v-model=\"dialogVisible\">\n  <img width=\"100%\" :src=\"dialogImageUrl\" alt=\"\" />\n</el-dialog>\n<script>\n  export default {\n    data() {\n      return {\n        dialogImageUrl: '',\n        dialogVisible: false,\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePictureCardPreview(file) {\n        this.dialogImageUrl = file.url\n        this.dialogVisible = true\n      },\n    },\n  }\n</script>\n")], -1);

const uploadvue_type_template_id_67c77f24_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Custom file thumbnail ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "scoped-slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to change default thumbnail template.")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload action=\"#\" list-type=\"picture-card\" :auto-upload=\"false\">\n  <template #default>\n    <i class=\"el-icon-plus\"></i>\n  </template>\n  <template #file=\"{file}\">\n    <div>\n      <img class=\"el-upload-list__item-thumbnail\" :src=\"file.url\" alt=\"\" />\n      <span class=\"el-upload-list__item-actions\">\n        <span\n          class=\"el-upload-list__item-preview\"\n          @click=\"handlePictureCardPreview(file)\"\n        >\n          <i class=\"el-icon-zoom-in\"></i>\n        </span>\n        <span\n          v-if=\"!disabled\"\n          class=\"el-upload-list__item-delete\"\n          @click=\"handleDownload(file)\"\n        >\n          <i class=\"el-icon-download\"></i>\n        </span>\n        <span\n          v-if=\"!disabled\"\n          class=\"el-upload-list__item-delete\"\n          @click=\"handleRemove(file)\"\n        >\n          <i class=\"el-icon-delete\"></i>\n        </span>\n      </span>\n    </div>\n  </template>\n</el-upload>\n<el-dialog v-model=\"dialogVisible\">\n  <img width=\"100%\" :src=\"dialogImageUrl\" alt=\"\" />\n</el-dialog>\n<script>\n  export default {\n    data() {\n      return {\n        dialogImageUrl: '',\n        dialogVisible: false,\n        disabled: false,\n      }\n    },\n    methods: {\n      handleRemove(file) {\n        console.log(file)\n      },\n      handlePictureCardPreview(file) {\n        this.dialogImageUrl = file.url\n        this.dialogVisible = true\n      },\n      handleDownload(file) {\n        console.log(file)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("FileList with thumbnail ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :file-list=\"fileList\"\n  list-type=\"picture\"\n>\n  <el-button size=\"small\" type=\"primary\">Click to upload</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">jpg/png files with a size less than 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList)\n      },\n      handlePreview(file) {\n        console.log(file)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("File list control ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "on-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" hook function to control upload file list")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-change=\"handleChange\"\n  :file-list=\"fileList\"\n>\n  <el-button size=\"small\" type=\"primary\">Click to upload</el-button>\n  <template #tip>\n    <div class=\"el-upload__tip\">jpg/png files with a size less than 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    data() {\n      return {\n        fileList: [\n          {\n            name: 'food.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n          {\n            name: 'food2.jpeg',\n            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleChange(file, fileList) {\n        this.fileList = fileList.slice(-3)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Drag to upload ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "You can drag your file to a certain area to upload it.", -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  drag\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :on-preview=\"handlePreview\"\n  :on-remove=\"handleRemove\"\n  :file-list=\"fileList\"\n  multiple\n>\n  <i class=\"el-icon-upload\"></i>\n  <div class=\"el-upload__text\">Drop file here or <em>click to upload</em></div>\n  <template #tip>\n    <div class=\"el-upload__tip\">jpg/png files with a size less than 500kb</div>\n  </template>\n</el-upload>\n")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Manual upload ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-upload\n  class=\"upload-demo\"\n  ref=\"upload\"\n  action=\"https://jsonplaceholder.typicode.com/posts/\"\n  :auto-upload=\"false\"\n>\n  <template #trigger>\n    <el-button size=\"small\" type=\"primary\">select file</el-button>\n  </template>\n  <el-button\n    style=\"margin-left: 10px;\"\n    size=\"small\"\n    type=\"success\"\n    @click=\"submitUpload\"\n    >upload to server</el-button\n  >\n  <template #tip>\n    <div class=\"el-upload__tip\">jpg/png files with a size less than 500kb</div>\n  </template>\n</el-upload>\n<script>\n  export default {\n    methods: {\n      submitUpload() {\n        this.$refs.upload.submit()\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Default")])], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "action"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "required, request URL"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "headers"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "request headers"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "object"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "method"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "set upload request method"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "post/put"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "post")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "multiple"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether uploading multiple files is permitted"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "additions options of request"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "object"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "key name for uploaded file"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "file")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "with-credentials"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether cookies are sent"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-file-list"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether to show the uploaded file list"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "drag"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether to activate drag and drop mode"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "accept", -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("accepted ");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("file types");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", will not work when ");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "thumbnail-mode", -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is ");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true", -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string", -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-preview"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hook function when clicking the uploaded files"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(file)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-remove"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hook function when files are removed"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(file, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-success"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hook function when uploaded successfully"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(response, file, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-error"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hook function when some errors occurs"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(err, file, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-progress"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hook function when some progress occurs"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(event, file, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hook function when select file or upload file success or upload file fail"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(file, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "before-upload"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("hook function before uploading with the file to be uploaded as its parameter. If "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is returned or a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is returned and then is rejected, uploading will be aborted")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(file)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "before-remove"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("hook function before removing a file with the file and file list as its parameters. If "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is returned or a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Promise"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is returned and then is rejected, removing will be aborted.")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(file, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "thumbnail-mode"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether thumbnail is displayed"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "file-list"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "default uploaded files, e.g. [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "array"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "[]")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "list-type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "type of fileList"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "text/picture/picture-card"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "text")], -1);

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "auto-upload"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether to auto upload file"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "http-request"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "override default xhr behavior, allowing you to implement your own upload-file's request"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether to disable upload"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "limit"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "maximum number of uploads allowed"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "on-exceed"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hook function when limit is exceeded"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(files, fileList)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-")], -1);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slots ");

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "content which triggers file dialog")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "tip"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "content of tips")])])], -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Methods ");

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Methods Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>clearFiles</td><td>clear the uploaded file list (this method is not supported in the <code>before-upload</code> hook)</td><td>—</td></tr><tr><td>abort</td><td>cancel upload request</td><td>（ file: fileList&#39;s item ）</td></tr><tr><td>submit</td><td>upload the file list manually</td><td>—</td></tr></tbody></table>", 1);

function uploadvue_type_template_id_67c77f24_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_element_demo6 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo6");

  const _component_element_demo7 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo7");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", uploadvue_type_template_id_67c77f24_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "upload",
    content: "Upload",
    href: "#upload",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_67c77f24_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#upload"
    })]),
    _: 1
  }), uploadvue_type_template_id_67c77f24_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "click-to-upload-files",
    content: "Click to upload files",
    href: "#click-to-upload-files",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_67c77f24_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#click-to-upload-files"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_67c77f24_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_67c77f24_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "user-avatar-upload",
    content: "User avatar upload",
    href: "#user-avatar-upload",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_67c77f24_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#user-avatar-upload"
    })]),
    _: 1
  }), uploadvue_type_template_id_67c77f24_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_67c77f24_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "photo-wall",
    content: "Photo Wall",
    href: "#photo-wall",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_67c77f24_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#photo-wall"
    })]),
    _: 1
  }), uploadvue_type_template_id_67c77f24_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_67c77f24_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "custom-file-thumbnail",
    content: "Custom file thumbnail",
    href: "#custom-file-thumbnail",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [uploadvue_type_template_id_67c77f24_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#custom-file-thumbnail"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "filelist-with-thumbnail",
    content: "FileList with thumbnail",
    href: "#filelist-with-thumbnail",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#filelist-with-thumbnail"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "file-list-control",
    content: "File list control",
    href: "#file-list-control",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#file-list-control"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "drag-to-upload",
    content: "Drag to upload",
    href: "#drag-to-upload",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#drag-to-upload"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "manual-upload",
    content: "Manual upload",
    href: "#manual-upload",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#manual-upload"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_27, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_37, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39]),
    _: 1
  }), _hoisted_40, _hoisted_41, _hoisted_42, _hoisted_43]), _hoisted_44, _hoisted_45, _hoisted_46]), _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52, _hoisted_53, _hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58, _hoisted_59, _hoisted_60, _hoisted_61, _hoisted_62])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slots",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_63, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots"
    })]),
    _: 1
  }), _hoisted_64, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methods",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_65, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_66, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/upload.md?vue&type=template&id=67c77f24

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/upload.md?vue&type=script&lang=ts

/* harmony default export */ var uploadvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to upload");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", {
        class: "el-upload__tip"
      }, "jpg/png files with a size less than 500kb", -1);

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "on-preview": _ctx.handlePreview,
          "on-remove": _ctx.handleRemove,
          "before-remove": _ctx.beforeRemove,
          multiple: "",
          limit: 3,
          "on-exceed": _ctx.handleExceed,
          "file-list": _ctx.fileList
        }, {
          tip: _withCtx(() => [_hoisted_2]),
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small",
            type: "primary"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }, 8, ["on-preview", "on-remove", "before-remove", "on-exceed", "file-list"])]);
      }

      const democomponentExport = {
        data() {
          return {
            fileList: [{
              name: 'food.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, {
              name: 'food2.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }]
          };
        },

        methods: {
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },

          handlePreview(file) {
            console.log(file);
          },

          handleExceed(files, fileList) {
            this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
          },

          beforeRemove(file, fileList) {
            return this.$confirm(`Cancel the transfert of ${file.name} ?`);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createCommentVNode: _createCommentVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = ["src"];
      const _hoisted_2 = {
        key: 1,
        class: "el-icon-plus avatar-uploader-icon"
      };

      function render(_ctx, _cache) {
        const _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          class: "avatar-uploader",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "show-file-list": false,
          "on-success": _ctx.handleAvatarSuccess,
          "before-upload": _ctx.beforeAvatarUpload
        }, {
          default: _withCtx(() => [_ctx.imageUrl ? (_openBlock(), _createElementBlock("img", {
            key: 0,
            src: _ctx.imageUrl,
            class: "avatar"
          }, null, 8, _hoisted_1)) : (_openBlock(), _createElementBlock("i", _hoisted_2))]),
          _: 1
        }, 8, ["on-success", "before-upload"])]);
      }

      const democomponentExport = {
        data() {
          return {
            imageUrl: ''
          };
        },

        methods: {
          handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
          },

          beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
              this.$message.error('Avatar picture must be JPG format!');
            }

            if (!isLt2M) {
              this.$message.error('Avatar picture size can not exceed 2MB!');
            }

            return isJPG && isLt2M;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-plus"
      }, null, -1);

      const _hoisted_2 = ["src"];

      function render(_ctx, _cache) {
        const _component_el_upload = _resolveComponent("el-upload");

        const _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          action: "https://jsonplaceholder.typicode.com/posts/",
          "list-type": "picture-card",
          "on-preview": _ctx.handlePictureCardPreview,
          "on-remove": _ctx.handleRemove
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["on-preview", "on-remove"]), _createVNode(_component_el_dialog, {
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.dialogVisible = $event)
        }, {
          default: _withCtx(() => [_createElementVNode("img", {
            width: "100%",
            src: _ctx.dialogImageUrl,
            alt: ""
          }, null, 8, _hoisted_2)]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            dialogImageUrl: '',
            dialogVisible: false
          };
        },

        methods: {
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },

          handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createCommentVNode: _createCommentVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-plus"
      }, null, -1);

      const _hoisted_2 = ["src"];
      const _hoisted_3 = {
        class: "el-upload-list__item-actions"
      };
      const _hoisted_4 = ["onClick"];

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-zoom-in"
      }, null, -1);

      const _hoisted_6 = [_hoisted_5];
      const _hoisted_7 = ["onClick"];

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-download"
      }, null, -1);

      const _hoisted_9 = [_hoisted_8];
      const _hoisted_10 = ["onClick"];

      const _hoisted_11 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-delete"
      }, null, -1);

      const _hoisted_12 = [_hoisted_11];
      const _hoisted_13 = ["src"];

      function render(_ctx, _cache) {
        const _component_el_upload = _resolveComponent("el-upload");

        const _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          action: "#",
          "list-type": "picture-card",
          "auto-upload": false
        }, {
          default: _withCtx(() => [_hoisted_1]),
          file: _withCtx(({
            file
          }) => [_createElementVNode("div", null, [_createElementVNode("img", {
            class: "el-upload-list__item-thumbnail",
            src: file.url,
            alt: ""
          }, null, 8, _hoisted_2), _createElementVNode("span", _hoisted_3, [_createElementVNode("span", {
            class: "el-upload-list__item-preview",
            onClick: $event => _ctx.handlePictureCardPreview(file)
          }, _hoisted_6, 8, _hoisted_4), !_ctx.disabled ? (_openBlock(), _createElementBlock("span", {
            key: 0,
            class: "el-upload-list__item-delete",
            onClick: $event => _ctx.handleDownload(file)
          }, _hoisted_9, 8, _hoisted_7)) : _createCommentVNode("", true), !_ctx.disabled ? (_openBlock(), _createElementBlock("span", {
            key: 1,
            class: "el-upload-list__item-delete",
            onClick: $event => _ctx.handleRemove(file)
          }, _hoisted_12, 8, _hoisted_10)) : _createCommentVNode("", true)])])]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.dialogVisible = $event)
        }, {
          default: _withCtx(() => [_createElementVNode("img", {
            width: "100%",
            src: _ctx.dialogImageUrl,
            alt: ""
          }, null, 8, _hoisted_13)]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false
          };
        },

        methods: {
          handleRemove(file) {
            console.log(file);
          },

          handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          },

          handleDownload(file) {
            console.log(file);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to upload");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", {
        class: "el-upload__tip"
      }, "jpg/png files with a size less than 500kb", -1);

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "on-preview": _ctx.handlePreview,
          "on-remove": _ctx.handleRemove,
          "file-list": _ctx.fileList,
          "list-type": "picture"
        }, {
          tip: _withCtx(() => [_hoisted_2]),
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small",
            type: "primary"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }, 8, ["on-preview", "on-remove", "file-list"])]);
      }

      const democomponentExport = {
        data() {
          return {
            fileList: [{
              name: 'food.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, {
              name: 'food2.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }]
          };
        },

        methods: {
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },

          handlePreview(file) {
            console.log(file);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to upload");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", {
        class: "el-upload__tip"
      }, "jpg/png files with a size less than 500kb", -1);

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "on-change": _ctx.handleChange,
          "file-list": _ctx.fileList
        }, {
          tip: _withCtx(() => [_hoisted_2]),
          default: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small",
            type: "primary"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }, 8, ["on-change", "file-list"])]);
      }

      const democomponentExport = {
        data() {
          return {
            fileList: [{
              name: 'food.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, {
              name: 'food2.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }]
          };
        },

        methods: {
          handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
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
        class: "el-icon-upload"
      }, null, -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", {
        class: "el-upload__text"
      }, [/*#__PURE__*/_createTextVNode("Drop file here or "), /*#__PURE__*/_createElementVNode("em", null, "click to upload")], -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", {
        class: "el-upload__tip"
      }, "jpg/png files with a size less than 500kb", -1);

      function render(_ctx, _cache) {
        const _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          drag: "",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "on-preview": _ctx.handlePreview,
          "on-remove": _ctx.handleRemove,
          "file-list": _ctx.fileList,
          multiple: ""
        }, {
          tip: _withCtx(() => [_hoisted_3]),
          default: _withCtx(() => [_hoisted_1, _hoisted_2]),
          _: 1
        }, 8, ["on-preview", "on-remove", "file-list"])]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo7": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("select file");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("upload to server");

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", {
        class: "el-upload__tip"
      }, "jpg/png files with a size less than 500kb", -1);

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_upload = _resolveComponent("el-upload");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_upload, {
          class: "upload-demo",
          ref: "upload",
          action: "https://jsonplaceholder.typicode.com/posts/",
          "auto-upload": false
        }, {
          trigger: _withCtx(() => [_createVNode(_component_el_button, {
            size: "small",
            type: "primary"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          tip: _withCtx(() => [_hoisted_3]),
          default: _withCtx(() => [_createVNode(_component_el_button, {
            style: {
              "margin-left": "10px"
            },
            size: "small",
            type: "success",
            onClick: _ctx.submitUpload
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }, 8, ["onClick"])]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        methods: {
          submitUpload() {
            this.$refs.upload.submit();
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/upload.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/upload.md



uploadvue_type_script_lang_ts.render = uploadvue_type_template_id_67c77f24_render

/* harmony default export */ var upload = __webpack_exports__["default"] = (uploadvue_type_script_lang_ts);

/***/ })

}]);