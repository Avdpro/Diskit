//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {btnStd} from "../gear/btnStd.js";
/*#{1FERDJG4K0Imports*/
import {CCFile} from "../data/CCFile.js";
/*}#1FERDJG4K0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var UIToolConflict=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FERDJG4K1ExLocal*/
	let showVO,file,localPath,cloudPath,isMissing;
	/*}#1FERDJG4K1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FERDJG4L1ExState*/
		/*}#1FERDJG4L1ExState*/
	},);
	/*#{1FERDJG4K1PostState*/
	/*}#1FERDJG4K1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FERDJG4K1", 
		"locked": 1, "x": 0, "y": 0, "w": "FW", "h": "FH", 
		items: [
			{
				"type": "text", "jaxId": "1FERFMJB90", "id": "TxtPath", "x": 20, "y": 25, "w": "FW-40", "h": 20, "text": "Path", "color": [0,0,0], "fontSize": appCfg.txtSize.mid
			},
			{
				"type": "text", "jaxId": "1FERFMLRO0", "x": 20, "y": 70, "w": "FW-40", "h": 20, "text": "Resolve conflict:", "color": [0,0,0], "fontSize": appCfg.txtSize.mid
			},
			{
				"type": btnStd(app,200,"Use Local Version",null),"jaxId": "1FERFQ5BI0", 
				"locked": 0, "id": "BtnUseLocal", "x": "(FW-200)/2", "y": 100, 
				//函数
				OnClick:function(){
					/*#{1FERG399B1Code*/
					self.DoUseLocal();
					/*}#1FERG399B1Code*/
				}
			},
			{
				"type": btnStd(app,200,"Use Cloud Version",null),"jaxId": "1FERFQ6790", 
				"locked": 0, "id": "BtnUseCloud", "x": "(FW-200)/2", "y": 150, 
				//函数
				OnClick:function(){
					/*#{1FERG399B3Code*/
					self.DoUseCloud();
					/*}#1FERG399B3Code*/
				}
			},
			{
				"type": btnStd(app,200,"Edit Conflicts",null),"jaxId": "1FERFS64A0", 
				"locked": 0, "id": "BtnEditFile", "x": "(FW-200)/2", "y": 200, 
				//函数
				OnClick:function(){
					/*#{1FERG399B6Code*/
					self.DoEditFile();
					/*}#1FERG399B6Code*/
				}
			}
		],
		faces: {
		},
		/*#{1FERDJG4K1ExAttrs*/
		/*}#1FERDJG4K1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FERDJG4K1CreateFunc*/
			/*}#1FERDJG4K1CreateFunc*/
		
		}
	};
	/*#{1FERDJG4K1ExViewDef*/
	//------------------------------------------------------------------------
	//展示UI:
	cssVO.showUI=function(vo){
		let ext;
		showVO=vo;
		file=showVO.file;
		cloudPath=file.path;
		localPath=CCFile.getConflictDocName(cloudPath);
		ext=JAXEnv.getFileExt(localPath).toLowerCase();
		self.TxtPath.text=localPath;
		switch(ext){
			case "js":
			case "html":
			case "json":
			case "svg":
			case "xmal":
			case "mjs":
			case "md":
			case "txt":
			case "text":
				self.BtnEditFile.enable=1;
				break;
			default:
				self.BtnEditFile.enable=0;
				break;
		}
		ext=JAXEnv.getFileExt(cloudPath).toLowerCase();
		if(ext==="missing"){
			isMissing=1;
		}else{
			isMissing=0;
		}
	};
	
	//------------------------------------------------------------------------
	//使用本地文件解决冲突，直接删除冲突文件即可
	cssVO.DoUseLocal=async function(){
		let diskObj;
		diskObj=file.disk.diskObj;
		if(isMissing){
			if(!window.confirm("This file has been deleted on cloud. Use local version resolve the conflict will overwrite cloud changes. Are you sure?")){
				return;
			}
			await diskObj.del(cloudPath);
			app.listBox.refresh();
			return;
		}
		
		if(!window.confirm("This file has changed on cloud. Use local version resolve the conflict may overwrite cloud changes. Are you sure?")){
			return;
		}
		await diskObj.del(cloudPath);
		app.listBox.refresh();
	};

	//------------------------------------------------------------------------
	//使用云端文件解决冲突，拷贝内容后，删除冲突文件
	cssVO.DoUseCloud=async function(){
		let diskObj;
		if(isMissing){
			if(!window.confirm("This file has been changed by you. Use cloud version resolve the conflict will lose your changes. Are you sure?")){
				return;
			}
			await diskObj.del(cloudPath);
			await diskObj.del(localPath);
			app.listBox.refresh();
			return;
		}

		if(!window.confirm("This file has changed by you. Use cloud version resolve the conflict may overwrite your changes. Are you sure?")){
			return;
		}
		diskObj=file.disk.diskObj;
		await diskObj.copyFile(cloudPath,localPath);
		await diskObj.del(cloudPath);
		app.listBox.refresh();
	};

	//------------------------------------------------------------------------
	//编辑冲突，要看文件类型:
	cssVO.DoEditFile=function(){
		window.open("/jaxweb/disks/ccedit/app.html?disk="+encodeURIComponent(file.disk.name)+"&file="+encodeURIComponent(file.path),"CCEdit_"+file.disk.name);
	};
	/*}#1FERDJG4K1ExViewDef*/
	
	return cssVO;
};

