//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FERG8GMF0Imports*/
/*}#1FERG8GMF0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var UIToolEmpty=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FERG8GMF1ExLocal*/
	let item;
	/*}#1FERG8GMF1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FERG8GMF3ExState*/
		/*}#1FERG8GMF3ExState*/
	},);
	/*#{1FERG8GMF1PostState*/
	/*}#1FERG8GMF1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FERG8GMF1", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": "FH", 
		items: [],
		faces: {
		},
		/*#{1FERG8GMF1ExAttrs*/
		/*}#1FERG8GMF1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FERG8GMF1CreateFunc*/
			/*}#1FERG8GMF1CreateFunc*/
		
		}
	};
	/*#{1FERG8GMF1ExViewDef*/
	/*}#1FERG8GMF1ExViewDef*/
	
	return cssVO;
};

export {UIToolEmpty};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "UIToolEmpty.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FERG8GMF0", 
//			"attrs": {
//				"viewName": "\"UIToolEmpty\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FERG8GMF1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FERG8GMF2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FERG8GMF3", 
//						"attrs": {}, "funcs": {"jaxId":"1FERG8GMF4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\""
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FERG8GMG1","entrys":[]}, 
//					"funcs": {"jaxId":"1FERG8GMG2","funcs":[]}, "subs": []
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FERG8GMG3", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FERG8GMG5","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}