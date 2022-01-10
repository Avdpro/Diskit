//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {boxCloudInfo} from "../gear/boxCloudInfo.js";
import {btnStd} from "../gear/btnStd.js";
import {btnIcon} from "../gear/btnIcon.js";
/*#{1FE2PEEH70Imports*/
/*}#1FE2PEEH70Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var UIToolDisk=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FE2PEEH71ExLocal*/
	let showVO,disk;
	/*}#1FE2PEEH71ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FE2PEEH73ExState*/
		/*}#1FE2PEEH73ExState*/
	},);
	/*#{1FE2PEEH71PostState*/
	/*}#1FE2PEEH71PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FE2PEEH71", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": "FH", 
		items: [
			{
				"type": boxCloudInfo(app,null),"jaxId": "1FE64E0QI0", 
				"locked": 0, "id": "BoxCloud", "x": 0, "y": 0
			}
		],
		faces: {
		},
		/*#{1FE2PEEH71ExAttrs*/
		/*}#1FE2PEEH71ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FE2PEEH71CreateFunc*/
			/*}#1FE2PEEH71CreateFunc*/
		
		}
	};
	/*#{1FE2PEEH71ExViewDef*/
	cssVO.showUI=function(vo){
		showVO=vo;
		disk=showVO.item;
		this.BoxCloud.setDisk(disk);
	};
	/*}#1FE2PEEH71ExViewDef*/
	
	return cssVO;
};

/*#{1FE2PEEH70PostCode*/
/*}#1FE2PEEH70PostCode*/

export {UIToolDisk};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "UIToolDisk.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FE2PEEH70", 
//			"attrs": {
//				"viewName": "\"UIToolDisk\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FE2PEEH71", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE2PEEH72", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FE2PEEH73", 
//						"attrs": {}, "funcs": {"jaxId":"1FE2PEEH74","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\""
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FE2PEEH76","entrys":[]}, 
//					"funcs": {"jaxId":"1FE2PEEH77","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "Gear1FE2PIB3N0", "jaxId": "1FE64E0QI0", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE64EFVB1", 
//								"attrs": {}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE64EFVB2", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BoxCloud\"", "x": "0", "y": "0", "autoLayout": "Off"
//							}, 
//							"faces": null, "funcs": {"jaxId":"1FE64EFVB4","funcs":[]}
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FE2PEEH78", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FE2PEEH710","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}