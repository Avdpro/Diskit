//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FE2ORN790Imports*/
import {CCDisk} from "../data/CCDisk.js";
import {CCFile} from "../data/CCFile.js";
import {CCFolder} from "../data/CCFolder.js";
import {UIToolDisk} from "../ui/UIToolDisk.js";
import {UIToolFolder} from "../ui/UIToolFolder.js";
import {UIToolImage} from "../ui/UIToolImage.js";
/*}#1FE2ORN790Imports*/
//----------------------------------------------------------------------------
/*界面的堆叠坞站。*/
var toolBox=function (app, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FE2ORN791ExLocal*/
	let diskUI,folderUI,imageUI,textUI,fileUI;
	let uiLib={};
	let curUIName;
	/*}#1FE2ORN791ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FE2ORN793ExState*/
		/*}#1FE2ORN793ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FE2ORN791Mid*/
	/*}#1FE2ORN791Mid*/
	
	cssVO={
		"type": "dock", "jaxId": "1FE2ORN791", "id": "DKTool", "x": 0, "y": 0, "w": "FW", "h": "FH", "ui": -1, "autoLayout": 1, 
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FE2ORN791CreateFunc*/
			app.toolBox=this;
			/*}#1FE2ORN791CreateFunc*/
		}
	};
	/*#{1FE2ORN791ExViewDef*/
	//------------------------------------------------------------------------
	//根据项目显示Tool
	cssVO.showItemTool=async function(item){
		let def,ui,codeName;
		if(!item){
			return;
		}
		def=appData.getToolBoxByPath(item.diskPath,item);
		if(def){
			codeName=def.codeName;
			if(curUIName===codeName){
				this.curUI.showUI&&this.curUI.showUI({item:item});
				return;
			}
			ui=uiLib[codeName];
			if(ui){
				this.showUI(ui,{item:item});
			}else{
				let createUI=def.createUI;
				if(!(createUI instanceof Function)){
					createUI=(await import(createUI.file))[createUI.func];
				}
				ui=this.showNewUI(createUI(app,this),{item:item});
				uiLib[codeName]=ui;
			}
			curUIName=codeName;
			return;
		}
		if(item instanceof CCDisk){
			if(diskUI){
				this.showUI(diskUI,{disk:item});
			}else{
				let cssVO;
				cssVO=UIToolDisk(app);
				diskUI=this.showNewUI(cssVO,{disk:item});
			}
		}else if(item instanceof CCFolder){
		}else if(item instanceof CCFile){
			let ext;
			ext=item.nameExt;
			//TODO: 根据文件类型显示
			switch(ext){
				case ".png":
				case ".svg":
				case ".jpg":
				case ".jpeg":
				case ".gif":
					break;
				case ".js":
				case ".html":
				case ".txt":
					break;
				case ".md":
					break;
				case "default":
					break;
			}
		}
	};
	/*}#1FE2ORN791ExViewDef*/
	
	return cssVO;
};

/*#{1FE2ORN790PostCode*/
/*}#1FE2ORN790PostCode*/

export {toolBox};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "toolBox.js", "def": "CdyFileUIGear", "jaxId": "1FE2ORN790", 
//			"attrs": {
//				"gearName": "\"toolBox\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FE2ORN7A0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FE2ORN7A2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudDock", "jaxId": "1FE2ORN791", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE2ORN792", 
//					"attrs": {}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FE2ORN793", 
//					"attrs": {}, "funcs": {"jaxId":"1FE2ORN7A3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"DKTool\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "ui": "-1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//					"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FE2ORN7A4","entrys":[]}, 
//				"funcs": {"jaxId":"1FE2ORN7A6","funcs":[]}, "subs": []
//			}
//		}/*Doc}#*/;
//	}