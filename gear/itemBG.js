//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FBUDU84B0Imports*/
/*}#1FBUDU84B0Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var itemBG=function (app, item, node, box, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBUDU84B3ExLocal*/
	let isHot=0;
	/*}#1FBUDU84B3ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FBUDU84C0ExState*/
		/*}#1FBUDU84C0ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FBUDU84B3Mid*/
	/*}#1FBUDU84B3Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FBUDU84B3", "x": 0, "y": 0, "w": "FW", "h": 24, "autoLayout": 1, 
		"hudState": state, 
		"hudBtnUp": {
			"type": "box", "jaxId": "1FC09765I0", "x": 0, "y": 0, "w": "FW", "h": 24, "autoLayout": 1, "color": appCfg.color.window, "shadowColor": [0,0,0,0.5]
		},
		"hudBtnDown": {
			"type": "box", "jaxId": "1FBUDU84D0", "x": 0, "y": 0, "w": "FW", "h": 24, "autoLayout": 1, "color": appCfg.color.highLight, "shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "box", "jaxId": "1FBUDU84D2", "id": "BoxSelect", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "display": 0, "color": [220,220,220,1], 
				"shadowColor": [0,0,0,0.5]
			},
			{
				"type": "box", "jaxId": "1FBUE1JNF0", "id": "BoxHot", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "display": 0, "color": appCfg.color.window, 
				"gradient": appCfg.color.gntFile, "shadowColor": [0,0,0,0.5]
			}
		],
		faces: {
			"normal": {
				"$":function(vo){
					/*#{1FBUDU84C3Func*/
					isHot=0;
					/*}#1FBUDU84C3Func*/
				},
				/*BoxSelect*/"#1FBUDU84D2": {
					"display": 0
				},
				/*BoxHot*/"#1FBUE1JNF0": {
					"display": 0
				},
			},
			"hot": {
				"$":function(vo){
					/*#{1FBUDU84C5Func*/
					isHot=1;
					/*}#1FBUDU84C5Func*/
				},
				/*BoxSelect*/"#1FBUDU84D2": {
					"display": 0
				},
				/*BoxHot*/"#1FBUE1JNF0": {
					"display": 1
				},
			},
			"selected": {
				"$":function(vo){
					/*#{1FC0EIQQC0Func*/
					isHot=0;
					/*}#1FC0EIQQC0Func*/
				},
				/*BoxSelect*/"#1FBUDU84D2": {
					"display": 1
				},
				/*BoxHot*/"#1FBUE1JNF0": {
					"display": 0
				},
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FBUDU84B3CreateFunc*/
			/*}#1FBUDU84B3CreateFunc*/
		}
	};
	/*#{1FBUDU84B3ExViewDef*/
	let lastClickTime=0;
	cssVO.OnClick=function(e){
		let addSelect=0;
		let time=Date.now();
		if(e.metaKey){
			addSelect=1;
		}
		if(e.shiftKey){
			return app.DoSelectListTo(node,addSelect);
		}
		if(addSelect && box.selected.has(node)){
			app.DoDeselectListItem(item,self,node);
		}else{
			if(isHot){
				if(time-lastClickTime<800){
					//TODO: DBClick:
					app.DoListOpenItem(item,self,node);
				}else if(isHot && time-lastClickTime>1500){
					//TODO: Rename?
					//app.DoListRename();
				}
			}
			app.DoSelectListItem(item,self,node,addSelect);
		}
		lastClickTime=time;
		//box.setHotNode(node);
	};
	/*}#1FBUDU84B3ExViewDef*/
	
	return cssVO;
};

/*#{1FBUDU84B0PostCode*/
/*}#1FBUDU84B0PostCode*/

export {itemBG};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "itemBG.js", "def": "CdyFileUIGear", "jaxId": "1FBUDU84B0", 
//			"attrs": {
//				"gearName": "\"itemBG\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBUDU84B1", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBUDU84B2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FBUDU84B3", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBUDU84B4", 
//					"attrs": {
//						"item": {
//							"name": "item", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "MockupRef1FBS4FICA0", "mockupName": "jsfile", "tip": ""
//						}, 
//						"node": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}, 
//						"box": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBUDU84C0", 
//					"attrs": {}, "funcs": {"jaxId":"1FBUDU84C1","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "drag": "NA", "enable": "On", "zIndex": "0"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FBUDU84C2", 
//					"entrys": [
//						{
//							"jaxId": "1FBUDU84C3", "attrs": {"Face Name":"\"normal\"","Face Function":"1"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBUDU84C4", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBUDU84C5", "attrs": {"Face Name":"\"hot\"","Face Function":"1"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBUDU84C6", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FC0EIQQC0", 
//							"attrs": {"Face Name":"\"selected\"","Face Function":"1"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC0EKK5Q0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {"jaxId":"1FBUDU84C7","funcs":[]}, 
//				"btnHuds": {
//					"hudBtnUp": {
//						"type": "object", "def": "HudBox", "jaxId": "1FC09765I0", 
//						"attrs": {
//							"locked": "1", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "color": "#appCfg.color.window", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", 
//							"coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//							"cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FC09765I2","funcs":[]}, "subs": []
//					}, 
//					"hudBtnDown": {
//						"type": "object", "def": "HudBox", "jaxId": "1FBUDU84D0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "color": "#appCfg.color.highLight", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//							"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//							"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FBUDU84D1","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FBUDU84D2", 
//						"attrs": {
//							"locked": "0", "id": "\"BoxSelect\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//							"display": "Hide", "clip": "Off", "uiEvent": "On", "color": "[220,220,220,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", 
//							"coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//							"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FBUDU84D3", 
//							"entrys": [
//								{
//									"jaxId": "1FBUDU84D4", "entryId": "1FBUDU84C3", "faceName": "normal", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBUDU84E0", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FBUDU84E1", "entryId": "1FBUDU84C5", "faceName": "hot", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBUDU84E2", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FC0EKK5Q1", "entryId": "1FC0EIQQC0", "faceName": "selected", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FC0EKK5Q2", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FBUDU84E3","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FBUE1JNF0", 
//						"attrs": {
//							"locked": "0", "id": "\"BoxHot\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Hide", 
//							"clip": "Off", "uiEvent": "On", "color": "#appCfg.color.window", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//							"gradient": "#appCfg.color.gntFile", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//							"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FBUE1JNG0", 
//							"entrys": [
//								{
//									"jaxId": "1FBUE1JNG1", "entryId": "1FBUDU84C3", "faceName": "normal", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBUE1JNG2", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FBUE1JNG3", "entryId": "1FBUDU84C5", "faceName": "hot", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBUE1JNH0", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FC0EVAA10", "entryId": "1FC0EIQQC0", "faceName": "selected", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FC0EVAA11", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FBUE1JNH1","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}