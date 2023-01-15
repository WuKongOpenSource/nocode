(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-450c01a8"],{3359:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"role-authorization main"},[i("xr-header",{ref:"xrHeader",attrs:{label:"角色权限控制"}}),e._v(" "),i("div",{staticClass:"main-content-wrap",class:{"is-tabs":e.roleTabShow}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.roleMenuLoading,expression:"roleMenuLoading"}],staticClass:"main-nav"},[i("div",{staticClass:"main-nav__title"},[e._v("\n        "+e._s(e.title)),e.roleHelpObj?i("i",{staticClass:"wk wk-icon-fill-help wk-help-tips",attrs:{"data-type":e.roleHelpObj.type,"data-id":e.roleHelpObj.id}}):e._e(),e._v(" "),i("el-button",{staticClass:"add-btn",attrs:{type:"text",icon:"el-icon-plus"},on:{click:e.newRoleBtn}},[e._v("创建角色")])],1),e._v(" "),i("div",{staticClass:"main-nav__content"},[i("div",{staticClass:"nav-sections-wrap"},[e.roleTabShow?i("el-tabs",{on:{"tab-click":e.roleTabChange},model:{value:e.tabType,callback:function(t){e.tabType=t},expression:"tabType"}},[i("el-tab-pane",{attrs:{label:"管理员",name:"91"}}),e._v(" "),i("el-tab-pane",{attrs:{label:"上级",name:"92"}},[i("template",{slot:"label"},[e._v("\n                上级"),i("i",{staticClass:"wk wk-icon-fill-help wk-help-tips",attrs:{"data-type":"22","data-id":"259"}})])],2)],1):e._e(),e._v(" "),i("div",{staticClass:"nav-section"},e._l(e.roleList,(function(t,n){return i("div",{key:n,staticClass:"menu-item",class:{"is-select":t.roleId==e.roleActive.roleId},on:{click:function(i){e.roleMenuSelect(t)}}},[i("div",{staticClass:"menu-item__content"},[e._v(e._s(t.roleName))]),e._v(" "),"admin"!=t.remark&&"project"!=t.remark?i("div",{staticClass:"icon-close",class:{"is-visible":t.visible},on:{click:function(e){e.stopPropagation()}}},[i("el-dropdown",{attrs:{trigger:"click"},on:{command:e.roleHandleClick},model:{value:t.visible,callback:function(i){e.$set(t,"visible",i)},expression:"item.visible"}},[i("el-button",{staticClass:"dropdown-btn menu-edit-btn",attrs:{icon:"wk wk-manage",size:"small"},on:{click:function(i){e.roleDropdownClick(t)}}}),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"copy"}},[e._v("复制")]),e._v(" "),i("el-dropdown-item",{attrs:{command:"edit"}},[e._v("编辑")]),e._v(" "),i("el-dropdown-item",{attrs:{command:"delete"}},[e._v("删除")])],1)],1)],1):e._e()])})))],1)])]),e._v(" "),i("el-dialog",{attrs:{title:e.newRoleTitle,visible:e.newRoleVisible,"before-close":e.newRoleClose,"close-on-click-modal":!1,width:"30%"},on:{"update:visible":function(t){e.newRoleVisible=t}}},[i("label",{staticClass:"label-title"},[e._v("角色名称")]),e._v(" "),i("el-input",{staticClass:"input-role",attrs:{maxlength:100},model:{value:e.role.title,callback:function(t){e.$set(e.role,"title",t)},expression:"role.title"}}),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.newRoleSubmit}},[e._v("确定")]),e._v(" "),i("el-button",{on:{click:e.newRoleClose}},[e._v("取消")])],1)],1),e._v(" "),i("div",{staticClass:"main-content"},[i("el-tabs",{staticStyle:{height:"100%"},model:{value:e.mainMenuIndex,callback:function(t){e.mainMenuIndex=t},expression:"mainMenuIndex"}},[e.showRoleUser?i("el-tab-pane",{attrs:{label:"角色员工",name:"user"}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.userLoading,expression:"userLoading"}],staticClass:"content-table"},[i("flexbox",{staticClass:"content-table-header"},[i("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入内容"},on:{blur:e.headerSearch},nativeOn:{keyup:function(t){return!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.headerSearch(t)}},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}},[i("el-button",{attrs:{slot:"suffix",type:"icon",icon:"wk wk-sousuo"},nativeOn:{click:function(t){return e.headerSearch(t)}},slot:"suffix"})],1),e._v(" "),i("div",{staticClass:"content-table-header-reminder"},[e.showReminder?i("reminder",{attrs:{content:e.getReminderContent()}}):e._e()],1),e._v(" "),i("el-button",{attrs:{disabled:0===e.roleList.length},on:{click:e.addEmployees}},[e._v(" 关联员工 ")]),i("i",{staticClass:"wk wk-icon-fill-help wk-help-tips",attrs:{"data-type":"22","data-id":"183"}})],1),e._v(" "),i("el-table",{class:e.WKConfig.tableStyle.class,staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:e.WKConfig.tableStyle.stripe,height:e.tableHeight}},[i("el-table-column",{attrs:{prop:"realname",width:"150","show-overflow-tooltip":"",label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("span",{staticClass:"status-name"},[i("wx-open-data",{attrs:{openid:e.$getUserName(n)}}),e._v(" "),0===n.userIdentity?i("el-tag",{attrs:{"disable-transitions":"",type:"warning"}},[e._v("主账号")]):e._e()],1)]}}])}),e._v(" "),e._l(e.tableList,(function(t,n){return i("el-table-column",{key:n,attrs:{prop:t.field,label:t.label,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row,a=t.column;return["deptName"===a.property?i("wx-open-data",{attrs:{openid:e.$getDeptName(n),type:"departmentName"}}):[e._v(e._s(n[a.property]))]]}}])})})),e._v(" "),i("el-table-column",{attrs:{width:"160",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{staticClass:"table-edit-btn",attrs:{disabled:0===t.row.userIdentity,type:"primary-text",title:"编辑"},on:{click:function(i){e.employeeHandleClick("editRole",t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{staticClass:"table-edit-btn",attrs:{type:"primary-text",title:"复制"},on:{click:function(i){e.employeeHandleClick("copyRole",t.row)}}},[e._v("复制")]),e._v(" "),i("el-button",{staticClass:"table-edit-btn",attrs:{disabled:0===t.row.userIdentity,type:"primary-text",title:"删除"},on:{click:function(i){e.employeeHandleClick("delete",t.row)}}},[e._v("删除")])]}}])})],2),e._v(" "),i("div",{staticClass:"p-contianer"},[i("el-pagination",{staticClass:"p-bar",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,"pager-count":5,background:"",layout:"prev, pager, next, sizes, total, jumper"},on:{"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]):e._e(),e._v(" "),e.roleActive&&e.showRuleSet?i("el-tab-pane",{attrs:{name:"rule"}},[i("template",{slot:"label"},[e._v("角色权限"),i("i",{staticClass:"wk wk-icon-fill-help wk-help-tips",attrs:{"data-type":"22","data-id":"179"}})]),e._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.ruleLoading,expression:"ruleLoading"}],staticClass:"jurisdiction-box"},[i("div",{staticClass:"jurisdiction-box-bar"},[e._l(e.ruleMenuList,(function(t){return i("el-button",{key:t.index,attrs:{type:e.ruleMenuIndex===t.index?"selected":null},on:{click:function(i){e.ruleMenuIndex=t.index}}},[e._v(e._s(t.label)+"\n              ")])})),e._v(" "),e.roleActive?i("el-button",{staticClass:"jurisdiction-edit",attrs:{disabled:0===e.roleList.length,size:"medium",type:"primary"},on:{click:e.ruleSubmit}},[e._v(" 保存 ")]):e._e()],2),e._v(" "),e._l(e.ruleMenuList,(function(t,n){return["tree"==t.type?i("div",{directives:[{name:"show",rawName:"v-show",value:e.ruleMenuIndex===t.index,expression:"ruleMenuIndex === item.index"}],key:n,staticClass:"jurisdiction-content",style:{height:e.treeHeight+"px"}},[i("div",{staticClass:"jurisdiction-content-checkbox"},[i("el-tree",{ref:"tree"+t.index,refInFor:!0,staticStyle:{height:"0"},attrs:{data:"92"==e.tabType?e.superTree:t.data,indent:0,"expand-on-click-node":!1,props:e.defaultProps,"show-checkbox":"","node-key":"menuId","empty-text":"","default-expand-all":""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.node;return i("span",{class:{"node-label":1==n.level||2==n.level,"common-node-label":"935"==n.data.menuId}},[e._v(e._s(n.label)),2==n.level&&e.canSetField(n.data.realm)?i("el-button",{attrs:{icon:"wk wk-manage",type:"primary-text"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.fieldSetClick(n)}}},[e._v("字段授权")]):"935"==n.data.menuId?i("el-button",{attrs:{icon:"wk wk-manage",type:"primary-text"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.checkRangeSetClick(n)}}},[e._v("配置查看范围")]):e._e()],1)}}])})],1)]):e._e(),e._v(" "),"tree"!==t.type?i("div",{directives:[{name:"show",rawName:"v-show",value:e.ruleMenuIndex===t.index,expression:"ruleMenuIndex === item.index"}],key:n,staticClass:"jurisdiction-content"},[i("div",{staticClass:"data-radio"},[i("el-radio-group",{model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"item.value"}},[e.roleTabShow?e._e():i("el-radio",{attrs:{label:1}},[e._v("本人")]),e._v(" "),i("el-radio",{attrs:{label:2}},[e._v("本人及下属")]),e._v(" "),i("el-radio",{attrs:{label:3}},[e._v("本部门")]),e._v(" "),i("el-radio",{attrs:{label:4}},[e._v("本部门及下属部门")]),e._v(" "),i("el-radio",{attrs:{label:5}},[e._v("全部")])],1)],1)]):e._e()]}))],2)],2):e._e()],1)],1)],1),e._v(" "),i("relate-empoyee",{attrs:{visible:e.relateEmpoyeeShow,"role-id":e.roleId},on:{"update:visible":function(t){e.relateEmpoyeeShow=t},save:e.employeesSave}}),e._v(" "),i("field-set-dialog",{attrs:{visible:e.setFieldShow,"role-id":e.roleId,label:e.setFieldLabel,"role-type":e.parentId},on:{"update:visible":function(t){e.setFieldShow=t}}}),e._v(" "),e.editRoleDialogShow?i("edit-role-dialog",{attrs:{"user-show":"copyRole"===e.editRoleType,"selection-list":e.selectionList,visible:e.editRoleDialogShow},on:{"update:visible":function(t){e.editRoleDialogShow=t},change:e.getUserList}}):e._e(),e._v(" "),e.setRoleRangeShow?i("role-range-set-dialog",{attrs:{visible:e.setRoleRangeShow,"role-id":e.roleId},on:{"update:visible":function(t){e.setRoleRangeShow=t}}}):e._e()],1)},a=[],l=i("2909"),s=i("1da1"),o=i("5530"),r=(i("96cf"),i("a9e3"),i("ac1f"),i("841c"),i("d3b7"),i("159b"),i("4de4"),i("caad"),i("a434"),i("d81d"),i("b64b"),i("7db0"),i("99af"),i("a15b"),i("2934")),c=i("8d55"),d=i("8950"),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{visible:e.visible,"append-to-body":!0,"close-on-click-modal":!1,title:e.title,width:"700px"},on:{close:e.handleCancel}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"field-set-dialog"},[i("el-table",{class:e.WKConfig.tableStyle.class,staticStyle:{width:"100%"},attrs:{data:e.list,stripe:e.WKConfig.tableStyle.stripe,height:"50vh"}},[i("el-table-column",{attrs:{label:"字段名称",prop:"name",width:"200"}}),e._v(" "),i("el-table-column",{attrs:{label:"字段权限"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("el-checkbox",{attrs:{disabled:!e.getCanOpreateRead(n.operateType)},on:{change:function(t){e.checkCheckboxChange(n)}},model:{value:n.canCheck,callback:function(t){e.$set(n,"canCheck",t)},expression:"row.canCheck"}},[e._v("可以查看")]),e._v(" "),i("el-checkbox",{attrs:{disabled:!e.getCanOpreateEdit(n.operateType)},on:{change:function(t){e.editCheckboxChange(n)}},model:{value:n.canEdit,callback:function(t){e.$set(n,"canEdit",t)},expression:"row.canEdit"}},[e._v("可以修改")]),e._v(" "),e.getMaskIsShow(n)?[i("el-checkbox",{on:{change:function(t){e.maskCheckboxChange(n)}},model:{value:n.canMask,callback:function(t){e.$set(n,"canMask",t)},expression:"row.canMask"}},[e._v("掩码显示")]),e._v(" "),i("el-button",{staticClass:"mask-button",attrs:{disabled:!n.canMask,type:"text"},on:{click:function(t){e.setMaskClick(n)}}},[e._v("设置掩码规则")])]:e._e()]}}])})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{staticStyle:{float:"left"},attrs:{type:"text"},on:{click:e.getFieldList}},[e._v("重置")]),e._v(" "),i("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.handleConfirm,expression:"handleConfirm"}],attrs:{type:"primary"}},[e._v("保存")]),e._v(" "),i("el-button",{on:{click:e.handleCancel}},[e._v("取消")])],1),e._v(" "),e.maskSetVisible?i("el-dialog",{attrs:{visible:e.maskSetVisible,"append-to-body":!0,"close-on-click-modal":!1,title:"设置掩码规则",width:"500px"},on:{close:function(t){e.maskSetVisible=!1}}},[i("div",{staticClass:"mask-wrap"},[i("div",{staticClass:"mask-wrap__des"},[e._v("\n        1、勾选该选项后，该字段的值在页面上将以掩码显示，比如 ：手机188****8888、邮箱wa*****@5kcrm.com、货币全部掩码显示、地址的详细地址全部掩码显示"),i("br"),e._v("\n        2、字段配置掩码后，若用户看到的是掩码显示，那该用户导出的也是掩码显示"),i("br"),e._v("\n        3、若有此字段的编辑权限，则在编辑页为非掩码显示\n      ")]),e._v(" "),i("div",{staticClass:"mask-wrap__body"},[i("div",[e._v("掩码显示的页面")]),e._v(" "),i("div",{staticClass:"handle"},[i("el-checkbox",{attrs:{disabled:""},model:{value:e.maskEditDetail.tableMask,callback:function(t){e.$set(e.maskEditDetail,"tableMask",t)},expression:"maskEditDetail.tableMask"}},[e._v("列表页面")]),e._v(" "),i("el-checkbox",{model:{value:e.maskEditDetail.viewMask,callback:function(t){e.$set(e.maskEditDetail,"viewMask",t)},expression:"maskEditDetail.viewMask"}},[e._v("详情页面")])],1)])]),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.handleMaskConfirm,expression:"handleMaskConfirm"}],attrs:{type:"primary"}},[e._v("确定")]),e._v(" "),i("el-button",{on:{click:function(t){e.maskSetVisible=!1}}},[e._v("取消")])],1)]):e._e()],1)},h=[],p=i("ed08"),f={name:"FieldSetDialog",components:{},mixins:[],props:{label:[String,Number],roleId:[String,Number],visible:{type:Boolean,required:!0,default:!1},roleType:{type:[String,Number],default:""}},data:function(){return{loading:!1,list:[],rowDetail:null,maskEditDetail:null,maskSetVisible:!1}},computed:{title:function(){return"字段授权"}},watch:{visible:{handler:function(){this.visible&&this.getFieldList()},immediate:!0}},mounted:function(){},methods:{getFieldList:function(){var e=this;this.list=[],this.loading=!0;var t="";t=12==this.roleType?c["l"]:c["i"],t({label:this.label,roleId:this.roleId}).then((function(t){e.loading=!1;var i=t.data||[],n=[];i.forEach((function(e){50!==e.type&&(e.canCheck=2==e.authLevel||3==e.authLevel,e.canEdit=3==e.authLevel,e.canMask=0!==e.maskType,e.tableMask=1==e.maskType||2==e.maskType,e.viewMask=2==e.maskType,n.push(e))})),e.list=n})).catch((function(){e.loading=!1}))},handleCancel:function(){this.$emit("update:visible",!1)},getCanOpreateRead:function(e){return 1==e||2==e},getCanOpreateEdit:function(e){return 1==e||3==e},getMaskIsShow:function(e){var t=e.type;e.fieldName;return 7==t||14==t||6==t||43==t},handleConfirm:function(){var e=this;this.loading=!0;var t=Object(p["t"])(this.list);t.forEach((function(e){var t=3;t=e.canCheck&&e.canEdit?3:e.canCheck?2:1,e.authLevel=t,delete e.canCheck,delete e.canEdit;var i=0;(e.tableMask||e.viewMask)&&(i=e.tableMask&&e.viewMask?2:1),e.maskType=i,delete e.canMask,delete e.tableMask,delete e.viewMask}));var i="";i=12==this.roleType?c["m"]:c["j"],i(t).then((function(t){e.loading=!1,e.$message.success("操作成功"),e.handleCancel()})).catch((function(){e.loading=!1}))},editCheckboxChange:function(e){e.canEdit&&this.$set(e,"canCheck",!0)},checkCheckboxChange:function(e){!e.canCheck&&e.canEdit&&this.$set(e,"canEdit",!1)},maskCheckboxChange:function(e){e.tableMask=e.canMask,e.viewMask=e.canMask},setMaskClick:function(e){this.rowDetail=e,this.maskEditDetail=Object(p["t"])(e),this.maskSetVisible=!0},handleMaskConfirm:function(){this.rowDetail.tableMask=this.maskEditDetail.tableMask,this.rowDetail.viewMask=this.maskEditDetail.viewMask,this.maskSetVisible=!1}}},v=f,b=(i("4548"),i("2877")),m=Object(b["a"])(v,u,h,!1,null,"679fe189",null),g=m.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{ref:"wkDialog",attrs:{visible:e.visible,"append-to-body":!0,"close-on-click-modal":!1,title:e.title,width:"700px"},on:{close:e.handleCancel}},[i("el-checkbox",{staticClass:"el-bold-checkbox",on:{change:e.allChange},model:{value:e.allChecked,callback:function(t){e.allChecked=t},expression:"allChecked"}},[e._v("全选")]),e._v(" "),i("el-checkbox-group",{on:{change:e.groupChange},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},e._l(e.treeList,(function(t,n){return i("div",{key:n,staticClass:"role-set-section"},[i("div",{staticClass:"role-set-section__title"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"role-set-section__list"},e._l(t.list,(function(t,n){return i("el-checkbox",{key:n,attrs:{label:t.roleId}},[e._v(e._s(t.roleName))])})))])}))),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.handleConfirm,expression:"handleConfirm"}],attrs:{type:"primary"}},[e._v("保存")]),e._v(" "),i("el-button",{on:{click:e.handleCancel}},[e._v("取消")])],1)],1)},w=[],y=i("612a"),_=i("9dba"),C={name:"RoleRangeSetDialog",components:{},mixins:[_["a"]],props:{roleId:[String,Number],visible:{type:Boolean,required:!0,default:!1}},data:function(){return{loading:!1,allChecked:!1,treeList:[],checkList:[],allIds:[]}},computed:{title:function(){return"配置查看范围"}},mounted:function(){this.getRoleList()},methods:{getRoleRangeValue:function(){var e=this;this.loading=!0,Object(y["b"])(this.roleId).then((function(t){e.checkList=t.data||[],e.groupChange(),e.loading=!1})).catch((function(){e.loading=!1}))},getRoleList:function(){var e=this;this.loading=!0,Object(y["a"])().then((function(t){e.loading=!1;var i=t.data||[],n=[];i.forEach((function(e){e.list.forEach((function(e){n.push(e.roleId)}))})),e.allIds=n,e.treeList=i,e.getRoleRangeValue()})).catch((function(){e.loading=!1}))},handleCancel:function(){this.$emit("update:visible",!1)},allChange:function(){this.allChecked?this.checkList.length!==this.allIds.length&&(this.checkList=Object(p["t"])(this.allIds)):this.checkList.length===this.allIds.length&&(this.checkList=[])},groupChange:function(){this.checkList.length===this.allIds.length?this.allChecked||(this.allChecked=!0):this.allChecked&&(this.allChecked=!1)},handleConfirm:function(){var e=this;this.loading=!0,Object(y["c"])(this.roleId,this.checkList).then((function(t){e.loading=!1,e.$message.success("操作成功"),e.handleCancel()})).catch((function(){e.loading=!1}))}}},x=C,R=(i("c630"),Object(b["a"])(x,k,w,!1,null,"23386023",null)),L=R.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("flexbox",{staticClass:"reminder-wrapper"},[i("flexbox",{staticClass:"reminder-body",attrs:{align:"stretch"}},[i("i",{staticClass:"wk wk-warning reminder-icon"}),e._v(" "),i("div",{staticClass:"reminder-content",style:{"font-size":e.fontSize+"px"},domProps:{innerHTML:e._s(e.content)}}),e._v(" "),e._t("default"),e._v(" "),e.closeShow?i("i",{staticClass:"el-icon-close close",on:{click:e.close}}):e._e()],2)],1)},S=[],M={name:"Reminder",components:{},props:{closeShow:{type:Boolean,default:!1},content:{type:String,default:"内容"},fontSize:{type:String,default:"14"}},data:function(){return{}},computed:{},mounted:function(){},destroyed:function(){},methods:{close:function(){this.$emit("close")}}},T=M,j=(i("8656"),Object(b["a"])(T,I,S,!1,null,"82904f82",null)),E=j.exports,D=i("f468"),$=i("4dd8"),O=i("563d"),A=i("2f62"),N={components:{RelateEmpoyee:d["a"],FieldSetDialog:g,RoleRangeSetDialog:L,Reminder:E,XrHeader:D["a"],EditRoleDialog:$["a"]},data:function(){return{parentId:"",title:"",searchInput:"",tableData:[],tableHeight:document.documentElement.clientHeight-300,treeHeight:document.documentElement.clientHeight-230,currentPage:1,pageSize:15,pageSizes:[15,30,45,60],total:0,tableList:[{label:"部门",field:"deptName"},{label:"职位",field:"post"},{label:"角色",field:"roleName"}],newRoleType:"create",newRoleVisible:!1,role:{},roleList:[],allRoleList:[],mainMenuIndex:"user",ruleMenuIndex:"data",ruleMenuList:[],defaultProps:{children:"childMenu",label:"menuName",disabled:!1},relateEmpoyeeShow:!1,roleActive:null,dropdownHandleRole:null,roleMenuLoading:!1,ruleLoading:!1,userLoading:!1,setFieldLabel:"",setFieldShow:!1,selectionList:[],editRoleType:"",editRoleDialogShow:!1,tabType:"91",superTree:[],setRoleRangeShow:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(A["c"])(["moduleAuth"])),{},{roleId:function(){return this.roleActive?this.roleActive.roleId:""},showRuleSet:function(){return!!this.roleActive&&("admin"!=this.roleActive.remark&&"project"!=this.roleActive.remark)},showReminder:function(){return!!this.roleActive&&"project"==this.roleActive.remark},roleTabShow:function(){return 9==this.parentId},showRoleUser:function(){return 4!==Number(this.parentId)},roleHelpObj:function(){return{1:{type:"22",id:"172"},2:{type:"22",id:"176"},4:{type:"22",id:"178"},7:{type:"22",id:"173"},9:{type:"22",id:"177"}}[this.parentId]||null},newRoleTitle:function(){return"create"===this.newRoleType?"新建角色":"编辑角色"}}),watch:{showRoleUser:{handler:function(){this.showRoleUser?this.mainMenuIndex="user":this.mainMenuIndex="rule"},deep:!0}},mounted:function(){var e=this;window.onresize=function(){e.tableHeight=document.documentElement.clientHeight-300,e.treeHeight=document.documentElement.clientHeight-230},this.parentId=this.$route.params.parentId,this.title=this.$route.params.title,this.getRulesList(),this.getRoleList()},beforeRouteUpdate:function(e,t,i){this.tabType="91",this.parentId=e.params.parentId,this.title=e.params.title,this.roleActive=null,this.roleList=[],this.mainMenuIndex="user",this.currentPage=1,this.total=0,this.tableData=[],this.$refs.xrHeader&&(this.$refs.xrHeader.search="",this.searchInput=""),this.getRulesList(),this.getRoleList(),i()},methods:{getRulesList:function(){var e=this;Object(c["k"])(this.parentId).then((function(t){var i=t.data||{};if(i.data){var n=[i.data];if(e.ruleMenuList=[{label:"模块功能",index:"data",type:"tree",value:[],data:n}],e.roleTabShow){var a=Object(p["t"])(n);e.addDisabledToTree(a),e.superTree=a}i.bi&&e.ruleMenuList.push({label:"数据分析",index:"bi",type:"tree",value:[],data:[i.bi]})}else e.ruleMenuList=[];e.getRoleRulesInfo()}))},addDisabledToTree:function(e){var t=this;e.forEach((function(e){e.disabled="label-92"!==e.remarks,e.childMenu&&t.addDisabledToTree(e.childMenu)}))},getDisabledDeleteStatus:function(e){var t=4===e.roleType&&"1"===e.remark;return!t},getRoleList:function(){var e=this;this.roleMenuLoading=!0,Object(c["h"])(this.parentId).then((function(t){var i=t.data||[];e.roleTabShow?(e.allRoleList=i,e.roleList=e.allRoleList.filter((function(t){return t.label==e.tabType}))):e.roleList=i;var n=!1;if(e.roleActive)for(var a=0;a<e.roleList.length;a++){var l=e.roleList[a];if(l.roleId==e.roleActive.roleId){e.roleActive=l,e.getRoleRulesInfo(),n=!0;break}}!n&&e.roleList.length&&(e.roleActive=e.roleList[0],e.getRoleRulesInfo()),e.refreshUserList(),e.roleMenuLoading=!1})).catch((function(){e.roleMenuLoading=!1}))},addEmployees:function(){this.relateEmpoyeeShow=!0},employeesSave:function(e){this.relateEmpoyeeShow=!1,this.getUserList()},employeeHandleClick:function(e,t){var i=this;"delete"===e?this.$confirm("此操作将永久删除是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i.userLoading=!0,Object(c["n"])({userId:t.userId,roleId:i.roleActive.roleId}).then((function(e){i.userLoading=!1,i.getUserList(),i.$message.success("删除成功")})).catch((function(){i.userLoading=!1}))})).catch((function(){i.$message({type:"info",message:"已取消删除"})})):"editRole"!==e&&"copyRole"!==e||(this.selectionList=[t],this.editRoleType=e,this.editRoleDialogShow=!0)},roleTabChange:function(){var e=this;this.roleList=this.allRoleList.filter((function(t){return t.label==e.tabType})),this.roleList.length?(this.roleActive=this.roleList[0],this.getRoleRulesInfo()):this.roleActive=null,this.refreshUserList()},newRoleClose:function(){this.newRoleVisible=!1},newRoleBtn:function(){this.newRoleType="create",this.role={},this.newRoleVisible=!0},roleDropdownClick:function(e){this.dropdownHandleRole=e},roleHandleClick:function(e){"edit"==e?this.roleEditBtn(this.dropdownHandleRole):"copy"==e?this.ticketsBtn(this.dropdownHandleRole):"delete"==e&&this.roleDelect(this.dropdownHandleRole)},getReminderContent:function(){return this.roleActive&&"project"==this.roleActive.remark?"项目管理员拥有“项目管理”模块所有权限，能看到并维护所有项目信息":""},roleEditBtn:function(e){this.newRoleType="update",this.role={title:e.roleName,parentId:e.roleType,id:e.roleId},this.newRoleVisible=!0},ticketsBtn:function(e){var t=this;this.$confirm("确定此操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(c["e"])({roleId:e.roleId}).then((function(e){t.$message.success("复制成功"),t.getRoleList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},roleDelect:function(e){var t=this;this.$confirm("此操作将永久删除是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(c["f"])({roleId:e.roleId}).then((function(e){t.roleList.length&&(t.roleActive=t.roleList[0],t.getRoleRulesInfo()),t.getRoleList(),t.$message.success("删除成功")}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},newRoleSubmit:function(){var e=this;if(this.role.title)if("create"==this.newRoleType){var t={roleName:this.role.title,roleType:this.parentId};this.roleTabShow&&(t.label=this.tabType),Object(c["d"])(t).then((function(t){e.getRoleList(),e.$message.success("添加成功"),e.newRoleClose()}))}else Object(c["g"])({roleName:this.role.title,roleType:this.role.parentId,roleId:this.role.id}).then((function(t){e.getRoleList(),e.$message.success("编辑成功"),e.newRoleClose()}));else this.$message.error("角色名称不能为空")},roleMenuSelect:function(e){this.roleActive=e,"rule"!=this.mainMenuIndex||this.showRuleSet||(this.mainMenuIndex="user"),this.getRoleRulesInfo(),this.refreshUserList()},getRoleRulesInfo:function(){var e=this;if(this.roleActive&&this.ruleMenuList.length){if(2==this.parentId||10==this.parentId||9==this.parentId&&"92"==this.tabType||12==this.parentId){var t=this.ruleMenuList[this.ruleMenuList.length-1];"data"!=t.type&&this.ruleMenuList.push({label:"数据权限",index:"info",type:"data",value:this.roleActive.dataType})}else if(9==this.parentId&&"91"==this.tabType){var i=this.ruleMenuList[this.ruleMenuList.length-1];"tree"!=i.type&&(this.ruleMenuList=[this.ruleMenuList[0]]),this.ruleMenuIndex="data"}for(var n=function(t){var i=e.ruleMenuList[t];"tree"==i.type?(i.rules=e.getRoleRules(e.roleActive.rules[i.index],i.data[0]),e.$nextTick((function(){var t=e.$refs["tree"+i.index];t&&("[object Array]"==Object.prototype.toString.call(t)?t.length&&t[0].setCheckedKeys(i.rules):t.setCheckedKeys(i.rules),e.setDisabledAuth())}))):i.value=e.roleActive.dataType},a=0;a<this.ruleMenuList.length;a++)n(a)}},setDisabledAuth:function(){if(4!==Number(this.parentId))this.$set(this.defaultProps,"disabled",!1);else{var e=this;this.$set(this.defaultProps,"disabled",(function(t,i){return 4===e.roleActive.label&&!["read","export","print"].includes(t.realm)}))}},getRoleRules:function(e,t){e||(e=[]);for(var i=!1,n=this.copyItem(e),a=0;a<t.childMenu.length;a++){var l=t.childMenu[a];if(!l.hasOwnProperty("children"))return l.length+1!=n.length&&this.removeItem(n,t.id),n;for(var s=0;s<e.length;s++){for(var o=e[s],r=[],c=0;c<l.childMenu.length;c++){var d=l.childMenu[c];d.id==o&&r.push(d)}r.length!=l.childMenu.length&&(i=!0,this.removeItem(n,l.id))}}i&&this.removeItem(n,t.id);for(var u=[],h=0;h<n.length;h++){var p=n[h];p&&u.push(parseInt(p))}return u},copyItem:function(e){for(var t=[],i=0;i<e.length;i++)t.push(e[i]);return t},removeItem:function(e,t){for(var i=-1,n=0;n<e.length;n++)if(t==e[n]){i=n;break}i>0&&e.splice(i,1)},containItem:function(e,t){for(var i=0;i<e.length;i++)if(t==e[i])return!0;return!1},headerSearch:function(){this.refreshUserList()},refreshUserList:function(){this.currentPage=1,this.getUserList()},getUserList:function(){var e=this;if(!this.roleActive)return this.tableData=[],void(this.total=0);this.userLoading=!0,Object(r["p"])({page:this.currentPage,limit:this.pageSize,roleId:this.roleActive.roleId,realname:this.searchInput}).then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(i){var n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=i.data.list,!e.moduleAuth||!e.moduleAuth.customApp){t.next=7;break}return a=n.map((function(e){return e.userId})),t.next=5,e.getUserCustomRole(a).catch((function(){return{}}));case 5:s=t.sent,Object.keys(s).forEach((function(e){var t=n.find((function(t){return t.userId===e}));if(t){var i=(s[e]||[]).filter((function(e){return!!e})).map((function(e){return e.roleName})),a=(s[e]||[]).filter((function(e){return!!e})).map((function(e){return"".concat(e.applicationId,"-").concat(e.roleId)}));t.roleName=[t.roleName].concat(Object(l["a"])(i)).join(","),t.roleId=[t.roleId].concat(Object(l["a"])(a)).join(",")}}));case 7:e.tableData=n,e.total=i.data.totalRow,e.userLoading=!1;case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){e.userLoading=!1}))},getUserCustomRole:function(e){return new Promise((function(t,i){if(!e||!e.length)return t({});Object(O["k"])(e).then((function(e){t(e.data||{})})).catch((function(){i()}))}))},handleSizeChange:function(e){this.pageSize=e,this.refreshUserList()},handleCurrentChange:function(e){this.currentPage=e,this.getUserList()},ruleSubmit:function(){var e=this;this.ruleLoading=!0;for(var t=[],i="",n=0;n<this.ruleMenuList.length;n++){var a=this.ruleMenuList[n];if("tree"==a.type){var l=this.$refs["tree"+a.index];l&&(t="[object Array]"==Object.prototype.toString.call(l)?t.concat(l[0].getCheckedKeys()):t.concat(l.getCheckedKeys()))}else i=a.value}Object(c["o"])({menuIds:t,dataType:i,roleId:this.roleActive.roleId,roleName:this.roleActive.roleName}).then((function(t){e.getRoleList(),e.$message.success("编辑成功"),e.ruleLoading=!1})).catch((function(){e.ruleLoading=!1}))},canSetField:function(e){return 10!=this.parentId&&(["leads","customer","contacts","business","contract","receivables","receivablesPlan","product","visit","invoice"].includes(e)&&"data"===this.ruleMenuIndex)},fieldSetClick:function(e){this.setFieldLabel="",this.setFieldShow=!0},checkRangeSetClick:function(e){this.setRoleRangeShow=!0},getStatusColor:function(e){return 0==e?"#FF6767":1==e?"#46CDCF":2==e?"#CCCCCC":void 0}}},H=N,z=(i("74a2"),Object(b["a"])(H,n,a,!1,null,"2c77ebd3",null));t["default"]=z.exports},4548:function(e,t,i){"use strict";i("6fda")},"4ea4":function(e,t,i){},"6fda":function(e,t,i){},"74a2":function(e,t,i){"use strict";i("78d0")},"78d0":function(e,t,i){},"7aee":function(e,t,i){},8656:function(e,t,i){"use strict";i("4ea4")},c630:function(e,t,i){"use strict";i("7aee")}}]);