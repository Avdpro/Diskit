//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {btnStd} from "./btnStd.js";
import {btnIcon} from "./btnIcon.js";
/*#{1FE2PIB3N0Imports*/
import {JAXDisk} from "/jaxweb/lib/JAXDisk.js";
import {CCDisk} from "../data/CCDisk.js";
/*}#1FE2PIB3N0Imports*/
//----------------------------------------------------------------------------
/*Hud控件节点，没有内容，可以有子节点*/
var boxCloudInfo=function (app, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FE2PIB3N1ExLocal*/
	let disk=null;
	/*}#1FE2PIB3N1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FE2PIB3N3ExState*/
		/*}#1FE2PIB3N3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FE2PIB3N1Mid*/
	/*}#1FE2PIB3N1Mid*/
	
	cssVO={
		"type": "hud", "jaxId": "1FE2PIB3N1", "x": 0, "y": 0, "w": "FW", "h": 150, 
		items: [
			{
				"type": "image", "jaxId": "1FE88GTAK0", "id": "ImgCloud", "x": 0, "y": 0, "w": "FW", "h": "FH", "alpha": 0.2, "image": "assets/cloud.svg", "autoSize": 0, 
				"fitSize": 1
			},
			{
				"type": "text", "jaxId": "1FE60I1320", "x": 10, "y": 8, "w": 100, "h": 20, "text": "Cloud info:", "color": [0,0,0], "fontSize": appCfg.txtSize.mid
			},
			{
				"type": "box", "jaxId": "1FE63D9S50", "id": "BoxLine", "x": 0, "y": "FH-1", "w": "FW", "h": 1, "shadowColor": [0,0,0,0.5]
			},
			{
				"type": "group", "jaxId": "1FE63D9S53", "id": "GPCheckIn", "display": 0, 
				items: [
					{
						"type": btnStd(app,120,"Check In",null),"jaxId": "1FE6116PD0", 
						"locked": 0, "id": "BtnCheckIn", "x": 128.5, "y": 98, 
						//函数
						OnClick:function(){
							/*#{1FE8AOS2C0Code*/
							app.DoCheckInDisk(disk);
							/*}#1FE8AOS2C0Code*/
						}
					},
					{
						"type": "text", "jaxId": "1FE63D9S510", "id": "TxtCheckIn", "x": 15, "y": 35, "w": 347, "h": 60, "text": "This disk is in your browser only. Check it in to CokeCodes cloud so you can access this anywhere anytime.", 
						"color": [0,0,0], "wrap": 1, "fontSize": appCfg.txtSize.mid
					}
				]
			},
			{
				"type": "group", "jaxId": "1FE63D9S513", "id": "GpCloud", 
				items: [
					{
						"type": "text", "jaxId": "1FE61I7UO0", "id": "TxtBaseVsn", "x": 20, "y": 32, "w": 100, "h": 20, "text": "Base version: 100", "color": [0,0,0], "fontSize": appCfg.txtSize.mid
					},
					{
						"type": "text", "jaxId": "1FE61I91O0", "id": "TxtCloudVsn", "x": 20, "y": 52, "w": 100, "h": 20, "text": "Cloud version: ???", "color": [0,0,0], 
						"fontSize": appCfg.txtSize.mid
					},
					{
						"type": "text", "jaxId": "1FE61M90C0", "id": "TxtModified", "x": 20, "y": 72, "w": 100, "h": 20, "text": "Disk modified: ???", "color": [0,0,0], 
						"fontSize": appCfg.txtSize.mid
					},
					{
						"type": btnStd(app,120,"Update",null),"jaxId": "1FE61PRJG0", 
						"locked": 0, "id": "BtnUpdate", "x": "FW/2-120-10", "y": 98, 
						//函数
						OnClick:function(){
							/*#{1FEQ6PEPO0Code*/
							app.DoUpdateDisk(disk);
							/*}#1FEQ6PEPO0Code*/
						}
					},
					{
						"type": btnStd(app,120,"Commit",null),"jaxId": "1FE61R8KD0", 
						"locked": 0, "id": "BtnCommit", "x": "FW/2+10", "y": 98, 
						//函数
						OnClick:function(){
							/*#{1FEISC7FB0Code*/
							app.DoCommitDisk(disk);
							/*}#1FEISC7FB0Code*/
						}
					},
					{
						"type": btnIcon(app,32,"refresh.svg",null),"jaxId": "1FEIGQJ860", 
						"locked": 0, "id": "BtnRefresh", "x": "FW-5-32", "y": 5, 
						//函数
						OnClick:function(){
							/*#{1FEIGQJ865Code*/
							disk.DoCheckDisk();
							/*}#1FEIGQJ865Code*/
						}
					}
				]
			}
		],
		"hudState": state, 
		faces: {
			"NoCloud": {
				/*GPCheckIn*/"#1FE63D9S53": {
					"display": 1
				},
				/*GpCloud*/"#1FE63D9S513": {
					"display": 0
				},
			},
			"Check": {
				/*GPCheckIn*/"#1FE63D9S53": {
					"display": 0
				},
				/*GpCloud*/"#1FE63D9S513": {
					"display": 1
				},
				/*TxtCloudVsn*/"#1FE61I91O0": {
					"text": "Cloud version: ???"
				},
				/*TxtModified*/"#1FE61M90C0": {
					"text": "Disk modified: ???"
				},
				/*BtnUpdate*/"#1FE61PRJG0": {
					"display": 1
				},
				/*BtnCommit*/"#1FE61R8KD0": {
					"display": 1
				},
			},
			"Init": {
				/*GPCheckIn*/"#1FE63D9S53": {
					"display": 0
				},
				/*GpCloud*/"#1FE63D9S513": {
					"display": 0
				},
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FE2PIB3N1CreateFunc*/
			/*}#1FE2PIB3N1CreateFunc*/
		}
	};
	/*#{1FE2PIB3N1ExViewDef*/
	cssVO.setDisk=function(diskObj){
		disk=diskObj;
		self.showFace("Init");
		//JAXDisk.getDiskInfo(diskObj.name).then(async info=>{
		diskObj.getTreeInfo().then(async info=>{
			let diskId,localVIdx,localVName,cloudVO,cloudVIdx,cloudVName;
			let modifys;
			if(!info || !info.diskId){
				self.showFace("NoCloud");
				return;
			}
			diskId=info.diskId;
			localVIdx=info.versionIdx;
			localVName=info.version;
			//获得服务器端的版本信息:
			cloudVO=await CCDisk.DoGetCloudInfo(appData,diskId);
			if(!cloudVO){
				self.showFace("NoCloud");
				return;
			}
			if(cloudVO.code!==200){
				self.showFace("NoCloud");
				return;
			};
			if(disk!==diskObj){
				return;
			}
			cloudVIdx=cloudVO.versionIdx;
			cloudVName=cloudVO.version;
			/*if(cloudVIdx>localVIdx){
				self.showFace("Update");
				return;
			}*/
			//看看本地有没有文件更新:
			modifys=await diskObj.DoGetModifys();
			if(disk!==diskObj){
				return;
			}
			self.showFace("Check");
			self.TxtBaseVsn.text="Local version: "+localVName+"/"+localVIdx;
			self.TxtCloudVsn.text="Cloud version: "+cloudVName+"/"+cloudVIdx;
			if(modifys){
				self.TxtModified.text="Modified: "+modifys.num+" items.";
			}else{
				self.TxtModified.text="Modified: None.";
			}
		}).catch(e=>{
			if(disk===diskObj){
				self.showFace("InfoError");
			}
		});
	};
	/*}#1FE2PIB3N1ExViewDef*/
	
	return cssVO;
};

/*#{1FE2PIB3N0PostCode*/
/*}#1FE2PIB3N0PostCode*/

export {boxCloudInfo};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "boxCloudInfo.js", "def": "CdyFileUIGear", "jaxId": "1FE2PIB3N0", 
//			"attrs": {
//				"gearName": "\"boxCloudInfo\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FE2PIB3O0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FE2PIB3O2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudObj", "jaxId": "1FE2PIB3N1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE2PIB3N2", 
//					"attrs": {}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FE2PIB3N3", 
//					"attrs": {}, "funcs": {"jaxId":"1FE2PIB3O3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "150", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FE2PIB3O4", 
//					"entrys": [
//						{
//							"jaxId": "1FE636K630", 
//							"attrs": {"Face Name":"\"NoCloud\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE63D9S40", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FE638GPO0", "attrs": {"Face Name":"\"Check\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE63D9S41", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FE88DEEJ0", "attrs": {"Face Name":"\"Init\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE88HG5G0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {"jaxId":"1FE2PIB3O6","funcs":[]}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudImage", "jaxId": "1FE88GTAK0", 
//						"attrs": {
//							"locked": "0", "id": "\"ImgCloud\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "0.2", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "image": "assets/cloud.svg", 
//							"autoSize": "0", "fitSize": "1"
//						}, 
//						"funcs": {"jaxId":"1FE88HG5G2","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FE60I1320", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "10", "y": "8", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Cloud info:\"", "color": "[0,0,0]", "autoSizeW": "0", 
//							"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FE60I1322","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FE63D9S50", 
//						"attrs": {
//							"locked": "0", "id": "\"BoxLine\"", "x": "0", "y": "\"FH-1\"", "w": "\"FW\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[180,180,180,1]", "border": "0", 
//							"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//							"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FE63D9S52","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "LayoutGroup", "jaxId": "1FE63D9S53", 
//						"attrs": {"locked":"0","id":"\"GPCheckIn\"","display":"Hide"}, 
//						"faces": {
//							"jaxId": "1FE63D9S54", 
//							"entrys": [
//								{
//									"jaxId": "1FE63D9S55", "entryId": "1FE636K630", "faceName": "NoCloud", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE63D9S56", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FE63D9S57", "entryId": "1FE638GPO0", "faceName": "Check", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE63D9S58", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FE88HG5G3", "entryId": "1FE88DEEJ0", "faceName": "Init", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE88HG5G4", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FE63D9S59","funcs":[]}, 
//						"subs": [
//							{
//								"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FE6116PD0", 
//								"args": {
//									"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE6116PD1", 
//									"attrs": {
//										"w": {"type":"int","valText":"120","initVal":0,"info":null,"tip":null}, 
//										"text": {
//											"type": "string", "valText": "\"Check In\"", "initVal": "", "info": null, 
//											"tip": null
//										}
//									}
//								}, 
//								"stateObj": {
//									"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE6116PD2", 
//									"attrs": {}
//								}, 
//								"attrs": {
//									"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnCheckIn\"", "x": "128.5", "y": "98", "autoLayout": "Off"
//								}, 
//								"faces": null, 
//								"funcs": {
//									"jaxId": "1FE6116PD4", 
//									"funcs": [
//										{
//											"jaxId": "1FE8AOS2C0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//											"args": {
//												"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8APJSA0", 
//												"attrs": {}
//											}, 
//											"attrs": {"Mockup Result":"\"\""}
//										}
//									]
//								}
//								
//							},
//							{
//								"type": "object", "def": "HudTxt", "jaxId": "1FE63D9S510", 
//								"attrs": {
//									"locked": "0", "id": "\"TxtCheckIn\"", "x": "15", "y": "35", "w": "347", "h": "60", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//									"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"This disk is in your browser only. Check it in to CokeCodes cloud so you can access this anywhere anytime.\"", 
//									"color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "1", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", 
//									"fontSize": "#appCfg.txtSize.mid", "bold": "0", "italic": "0", "underline": "0"
//								}, 
//								"funcs": {"jaxId":"1FE63D9S512","funcs":[]}, "subs": []
//							}
//						]
//						
//					},
//					{
//						"type": "object", "def": "LayoutGroup", "jaxId": "1FE63D9S513", 
//						"attrs": {"locked":"0","id":"\"GpCloud\"","display":"Show"}, 
//						"faces": {
//							"jaxId": "1FE63D9S514", 
//							"entrys": [
//								{
//									"jaxId": "1FE63D9S515", "entryId": "1FE636K630", "faceName": "NoCloud", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE63D9S516", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FE63D9S517", "entryId": "1FE638GPO0", "faceName": "Check", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE63D9S518", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FE88HG5G5", "entryId": "1FE88DEEJ0", "faceName": "Init", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE88HG5G6", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FE63D9S519","funcs":[]}, 
//						"subs": [
//							{
//								"type": "object", "def": "HudTxt", "jaxId": "1FE61I7UO0", 
//								"attrs": {
//									"locked": "0", "id": "\"TxtBaseVsn\"", "x": "20", "y": "32", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//									"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Base version: 100\"", 
//									"color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", 
//									"fontSize": "#appCfg.txtSize.mid", "bold": "0", "italic": "0", "underline": "0"
//								}, 
//								"funcs": {"jaxId":"1FE61I7UO2","funcs":[]}, "subs": []
//							},
//							{
//								"type": "object", "def": "HudTxt", "jaxId": "1FE61I91O0", 
//								"attrs": {
//									"locked": "0", "id": "\"TxtCloudVsn\"", "x": "20", "y": "52", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//									"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Cloud version: ???\"", 
//									"color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", 
//									"fontSize": "#appCfg.txtSize.mid", "bold": "0", "italic": "0", "underline": "0"
//								}, 
//								"faces": {
//									"jaxId": "1FE61M58H0", 
//									"entrys": [
//										{
//											"jaxId": "1FE63D9S520", "entryId": "1FE638GPO0", "faceName": "Check", 
//											"attrs": {"text":"\"Cloud version: ???\""}, 
//											"anis": {
//												"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE63D9S521", 
//												"attrs": []
//											}
//											
//										}
//									]
//								}, 
//								"funcs": {"jaxId":"1FE61I91P0","funcs":[]}, "subs": []
//							},
//							{
//								"type": "object", "def": "HudTxt", "jaxId": "1FE61M90C0", 
//								"attrs": {
//									"locked": "0", "id": "\"TxtModified\"", "x": "20", "y": "72", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//									"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Disk modified: ???\"", 
//									"color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", 
//									"fontSize": "#appCfg.txtSize.mid", "bold": "0", "italic": "0", "underline": "0"
//								}, 
//								"faces": {
//									"jaxId": "1FE63D9S522", 
//									"entrys": [
//										{
//											"jaxId": "1FE63D9S523", "entryId": "1FE638GPO0", "faceName": "Check", 
//											"attrs": {"text":"\"Disk modified: ???\""}, 
//											"anis": {
//												"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE63D9S524", 
//												"attrs": []
//											}
//											
//										}
//									]
//								}, 
//								"funcs": {"jaxId":"1FE61M90D0","funcs":[]}, "subs": []
//							},
//							{
//								"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FE61PRJG0", 
//								"args": {
//									"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE61PRJG1", 
//									"attrs": {
//										"w": {"type":"int","valText":"120","initVal":0,"info":null,"tip":null}, 
//										"text": {
//											"type": "string", "valText": "\"Update\"", "initVal": "", "info": null, 
//											"tip": null
//										}
//									}
//								}, 
//								"stateObj": {
//									"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE61PRJG2", 
//									"attrs": {}
//								}, 
//								"attrs": {
//									"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnUpdate\"", "x": "\"FW/2-120-10\"", "y": "98", "autoLayout": "Off"
//								}, 
//								"faces": {
//									"jaxId": "1FE61R7GU0", 
//									"entrys": [
//										{
//											"jaxId": "1FE63D9S525", "entryId": "1FE638GPO0", "faceName": "Check", 
//											"attrs": {"display":"On"}, 
//											"anis": {
//												"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE63D9S526", 
//												"attrs": []
//											}
//											
//										}
//									]
//								}, 
//								"funcs": {
//									"jaxId": "1FE61PRJG3", 
//									"funcs": [
//										{
//											"jaxId": "1FEQ6PEPO0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//											"args": {
//												"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEQ6Q2IE0", 
//												"attrs": {}
//											}, 
//											"attrs": {"Mockup Result":"\"\""}
//										}
//									]
//								}
//								
//							},
//							{
//								"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FE61R8KD0", 
//								"args": {
//									"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE61R8KD1", 
//									"attrs": {
//										"w": {"type":"int","valText":"120","initVal":0,"info":null,"tip":null}, 
//										"text": {
//											"type": "string", "valText": "\"Commit\"", "initVal": "", "info": null, 
//											"tip": null
//										}
//									}
//								}, 
//								"stateObj": {
//									"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE61R8KD2", 
//									"attrs": {}
//								}, 
//								"attrs": {
//									"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnCommit\"", "x": "\"FW/2+10\"", "y": "98", "autoLayout": "Off"
//								}, 
//								"faces": {
//									"jaxId": "1FE62VG8S0", 
//									"entrys": [
//										{
//											"jaxId": "1FE63D9S527", "entryId": "1FE638GPO0", "faceName": "Check", 
//											"attrs": {"display":"On"}, 
//											"anis": {
//												"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE63D9S528", 
//												"attrs": []
//											}
//											
//										}
//									]
//								}, 
//								"funcs": {
//									"jaxId": "1FE61R8KF0", 
//									"funcs": [
//										{
//											"jaxId": "1FEISC7FB0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//											"args": {
//												"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEISD8AO0", 
//												"attrs": {}
//											}, 
//											"attrs": {"Mockup Result":"\"\""}
//										}
//									]
//								}
//								
//							},
//							{
//								"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FEIGQJ860", 
//								"args": {
//									"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEIGQJ861", 
//									"attrs": {
//										"w": {"type":"int","valText":"32","initVal":0,"info":null,"tip":null}, 
//										"image": {
//											"type": "string", "valText": "\"refresh.svg\"", "initVal": "", 
//											"info": null, "tip": null
//										}
//									}
//								}, 
//								"stateObj": {
//									"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEIGQJ862", 
//									"attrs": {}
//								}, 
//								"attrs": {
//									"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnRefresh\"", "x": "\"FW-5-32\"", "y": "5", "autoLayout": "Off"
//								}, 
//								"faces": null, 
//								"funcs": {
//									"jaxId": "1FEIGQJ864", 
//									"funcs": [
//										{
//											"jaxId": "1FEIGQJ865", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//											"args": {
//												"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEIGQJ866", 
//												"attrs": {}
//											}, 
//											"attrs": {"Mockup Result":"\"\""}
//										}
//									]
//								}
//								
//							}
//						]
//						
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}