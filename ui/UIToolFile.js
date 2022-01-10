//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {BoxPathInfo} from "../gear/BoxPathInfo.js";
import {BoxVsnInfo} from "../gear/BoxVsnInfo.js";
/*#{1FE671SEU0Imports*/
/*}#1FE671SEU0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var UIToolFile=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FE671SEU1ExLocal*/
	/*}#1FE671SEU1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FE671SEU3ExState*/
		/*}#1FE671SEU3ExState*/
	},);
	/*#{1FE671SEU1PostState*/
	/*}#1FE671SEU1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FE671SEU1", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": "FH", 
		items: [
			{
				"type": BoxPathInfo(app,null),"jaxId": "1FOJJ1FSF0", 
				"locked": 0, "id": "BoxInfo", "x": 0, "y": 0
			},
			{
				"type": BoxVsnInfo(app,null),"jaxId": "1FOJJ1QV80", 
				"locked": 0, "id": "BoxVsn", "x": 0, "y": 90
			}
		],
		faces: {
		},
		/*#{1FE671SEU1ExAttrs*/
		/*}#1FE671SEU1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FE671SEU1CreateFunc*/
			/*}#1FE671SEU1CreateFunc*/
		
		}
	};
	/*#{1FE671SEU1ExViewDef*/
	//------------------------------------------------------------------------
	cssVO.showUI=function(vo){
		self.BoxInfo.showInfo(vo.item);
		self.BoxVsn.showInfo(vo.item);
	};
	/*}#1FE671SEU1ExViewDef*/
	
	return cssVO;
};

/*#{1FE671SEU0PostCode*/
/*}#1FE671SEU0PostCode*/

export {UIToolFile};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "UIToolFile.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FE671SEU0", 
//			"attrs": {
//				"viewName": "\"UIToolFile\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FE671SEU1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE671SEU2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FE671SEU3", 
//						"attrs": {}, "funcs": {"jaxId":"1FE671SEU4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\""
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FE671SEU6","entrys":[]}, 
//					"funcs": {"jaxId":"1FE671SEU7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "Gear1FOJBRP8J0", "jaxId": "1FOJJ1FSF0", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJJ1FSF1", 
//								"attrs": {}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJJ1FSF2", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BoxInfo\"", "x": "0", "y": "0", "autoLayout": "Off"
//							}, 
//							"faces": null, "funcs": {"jaxId":"1FOJJ1FSF3","funcs":[]}
//						},
//						{
//							"type": "object", "def": "Gear1FOJEMDHK0", "jaxId": "1FOJJ1QV80", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJJ1QV81", 
//								"attrs": {}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJJ1QV82", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BoxVsn\"", "x": "0", "y": "90", "autoLayout": "Off"
//							}, 
//							"faces": null, "funcs": {"jaxId":"1FOJJ1QV83","funcs":[]}
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FE671SEU8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FE671SEU10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}