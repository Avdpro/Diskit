//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {BoxPathInfo} from "../gear/BoxPathInfo.js";
/*#{1FE2PEPNL0Imports*/
/*}#1FE2PEPNL0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var UIToolFolder=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FE2PEPNL1ExLocal*/
	/*}#1FE2PEPNL1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FE2PEPNL3ExState*/
		/*}#1FE2PEPNL3ExState*/
	},);
	/*#{1FE2PEPNL1PostState*/
	/*}#1FE2PEPNL1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FE2PEPNL1", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": "FH", 
		items: [
			{
				"type": BoxPathInfo(app,null),"jaxId": "1FOJDOB621", 
				"locked": 0, "id": "BoxInfo", "x": 0, "y": 0
			}
		],
		faces: {
		},
		/*#{1FE2PEPNL1ExAttrs*/
		/*}#1FE2PEPNL1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FE2PEPNL1CreateFunc*/
			/*}#1FE2PEPNL1CreateFunc*/
		
		}
	};
	/*#{1FE2PEPNL1ExViewDef*/
	cssVO.showUI=function(vo){
		self.BoxInfo.showInfo(vo.item);
	};
	/*}#1FE2PEPNL1ExViewDef*/
	
	return cssVO;
};

/*#{1FE2PEPNL0PostCode*/
/*}#1FE2PEPNL0PostCode*/

export {UIToolFolder};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "UIToolFolder.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FE2PEPNL0", 
//			"attrs": {
//				"viewName": "\"UIToolFolder\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FE2PEPNL1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE2PEPNL2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FE2PEPNL3", 
//						"attrs": {}, "funcs": {"jaxId":"1FE2PEPNL4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\""
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FE2PEPNL6","entrys":[]}, 
//					"funcs": {"jaxId":"1FE2PEPNL7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "Gear1FOJBRP8J0", "jaxId": "1FOJDOB621", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJDOB622", 
//								"attrs": {}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJDOB623", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BoxInfo\"", "x": "0", "y": "0", "autoLayout": "Off"
//							}, 
//							"faces": null, "funcs": {"jaxId":"1FOJDOB625","funcs":[]}
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FE2PEPNL8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FE2PEPNL10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}