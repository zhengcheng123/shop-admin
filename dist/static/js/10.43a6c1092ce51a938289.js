webpackJsonp([10],{BO1k:function(t,e,i){t.exports={default:i("fxRn"),__esModule:!0}},Iz30:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,".goods-row .el-radio-button__orig-radio:checked+.el-radio-button__inner{background-color:#eb8600;border-color:#eb8600;-webkit-box-shadow:-1px 0 0 0 #eb8600;box-shadow:-1px 0 0 0 #eb8600;color:#fff}.goods-row .el-radio-button__inner:hover{color:#eb8600}.btn-delive{width:55px!important;cursor:pointer;background:none}.btn-delive:active{background:none!important;border:none}",""])},PDTX:function(t,e,i){"use strict";var o=i("mvHQ"),n=i.n(o),s=i("pBwn");e.a={data:function(){return{ticeId:"",typeTice:"",renderTime:s.b,pennyToDollar:s.a,renderStateLabel:s.c,states:[{label:"待付款",value:1},{label:"待发货",value:2},{label:"待收货",value:3},{label:"待评价",value:4},{label:"已完成",value:5},{label:"已关闭",value:6}],logisticsCompanies:[],logisticsForm:{id:"",logisticsCode:"",priceDollar:0,price:0,pic:"",comment:"",type:""},logisticsFormRules:{logisticsCode:[{required:!0,message:"请输入运单号"}]},sendGoodsTradeId:-1,itemForm:{id:-1,freight:null},logisticsFormVisible:!1,saving:!1,currentItems:[],selectedItems:[],conditionForm:{item:{id:"",code:"",buyerId:"",sellerId:"",dealUserId:"",saveMoney:"",logisticeId:"",freight:"",payment:"",paycode:"",shoppingAddr:"",initTime:[],stat:"",createTime:"",createTimeEnd:"",payTime:"",sendTime:"",finishTime:"",comment:"",itemId:""},page:{pageSize:15,pageNum:1,total:0,sortname:"id",sortorder:"desc"}}}},computed:{maxTableHeight:function(){return document.body.clientHeight-400}},mounted:function(){this.getItems(),this.getLogisticsCompany()},methods:{tradeDetail:function(t){this.$router.push("/trade/"+t)},getTime:function(t){return new Date(t).getTime()},searchItem:function(){if(this.conditionForm.page={pageNum:1,pageSize:15,total:0,sortname:"id",sortorder:"desc"},this.conditionForm.item.initTime&&this.conditionForm.item.initTime.length&&null!=this.conditionForm.item.initTime){var t=this.conditionForm.item.initTime;this.conditionForm.item.createTime=t[0].getTime()/1e3,this.conditionForm.item.createTimeEnd=this.getTime(t[1].toString().substring(0,16)+"23:59:59 GMT+0800 (中国标准时间)")/1e3}else this.conditionForm.item.createTime="",this.conditionForm.item.createTimeEnd="";this.getItems()},getLogisticsCompany:function(){var t=this;this.$http.ajax({url:APIHOST+"api/store/getLogisticsCompany",dataType:"json",context:this}).done(function(e){1===e.result?t.logisticsCompanies=e.list:console.log("获取物流公司失败")})},sendGoods:function(t){this.itemId=t.id,this.sendGoodsTradeId=t.tradeId,this.logisticsForm.id=t.logisticsId,this.logisticsForm.type=t.logisticsType,this.logisticsFormVisible=!0},saveLogistics:function(){var t=this;this.$refs.logisticsForm.validate(function(e){e?(t.logisticsForm.price=100*t.logisticsForm.priceDollar,t.logisticsForm.id=t.logisticsForm.id,t.saving=!0,t.$http.ajax({url:APIHOST+"api/trade/sendGoods",contentType:"application/json; charset=utf-8",type:"post",dataType:"json",data:n()({logistics:t.logisticsForm,id:t.itemId}),context:t}).done(function(e){1===e.result?(t.$message({message:"发货成功",type:"success"}),t.logisticsFormVisible=!1,t.getItems()):t.$message({message:e.msg,type:"error"})}).fail(function(){console.log("目标数据保存接口出错")}).always(function(){t.saving=!1})):t.$message({message:"信息填写错误",type:"error"})})},addItem:function(){this.itemFormVisible=!0},confirmDelete:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i="删除此项目吗？";if(!e){if(i="确定删除选中的项目吗？",e=this.selectedItems.map(function(t){return t.id}),!e.length)return this.$message({message:"请至少选择一项",type:"info"}),!1;e=e.join(",")}this.$confirm(i,"确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.deleteItem(e)}).catch(function(){})},deleteItem:function(t){var e=this;this.$http.ajax({url:APIHOST+"api/trade/delete",type:"get",data:{id:t},dataType:"json",context:this}).done(function(t){1===t.result&&(e.$message({message:"删除成功",type:"success"}),e.getItems())})},getItems:function(){var t=this;this.$http.ajax({url:APIHOST+"api/trade/list",contentType:"application/json; charset=utf-8",dataType:"json",type:"post",data:n()(this.conditionForm),context:this}).done(function(e){if(1===e.result){if(e.list<=0)return t.$message({message:"没有找到匹配项",type:"info"}),t.currentItems=[],!1;t.currentItems=e.list,t.conditionForm.page.pageNum=e.page.pageNum,t.conditionForm.page.total=e.page.total,t.conditionForm.page.pageSize=e.page.pageSize}else t.$message({message:"获取入库列表失败",type:"error"})})},sortItems:function(t){var e=t.prop,i=t.order;e?(this.conditionForm.page.sortname=e,this.conditionForm.page.sortorder="descending"===i?"desc":"asc"):(this.conditionForm.page.sortname="id",this.conditionForm.page.sortorder="desc"),this.getItems()},selectionChange:function(t){this.selectedItems=t.map(function(t){return t})},pageSizeChange:function(t){this.conditionForm.page.pageSize=t,this.getItems()},pageNoChange:function(t){this.conditionForm.page.pageNum=t,this.getItems()},writeOff:function(t){var e=this,i=t.id;this.ticeId=t.logisticsId,this.logisticsForm.type=t.logisticsType,this.logisticsForm.id=t.logisticsId,this.$http.ajax({url:APIHOST+"api/trade/sendGoods",contentType:"application/json; charset=utf-8",type:"post",dataType:"json",data:n()({logistics:this.logisticsForm,id:i}),context:this}).done(function(t){1===t.result?(e.$message({message:"核销成功",type:"success"}),e.logisticsFormVisible=!1,e.getItems()):e.$message({message:t.msg,type:"error"})}).fail(function(){console.log("目标数据保存接口出错")}).always(function(){e.saving=!1})},exportList:function(){var t=globalConfig.server1+"api/trade/exportList";window.location.href=t},resetForm:function(){this.$refs.itemForm.resetFields(),this.itemForm={id:-1,buyerId:null,sellerId:null,dealUserId:null,saveMoney:null,logisticeId:null,freight:null,payment:null,paycode:"",shoppingAddr:null,stat:null,createTime:null,payTime:null,sendTime:null,finishTime:null,comment:""},this.logisticsForm=[]}}}},PIs6:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,".date-picker[data-v-fab5f2da]{width:350px}.goods-row[data-v-fab5f2da]{width:100%;background-color:#fff;padding-left:39px;border-radius:3px;padding-top:21px}.adds-btn[data-v-fab5f2da]{background-color:#eb8600;color:#fff;border-color:#eb8600;line-height:0}.sure-btn[data-v-fab5f2da]{width:66px;height:28px;background:#eb8600;border:1px solid #eb8600;border-radius:6px;line-height:0;color:#fff}.butn[data-v-fab5f2da]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",""])},"bD/o":function(t,e,i){"use strict";function o(t){i("tvQw"),i("gXSh")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("PDTX"),s=i("yyoq"),r=i("VU/8"),a=o,l=r(n.a,s.a,!1,a,"data-v-fab5f2da",null);e.default=l.exports},fxRn:function(t,e,i){i("+tPU"),i("zQR9"),t.exports=i("g8Ux")},g8Ux:function(t,e,i){var o=i("77Pl"),n=i("3fs2");t.exports=i("FeBl").getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return o(e.call(t))}},gXSh:function(t,e,i){var o=i("Iz30");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("6a5178a4",o,!0,{})},mvHQ:function(t,e,i){t.exports={default:i("qkKv"),__esModule:!0}},pBwn:function(t,e,i){"use strict";function o(t){return t/100}function n(t){return t/1e3}function s(t){if(!t)return"-";var e=new Date(1e3*t),i=e.getFullYear()+"",o=e.getMonth()+1+"",n=e.getDate()+"",s=e.getHours()+"",r=e.getMinutes()+"",a=e.getSeconds()+"";return i+"年"+(o[1]?o:"0"+o)+"月"+(n[1]?n:"0"+n)+"日 "+(s[1]?s:"0"+s)+":"+(r[1]?r:"0"+r)+":"+(a[1]?a:"0"+a)}function r(t,e){var i=!0,o=!1,n=void 0;try{for(var s,r=d()(t);!(i=(s=r.next()).done);i=!0){var a=s.value;if(a.value===e)return a.label}}catch(t){o=!0,n=t}finally{try{!i&&r.return&&r.return()}finally{if(o)throw n}}return"未知"}function a(t,e,i){if(""===e&&t.required)i(new Error(t.firstMessage));else if(isNaN(Number(e)))i(new Error("请输入数字"));else{if(e<=0&&!t.enableZero)return i(new Error("请输入大于零的数字"));if(/\./.test(e))return i(new Error("请输入整数"));i()}}function l(t,e,i){if(""===e&&t.required)i(new Error(t.firstMessage));else if(isNaN(Number(e)))i(new Error("请输入数字"));else{if(e<=0)return i(new Error("请输入大于零的金额"));/\./.test(e)&&!/\.\d{2}$/.test(e)?i(new Error("小数点后需输入两位")):i()}}i.d(e,"a",function(){return o}),i.d(e,"b",function(){return s}),i.d(e,"c",function(){return r}),i.d(e,"e",function(){return a}),i.d(e,"f",function(){return l}),i.d(e,"d",function(){return n});var c=i("BO1k"),d=i.n(c)},qkKv:function(t,e,i){var o=i("FeBl"),n=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},tvQw:function(t,e,i){var o=i("PIs6");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("7a762fb6",o,!0,{})},yyoq:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"fa fa-users",attrs:{"aria-hidden":"true"}}),t._v("\n        交易管理\n      ")])],1)],1),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"goods-row"},[i("div",{staticClass:"row"},[i("el-radio-group",{on:{change:t.getItems},model:{value:t.conditionForm.item.stat,callback:function(e){t.$set(t.conditionForm.item,"stat",e)},expression:"conditionForm.item.stat"}},[i("el-radio-button",{attrs:{label:""}},[t._v("全部")]),t._v(" "),t._l(t.states,function(e){return i("el-radio-button",{attrs:{label:e.value}},[t._v(t._s(e.label))])})],2)],1),t._v(" "),i("div",{staticClass:"row"},[i("el-form",{attrs:{inline:!0}},[i("el-form-item",{attrs:{label:"创建时间"}},[i("el-date-picker",{staticClass:"date-picker",attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始","end-placeholder":"结束"},model:{value:t.conditionForm.item.initTime,callback:function(e){t.$set(t.conditionForm.item,"initTime",e)},expression:"conditionForm.item.initTime"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"订单号",prop:"code"}},[i("el-input",{attrs:{clearable:""},model:{value:t.conditionForm.item.code,callback:function(e){t.$set(t.conditionForm.item,"code","string"==typeof e?e.trim():e)},expression:"conditionForm.item.code"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"状态",prop:"stat"}},[i("el-select",{attrs:{clearable:""},model:{value:t.conditionForm.item.stat,callback:function(e){t.$set(t.conditionForm.item,"stat",e)},expression:"conditionForm.item.stat"}},t._l(t.states,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),i("el-form-item",[i("el-button",{staticClass:"f-left adds-btn",attrs:{type:"primary"},on:{click:t.searchItem}},[t._v("搜索")]),t._v(" "),i("el-button",{staticClass:"f-left adds-btn",attrs:{type:"primary"},on:{click:function(e){return t.exportList()}}},[t._v("导出")])],1)],1)],1)]),t._v(" "),i("section",{staticClass:"section",staticStyle:{background:"#fff"}},[i("el-table",{staticClass:"trade-table",staticStyle:{width:"100%"},attrs:{data:t.currentItems,border:"","header-cell-style":{background:"#E8EAEE",height:"48px"},"max-height":t.maxTableHeight},on:{"selection-change":t.selectionChange,"sort-change":t.sortItems}},[i("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"code","min-width":"190",label:"订单号",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"payment","min-width":"120",label:"实际付款",sortable:"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.pennyToDollar(e.row.payment)))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"buyerName","min-width":"120",label:"客户",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"comment","min-width":"120",label:"买家备注",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{label:"配送方式","min-width":"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.logisticsType?i("span",[t._v("快递")]):t._e(),t._v(" "),2===e.row.logisticsType?i("span",[t._v("自提")]):t._e(),t._v(" "),3===e.row.logisticsType?i("span",[t._v("无物流")]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"freight","min-width":"120",label:"运费",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.pennyToDollar(e.row.freight)))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"stat","min-width":"120",label:"状态",sortable:"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.renderStateLabel(t.states,e.row.stat)))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"createTime","min-width":"190",label:"创建时间",sortable:"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.renderTime(e.row.createTime)))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"payTime","min-width":"190",label:"付款时间",sortable:"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.renderTime(e.row.payTime)))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"sendTime","min-width":"190",label:"发货时间",sortable:"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.renderTime(e.row.sendTime)))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"finishTime","min-width":"190",label:"成交时间",sortable:"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.renderTime(e.row.finishTime)))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"190",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"btn-group"},[1===e.row.logisticsType?i("el-button",{staticClass:"btn-delive",attrs:{type:"text",disabled:2!==e.row.stat},on:{click:function(i){return t.sendGoods(e.row)}}},[t._v("发货")]):t._e(),t._v(" "),2===e.row.logisticsType?i("el-button",{staticClass:"btn-delive",attrs:{type:"text",disabled:2!==e.row.stat},on:{click:function(i){return t.writeOff(e.row)}}},[t._v("核销")]):t._e(),t._v(" "),i("el-button",{staticClass:"btn-delive",attrs:{type:"text"},on:{click:function(i){return t.tradeDetail(e.row.id)}}},[t._v("详情")])],1)]}}])})],1),t._v(" "),i("el-pagination",{staticClass:"pagination",attrs:{"page-sizes":[15,30,50,100],"page-size":t.conditionForm.page.pageSize,"current-page":t.conditionForm.page.pageNum,layout:"total, sizes,prev, pager, next, jumper",total:t.conditionForm.page.total},on:{"size-change":t.pageSizeChange,"current-change":t.pageNoChange}})],1),t._v(" "),i("el-dialog",{attrs:{title:"发货",visible:t.logisticsFormVisible,"custom-class":"logistics-dialog"},on:{"update:visible":function(e){t.logisticsFormVisible=e},close:t.resetForm}},[i("el-form",{ref:"logisticsForm",staticClass:"account-form",attrs:{model:t.logisticsForm,"label-width":"90px",rules:t.logisticsFormRules}},[i("el-form-item",{attrs:{label:"运单号",prop:"logisticsCode"}},[i("el-input",{model:{value:t.logisticsForm.logisticsCode,callback:function(e){t.$set(t.logisticsForm,"logisticsCode","string"==typeof e?e.trim():e)},expression:"logisticsForm.logisticsCode"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"备注",prop:"comment"}},[i("el-input",{model:{value:t.logisticsForm.comment,callback:function(e){t.$set(t.logisticsForm,"comment","string"==typeof e?e.trim():e)},expression:"logisticsForm.comment"}})],1),t._v(" "),i("div",{staticClass:"butn"},[i("el-button",{staticClass:"lg-btn sure-btn",attrs:{loading:t.saving},on:{click:t.saveLogistics}},[t._v("确认")])],1)],1)],1)],1)])},n=[],s={render:o,staticRenderFns:n};e.a=s}});