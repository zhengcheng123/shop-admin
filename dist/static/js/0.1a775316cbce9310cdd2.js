webpackJsonp([0],{"1rHw":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"image-upload"},[e._l(e.previewImages,function(t,o){return i("div",{key:o,staticClass:"imgHeader"},["info"===e.pageAction?i("i",{staticClass:"ifont"}):e._e(),e._v(" "),"edit"===e.pageAction?i("i",{staticClass:"el-icon-close ifont",on:{click:function(t){return e.detailImg(o)}}}):e._e(),e._v(" "),i("img",{attrs:{src:t,alt:"未获取到图片",width:e.width,height:e.height},on:{click:function(t){return e.replaceImg(o)}}})])}),e._v(" "),e.previewImages.length<e.limit&&"viewImg"!==e.mode?i("label",{style:"width: "+e.width+"; height: "+e.height+";",attrs:{for:e.name+"uploader"}},[i("i",{staticClass:"el-icon-plus"})]):e._e(),e._v(" "),i("input",{staticClass:"upfile",attrs:{accept:e.accept,multiple:e.multiple,type:"file",id:e.name+"uploader",hidden:""},on:{change:e.handleFileChange}})],2)},a=[],r={render:o,staticRenderFns:a};t.a=r},"5njq":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[i("i",{staticClass:"fa fa-shopping-bag",attrs:{"aria-hidden":"true"}}),e._v("\n        商品管理\n      ")]),e._v(" "),i("el-breadcrumb-item",[e._v("商品详情")])],1)],1),e._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"row goods-row"},[i("el-button",{staticClass:"f-left",on:{click:function(t){return e.$router.push("/api/goods")}}},[e._v("返回")]),e._v(" "),"info"===e.pageAction?i("el-button",{staticClass:"f-left",on:{click:function(t){return e.$router.push("edit")}}},[i("i",{staticClass:"el-icon-edit"}),e._v("编辑\n      ")]):e._e(),e._v(" "),"edit"===e.pageAction?i("el-button",{staticClass:"f-left",on:{click:e.updateGoods}},[i("i",{staticClass:"el-icon-bottom"}),e._v("保存\n      ")]):e._e()],1),e._v(" "),i("div",{staticClass:"form-section"},[i("div",{staticClass:"section-head"},[e._v("基本信息")]),e._v(" "),i("div",{staticClass:"section-body"},[i("el-form",{ref:"goodsCommonForm",attrs:{model:e.infoGood,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"详细类别：",prop:"typeId"}},["info"===e.pageAction?i("span",[e._v(e._s(e.type))]):i("el-radio-group",{on:{change:function(t){return e.categorychange(e.categoryTypeId)}},model:{value:e.categoryTypeId,callback:function(t){e.categoryTypeId=t},expression:"categoryTypeId"}},e._l(e.categoryType,function(t){return i("el-radio",{key:t.id,staticClass:"is-bordered",attrs:{label:t.id,value:t.id}},[e._v("\n               "+e._s(t.typeName)+"\n            ")])}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"商品品牌：",prop:"grandId"}},["info"===e.pageAction?i("span",[e._v(e._s(e.grandId.name))]):i("el-select",{attrs:{size:"small",placeholder:"请选择品牌"},model:{value:e.grandId.id,callback:function(t){e.$set(e.grandId,"id","string"==typeof t?t.trim():t)},expression:"grandId.id"}},e._l(e.grands,function(e,t){return i("el-option",{key:t,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"商品名称：",prop:"name"}},["info"===e.pageAction?i("span",[e._v(e._s(e.infoGood.name))]):i("el-input",{staticClass:"select-input",attrs:{disabled:"",size:"small"},model:{value:e.infoGood.name,callback:function(t){e.$set(e.infoGood,"name","string"==typeof t?t.trim():t)},expression:"infoGood.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"商品描述：",prop:"description"}},["info"===e.pageAction?i("span",[e._v(e._s(e.infoGood.description))]):i("el-input",{staticClass:"select-input",attrs:{size:"small"},model:{value:e.infoGood.description,callback:function(t){e.$set(e.infoGood,"description","string"==typeof t?t.trim():t)},expression:"infoGood.description"}})],1)],1),e._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-label"},[e._v("商品图片：")]),e._v(" "),i("div",{staticClass:"item-body"},[i("image-upload",{ref:"imageUploader",attrs:{externalPreviewImages:e.goodImgs,uploaderMode:"info"===e.pageAction?"viewImg":"replace",limit:6,name:"icon",accept:"image/*",uploadUrl:e.$IMGHOST+"upload",multiple:!0,success:e.saveGoods,width:"100px",height:"100px"}})],1)]),e._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-label"},[e._v("详情图片：")]),e._v(" "),i("div",{staticClass:"item-body"},[i("image-upload",{ref:"imageInfoUploader",attrs:{externalPreviewImages:e.infoStore,uploaderMode:"info"===e.pageAction?"viewImg":"replace",limit:20,name:"icons",accept:"image/*",uploadUrl:e.$IMGHOST+"upload",multiple:!0,success:e.saveImg,width:"100px",height:"100px"}})],1)])],1)]),e._v(" "),i("div",{staticClass:"form-section"},[i("div",{staticClass:"section-head"},[e._v("库存/规格")]),e._v(" "),"edit"===e.pageAction?i("div",{staticClass:"section-body"},[i("div",{staticClass:"item"},[i("div",{staticClass:"item-label"},[e._v("商品规格：")]),e._v(" "),i("div",{staticClass:"item-body"},[i("div",{staticClass:"formats"},[i("div",{staticClass:"select-attr"},[i("el-select",{staticStyle:{width:"100px"},attrs:{size:"small",placeholder:"规格","value-key":"id"},model:{value:e.tempAttr,callback:function(t){e.tempAttr=t},expression:"tempAttr"}},e._l(e.goodAttrs,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e}})}),1)],1),e._v(" "),i("ul",e._l(e.predictAttrs,function(t,o){return i("li",{key:o,staticClass:"predict-attr"},[i("div",{staticClass:"predict-attr-head"},[i("label",[e._v(e._s(t.name))])]),e._v(" "),i("ul",{staticClass:"attr-list"},[e._l(t.innerAttrs,function(o,a){return i("li",{key:a,staticClass:"attr"},[i("el-input",{staticClass:"label-input",attrs:{size:"small"},on:{blur:function(t){return e.getchangeInput(o)}},model:{value:o.value,callback:function(t){e.$set(o,"value","string"==typeof t?t.trim():t)},expression:"innerAttr.value"}}),e._v(" "),o.oldvalue?i("i",{staticClass:"el-icon-remove icon-btn danger",on:{click:function(i){return e.removeArrItem(t.innerAttrs,a)}}}):e._e()],1)}),e._v(" "),i("i",{staticClass:"el-icon-circle-plus icon-btn primary",on:{click:function(i){return e.addInnerAttr(t)}}})],2)])}),0),e._v(" "),i("el-button",{attrs:{size:"small"},on:{click:e.generatePredictGoods}},[e._v("确认规格")])],1)])])]):e._e(),e._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-label"},[e._v("详细商品：")]),e._v(" "),i("div",{staticClass:"item-body no-flex"},[i("el-table",{staticStyle:{width:"900px"},attrs:{data:e.attrGoods,"header-cell-style":{background:"#E8EAEE",height:"48px"},"row-class-name":e.tableRowRed}},[e._l(this.predictAttrs,function(e){return i("el-table-column",{key:e.id,attrs:{align:"center",prop:"attr_"+e.id,label:e.name,"show-overflow-tooltip":""}})}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"sellSize",label:"已售"}}),e._v(" "),i("el-table-column",{attrs:{align:"center","min-width":"120",prop:"canSellSize",label:"可售库存"},scopedSlots:e._u([{key:"default",fn:function(t){return["info"===e.pageAction?i("span",[e._v(e._s(t.row.canSellSize))]):i("el-input",{staticClass:"sm-input",attrs:{size:"small",name:"myInput",required:""},on:{input:function(i){return e.numInput(t.row)}},model:{value:t.row.canSellSize,callback:function(i){e.$set(t.row,"canSellSize","string"==typeof i?i.trim():i)},expression:"scope.row.canSellSize"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center","min-width":"120",prop:"size",label:"库存"},scopedSlots:e._u([{key:"default",fn:function(t){return["info"===e.pageAction?i("span",[e._v(e._s(t.row.size))]):i("el-input",{staticClass:"sm-input",attrs:{size:"small",required:""},on:{input:function(i){return e.numInput2(t.row)}},model:{value:t.row.size,callback:function(i){e.$set(t.row,"size","string"==typeof i?i.trim():i)},expression:"scope.row.size"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center","min-width":"120",prop:"price",label:"价格(元)"},scopedSlots:e._u([{key:"default",fn:function(t){return["info"===e.pageAction?i("span",[e._v(e._s(e.pennyToDollar(t.row.price)))]):i("el-input",{staticClass:"sm-input",attrs:{size:"small",required:""},on:{input:function(i){return e.checknum(t.row)}},model:{value:t.row.priceLabel,callback:function(i){e.$set(t.row,"priceLabel","string"==typeof i?i.trim():i)},expression:"scope.row.priceLabel"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center","min-width":"120",prop:"procurementPrice",label:"成本(元)"},scopedSlots:e._u([{key:"default",fn:function(t){return["info"===e.pageAction?i("span",[e._v(e._s(t.row.procurementPrice))]):i("el-input",{staticClass:"sm-input",attrs:{size:"small",required:""},on:{input:function(i){return e.checknum2(t.row)}},model:{value:t.row.procurementPrice,callback:function(i){e.$set(t.row,"procurementPrice","string"==typeof i?i.trim():i)},expression:"scope.row.procurementPrice"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center","min-width":"120",prop:"weight",label:"单品重量(kg)"},scopedSlots:e._u([{key:"default",fn:function(t){return["info"===e.pageAction?i("span",[e._v(e._s(t.row.weight))]):i("el-input",{staticClass:"sm-input",attrs:{size:"small",required:""},on:{input:function(i){return e.checknum2(t.row)}},model:{value:t.row.weight,callback:function(i){e.$set(t.row,"weight","string"==typeof i?i.trim():i)},expression:"scope.row.weight"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center","min-width":"100",prop:"state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(1==t.row.state?"已上架":"已下架"))])]}}])}),e._v(" "),"edit"===e.pageAction?i("el-table-column",{attrs:{align:"center","min-width":"120",prop:"state",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"text"},on:{click:function(i){return e.isFrame(t.row)}}},[e._v(e._s(1==t.row.state?"下架":"上架"))])]}}],null,!1,290189273)}):e._e()],2)],1)])]),e._v(" "),i("div",{staticClass:"form-section"},[i("div",{staticClass:"section-head"},[e._v("物流")]),e._v(" "),i("div",{staticClass:"section-body"},[i("div",{staticClass:"item"},[i("div",{staticClass:"item-label"},[e._v("配送方式：")]),e._v(" "),i("div",{staticClass:"item-body",staticStyle:{"line-height":"41px"}},[i("el-radio",{attrs:{disabled:"info"===e.pageAction,label:"1"},model:{value:e.infoGood.logisticsType,callback:function(t){e.$set(e.infoGood,"logisticsType",t)},expression:"infoGood.logisticsType"}},[e._v("物流配送")]),e._v(" "),i("el-radio",{attrs:{disabled:"info"===e.pageAction,label:"2"},model:{value:e.infoGood.logisticsType,callback:function(t){e.$set(e.infoGood,"logisticsType",t)},expression:"infoGood.logisticsType"}},[e._v("支持自提")]),e._v(" "),i("el-radio",{attrs:{disabled:"info"===e.pageAction,label:"3"},model:{value:e.infoGood.logisticsType,callback:function(t){e.$set(e.infoGood,"logisticsType",t)},expression:"infoGood.logisticsType"}},[e._v("物流+自提")])],1)])])])])])},a=[],r={render:o,staticRenderFns:a};t.a=r},"9bBU":function(e,t,i){i("mClu");var o=i("FeBl").Object;e.exports=function(e,t,i){return o.defineProperty(e,t,i)}},BO1k:function(e,t,i){e.exports={default:i("fxRn"),__esModule:!0}},C4MV:function(e,t,i){e.exports={default:i("9bBU"),__esModule:!0}},Cdx3:function(e,t,i){var o=i("sB3e"),a=i("lktj");i("uqUo")("keys",function(){return function(e){return a(o(e))}})},H97s:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,".image-upload[data-v-1c5469a1]{display:-webkit-box}.image-upload img[data-v-1c5469a1]{margin-right:10px}.image-upload label[data-v-1c5469a1]{display:block;font-size:20px;color:#8c939d;line-height:100px;text-align:center;border:1.8px dashed #ccc;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.image-upload label[data-v-1c5469a1]:hover{border-color:#409eff}.imgHeader[data-v-1c5469a1]{position:relative}.ifont[data-v-1c5469a1]{position:absolute;right:0;top:7px;left:76px;color:#333;font-size:20px}",""])},Jc0c:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,'.steps[data-v-75151e2e]{margin:10px auto;text-align:center;max-width:800px}.goods-info[data-v-75151e2e]{text-align:center;max-width:1300px;margin:auto}.btn-group .el-button[data-v-75151e2e]{margin:0}.btn-group .el-button[data-v-75151e2e]:not(:last-child):after{content:"";border:1px solid #ddd;height:3px;margin:0 5px}.attr>[data-v-75151e2e]{margin-right:10px}.inline-item[data-v-75151e2e]{margin-right:20px}.inline-item label[data-v-75151e2e]{width:80px;color:#666}.inline-item .el-input[data-v-75151e2e]{width:120px}.form-section[data-v-75151e2e]{border-radius:3px;background-color:#fff}.form-section .section-head[data-v-75151e2e]{background-color:#f5f7fb;font-weight:600;height:40px;line-height:40px;padding-left:48px}.form-section .section-body[data-v-75151e2e]{padding:30px 20px}.item[data-v-75151e2e]{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:14px;color:#5a5e66;margin-top:20px}.item .item-label[data-v-75151e2e]{width:100px;height:40px;line-height:40px;text-align:right;padding-right:20px}.item-body[data-v-75151e2e]{overflow-x:auto;width:550px}.label-input[data-v-75151e2e]{width:100px}.icon-btn[data-v-75151e2e]{font-size:20px;cursor:pointer}.danger[data-v-75151e2e]{color:#f56c6c}.primary[data-v-75151e2e]{color:#409eff}.attr-list[data-v-75151e2e]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.predict-attr-head[data-v-75151e2e],.select-attr[data-v-75151e2e]{width:200px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.sm-input[data-v-75151e2e]{width:100px}.error-input .el-input__inner[data-v-75151e2e]{border-color:#f56c6c}.el-table--group[data-v-75151e2e]:after,.el-table[data-v-75151e2e]:before,.item-body .el-table--border[data-v-75151e2e]:after{content:normal;display:none}.item-body .el-table[data-v-75151e2e]{padding:10px}.attr-list[data-v-75151e2e]{max-width:800px;height:auto;display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.attr-list li[data-v-75151e2e]{padding-bottom:10px}',""])},ZyTD:function(e,t,i){var o=i("vv7a");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i("rjj0")("63264488",o,!0,{})},bOdI:function(e,t,i){"use strict";t.__esModule=!0;var o=i("C4MV"),a=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(e,t,i){return t in e?(0,a.default)(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},"bnA/":function(e,t,i){"use strict";function o(e){i("jeAz")}var a=i("irJt"),r=i("1rHw"),n=i("VU/8"),s=o,l=n(a.a,r.a,!1,s,"data-v-1c5469a1",null);t.a=l.exports},cI1W:function(e,t,i){var o=i("Jc0c");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i("rjj0")("b7401830",o,!0,{})},djAq:function(e,t,i){"use strict";function o(e){i("cI1W"),i("ZyTD")}Object.defineProperty(t,"__esModule",{value:!0});var a=i("qP5V"),r=i("5njq"),n=i("VU/8"),s=o,l=n(a.a,r.a,!1,s,"data-v-75151e2e",null);t.default=l.exports},fZjL:function(e,t,i){e.exports={default:i("jFbC"),__esModule:!0}},fxRn:function(e,t,i){i("+tPU"),i("zQR9"),e.exports=i("g8Ux")},g8Ux:function(e,t,i){var o=i("77Pl"),a=i("3fs2");e.exports=i("FeBl").getIterator=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return o(t.call(e))}},irJt:function(e,t,i){"use strict";var o=i("BO1k"),a=i.n(o),r=i("//Fk"),n=i.n(r);t.a={props:["name","uploaderMode","externalPreviewImages","limit","accept","uploadUrl","success","width","height","pageAction2"],data:function(){return{files:[],previewImages:this.externalPreviewImages||[],replaceIndex:-1,uploadedCount:0,replacedImg:new Array(this.externalPreviewImages.length),uploadRes:[]}},computed:{mode:function(){return this.uploaderMode},pageAction:function(){var e=this.$route.path.split("/").pop();return"store"===e?this.pageAction2:e}},watch:{externalPreviewImages:function(){"upload"!==this.mode&&(this.previewImages=this.externalPreviewImages||[])}},methods:{addFile:function(e){var t=this;console.log(e),console.log(this.accept);var i=e.size/1024<200;if(this.accept&&!e.type.match(this.accept.split("/")[0]))throw Error("from imageUpload：“文件格式不正确”");new n.a(function(o,a){var r=new FormData;if(i)r.append("file",e),-1!==t.replaceIndex?(t.files.splice(t.replaceIndex,1,e),t.previewImages.splice(t.replaceIndex,1,window.URL.createObjectURL(e)),t.replacedImg[t.replaceIndex]=!0,t.replaceIndex=-1):t.files.length<t.limit&&(t.files.push(e),t.previewImages.push(window.URL.createObjectURL(e)));else{var n=t;t.photoCompress(e,{quality:.1},function(t){var o=n.convertBase64UrlToBlob(t);if(!(o.size/1024<200))return n.$message.error("上传图片大小不能超过 200KB!"),i;r.append("file",o),e=o,-1!==n.replaceIndex?(n.files.splice(n.replaceIndex,1,e),n.previewImages.splice(n.replaceIndex,1,window.URL.createObjectURL(e)),n.replacedImg[n.replaceIndex]=!0,n.replaceIndex=-1):n.files.length<n.limit&&(n.files.push(e),n.previewImages.push(window.URL.createObjectURL(e)))})}}),document.querySelectorAll(".upfile").forEach(function(e){e.value=""})},photoCompress:function(e,t,i){var o=new FileReader;o.readAsDataURL(e);var a=this;o.onload=function(){var e=this.result;a.canvasDataURL(e,t,i)}},canvasDataURL:function(e,t,i){var o=new Image;o.src=e,o.onload=function(){var e=this,o=.5,a=e.width,r=e.height,n=a/r;a=t.width||a,r=t.height||a/n,t.quality&&t.quality>0&&t.quality<=1&&(o=t.quality);var s=document.createElement("canvas"),l=s.getContext("2d"),c=document.createAttribute("width");c.nodeValue=a;var d=document.createAttribute("height");d.nodeValue=r,s.setAttributeNode(c),s.setAttributeNode(d),l.drawImage(e,0,0,a,r);var u=s.toDataURL("image/jpeg",o);i(u)}},convertBase64UrlToBlob:function(e){for(var t=e.split(","),i=t[0].match(/:(.*?);/)[1],o=atob(t[1]),a=o.length,r=new Uint8Array(a);a--;)r[a]=o.charCodeAt(a);return new Blob([r],{type:i})},handleFileChange:function(e){var t=e.target.files,i=!0,o=!1,r=void 0;try{for(var n,s=a()(t);!(i=(n=s.next()).done);i=!0){var l=n.value;this.addFile(l)}}catch(e){o=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}},replaceImg:function(e){"viewImg"!==this.mode&&(this.replaceIndex=e,document.querySelector("#"+this.name+"uploader").click())},upload:function(){var e=this;if(console.log("uploaduploaduploaduploaduploaduploaduploaduploaduploaduploaduploadupload"),console.log(this.$GETIMGHOST),this.uploadedCount=0,this.uploadRes=new Array(this.files.length),!this.uploadUrl)throw new Error("from imageUpload：缺少uploadUrl");if(console.log(this.files),!this.files.length){var t=[];return void this.success(t)}for(var i=0;i<this.files.length;i++)!function(t){var i=e.files[t],o=new FileReader;o.onload=function(o){var a=new XMLHttpRequest;a.open("POST",e.uploadUrl),a.setRequestHeader("Content-type",i.type.split("/")[1]),a.onreadystatechange=function(){if(4===a.readyState)if(4===a.readyState&&200===a.status){var i=JSON.parse(a.responseText);if(i.ret?e.uploadRes[t]=i.info.md5:(e.uploadRes[t]="",e.$message.error("第"+(t+1)+"张图片上传失败："+i.error.message)),++e.uploadedCount===e.uploadRes.length){var o=new Array(e.replacedImg.length);if("replace"===e.mode){for(var r=0,n=0;r<e.replacedImg.length&&n<e.uploadRes.length;r++)e.replacedImg[r]?(o[r]=e.uploadRes[n],n++):o[r]="";n<e.uploadRes.length&&(o=o.concat(e.uploadRes.slice(n)))}else o=e.uploadRes;e.success(o)}}else if(200!==a.status&&304!==a.status)throw new Error("from imageUpload: 上传图片失败")},a.send(o.target.result)},o.readAsArrayBuffer(i)}(i)},detailImg:function(e){this.previewImages.splice(e,1)},reset:function(){this.files.splice(0),this.previewImages.splice(0),this.uploadRes.splice(0),this.uploadedCount=0}}}},jFbC:function(e,t,i){i("Cdx3"),e.exports=i("FeBl").Object.keys},jeAz:function(e,t,i){var o=i("H97s");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i("rjj0")("7fd4c021",o,!0,{})},mClu:function(e,t,i){var o=i("kM2E");o(o.S+o.F*!i("+E39"),"Object",{defineProperty:i("evD5").f})},mvHQ:function(e,t,i){e.exports={default:i("qkKv"),__esModule:!0}},pBwn:function(e,t,i){"use strict";function o(e){return e/100}function a(e){return e/1e3}function r(e){if(!e)return"-";var t=new Date(1e3*e),i=t.getFullYear()+"",o=t.getMonth()+1+"",a=t.getDate()+"",r=t.getHours()+"",n=t.getMinutes()+"",s=t.getSeconds()+"";return i+"年"+(o[1]?o:"0"+o)+"月"+(a[1]?a:"0"+a)+"日 "+(r[1]?r:"0"+r)+":"+(n[1]?n:"0"+n)+":"+(s[1]?s:"0"+s)}function n(e,t){var i=!0,o=!1,a=void 0;try{for(var r,n=d()(e);!(i=(r=n.next()).done);i=!0){var s=r.value;if(s.value===t)return s.label}}catch(e){o=!0,a=e}finally{try{!i&&n.return&&n.return()}finally{if(o)throw a}}return"未知"}function s(e,t,i){if(""===t&&e.required)i(new Error(e.firstMessage));else if(isNaN(Number(t)))i(new Error("请输入数字"));else{if(t<=0&&!e.enableZero)return i(new Error("请输入大于零的数字"));if(/\./.test(t))return i(new Error("请输入整数"));i()}}function l(e,t,i){if(""===t&&e.required)i(new Error(e.firstMessage));else if(isNaN(Number(t)))i(new Error("请输入数字"));else{if(t<=0)return i(new Error("请输入大于零的金额"));/\./.test(t)&&!/\.\d{2}$/.test(t)?i(new Error("小数点后需输入两位")):i()}}i.d(t,"a",function(){return o}),i.d(t,"b",function(){return r}),i.d(t,"c",function(){return n}),i.d(t,"e",function(){return s}),i.d(t,"f",function(){return l}),i.d(t,"d",function(){return a});var c=i("BO1k"),d=i.n(c)},qP5V:function(e,t,i){"use strict";var o=i("bOdI"),a=i.n(o),r=i("pFYg"),n=i.n(r),s=i("BO1k"),l=i.n(s),c=i("mvHQ"),d=i.n(c),u=i("fZjL"),p=i.n(u),f=i("woOf"),g=i.n(f),m=i("bnA/"),h=i("pBwn");t.a={components:{imageUpload:m.a},data:function(){return{multiple:!0,weights:"",grandId:{},grands:[],predictAttrs:[],tempAttr:{},goodAttrs:[],imgDatas:[],imgSure:[],oldGoods:[],goodImgType:"",pennyToDollar:h.a,getWeight:h.d,infoGood:{},goodId:0,goodImgs:[],infoStore:[],attrGoods:[],goodsCommonRules:{name:{required:!0,message:"请填写名称"}},isFrameDialogVisible:!1,deleteDialogVisible:!1,deletNeirong:"",rowDelte:"",rowDelteTT:"",goodTemplate:{canSellSize:0,sellSize:0,price:0,priceLabel:0,procurementPrice:0,size:0,id:"",state:1,weight:0},changeInputArr:[],changeold:[],changenew:[],goods2attrsBeans:[{attrsId:1,value:"假规格",pic:"noimage"}],attrss:[],flag:!0,valueuu:{},isEmpty:!1,Minuslog:!1,updateGoodsForm:[],radioType:"",categoryType:[],categoryTypeId:[],type:""}},computed:{pageAction:function(){var e=this.$route.path.split("/").pop();return e}},mounted:function(){this.goodId=this.$route.query.id,this.getGrands(),this.getAttrGoods(),this.changeInputArr=[],this.getCommonTypes()},methods:{loadImage:function(){var e=this,t=[];for(var i in this.infoGood)this.infoGood.hasOwnProperty(i)&&i.startsWith("pic")&&this.infoGood[i]&&""!==this.infoGood[i].trim()&&t.push(this.$GETIMGHOST+this.infoGood[i]);this.goodImgs=t,this.infoGood.detail&&(this.infoStore=this.infoGood.detail.split(",")),this.infoStore=this.infoStore.map(function(t){return e.$GETIMGHOST+t})},getAttrGoods:function(){var e=this;this.$http.ajax({url:APIHOST+"api/goods/getGoodsInfo/"+this.goodId,dataType:"json",context:this}).done(function(t){if(1===t.result){var i=[];t.object.list.forEach(function(e){e.priceLabel=e.price/100,e.procurementPrice=e.procurementPrice/100,e.weight=e.weight/1e3}),e.attrGoods=t.object.list,e.attrGoods.map(function(t){return e.weights=t,t}),e.infoGood=t.object.goodsCommon,e.infoGood.logisticsType=e.infoGood.logisticsType+"",e.grandId=t.object.grand,t.object.guiGe.forEach(function(e){if(-1===i.map(function(e){return e.attrs_id}).indexOf(e.attrs_id)){var o={value:e.value,id:e.attrs_id,attrs_id:e.attrs_id,name:e.name,innerAttrs:t.object.guiGe.filter(function(t){return t.attrs_id===e.attrs_id})};i.push(o)}}),e.categoryType=t.object.type,e.categoryTypeId=t.object.typeId,e.infoGood.typeId=e.categoryTypeId,e.categoryType.filter(function(t){t.id==e.categoryTypeId&&(e.type=t.typeName)}),e.predictAttrs=g()([],i),0==e.attrGoods.length?e.isEmpty=!1:e.isEmpty=!0,e.loadImage()}else console.error("获取商品分类失败")}).fail(function(){console.log("获取商品分类接口出错")})},updateGoods:function(){var e=this;this.$refs.goodsCommonForm.validate(function(t){if(0==e.$refs.imageUploader.files.length&&0==e.goodImgs.length)return void e.$message.error("请至少添加一个图片");e.validatePredictGoods()&&e.$refs.imageUploader.upload()})},errorTest:function(e){console.log(e)},descRemovehandel:function(e,t){console.log(e),console.log(t)},saveGoods:function(e){for(var t=p()(this.infoGood),i=t.filter(function(e){return 4==e.length&&"pic"==e.substring(0,3)}),o=0;o<i.length;o++){var a=i[o];this.infoGood[a]=""}for(var r=this.getNoHttpImagePath(this.goodImgs),n=[],s=0;s<r.length;s++){var l=r[s];this.infoGood["pic"+(s+1)]=l,n.push(l)}for(var c=r.length,d=0;d<e.length;d++)e[d]&&(this.infoGood["pic"+(c+1)]=e[d],c++);this.attrGoods.forEach(function(e){e.price=100*e.priceLabel,e.procurementPrice=100*e.procurementPrice,e.weight=1e3*e.weight}),this.$refs.imageUploader.reset(),this.$refs.imageInfoUploader.upload(),this.getAttrGoods()},getNoHttpImagePath:function(e){var t=[];if(e)for(var i=0;i<e.length;i++){var o=e[i];if(o&&o.startsWith("http")){var a=o.replace("http://","");a=a.substring(a.indexOf("/")+1,a.length),t.push(a)}}return t},saveImg:function(e){var t=this;console.log(e);for(var i="",o=this.getNoHttpImagePath(this.infoStore),a=0;a<o.length;a++){i+=o[a]+","}for(var r=0;r<e.length;r++)e[r]&&(i+=e[r],r<e.length-1&&(i+=","));i&&i.endsWith(",")&&(i=i.substring(0,i.length-1)),this.infoGood.detail=i,this.imgSure=i.split(","),this.attrGoods.forEach(function(e){e.price=100*e.priceLabel}),this.$refs.imageInfoUploader.reset(),this.$http.ajax({url:APIHOST+"api/goods/update",contentType:"application/json; charset=utf-8",type:"post",dataType:"json",data:d()({goodsCommon:this.infoGood,goods:this.attrGoods,updateAttrs:this.changeold}),context:this}).done(function(e){t.$message({message:"保存成功",type:"success"}),t.$router.push("info"),t.getAttrGoods()}).fail(function(){console.log("商品添加接口出错")}).always(function(){t.saving=!1})},getCommonTypes:function(){var e=this;this.$http.ajax({url:APIHOST+"api/goodsType/getTypes/0",dataType:"json",context:this}).done(function(t){1===t.result?e.commonTypes=t.object:console.error("获取商品分类失败")}).fail(function(){console.log("获取商品分类接口出错")})},getSubTypes:function(){var e=this;this.$http.ajax({url:APIHOST+"api/goodsType/getTypes/"+this.parentType.id,dataType:"json",context:this}).done(function(t){1===t.result?e.subTypes=t.object:console.error("获取商品分类失败")}).fail(function(){console.log("获取商品分类接口出错")})},getGrands:function(){var e=this;this.$http.ajax({url:APIHOST+"api/grand/getAll",dataType:"json",context:this}).done(function(t){1===t.result?e.grands=t.object:console.error("获取品牌失败")}).fail(function(){console.log("获取商品品牌接口出错")})},getGroups:function(){var e=this;this.$http.ajax({url:APIHOST+"api/store/getGroup",dataType:"json",context:this}).done(function(t){1===t.result?e.groups=t.list:console.error("获取商品分组失败")}).fail(function(){console.log("获取商品分组接口出错")})},removeArrItem:function(e,t){e[t].delete=!0,this.getchangeInput(e[t]),e.splice(t,1)},addPredictAttr:function(){if(!this.tempAttr.id)return void this.$message.info("请先选择规格");var e=!0,t=!1,i=void 0;try{for(var o,a=l()(this.predictAttrs);!(e=(o=a.next()).done);e=!0){var r=o.value;if(this.tempAttr.id===r.id)return void this.$message.info("不能重复添加规格")}}catch(e){t=!0,i=e}finally{try{!e&&a.return&&a.return()}finally{if(t)throw i}}this.predictAttrs.push({id:this.tempAttr.id,name:this.tempAttr.name,innerAttrs:[{value:"未命名",oldvalue:!0,id:this.tempAttr.id}]}),this.Specifications.push({id:this.tempAttr.id,name:this.tempAttr.name,innerAttrs:[{value:"未命名"}]})},addInnerAttr:function(e){var t={value:"未命名",oldvalue:!0,id:this.tempAttr.id,attrs_id:e.attrs_id,radom:Math.round(1e4*Math.random())};e.innerAttrs.push(t),this.getchangeInput(t)},getchangeInput:function(e){if(e.value_id){var t=this.changeInputArr.map(function(e){return e.value_id}).indexOf(e.value_id);-1!==t&&this.changeInputArr.splice(t,1)}else if(e.radom){var i=this.changeInputArr.map(function(e){return e.radom}).indexOf(e.radom);-1!==i&&this.changeInputArr.splice(i,1)}this.changeInputArr.push(e)},generatePredictGoods:function(){var e=this,t=[],i=!1,o=!1;if(this.predictAttrs,this.predictAttrs.forEach(function(r,s,c){var d=[];e:for(var u=0;u<r.innerAttrs.length;u++){var p=function(e){return d.find(function(t){return t.value===r.innerAttrs[e].value})?(d=[],i=!0,{v:!1}):r.innerAttrs[e].value?void d.push(r.innerAttrs[e]):(d=[],o=!0,{v:!1})}(u);switch(p){case"break":break e;default:if("object"===(void 0===p?"undefined":n()(p)))return p.v}}if(!i){var f=[];if(s>0){var m=!0,h=!1,v=void 0;try{for(var y,b=l()(t[s-1]);!(m=(y=b.next()).done);m=!0){var x=y.value,w=!0,_=!1,I=void 0;try{for(var A,G=l()(r.innerAttrs);!(w=(A=G.next()).done);w=!0){var C=A.value;f.push(g()({},x,a()({},"attr_"+r.id,C.value)))}}catch(e){_=!0,I=e}finally{try{!w&&G.return&&G.return()}finally{if(_)throw I}}}}catch(e){h=!0,v=e}finally{try{!m&&b.return&&b.return()}finally{if(h)throw v}}}else{var T=!0,S=!1,$=void 0;try{for(var k,j=l()(r.innerAttrs);!(T=(k=j.next()).done);T=!0){var P=k.value;f.push(g()({},e.goodTemplate,a()({},"attr_"+r.id,P.value)))}}catch(e){S=!0,$=e}finally{try{!T&&j.return&&j.return()}finally{if(S)throw $}}}t[s]=f}}),i)return this.$message.error("规格有重复值"),!1;if(o)return this.$message.error("规格有空值"),!1;this.attrGoods.forEach(function(e){e.goods2attrsBeans&&(e.valueIds=e.goods2attrsBeans.map(function(e){return e.valueId?e.valueId:e.radom}),e.valueIdsStr=e.valueIds.join(","))});var r=t[t.length-1];r.forEach(function(t){t.valueIds=[],t.goods2attrsBeans=[];for(var i in t)if(-1!==i.indexOf("attr_")){var o=e.predictAttrs.filter(function(e){return e.attrs_id==i.split("_")[1]});o[0].innerAttrs.forEach(function(e){t[i]===e.value&&(e.value_id?t.goods2attrsBeans.push({attrsId:i.split("_")[1],value:t[i],valueId:e.value_id}):t.goods2attrsBeans.push({attrsId:i.split("_")[1],value:t[i],valueId:"",radom:e.radom}))})}}),r.forEach(function(e){e.goods2attrsBeans&&(e.valueIds=e.goods2attrsBeans.map(function(e){return e.valueId?e.valueId:e.radom}),e.valueIdsStr=e.valueIds.join(","))});var s=r.filter(function(t){if(0===e.attrGoods.filter(function(e){return e.valueIdsStr===t.valueIdsStr}).length)return t});this.attrGoods=this.attrGoods.concat(s),this.changeInputArr.forEach(function(t){!t.radom||t.doStatus||t.delete?t.radom&&t.doStatus&&!t.delete?e.attrGoods.forEach(function(e){-1!==e.valueIds.indexOf(t.radom)&&(e["attr_"+t.attrs_id]=t.value)}):t.value_id&&!t.delete?e.attrGoods.forEach(function(i){if(-1!==i.valueIds.indexOf(t.value_id)){var o;i["attr_"+t.attrs_id]=t.value,e.changeold.push((o={},a()(o,"valueId",t.value_id),a()(o,"value",t.value),o))}}):t.delete&&(e.attrGoods=e.attrGoods.filter(function(e){return-1===e.valueIds.indexOf(t.radom)})):t.doStatus=!0})},modifygoods:function(){var e=this;this.$http.ajax({url:APIHOST+"/api/goods/xiuGai",contentType:"application/json; charset=utf-8",type:"post",dataType:"json",data:d()({attrsId:"",goodsId:"",old:"",new:""}),context:this}).done(function(t){1==t.result?e.$message({message:"保存成功",type:"success"}):(e.flag=!1,e.$message({message:t.msg,type:"error"}))}).fail(function(){console.log("目标数据保存接口出错")}).always(function(){e.saving=!1})},mergeAttrColumn:function(e){e.row,e.column,e.rowIndex,e.columnIndex},tableRowRed:function(e,t){if(1!==e.row.state)return"red-row"},removePredictGood:function(e){this.attrGoods.splice(e,1)},getAttrs:function(){var e=this;this.$http.ajax({url:APIHOST+"api/Attrs/getByType/"+this.parentType.id,dataType:"json",context:this}).done(function(t){1===t.result?e.goodAttrs=t.list:console.error("获取商品属性失败")}).fail(function(){console.log("获取商品属性接口出错  ")})},resetForms:function(){this.parentType={id:"",name:""},this.goodsCommon=g()({},this.initGoodsCommon),this.$refs.goodsCommonForm.resetFields(),this.preparedGoods=[],this.attrGoods=[],this.predictAttrs=[],this.tempAttr={},this.activeTab="type",this.addStatus=0},validateType:function(){if(this.parentType.id){var e=!0,t=!1,i=void 0;try{for(var o,a=l()(this.commonTypes);!(e=(o=a.next()).done);e=!0){var r=o.value;r.id===this.parentType.id&&(this.parentType.name=r.type_name)}}catch(e){t=!0,i=e}finally{try{!e&&a.return&&a.return()}finally{if(t)throw i}}this.getSubTypes(),this.getAttrs(),this.activeTab="basic",this.addStatus=1}else this.$message.error("请选择商品类别")},validateNum:function(e){return""!==e&&(!isNaN(Number(e))&&!(e<0))},validatePredictGoods:function(){if(!this.attrGoods.length)return this.$message.error("请填写商品规格"),!1;var e=!0,t=!1,i=void 0;try{for(var o,a=l()(this.attrGoods);!(e=(o=a.next()).done);e=!0){var r=o.value;if(!(this.validateNum(r.priceLabel)&&this.validateNum(r.canSellSize)&&this.validateNum(r.procurementPrice)&&this.validateNum(r.size)))return this.$message.error("商品详细数据填写错误"),!1}}catch(e){t=!0,i=e}finally{try{!e&&a.return&&a.return()}finally{if(t)throw i}}return!0},validateBasic:function(){var e=this;this.$refs.goodsCommonForm.validate(function(t){return t?e.$refs.imageUploader.files.length?void(e.validatePredictGoods()&&(e.$refs.imageUploader.upload(),e.prepareGoods())):void e.$message.error("请至少添加一个图片"):void e.$message.error("基本信息填写错误，请检查")})},prepareGoods:function(){this.preparedGoods=this.predictGoods.map(function(e){return e.price=100*e.priceLabel,e.weight=1e3*e.weight,e})},finishAdd:function(){},createGoods:function(e){for(var t=this,i=0;i<e.length;i++){var o=e[i];if(!o.ret)return this.$message.error("第"+i+"张图片上传失败："+o.error.message),!1;this.goodsCommon["pic"+(i+1)]=o.info.md5}this.goodsCommon.transformFee=100*this.goodsCommon.transformFeeLabel,this.saving=!0,this.$http.ajax({url:APIHOST+"api/goods/add",contentType:"application/json; charset=utf-8",type:"post",dataType:"json",data:d()({goodsCommon:this.goodsCommon,goods:this.preparedGoods}),context:this}).done(function(e){1===e.result?(t.$message({message:"保存成功",type:"success"}),t.resetForms(),t.$refs.imageUploader.reset()):t.$message({message:"保存失败",type:"error"})}).fail(function(){console.log("商品添加接口出错")}).always(function(){t.saving=!1})},numInput:function(e){e.canSellSize=e.canSellSize.replace(/[^\d]/g,""),e.canSellSize=e.canSellSize.replace(/^/g,""),e.canSellSize=e.canSellSize.replace(/^0\d[0-9]*/g,"")},numInput2:function(e){e.size=e.size.replace(/[^\d]/g,""),e.size=e.size.replace(/^/g,""),e.size=e.size.replace(/^0\d[0-9]*/g,"")},checknum:function(e){e.priceLabel=e.priceLabel.replace(/[^\d\.]/g,""),e.priceLabel=e.priceLabel.replace(/^\./g,""),e.priceLabel=e.priceLabel.replace(/^0\d[0-9]*/g,""),e.priceLabel=e.priceLabel.replace(/\.{2,}/g,"."),e.priceLabel=e.priceLabel.replace(".","$#$").replace(/\./g,"").replace("$#$","."),e.priceLabel=e.priceLabel.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3")},checknum2:function(e){e.procurementPrice=e.procurementPrice.replace(/[^\d\.]/g,""),e.procurementPrice=e.procurementPrice.replace(/^\./g,""),e.procurementPrice=e.procurementPrice.replace(/^0\d[0-9]*/g,""),e.procurementPrice=e.procurementPrice.replace(/\.{2,}/g,"."),e.procurementPrice=e.procurementPrice.replace(".","$#$").replace(/\./g,"").replace("$#$","."),e.procurementPrice=e.procurementPrice.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3")},isFrame:function(e){var t=this,i=1==e.state?"下架":"上架";this.$confirm("是否"+i+"该规格",i+"规格",{distinguishCancelAndClose:!0,confirmButtonText:"保存",cancelButtonText:"放弃修改"}).then(function(){t.$http.ajax({url:APIHOST+"api/goods/updateState",contentType:"application/json; charset=utf-8",type:"post",dataType:"json",data:d()({goodsId:e.id,state:1==e.state?e.state=-1:e.state=1}),context:t}).done(function(e){t.$message({type:"info",message:"修改成功"})}).fail(function(){})}).catch(function(e){})},categorychange:function(e){this.infoGood.typeId=e}}}},qkKv:function(e,t,i){var o=i("FeBl"),a=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},uqUo:function(e,t,i){var o=i("kM2E"),a=i("FeBl"),r=i("S82l");e.exports=function(e,t){var i=(a.Object||{})[e]||Object[e],n={};n[e]=t(i),o(o.S+o.F*r(function(){i(1)}),"Object",n)}},vv7a:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,".el-table .red-row{color:red}input:required:invalid{border-color:red}.el-radio.is-bordered{margin-bottom:15px}",""])}});