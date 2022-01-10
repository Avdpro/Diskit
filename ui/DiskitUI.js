//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {listBox} from "../gear/listBox.js";
import {naviBox} from "../gear/naviBox.js";
import {toolBox} from "../gear/toolBox.js";
import {btnIcon} from "../gear/btnIcon.js";
/*#{1FBR233GG0Imports*/
import {CCDisk} from "../data/CCDisk.js";
import {CCFolder} from "../data/CCFolder.js";
import {CCFile} from "../data/CCFile.js";
import cokeNT from "/@cokecodes/cokeNT.js";
/*}#1FBR233GG0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var DiskitUI=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBR233GG1ExLocal*/
	/*}#1FBR233GG1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FBR233GG3ExState*/
		/*}#1FBR233GG3ExState*/
	},);
	/*#{1FBR233GG1PostState*/
	/*}#1FBR233GG1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FBR233GG1", 
		"locked": 1, "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, 
		items: [
			{
				"type": "box", "jaxId": "1FBR2S8SB0", "id": "BoxList", "x": appCfg.size.naviBoxW, "y": appCfg.size.headerH, "w": "FW-"+(appCfg.size.naviBoxW+appCfg.size.toolBoxW), 
				"h": "FH-"+(appCfg.size.headerH+appCfg.size.stateBoxH), "autoLayout": 1, "color": appCfg.color.window, "shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "box", "jaxId": "1FBR5JL960", "id": "BoxListHead", "x": 0, "y": 1, "w": "FW", "h": appCfg.size.listHeadH, "autoLayout": 1, "color": appCfg.color.headBox, 
						"shadowColor": [0,0,0,0.5], 
						items: [
							{
								"type": "box", "jaxId": "1FBR5C1N60", "id": "BtmLine", "x": 0, "y": appCfg.size.listHeadH, "w": "FW", "h": 1, "autoLayout": 1, "color": 787878, 
								"shadowColor": [0,0,0,0.5]
							},
							{
								"type": "box", "jaxId": "1FBR5F4TH0", "id": "TopLine", "x": 0, "y": 0, "w": "FW", "h": 1, "autoLayout": 1, "color": [255,255,255,1], "shadowColor": [0,0,0,0.5]
							},
							{
								"type": "text", "jaxId": "1FBR5JL964", "id": "TxtCol0", "x": 3, "y": 0, "w": 100, "h": "FH", "text": "Name", "color": [0,0,0], "alignV": 1, "fontSize": appCfg.txtSize.small
							},
							{
								"type": "text", "jaxId": "1FBR5KUAG0", "id": "TxtCol1", "x": appCfg.size.listColW1, "y": 0, "w": 100, "h": "FH", "text": "Size", "color": [0,0,0], 
								"alignV": 1, "fontSize": appCfg.txtSize.small, 
								items: [
									{
										"type": "box", "jaxId": "1FBR5MSQB0", "x": -3, "y": 3, "w": 1, "h": "FH-6", "color": [150,150,150,1], "shadowColor": [0,0,0,0.5]
									}
								]
							},
							{
								"type": "text", "jaxId": "1FBR5NHGE0", "id": "TxtCol2", "x": appCfg.size.listColW1+appCfg.size.listColW2, "y": 0, "w": 100, "h": "FH", "text": "Modified", 
								"color": [0,0,0], "alignV": 1, "fontSize": appCfg.txtSize.small, 
								items: [
									{
										"type": "box", "jaxId": "1FBR5NHGF1", "x": -3, "y": 3, "w": 1, "h": "FH-6", "color": [150,150,150,1], "shadowColor": [0,0,0,0.5]
									}
								]
							}
						]
					},
					{
						"type": listBox(app,null),"jaxId": "1FBU85M0D10", 
						"locked": 0, "id": "listBox", "x": 0, "y": appCfg.size.listHeadH+1
					}
				],
				//函数
				OnTreeClick:function(){
					/*#{1FE0V77050Code*/
					app.setFocusBox(app.listBox);
					/*}#1FE0V77050Code*/
				}
			},
			{
				"type": "box", "jaxId": "1FBR2OKUF0", "id": "BoxNavi", "x": 0, "y": appCfg.size.headerH, "w": appCfg.size.naviBoxW, "h": "FH-"+(appCfg.size.headerH+appCfg.size.stateBoxH), 
				"autoLayout": 1, "color": appCfg.color.window, "shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "box", "jaxId": "1FBR2FP3D0", "id": "Line", "x": "FW", "y": 0, "w": 1, "h": "FH", "autoLayout": 1, "uiEvent": -1, "color": 787878, "shadowColor": [0,0,0,0.5]
					},
					{
						"type": "button", "jaxId": "1FBR2OKUG1", "id": "BtnSize", "x": "FW", "y": 0, "w": 4, "h": "FH", "autoLayout": 1, "cursor": "col-resize", "drag": 1, 
						"hudBtnUp": {
							"type": "box", "jaxId": "1FC1D5KPO0", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "color": [180,180,180,0], "shadowColor": [0,0,0,0.5]
						},
						"hudBtnDown": {
							"type": "box", "jaxId": "1FBR2OKUG4", "x": 0, "y": 0, "w": 4, "h": "FH", "color": [80,80,80,1], "shadowColor": [0,0,0,0.5]
						},
						"hudBtnOver": {
							"type": "box", "jaxId": "1FBR2L1EC0", "x": 0, "y": 0, "w": 4, "h": "FH", "shadowColor": [0,0,0,0.5]
						},
						//函数
						OnDragStart:function(e){
							/*#{1FC1AR2AR14Code*/
							this.ox=this.x;
							this.uiEvent=0;
							this.hudBtnUp.color=[0,0,0,0.5];
							/*}#1FC1AR2AR14Code*/
						},
						//函数
						OnDrag:function(e, dx, dy){
							/*#{1FC1ANQGI15Code*/
							let x;
							x=this.ox+dx;
							x=x<100?100:x;
							this.x=x;
							/*}#1FC1ANQGI15Code*/
						},
						//函数
						OnDragEnd:function(e, cancel, dx, dy){
							/*#{1FC1ANQGI17Code*/
							let w;
							w=this.ox+dx;
							w=w<100?100:w;
							this.uiEvent=1;
							w=jaxApp.setNaviBoxW(w);
							this.x=w;
							this.hudBtnUp.color=[0,0,0,0];
							this.state=0;
							/*}#1FC1ANQGI17Code*/
						}
					},
					{
						"type": naviBox(app,null),"jaxId": "1FBSA33BU9", 
						"locked": 0, "id": "naviBox", "x": 0, "y": 0
					}
				],
				//函数
				OnTreeClick:function(){
					/*#{1FE0VBUFE0Code*/
					app.setFocusBox(app.naviBox);
					/*}#1FE0VBUFE0Code*/
				}
			},
			{
				"type": "box", "jaxId": "1FE113PNJ0", "id": "BoxTool", "x": "FW-"+appCfg.size.toolBoxW, "y": appCfg.size.headerH, "w": appCfg.size.toolBoxW, "h": "FH-"+(appCfg.size.headerH+appCfg.size.stateBoxH), 
				"autoLayout": 1, "color": appCfg.color.window, "shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "box", "jaxId": "1FE113PNK1", "id": "Line", "x": -1, "y": 0, "w": 1, "h": "FH", "autoLayout": 1, "uiEvent": -1, "color": 787878, "shadowColor": [0,0,0,0.5]
					},
					{
						"type": toolBox(app,null),"jaxId": "1FE87R9EO22", 
						"locked": 0, "id": "DKTool", "x": 0, "y": 0
					}
				],
				//函数
				OnTreeClick:function(){
					/*#{1FE113PNJ2Code*/
					/*}#1FE113PNJ2Code*/
				}
			},
			{
				"type": "box", "jaxId": "1FBR26ACL0", "id": "BoxHead", "x": 0, "y": 0, "w": "FW", "h": appCfg.size.headerH, "autoLayout": 1, "color": appCfg.color.headBox, 
				"shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "box", "jaxId": "1FBR2C50N0", "id": "BtmLine", "x": 0, "y": appCfg.size.headerH, "w": "FW", "h": 1, "autoLayout": 1, "color": 787878, "shadowColor": [0,0,0,0.5]
					},
					{
						"type": "hud", "jaxId": "1FBR4H3UE0", "id": "BoxHeadNavi", "x": 0, "y": 0, "w": appCfg.size.naviBoxW, "h": "FH", 
						items: [
							{
								"type": "box", "jaxId": "1FBR4H3UF0", "x": 3, "y": 3, "w": 1, "h": "FH-6", "color": [150,150,150,1], "shadowColor": [0,0,0,0.5]
							},
							{
								"type": btnIcon(app,32,"diskadd.svg",null),"jaxId": "1FBR4H3UF3", 
								"locked": 0, "id": "BtnNewDisk", "x": 6, "y": "(FH-32)/2", "tip": "Add new disk", 
								//函数
								OnClick:function(){
									/*#{1FC2G7GMM0Code*/
									app.DoAddDisk();
									/*}#1FC2G7GMM0Code*/
								}
							},
							{
								"type": btnIcon(app,32,"diskdownload.svg",null),"jaxId": "1FC2R95CR0", 
								"locked": 0, "id": "BtnDownloadDisk", "x": 38, "y": "(FH-32)/2", "tip": "Download disk as zip", 
								//函数
								OnClick:function(){
									/*#{1FC2R95CR4Code*/
									app.DoDownloadDisk();
									/*}#1FC2R95CR4Code*/
								}
							},
							{
								"type": btnIcon(app,32,"checkout.svg",null),"jaxId": "1FEKR0D7K0", 
								"locked": 0, "id": "BtnCheckOut", "x": 70, "y": "(FH-32)/2", "tip": "Check out from cloud", 
								//函数
								OnClick:function(){
									/*#{1FEKR0D7L1Code*/
									app.DoCheckOutDisk();
									return 1;
									/*}#1FEKR0D7L1Code*/
								}
							},
							{
								"type": btnIcon(app,32,"trash.svg",null),"jaxId": "1FBR4KQEH0", 
								"locked": 0, "id": "BtnNaviDel", "x": 102, "y": "(FH-32)/2", "tip": "Delete item", 
								//函数
								OnClick:function(){
									/*#{1FBR50B8K4Code*/
									let node;
									node=app.naviBox.hotNode;
									app.DoNaviDel(node.nodeObj,node.hud,node);
									/*}#1FBR50B8K4Code*/
								}
							}
						]
					},
					{
						"type": "hud", "jaxId": "1FBR4QL5B0", "id": "BoxHeadList", "x": appCfg.size.naviBoxW-3, "y": 0, "w": appCfg.size.naviBoxW, "h": "FH", 
						items: [
							{
								"type": "box", "jaxId": "1FBR4QL5B2", "x": 3, "y": 3, "w": 1, "h": "FH-6", "color": [150,150,150,1], "shadowColor": [0,0,0,0.5]
							},
							{
								"type": btnIcon(app,32,"folderadd.svg",null),"jaxId": "1FBR4QL5C1", 
								"locked": 0, "id": "BtnNewFolder", "x": 38, "y": "(FH-32)/2", "tip": "New Folder", 
								//函数
								OnClick:function(){
									/*#{1FC3QIQCL0Code*/
									app.DoListAddFolder();
									/*}#1FC3QIQCL0Code*/
								}
							},
							{
								"type": btnIcon(app,32,"fileupload.svg",null),"jaxId": "1FBR4QL5D1", 
								"locked": 0, "id": "BtnAddFile", "x": 70, "y": "(FH-32)/2", "tip": "Add file(s)", "labelHtml": "<input type=\"file\"/ multiple=\"true\">", 
								//函数
								OnLableAction:function(){
									/*#{1FC5O4P8G19Code*/
									let files=[],i,n;
									n=this.files.length;
									for(i=0;i<n;i++){
										files.push(this.files[i]);
									}
									app.DoListAddFile(files);
									this.value="";
									/*}#1FC5O4P8G19Code*/
								}
							},
							{
								"type": btnIcon(app,32,"filedownload.svg",null),"jaxId": "1FC3MFHVR0", 
								"locked": 0, "id": "BtnDownload", "x": 102, "y": "(FH-32)/2", "tip": "Download", 
								//函数
								OnClick:function(){
									/*#{1FC3QIQCL2Code*/
									app.DoListDownload();
									/*}#1FC3QIQCL2Code*/
								}
							},
							{
								"type": btnIcon(app,32,"rename.svg",null),"jaxId": "1FBR4QL5D5", 
								"locked": 0, "id": "BtnRename", "x": 134, "y": "(FH-32)/2", "tip": "Rename", 
								//函数
								OnClick:function(){
									/*#{1FC3QIQCL4Code*/
									app.DoListRename();
									/*}#1FC3QIQCL4Code*/
								}
							},
							{
								"type": btnIcon(app,32,"trash.svg",null),"jaxId": "1FC2UPKS60", 
								"locked": 0, "id": "BtnListDel", "x": 166, "y": "(FH-32)/2", "tip": "Delete item", 
								//函数
								OnClick:function(){
									/*#{1FC3QIQCL6Code*/
									app.DoListDel();
									/*}#1FC3QIQCL6Code*/
								}
							},
							{
								"type": btnIcon(app,32,"arrowupback.svg",null),"jaxId": "1FOPF1IQE0", 
								"locked": 1, "id": "BtnGoUp", "x": 6, "y": "(FH-32)/2", "tip": "Upper folder", 
								//函数
								OnClick:function(){
									/*#{1FOPF1IQF0Code*/
									app.DoListGoUpFolder();
									/*}#1FOPF1IQF0Code*/
								}
							}
						]
					},
					{
						"type": "hud", "jaxId": "1FE8L4CE30", "id": "BoxLogin", "x": "FW", "y": 0, "w": 100, "h": "FH", "anchorH": 2, "autoLayout": 1, "cursor": "pointer", 
						items: [
							{
								"type": "box", "jaxId": "1FE8MLFFC2", "id": "BoxUser", "x": 55, "y": 6, "w": 36, "h": 36, "clip": 1, "color": [255,255,255,0], "border": 2, "coner": 25, 
								"shadowColor": [0,0,0,0.5], 
								items: [
									{
										"type": "image", "jaxId": "1FE8MLFFC5", "id": "ImgUser", "x": -2, "y": -2, "w": "FW+4", "h": "FH+4", "alpha": 0.5, "image": "assets/user.svg", 
										"autoSize": 0, "fitSize": 1
									}
								]
							},
							{
								"type": "text", "jaxId": "1FE8MLFFC8", "id": "TxtUser", "x": 0, "y": "FH/2", "w": 53, "h": 14, "anchorV": 1, "text": "Offline", "color": [0,0,0], 
								"alignH": 2, "fontSize": appCfg.txtSize.smallMid
							}
						],
						//函数
						OnTreeClick:function(){
							/*#{1FOP87QDP0Code*/
							app.showCloudDlg();
							/*}#1FOP87QDP0Code*/
						}
					}
				]
			},
			{
				"type": "box", "jaxId": "1FBR439899", "id": "BoxState", "x": 0, "y": "FH", "w": "FW", "h": appCfg.size.stateBoxH, "anchorV": 2, "autoLayout": 1, "color": appCfg.color.stateBox, 
				"shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "text", "jaxId": "1FBR4H3UF8", "id": "TxtState", "x": 10, "y": 0, "w": 100, "h": 24, "text": "Ready.", "color": [0,0,0], "alignV": 1, "fontSize": appCfg.txtSize.small
					},
					{
						"type": "box", "jaxId": "1FBR46FJ50", "id": "Line", "x": 0, "y": -1, "w": "FW", "h": 1, "autoLayout": 1, "color": [150,150,150,1], "shadowColor": [0,0,0,0.5]
					}
				]
			}
		],
		faces: {
			"NaviOnDisk": {
				"$":function(vo){
					/*#{1FC2VF8JI0Func*/
					self.BtnDownloadDisk.enable=1;
					self.BtnNaviDel.enable=1;
					self.BtnGoUp.enable=0;
					/*}#1FC2VF8JI0Func*/
				},
			},
			"NaviOnFolder": {
				"$":function(vo){
					/*#{1FC2VFQRA0Func*/
					self.BtnDownloadDisk.enable=0;
					self.BtnNaviDel.enable=1;
					self.BtnGoUp.enable=1;
					/*}#1FC2VFQRA0Func*/
				},
			},
			"NaviOnNA": {
				"$":function(vo){
					/*#{1FC2VGK1V0Func*/
					self.BtnDownloadDisk.enable=0;
					self.BtnNaviDel.enable=0;
					self.BtnGoUp.enable=0;
					/*}#1FC2VGK1V0Func*/
				},
			},
			"ListNoEntry": {
				"$":function(vo){
					/*#{1FC3NLOVO0Func*/
					self.BtnNewFolder.enable=0;
					self.BtnAddFile.enable=0;
					/*}#1FC3NLOVO0Func*/
				},
			},
			"ListHasEntry": {
				"$":function(vo){
					/*#{1FC3NML120Func*/
					self.BtnNewFolder.enable=1;
					self.BtnAddFile.enable=1;
					/*}#1FC3NML120Func*/
				},
			},
			"ListNoItem": {
				"$":function(vo){
					/*#{1FC3NN2S90Func*/
					self.BtnDownload.enable=0;
					self.BtnRename.enable=0;
					self.BtnListDel.enable=0;
					/*}#1FC3NN2S90Func*/
				},
			},
			"ListHasItem": {
				"$":function(vo){
					/*#{1FC3NNNFA0Func*/
					self.BtnDownload.enable=1;
					self.BtnRename.enable=1;
					self.BtnListDel.enable=1;
					/*}#1FC3NNNFA0Func*/
				},
			},
			"Offline": {
				"$":function(vo){
					/*#{1FEAG7EB50Func*/
					self.TxtUser.text="offline";
					self.BoxLogin.uiEvent=1;
					/*}#1FEAG7EB50Func*/
				},
				/*BoxUser*/"#1FE8MLFFC2": {
					"color": [180,180,180,0]
				},
				/*ImgUser*/"#1FE8MLFFC5": {
					"alpha": 0.5
				},
				/*TxtUser*/"#1FE8MLFFC8": {
					"text": "Offline"
				},
			},
			"Online": {
				"$":function(vo){
					/*#{1FEAG9FFJ0Func*/
					self.TxtUser.text=cokeNT.loginVO.name;
					self.BoxLogin.uiEvent=-1;
					/*}#1FEAG9FFJ0Func*/
				},
				/*BoxUser*/"#1FE8MLFFC2": {
					"color": [255,255,255,1]
				},
				/*ImgUser*/"#1FE8MLFFC5": {
					"alpha": 1
				},
			}
		},
		/*#{1FBR233GG1ExAttrs*/
		/*}#1FBR233GG1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FBR233GG1CreateFunc*/
			app.mainUI=this;
			this.showFace("NaviOnNA");
			this.showFace("ListNoEntry");
			this.showFace("ListNoItem");
			this.naviBox.OnHotChanged=this.OnNaviChanged.bind(this);
			this.listBox.OnEntryChanged=this.OnEntryChanged.bind(this);
			this.listBox.OnHotChanged=this.OnListChanged.bind(this);
			
			self.showFace("Offline");
			cokeNT.onNotify("Online",()=>{self.showFace("Online");});
			cokeNT.onNotify("Offline",()=>{self.showFace("Offline")});
			cokeNT.checkLogin();
			/*}#1FBR233GG1CreateFunc*/
		
		}
	};
	/*#{1FBR233GG1ExViewDef*/

	//--------------------------------------------------------------------------------------
	//拖拽改变
	cssVO.setNaviBoxW=function(w){
		let tw;
		tw=appCfg.size.toolBoxW;
		appCfg.size.naviBoxW=w;
		self.BoxNavi.w=w;
		self.BoxList.x=w;
		self.BoxList.w="FW-"+(w+tw);
		self.BoxHeadList.x=w-3;
	};

	//--------------------------------------------------------------------------------------
	//Navi选中项目改变
	cssVO.OnNaviChanged=function(item,hud,node){
		//TODO: Code this:
		if(item instanceof CCDisk){
			self.showFace("NaviOnDisk");
		}else if(item instanceof CCFolder){
			self.showFace("NaviOnFolder");
		}else{
			self.showFace("NaviOnNA");
		}
		app.listEntry(item);
		app.toolBox.showItemTool(item);
	};

	//--------------------------------------------------------------------------------------
	//List入口目录改变
	cssVO.OnEntryChanged=function(item){
		if(!item){
			self.showFace("ListNoEntry");
		}else{
			self.showFace("ListHasEntry");
		}
	};

	//--------------------------------------------------------------------------------------
	//List选中项目改变
	cssVO.OnListChanged=function(item,hud,node){
		if(!item){
			self.showFace("ListNoItem");
		}else{
			self.showFace("ListHasItem");
		}
		app.toolBox.showItemTool(item);
	};
	
	//--------------------------------------------------------------------------------------
	//生成删除文件列表，提交App删除:
	/*cssVO.deleteItems=function(){
		let files;
		files=Array.from(app.listBox.selected).map((item)=>item.nodeObj.name);
		app.DoListDel(files);
	};*/

	/*}#1FBR233GG1ExViewDef*/
	
	return cssVO;
};

