//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FBUEM5ME0Imports*/
/*}#1FBUEM5ME0Imports*/
//----------------------------------------------------------------------------
/*Hud控件节点，没有内容，可以有子节点*/
var itemSize=function (app, item, node, box, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBUEM5ME3ExLocal*/
	/*}#1FBUEM5ME3ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FBUEM5MF0ExState*/
		/*}#1FBUEM5MF0ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FBUEM5ME3Mid*/
	/*}#1FBUEM5ME3Mid*/
	
	cssVO={
		"type": "hud", "jaxId": "1FBUEM5ME3", "x": 0, "y": 0, "w": "FW", "h": 24, "autoLayout": 1, "uiEvent": -1, 
		items: [
			{
				"type": "text", "jaxId": "1FBUEM5MG0", "x": 2, "y": 0, "w": 100, "h": 24, "text": ""+(item.size>=0?(new Number(item.size).toLocaleString()):"NA"), 
				"color": [80,80,80], "alignV": 1, "fontSize": appCfg.txtSize.small
			}
		],
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FBUEM5ME3CreateFunc*/
			/*}#1FBUEM5ME3CreateFunc*/
		}
	};
	/*#{1FBUEM5ME3ExViewDef*/
	/*}#1FBUEM5ME3ExViewDef*/
	
	return cssVO;
};

/*#{1FBUEM5ME0PostCode*/
/*}#1FBUEM5ME0PostCode*/

export {itemSize};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "itemSize.js", "def": "CdyFileUIGear", "jaxId": "1FBUEM5ME0", 
//			"attrs": {
//				"gearName": "\"itemSize\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBUEM5ME1", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBUEM5ME2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudObj", "jaxId": "1FBUEM5ME3", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBUEM5ME4", 
//					"attrs": {
//						"item": {
//							"name": "item", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "MockupRef1FBS4FICA0", "mockupName": "jsfile", "tip": undefined
//						}, 
//						"node": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}, 
//						"box": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBUEM5MF0", 
//					"attrs": {}, "funcs": {"jaxId":"1FBUEM5MF1","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "TreeOff", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FBUEM5MF2","entrys":[]}, 
//				"funcs": {"jaxId":"1FBUEM5MF3","funcs":[]}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FBUEM5MG0", 
//						"attrs": {
//							"locked": "1", "id": "\"\"", "x": "2", "y": "0", "w": "100", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "text": "#\"\"+(item.size>=0?(new Number(item.size).toLocaleString()):\"NA\")", "color": "[80,80,80]", 
//							"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.small", 
//							"bold": "0", "italic": "0", "underline": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FBUEM5MG1","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}