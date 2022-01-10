//Auto genterated by Cody
import {$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FBR1UQJH0Imports*/
/*}#1FBR1UQJH0Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var lineFolder1=function (app, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBR1UQJH1ExLocal*/
	/*}#1FBR1UQJH1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FBR1UQJH3ExState*/
		/*}#1FBR1UQJH3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FBR1UQJH1Mid*/
	/*}#1FBR1UQJH1Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FBR1UQJH1", "w": 100, "h": 32, 
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FBR1UQJH1CreateFunc*/
			/*}#1FBR1UQJH1CreateFunc*/
		}
	};
	/*#{1FBR1UQJH1ExViewDef*/
	/*}#1FBR1UQJH1ExViewDef*/
	
	return cssVO;
};

export {lineFolder1};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "lineFolder1.js", "def": "CdyFileUIGear", "jaxId": "1FBR1UQJH0", 
//			"attrs": {
//				"gearName": "\"lineFolder1\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBR1UQJI0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBR1UQJI2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FBR1UQJH1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR1UQJH2", 
//					"attrs": {}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBR1UQJH3", 
//					"attrs": {}, "funcs": {"jaxId":"1FBR1UQJI3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "100", "h": "32", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//					"clip": "Off", "uiEvent": "On"
//				}, 
//				"viewFaces": {"jaxId":"1FBR1UQJI4","entrys":[]}, 
//				"funcs": {"jaxId":"1FBR1UQJI6","funcs":[]}, "btnHuds": {}, "subs": []
//			}
//		}/*Doc}#*/;
//	}