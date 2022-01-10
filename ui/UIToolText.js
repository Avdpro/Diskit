//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {BoxPathInfo} from "../gear/BoxPathInfo.js";
import {BoxVsnInfo} from "../gear/BoxVsnInfo.js";
/*#{1FE2PFBPO0Imports*/
/*}#1FE2PFBPO0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var UIToolText=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FE2PFBPO1ExLocal*/
	/*}#1FE2PFBPO1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FE2PFBPO3ExState*/
		/*}#1FE2PFBPO3ExState*/
	},);
	/*#{1FE2PFBPO1PostState*/
	/*}#1FE2PFBPO1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FE2PFBPO1", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": "FH", 
		items: [
			{
				"type": BoxPathInfo(app,null),"jaxId": "1FOJEBJHL0", 
				"locked": 0, "id": "BoxInfo", "x": 0, "y": 0
			},
			{
				"type": BoxVsnInfo(app,null),"jaxId": "1FOJFLVS00", 
				"locked": 0, "id": "BoxVsn", "x": 0, "y": 90
			}
		],
		faces: {
		},
		/*#{1FE2PFBPO1ExAttrs*/
		/*}#1FE2PFBPO1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FE2PFBPO1CreateFunc*/
			/*}#1FE2PFBPO1CreateFunc*/
		
		}
	};
	/*#{1FE2PFBPO1ExViewDef*/
	//------------------------------------------------------------------------
	cssVO.showUI=function(vo){
		self.BoxInfo.showInfo(vo.item);
		self.BoxVsn.showInfo(vo.item);
	};
	/*}#1FE2PFBPO1ExViewDef*/
	
	return cssVO;
};

/*#{1FE2PFBPO0PostCode*/
/*}#1FE2PFBPO0PostCode*/

export {UIToolText};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "UIToolText.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FE2PFBPO0", 
//			"attrs": {
//				"viewName": "\"UIToolText\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FE2PFBPO1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE2PFBPO2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FE2PFBPO3", 
//						"attrs": {}, "funcs": {"jaxId":"1FE2PFBPO4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\""
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FE2PFBPO6","entrys":[]}, 
//					"funcs": {"jaxId":"1FE2PFBPO7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "Gear1FOJBRP8J0", "jaxId": "1FOJEBJHL0", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJEBT9R0", 
//								"attrs": {}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJEBT9R1", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BoxInfo\"", "x": "0", "y": "0", "autoLayout": "Off"
//							}, 
//							"faces": null, "funcs": {"jaxId":"1FOJEBT9R3","funcs":[]}
//						},
//						{
//							"type": "object", "def": "Gear1FOJEMDHK0", "jaxId": "1FOJFLVS00", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJFLVS01", 
//								"attrs": {}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJFLVS02", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BoxVsn\"", "x": "0", "y": "90", "autoLayout": "Off"
//							}, 
//							"faces": null, "funcs": {"jaxId":"1FOJFLVS04","funcs":[]}
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FE2PFBPO8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FE2PFBPO10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}