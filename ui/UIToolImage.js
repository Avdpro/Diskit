//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {BoxPathInfo} from "../gear/BoxPathInfo.js";
import {BoxVsnInfo} from "../gear/BoxVsnInfo.js";
/*#{1FE2PEVR20Imports*/
/*}#1FE2PEVR20Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var UIToolImage=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FE2PEVR21ExLocal*/
	/*}#1FE2PEVR21ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FE2PEVR23ExState*/
		/*}#1FE2PEVR23ExState*/
	},);
	/*#{1FE2PEVR21PostState*/
	/*}#1FE2PEVR21PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FE2PEVR21", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": "FH", 
		items: [
			{
				"type": BoxPathInfo(app,null),"jaxId": "1FOJILK9B0", 
				"locked": 0, "id": "BoxInfo", "x": 0, "y": 0
			},
			{
				"type": BoxVsnInfo(app,null),"jaxId": "1FOJILK9B1", 
				"locked": 0, "id": "BoxVsn", "x": 0, "y": 90
			},
			{
				"type": "image", "jaxId": "1FOJIRAFG0", "id": "ImgImage", "x": "FW/2", "y": 200, "w": 200, "h": 200, "anchorH": 1, "autoLayout": 1, "image": "assets/tuxiang.svg", 
				"autoSize": 0, "fitSize": 1
			}
		],
		faces: {
		},
		/*#{1FE2PEVR21ExAttrs*/
		/*}#1FE2PEVR21ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FE2PEVR21CreateFunc*/
			/*}#1FE2PEVR21CreateFunc*/
		
		}
	};
	/*#{1FE2PEVR21ExViewDef*/
	//------------------------------------------------------------------------
	cssVO.showUI=function(vo){
		self.BoxInfo.showInfo(vo.item);
		self.BoxVsn.showInfo(vo.item);
		self.ImgImage.image=document.location.origin+"/"+vo.item.diskPath;
	};
	/*}#1FE2PEVR21ExViewDef*/
	
	return cssVO;
};

/*#{1FE2PEVR20PostCode*/
/*}#1FE2PEVR20PostCode*/

export {UIToolImage};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "UIToolImage.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FE2PEVR20", 
//			"attrs": {
//				"viewName": "\"UIToolImage\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FE2PEVR21", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE2PEVR22", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FE2PEVR23", 
//						"attrs": {}, "funcs": {"jaxId":"1FE2PEVR24","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\""
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FE2PEVR26","entrys":[]}, 
//					"funcs": {"jaxId":"1FE2PEVR27","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "Gear1FOJBRP8J0", "jaxId": "1FOJILK9B0", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJIM4C51", 
//								"attrs": {}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJIM4C52", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BoxInfo\"", "x": "0", "y": "0", "autoLayout": "Off"
//							}, 
//							"faces": null, "funcs": {"jaxId":"1FOJIM4C54","funcs":[]}
//						},
//						{
//							"type": "object", "def": "Gear1FOJEMDHK0", "jaxId": "1FOJILK9B1", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJIM4C55", 
//								"attrs": {}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJIM4C56", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BoxVsn\"", "x": "0", "y": "90", "autoLayout": "Off"
//							}, 
//							"faces": null, "funcs": {"jaxId":"1FOJIM4C58","funcs":[]}
//						},
//						{
//							"type": "object", "def": "HudImage", "jaxId": "1FOJIRAFG0", 
//							"attrs": {
//								"locked": "0", "id": "\"ImgImage\"", "x": "\"FW/2\"", "y": "200", "w": "200", "h": "200", "anchorH": "Center", "anchorV": "Top", "autoLayout": "On", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "image": "assets/tuxiang.svg", 
//								"autoSize": "0", "fitSize": "1"
//							}, 
//							"funcs": {"jaxId":"1FOJIROVF1","funcs":[]}, "subs": []
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FE2PEVR28", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FE2PEVR210","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}