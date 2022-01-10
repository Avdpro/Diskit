//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FBUF8BQ60Imports*/
/*}#1FBUF8BQ60Imports*/
//----------------------------------------------------------------------------
/*Hud控件节点，没有内容，可以有子节点*/
var itemTime=function (app, item, node, box, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBUF8BQ72ExLocal*/
	/*}#1FBUF8BQ72ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		//函数
		getTime:function(){
			/*#{1FBUFPNDP0Code*/
			return ""+(item.modifiedTime>0?(new Date(item.modifiedTime)).toLocaleString():"");
			/*}#1FBUFPNDP0Code*/
		}
		/*#{1FBUF8BQ74ExState*/
		/*}#1FBUF8BQ74ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FBUF8BQ72Mid*/
	/*}#1FBUF8BQ72Mid*/
	
	cssVO={
		"type": "hud", "jaxId": "1FBUF8BQ72", "x": 0, "y": 0, "w": "FW", "h": 24, "autoLayout": 1, "uiEvent": -1, 
		items: [
			{
				"type": "text", "jaxId": "1FBUF8BQ80", "x": 2, "y": 0, "w": 100, "h": 24, "text": state.getTime(), "color": [80,80,80], "alignV": 1, "fontSize": appCfg.txtSize.small
			}
		],
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FBUF8BQ72CreateFunc*/
			/*}#1FBUF8BQ72CreateFunc*/
		}
	};
	/*#{1FBUF8BQ72ExViewDef*/
	/*}#1FBUF8BQ72ExViewDef*/
	
	return cssVO;
};

/*#{1FBUF8BQ60PostCode*/
/*}#1FBUF8BQ60PostCode*/

export {itemTime};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "itemTime.js", "def": "CdyFileUIGear", "jaxId": "1FBUF8BQ60", 
//			"attrs": {
//				"gearName": "\"itemTime\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBUF8BQ70", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBUF8BQ71","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudObj", "jaxId": "1FBUF8BQ72", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBUF8BQ73", 
//					"attrs": {
//						"item": {
//							"name": "item", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "MockupRef1FBS4FICA0", "mockupName": "jsfile", "tip": undefined
//						}, 
//						"node": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}, 
//						"box": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBUF8BQ74", 
//					"attrs": {}, 
//					"funcs": {
//						"jaxId": "1FBUF8BQ75", 
//						"funcs": [
//							{
//								"jaxId": "1FBUFPNDP0", "type": "object", "def": "CdyFunc", "name": "getTime", "info": "函数", "tip": "", 
//								"args": {
//									"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBUFQIBQ0", 
//									"attrs": {}
//								}, 
//								"attrs": {"Mockup Result":"\"2021\""}
//							}
//						]
//					}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "TreeOff", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FBUF8BQ76","entrys":[]}, 
//				"funcs": {"jaxId":"1FBUF8BQ77","funcs":[]}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FBUF8BQ80", 
//						"attrs": {
//							"locked": "1", "id": "\"\"", "x": "2", "y": "0", "w": "100", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "text": "#state.getTime()", "color": "[80,80,80]", "autoSizeW": "0", "autoSizeH": "0", 
//							"select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.small", "bold": "0", 
//							"italic": "0", "underline": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FBUF8BQ81","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}