/*#{1FBR233GG0PostCode*/
/*}#1FBR233GG0PostCode*/

export {DiskitUI};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "DiskitUI.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FBR233GG0", 
//			"attrs": {
//				"viewName": "\"DiskitUI\"", "device": "iPad 1024x768", "w": "1024", "h": "768", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FBR233GG1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR233GG2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBR233GG3", 
//						"attrs": {}, "funcs": {"jaxId":"1FBR233GG4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "1", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "autoLayout": "On"
//					}, 
//					"faces": null, 
//					"viewFaces": {
//						"jaxId": "1FBR233GG6", 
//						"entrys": [
//							{
//								"jaxId": "1FC2VF8JI0", 
//								"attrs": {"Face Name":"\"NaviOnDisk\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2VI60B0", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FC2VFQRA0", 
//								"attrs": {"Face Name":"\"NaviOnFolder\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2VI60B1", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FC2VGK1V0", 
//								"attrs": {"Face Name":"\"NaviOnNA\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2VI60B2", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FC3NLOVO0", 
//								"attrs": {"Face Name":"\"ListNoEntry\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3NO7DJ0", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FC3NML120", 
//								"attrs": {"Face Name":"\"ListHasEntry\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3NO7DJ1", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FC3NN2S90", 
//								"attrs": {"Face Name":"\"ListNoItem\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3NO7DJ2", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FC3NNNFA0", 
//								"attrs": {"Face Name":"\"ListHasItem\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3NO7DJ3", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FEAG7EB50", 
//								"attrs": {"Face Name":"\"Offline\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEAH14JK0", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FEAG9FFJ0", 
//								"attrs": {"Face Name":"\"Online\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEAH14JL0", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							}
//						]
//					}, 
//					"funcs": {"jaxId":"1FBR233GG7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FBR2S8SB0", 
//							"attrs": {
//								"locked": "1", "id": "\"BoxList\"", "x": "#appCfg.size.naviBoxW", "y": "#appCfg.size.headerH", "w": "#\"FW-\"+(appCfg.size.naviBoxW+appCfg.size.toolBoxW)", 
//								"h": "#\"FH-\"+(appCfg.size.headerH+appCfg.size.stateBoxH)", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", "clip": "Off", 
//								"uiEvent": "On", "color": "#appCfg.color.window", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", 
//								"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", 
//								"cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {
//								"jaxId": "1FBR2S8SB2", 
//								"funcs": [
//									{
//										"jaxId": "1FE0V77050", "type": "object", "def": "CdyFunc", "name": "OnTreeClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE0V992R5", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FBR5JL960", 
//									"attrs": {
//										"locked": "1", "id": "\"BoxListHead\"", "x": "0", "y": "1", "w": "\"FW\"", "h": "#appCfg.size.listHeadH", "anchorH": "Left", "anchorV": "Top", 
//										"autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "color": "#appCfg.color.headBox", "border": "0", "borderStyle": "Solid", 
//										"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//										"shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR5JL962","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudBox", "jaxId": "1FBR5C1N60", 
//											"attrs": {
//												"locked": "1", "id": "\"BtmLine\"", "x": "0", "y": "#appCfg.size.listHeadH", "w": "\"FW\"", "h": "1", "anchorH": "Left", "anchorV": "Top", 
//												"autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "color": "#787878", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", 
//												"coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//												"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR5C1N70","funcs":[]}, "subs": []
//										},
//										{
//											"type": "object", "def": "HudBox", "jaxId": "1FBR5F4TH0", 
//											"attrs": {
//												"locked": "1", "id": "\"TopLine\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[255,255,255,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//												"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//												"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR5F4TJ0","funcs":[]}, "subs": []
//										},
//										{
//											"type": "object", "def": "HudTxt", "jaxId": "1FBR5JL964", 
//											"attrs": {
//												"locked": "1", "id": "\"TxtCol0\"", "x": "3", "y": "0", "w": "100", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//												"display": "Show", "clip": "Off", "uiEvent": "On", "text": "\"Name\"", "color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", 
//												"wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.small", "bold": "0", "italic": "0", 
//												"underline": "0", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR5JL966","funcs":[]}, "subs": []
//										},
//										{
//											"type": "object", "def": "HudTxt", "jaxId": "1FBR5KUAG0", 
//											"attrs": {
//												"locked": "1", "id": "\"TxtCol1\"", "x": "#appCfg.size.listColW1", "y": "0", "w": "100", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", 
//												"autoLayout": "Off", "display": "Show", "clip": "Off", "uiEvent": "On", "text": "\"Size\"", "color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", 
//												"select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.small", "bold": "0", 
//												"italic": "0", "underline": "0", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR5KUAH0","funcs":[]}, 
//											"subs": [
//												{
//													"type": "object", "def": "HudBox", "jaxId": "1FBR5MSQB0", 
//													"attrs": {
//														"locked": "1", "id": "\"\"", "x": "-3", "y": "3", "w": "1", "h": "\"FH-6\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//														"clip": "Off", "uiEvent": "On", "color": "[150,150,150,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//														"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//														"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//													}, 
//													"funcs": {"jaxId":"1FBR5MSQC0","funcs":[]}, "subs": []
//												}
//											]
//											
//										},
//										{
//											"type": "object", "def": "HudTxt", "jaxId": "1FBR5NHGE0", 
//											"attrs": {
//												"locked": "1", "id": "\"TxtCol2\"", "x": "#appCfg.size.listColW1+appCfg.size.listColW2", "y": "0", "w": "100", "h": "\"FH\"", "anchorH": "Left", 
//												"anchorV": "Top", "autoLayout": "Off", "display": "Show", "clip": "Off", "uiEvent": "On", "text": "\"Modified\"", "color": "[0,0,0]", "autoSizeW": "0", 
//												"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.small", 
//												"bold": "0", "italic": "0", "underline": "0", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR5NHGF0","funcs":[]}, 
//											"subs": [
//												{
//													"type": "object", "def": "HudBox", "jaxId": "1FBR5NHGF1", 
//													"attrs": {
//														"locked": "1", "id": "\"\"", "x": "-3", "y": "3", "w": "1", "h": "\"FH-6\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//														"clip": "Off", "uiEvent": "On", "color": "[150,150,150,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//														"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//														"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//													}, 
//													"funcs": {"jaxId":"1FBR5NHGF2","funcs":[]}, "subs": []
//												}
//											]
//											
//										}
//									]
//									
//								},
//								{
//									"type": "object", "def": "Gear1FBSA3FO30", "jaxId": "1FBU85M0D10", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBU85M0D11", 
//										"attrs": {}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBU85M0D12", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"listBox\"", "x": "0", "y": "#appCfg.size.listHeadH+1", "autoLayout": "Off"
//									}, 
//									"faces": null, "funcs": {"jaxId":"1FBU85M0D14","funcs":[]}
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FBR2OKUF0", 
//							"attrs": {
//								"locked": "1", "id": "\"BoxNavi\"", "x": "0", "y": "#appCfg.size.headerH", "w": "#appCfg.size.naviBoxW", "h": "#\"FH-\"+(appCfg.size.headerH+appCfg.size.stateBoxH)", 
//								"anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "color": "#appCfg.color.window", "border": "0", 
//								"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//								"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {
//								"jaxId": "1FBR2OKUF2", 
//								"funcs": [
//									{
//										"jaxId": "1FE0VBUFE0", "type": "object", "def": "CdyFunc", "name": "OnTreeClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE0VCRGT0", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FBR2FP3D0", 
//									"attrs": {
//										"locked": "1", "id": "\"Line\"", "x": "\"FW\"", "y": "0", "w": "1", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//										"clip": "Off", "uiEvent": "TreeOff", "color": "#787878", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", 
//										"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", 
//										"cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR2FP3E0","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudBtn", "jaxId": "1FBR2OKUG1", 
//									"attrs": {
//										"locked": "1", "id": "\"BtnSize\"", "x": "\"FW\"", "y": "0", "w": "4", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"col-resize\"", "drag": "Move out", "enable": "On", 
//										"zIndex": "0"
//									}, 
//									"funcs": {
//										"jaxId": "1FBR2OKUG3", 
//										"funcs": [
//											{
//												"jaxId": "1FC1AR2AR14", "type": "object", "def": "OnDragStart", "name": "OnDragStart", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC1AR2AR15", 
//													"attrs": {"e":{"type":"auto","valText":"0","info":null,"tip":null}}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											},
//											{
//												"jaxId": "1FC1ANQGI15", "type": "object", "def": "OnDrag", "name": "OnDrag", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC1ANQGI16", 
//													"attrs": {
//														"e": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dx": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dy": {"type":"auto","valText":"0","info":null,"tip":null}
//													}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											},
//											{
//												"jaxId": "1FC1ANQGI17", "type": "object", "def": "OnDragEnd", "name": "OnDragEnd", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC1ANQGI18", 
//													"attrs": {
//														"e": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"cancel": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dx": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dy": {"type":"auto","valText":"0","info":null,"tip":null}
//													}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}, 
//									"btnHuds": {
//										"hudBtnUp": {
//											"type": "object", "def": "HudBox", "jaxId": "1FC1D5KPO0", 
//											"attrs": {
//												"locked": "1", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "color": "[180,180,180,0]", "border": "0", "borderStyle": "Solid", 
//												"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//												"shadowColor": "[0,0,0,0.5]", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FC1D5KPO2","funcs":[]}, "subs": []
//										}, 
//										"hudBtnDown": {
//											"type": "object", "def": "HudBox", "jaxId": "1FBR2OKUG4", 
//											"attrs": {
//												"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "4", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[80,80,80,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", 
//												"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", 
//												"cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR2OKUG6","funcs":[]}, "subs": []
//										}, 
//										"hudBtnOver": {
//											"type": "object", "def": "HudBox", "jaxId": "1FBR2L1EC0", 
//											"attrs": {
//												"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "4", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[180,180,180,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//												"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//												"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR2L1EC2","funcs":[]}, "subs": []
//										}
//									}, 
//									"subs": []
//								},
//								{
//									"type": "object", "def": "Gear1FBS9Q16V0", "jaxId": "1FBSA33BU9", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBSA33BU10", 
//										"attrs": {}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBSA33BU11", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"naviBox\"", "x": "0", "y": "0", "autoLayout": "Off"
//									}, 
//									"faces": null, "funcs": {"jaxId":"1FBSA33BU13","funcs":[]}
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FE113PNJ0", 
//							"attrs": {
//								"locked": "1", "id": "\"BoxTool\"", "x": "#\"FW-\"+appCfg.size.toolBoxW", "y": "#appCfg.size.headerH", "w": "#appCfg.size.toolBoxW", "h": "#\"FH-\"+(appCfg.size.headerH+appCfg.size.stateBoxH)", 
//								"anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "color": "#appCfg.color.window", "border": "0", 
//								"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//								"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {
//								"jaxId": "1FE113PNJ1", 
//								"funcs": [
//									{
//										"jaxId": "1FE113PNJ2", "type": "object", "def": "CdyFunc", "name": "OnTreeClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE113PNK0", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FE113PNK1", 
//									"attrs": {
//										"locked": "1", "id": "\"Line\"", "x": "-1", "y": "0", "w": "1", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//										"clip": "Off", "uiEvent": "TreeOff", "color": "#787878", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", 
//										"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", 
//										"cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FE113PNK2","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "Gear1FE2ORN790", "jaxId": "1FE87R9EO22", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE87R9EO23", 
//										"attrs": {}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE87R9EO24", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"DKTool\"", "x": "0", "y": "0", "autoLayout": "Off"
//									}, 
//									"faces": null, "funcs": {"jaxId":"1FE87R9EO26","funcs":[]}
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FBR26ACL0", 
//							"attrs": {
//								"locked": "1", "id": "\"BoxHead\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "#appCfg.size.headerH", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "color": "#appCfg.color.headBox", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", 
//								"coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//								"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FBR26ACL2","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FBR2C50N0", 
//									"attrs": {
//										"locked": "1", "id": "\"BtmLine\"", "x": "0", "y": "#appCfg.size.headerH", "w": "\"FW\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "color": "#787878", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//										"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//										"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR2C50N2","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudObj", "jaxId": "1FBR4H3UE0", 
//									"attrs": {
//										"locked": "1", "id": "\"BoxHeadNavi\"", "x": "0", "y": "0", "w": "#appCfg.size.naviBoxW", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", 
//										"autoLayout": "Off", "display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR4H3UE2","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudBox", "jaxId": "1FBR4H3UF0", 
//											"attrs": {
//												"locked": "1", "id": "\"\"", "x": "3", "y": "3", "w": "1", "h": "\"FH-6\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[150,150,150,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//												"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//												"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR4H3UF2","funcs":[]}, "subs": []
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FBR4H3UF3", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4H3UF4", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "32", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"diskadd.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4H3UF5", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnNewDisk\"", "x": "6", "y": "\"(FH-32)/2\"", 
//												"tip": {
//													"type": "auto", "valText": "\"Add new disk\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FBR4H3UF7", 
//												"funcs": [
//													{
//														"jaxId": "1FC2G7GMM0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2G8P0U0", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FC2R95CR0", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2R95CR1", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "32", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"diskdownload.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2R95CR2", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnDownloadDisk\"", "x": "38", "y": "\"(FH-32)/2\"", 
//												"tip": {
//													"type": "auto", "valText": "\"Download disk as zip\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FC2R95CR3", 
//												"funcs": [
//													{
//														"jaxId": "1FC2R95CR4", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2R95CR5", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FEKR0D7K0", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEKR0D7K1", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "32", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"checkout.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEKR0D7K2", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnCheckOut\"", "x": "70", "y": "\"(FH-32)/2\"", 
//												"tip": {
//													"type": "auto", "valText": "\"Check out from cloud\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FEKR0D7L0", 
//												"funcs": [
//													{
//														"jaxId": "1FEKR0D7L1", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEKR0D7L2", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FBR4KQEH0", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4KQEH1", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "32", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"trash.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4KQEH2", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnNaviDel\"", "x": "102", "y": "\"(FH-32)/2\"", 
//												"tip": {
//													"type": "auto", "valText": "\"Delete item\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FBR4KQEH3", 
//												"funcs": [
//													{
//														"jaxId": "1FBR50B8K4", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR50B8K5", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										}
//									]
//									
//								},
//								{
//									"type": "object", "def": "HudObj", "jaxId": "1FBR4QL5B0", 
//									"attrs": {
//										"locked": "1", "id": "\"BoxHeadList\"", "x": "#appCfg.size.naviBoxW-3", "y": "0", "w": "#appCfg.size.naviBoxW", "h": "\"FH\"", "anchorH": "Left", 
//										"anchorV": "Top", "autoLayout": "Off", "display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR4QL5B1","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudBox", "jaxId": "1FBR4QL5B2", 
//											"attrs": {
//												"locked": "1", "id": "\"\"", "x": "3", "y": "3", "w": "1", "h": "\"FH-6\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[150,150,150,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//												"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//												"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR4QL5C0","funcs":[]}, "subs": []
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FBR4QL5C1", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4QL5C2", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "32", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"folderadd.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4QL5C3", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnNewFolder\"", "x": "38", "y": "\"(FH-32)/2\"", 
//												"tip": {
//													"type": "auto", "valText": "\"New Folder\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FBR4QL5D0", 
//												"funcs": [
//													{
//														"jaxId": "1FC3QIQCL0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3QIQCL1", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FBR4QL5D1", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4QL5D2", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "32", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"fileupload.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4QL5D3", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnAddFile\"", "x": "70", "y": "\"(FH-32)/2\"", 
//												"tip": {
//													"type": "auto", "valText": "\"Add file(s)\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"labelHtml": {
//													"type": "auto", "valText": "\"<input type=\\\"file\\\"/ multiple=\\\"true\\\">\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FBR4QL5D4", 
//												"funcs": [
//													{
//														"jaxId": "1FC5O4P8G19", "type": "object", "def": "CdyFunc", "name": "OnLableAction", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC5O4P8G20", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FC3MFHVR0", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3MFHVR1", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "32", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"filedownload.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3MFHVR2", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnDownload\"", "x": "102", "y": "\"(FH-32)/2\"", 
//												"tip": {"type":"auto","valText":"\"Download\"","info":null,"tip":null}, "autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FC3MFHVR3", 
//												"funcs": [
//													{
//														"jaxId": "1FC3QIQCL2", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3QIQCL3", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FBR4QL5D5", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4QL5D6", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "32", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"rename.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4QL5D7", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnRename\"", "x": "134", "y": "\"(FH-32)/2\"", 
//												"tip": {"type":"auto","valText":"\"Rename\"","info":null,"tip":null}, "autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FBR4QL5D8", 
//												"funcs": [
//													{
//														"jaxId": "1FC3QIQCL4", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3QIQCL5", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FC2UPKS60", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2UPKS61", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "32", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"trash.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2UPKS62", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnListDel\"", "x": "166", "y": "\"(FH-32)/2\"", 
//												"tip": {
//													"type": "auto", "valText": "\"Delete item\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FC2UPKS63", 
//												"funcs": [
//													{
//														"jaxId": "1FC3QIQCL6", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3QIQCL7", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FOPF1IQE0", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOPF1IQE1", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "32", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"arrowupback.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOPF1IQE2", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"1","info":"","tip":""}, "id": "\"BtnGoUp\"", "x": "6", "y": "\"(FH-32)/2\"", 
//												"tip": {
//													"type": "auto", "valText": "\"Upper folder\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FOPF1IQE3", 
//												"funcs": [
//													{
//														"jaxId": "1FOPF1IQF0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOPF1IQF1", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										}
//									]
//									
//								},
//								{
//									"type": "object", "def": "HudObj", "jaxId": "1FE8L4CE30", 
//									"attrs": {
//										"locked": "0", "id": "\"BoxLogin\"", "x": "\"FW\"", "y": "0", "w": "100", "h": "\"FH\"", "anchorH": "Right", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"pointer\"", "zIndex": "0"
//									}, 
//									"funcs": {
//										"jaxId": "1FE8L4CE31", 
//										"funcs": [
//											{
//												"jaxId": "1FOP87QDP0", "type": "object", "def": "CdyFunc", "name": "OnTreeClick", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOP88ARP0", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudBox", "jaxId": "1FE8MLFFC2", 
//											"attrs": {
//												"locked": "0", "id": "\"BoxUser\"", "x": "55", "y": "6", "w": "36", "h": "36", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//												"clip": "On", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[255,255,255,0]", "border": "2", "borderStyle": "Solid", 
//												"borderColor": "[0,0,0,1]", "coner": "25", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//												"shadowColor": "[0,0,0,0.5]"
//											}, 
//											"faces": {
//												"jaxId": "1FE8MLFFC3", 
//												"entrys": [
//													{
//														"jaxId": "1FEAH14JL1", "entryId": "1FEAG7EB50", "faceName": "Offline", 
//														"attrs": {"color":"[180,180,180,0]"}, 
//														"anis": {
//															"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEAH14JL2", 
//															"attrs": []
//														}
//														
//													},
//													{
//														"jaxId": "1FEAH14JL3", "entryId": "1FEAG9FFJ0", "faceName": "Online", 
//														"attrs": {"color":"[255,255,255,1]"}, 
//														"anis": {
//															"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEAH14JL4", 
//															"attrs": []
//														}
//														
//													}
//												]
//											}, 
//											"funcs": {"jaxId":"1FE8MLFFC4","funcs":[]}, 
//											"subs": [
//												{
//													"type": "object", "def": "HudImage", "jaxId": "1FE8MLFFC5", 
//													"attrs": {
//														"locked": "0", "id": "\"ImgUser\"", "x": "-2", "y": "-2", "w": "\"FW+4\"", "h": "\"FH+4\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//														"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "0.5", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "image": "assets/user.svg", 
//														"autoSize": "0", "fitSize": "1"
//													}, 
//													"faces": {
//														"jaxId": "1FE8MLFFC6", 
//														"entrys": [
//															{
//																"jaxId": "1FEAH14JL5", "entryId": "1FEAG7EB50", "faceName": "Offline", 
//																"attrs": {"alpha":"0.5"}, 
//																"anis": {
//																	"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEAH14JL6", 
//																	"attrs": []
//																}
//																
//															},
//															{
//																"jaxId": "1FEAH14JL7", "entryId": "1FEAG9FFJ0", "faceName": "Online", 
//																"attrs": {"alpha":"1"}, 
//																"anis": {
//																	"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEAH14JL8", 
//																	"attrs": []
//																}
//																
//															}
//														]
//													}, 
//													"funcs": {"jaxId":"1FE8MLFFC7","funcs":[]}, "subs": []
//												}
//											]
//											
//										},
//										{
//											"type": "object", "def": "HudTxt", "jaxId": "1FE8MLFFC8", 
//											"attrs": {
//												"locked": "0", "id": "\"TxtUser\"", "x": "0", "y": "\"FH/2\"", "w": "53", "h": "14", "anchorH": "Left", "anchorV": "Center", "autoLayout": "Off", 
//												"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Offline\"", "color": "[0,0,0]", 
//												"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Right", "alignV": "Top", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//												"bold": "0", "italic": "0", "underline": "0"
//											}, 
//											"faces": {
//												"jaxId": "1FE8MLFFC9", 
//												"entrys": [
//													{
//														"jaxId": "1FEAH14JL9", "entryId": "1FEAG7EB50", "faceName": "Offline", 
//														"attrs": {"text":"\"Offline\""}, 
//														"anis": {
//															"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEAH14JL10", 
//															"attrs": []
//														}
//														
//													}
//												]
//											}, 
//											"funcs": {"jaxId":"1FE8MLFFC10","funcs":[]}, "subs": []
//										}
//									]
//									
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FBR439899", 
//							"attrs": {
//								"locked": "1", "id": "\"BoxState\"", "x": "0", "y": "\"FH\"", "w": "\"FW\"", "h": "#appCfg.size.stateBoxH", "anchorH": "Left", "anchorV": "Bottom", 
//								"autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "color": "#appCfg.color.stateBox", "border": "0", "borderStyle": "Solid", 
//								"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//								"shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FBR4398911","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FBR4H3UF8", 
//									"attrs": {
//										"locked": "0", "id": "\"TxtState\"", "x": "10", "y": "0", "w": "100", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "text": "\"Ready.\"", "color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", 
//										"alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.small", "bold": "0", "italic": "0", "underline": "0", "alpha": "1", 
//										"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR4H3UF10","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FBR46FJ50", 
//									"attrs": {
//										"locked": "1", "id": "\"Line\"", "x": "0", "y": "-1", "w": "\"FW\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "color": "[150,150,150,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//										"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//										"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR46FJ52","funcs":[]}, "subs": []
//								}
//							]
//							
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBR233GG8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBR233GG10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}