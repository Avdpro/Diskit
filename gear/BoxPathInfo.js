//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FOJBRP8J0Imports*/
/*}#1FOJBRP8J0Imports*/
//----------------------------------------------------------------------------
/*Hud控件节点，没有内容，可以有子节点*/
var BoxPathInfo=function (app, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FOJBRP8J1ExLocal*/
	let item;
	/*}#1FOJBRP8J1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FOJBRP8J3ExState*/
		/*}#1FOJBRP8J3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FOJBRP8J1Mid*/
	/*}#1FOJBRP8J1Mid*/
	
	cssVO={
		"type": "hud", "jaxId": "1FOJBRP8J1", "x": 0, "y": 1, "w": "FW", "h": 80, 
		items: [
			{
				"type": "image", "jaxId": "1FOJCAJT80", "id": "ImgIcon", "x": 15, "y": 15, "w": 60, "h": 60, "image": "assets/disk.svg", "autoSize": 0, "fitSize": 1
			},
			{
				"type": "text", "jaxId": "1FOJCAJT83", "id": "TxtName", "x": 80, "y": 20, "w": 200, "h": 20, "text": "FileName", "color": [0,0,0], "fontSize": appCfg.txtSize.big
			},
			{
				"type": "text", "jaxId": "1FOJCAJT86", "id": "TxtInfo", "x": 80, "y": 50, "w": 200, "h": 20, "text": "Size: 102405", "color": [100,100,100], "fontSize": appCfg.txtSize.mid
			}
		],
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FOJBRP8J1CreateFunc*/
			/*}#1FOJBRP8J1CreateFunc*/
		}
	};
	/*#{1FOJBRP8J1ExViewDef*/
	//------------------------------------------------------------------------
	cssVO.showInfo=function(newItem){
		item=newItem;
		self.TxtName.text=item.name;
		if(item.type==="dir"){
			self.showDir();
		}else if(item.type==="file"){
			self.showFile();
		}
	};
	
	//------------------------------------------------------------------------
	cssVO.showDir=async function(){
		let disk,items,size,sizeText;
		self.ImgIcon.image="assets/mulu.svg";
		self.TxtInfo.text="Folder size:..."
		size=await item.getSize();
		if(size>1024*1024){
			size/=1024*1024;
			sizeText=Number(size).toLocaleString(undefined,{minimumFractionDigits: 1,maximumFractionDigits: 2})+" MB";
		}else if(size>1024){
			size/=1024;
			sizeText=Number(size).toLocaleString(undefined,{minimumFractionDigits: 1,maximumFractionDigits: 2})+" KB";
		}else{
			sizeText=Number(size).toLocaleString()+" Bytes";
		}
		self.TxtInfo.text="Folder size: "+sizeText;
	};
	
	//------------------------------------------------------------------------
	cssVO.showFile=function(){
		let size,sizeText,ext;
		ext=item.nameExt;
		ext=appCfg.fileIcons[ext];
		if(ext){
			self.ImgIcon.image=ext;
		}else{
			self.ImgIcon.image="assets/wenjian.svg";
		}
		size=item.size;
		if(size>1024*1024){
			size/=1024*1024;
			sizeText=Number(size).toLocaleString(undefined,{minimumFractionDigits: 1,minimumFractionDigits: 2})+" MB";
		}else if(size>1024){
			size/=1024;
			sizeText=Number(size).toLocaleString(undefined,{minimumFractionDigits: 1,minimumFractionDigits: 2})+" KB";
		}else{
			sizeText=Number(size).toLocaleString()+" Bytes";
		}
		self.TxtInfo.text="File size: "+sizeText;
	};
	/*}#1FOJBRP8J1ExViewDef*/
	
	return cssVO;
};

/*#{1FOJBRP8J0PostCode*/
/*}#1FOJBRP8J0PostCode*/

export {BoxPathInfo};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "BoxPathInfo.js", "def": "CdyFileUIGear", "jaxId": "1FOJBRP8J0", 
//			"attrs": {
//				"gearName": "\"BoxPathInfo\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FOJBRP8K0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FOJBRP8K2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudObj", "jaxId": "1FOJBRP8J1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJBRP8J2", 
//					"attrs": {}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FOJBRP8J3", 
//					"attrs": {}, "funcs": {"jaxId":"1FOJBRP8K3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "1", "w": "\"FW\"", "h": "80", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FOJBRP8K4","entrys":[]}, 
//				"funcs": {"jaxId":"1FOJBRP8K6","funcs":[]}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudImage", "jaxId": "1FOJCAJT80", 
//						"attrs": {
//							"locked": "0", "id": "\"ImgIcon\"", "x": "15", "y": "15", "w": "60", "h": "60", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "image": "assets/disk.svg", "autoSize": "0", "fitSize": "1"
//						}, 
//						"funcs": {"jaxId":"1FOJCAJT82","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FOJCAJT83", 
//						"attrs": {
//							"locked": "0", "id": "\"TxtName\"", "x": "80", "y": "20", "w": "200", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"FileName\"", "color": "[0,0,0]", "autoSizeW": "0", 
//							"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "#appCfg.txtSize.big", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FOJCAJT85","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FOJCAJT86", 
//						"attrs": {
//							"locked": "0", "id": "\"TxtInfo\"", "x": "80", "y": "50", "w": "200", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Size: 102405\"", "color": "[100,100,100]", 
//							"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FOJCAJT88","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}