export {UIToolConflict};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "UIToolConflict.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FERDJG4K0", 
//			"attrs": {
//				"viewName": "\"UIToolConflict\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FERDJG4K1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FERDJG4L0", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FERDJG4L1", 
//						"attrs": {}, "funcs": {"jaxId":"1FERDJG4L2","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "1", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\""
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FERDJG4L4","entrys":[]}, 
//					"funcs": {"jaxId":"1FERDJG4L5","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudTxt", "jaxId": "1FERFMJB90", 
//							"attrs": {
//								"locked": "0", "id": "\"TxtPath\"", "x": "20", "y": "25", "w": "\"FW-40\"", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Path\"", "color": "[0,0,0]", 
//								"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", 
//								"bold": "0", "italic": "0", "underline": "0"
//							}, 
//							"funcs": {"jaxId":"1FERFMJB92","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudTxt", "jaxId": "1FERFMLRO0", 
//							"attrs": {
//								"locked": "0", "id": "\"\"", "x": "20", "y": "70", "w": "\"FW-40\"", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Resolve conflict:\"", "color": "[0,0,0]", 
//								"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", 
//								"bold": "0", "italic": "0", "underline": "0"
//							}, 
//							"funcs": {"jaxId":"1FERFMLRP0","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FERFQ5BI0", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FERFQ5BI1", 
//								"attrs": {
//									"w": {"type":"int","valText":"200","initVal":0,"info":null,"tip":null}, 
//									"text": {
//										"type": "string", "valText": "\"Use Local Version\"", "initVal": "", 
//										"info": null, "tip": null
//									}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FERFQ5BJ0", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnUseLocal\"", "x": "\"(FW-200)/2\"", "y": "100", "autoLayout": "Off"
//							}, 
//							"faces": null, 
//							"funcs": {
//								"jaxId": "1FERFQ5BJ2", 
//								"funcs": [
//									{
//										"jaxId": "1FERG399B1", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FERG399B2", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}
//							
//						},
//						{
//							"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FERFQ6790", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FERFQ6791", 
//								"attrs": {
//									"w": {"type":"int","valText":"200","initVal":0,"info":null,"tip":null}, 
//									"text": {
//										"type": "string", "valText": "\"Use Cloud Version\"", "initVal": "", 
//										"info": null, "tip": null
//									}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FERFQ6792", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnUseCloud\"", "x": "\"(FW-200)/2\"", "y": "150", "autoLayout": "Off"
//							}, 
//							"faces": null, 
//							"funcs": {
//								"jaxId": "1FERFQ6793", 
//								"funcs": [
//									{
//										"jaxId": "1FERG399B3", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FERG399B4", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}
//							
//						},
//						{
//							"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FERFS64A0", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FERFS64A1", 
//								"attrs": {
//									"w": {"type":"int","valText":"200","initVal":0,"info":null,"tip":null}, 
//									"text": {
//										"type": "string", "valText": "\"Edit Conflicts\"", "initVal": "", 
//										"info": null, "tip": null
//									}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FERFS64A2", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnEditFile\"", "x": "\"(FW-200)/2\"", "y": "200", "autoLayout": "Off"
//							}, 
//							"faces": null, 
//							"funcs": {
//								"jaxId": "1FERFS64A3", 
//								"funcs": [
//									{
//										"jaxId": "1FERG399B6", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FERG399B7", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}
//							
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FERDJG4L6", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FERDJG4L8","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}