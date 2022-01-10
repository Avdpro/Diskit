//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FE2PFIVJ0Imports*/
/*}#1FE2PFIVJ0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var UIToolMD=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FE2PFIVJ1ExLocal*/
	/*}#1FE2PFIVJ1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FE2PFIVJ3ExState*/
		/*}#1FE2PFIVJ3ExState*/
	},);
	/*#{1FE2PFIVJ1PostState*/
	/*}#1FE2PFIVJ1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FE2PFIVJ1", 
		"locked": 0, "w": "FW", "h": "FH", 
		items: [],
		faces: {
		},
		/*#{1FE2PFIVJ1ExAttrs*/
		/*}#1FE2PFIVJ1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FE2PFIVJ1CreateFunc*/
			/*}#1FE2PFIVJ1CreateFunc*/
		
		}
	};
	/*#{1FE2PFIVJ1ExViewDef*/
	/*}#1FE2PFIVJ1ExViewDef*/
	
	return cssVO;
};

export {UIToolMD};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "UIToolMD.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FE2PFIVJ0", 
//			"attrs": {
//				"viewName": "\"UIToolMD\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FE2PFIVJ1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE2PFIVJ2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FE2PFIVJ3", 
//						"attrs": {}, "funcs": {"jaxId":"1FE2PFIVJ4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\""
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FE2PFIVJ6","entrys":[]}, 
//					"funcs": {"jaxId":"1FE2PFIVJ7","funcs":[]}, "subs": []
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FE2PFIVJ8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FE2PFIVJ10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}