//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FBSA3FO30Imports*/
import {itemBG} from "./itemBG.js"
import {itemName} from "./itemName.js"
import {itemSize} from "./itemSize.js"
import {itemTime} from "./itemTime.js"
import {CCDisk} from "../data/CCDisk.js"
import {CCFolder} from "../data/CCFolder.js"
import {CCFile} from "../data/CCFile.js"
import getDataTransferFiles from "../lib/readdrops.js";
/*}#1FBSA3FO30Imports*/
//----------------------------------------------------------------------------
/*列表框，每行间距相同，可以有多个列，要指定行的CSS*/
var listBox=function (app, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBSA3FO31ExLocal*/
	let curEntryItem,curEntryPath,curEntryDisk;
	/*}#1FBSA3FO31ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FBSA3FO33ExState*/
		/*}#1FBSA3FO33ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FBSA3FO31Mid*/
	/*}#1FBSA3FO31Mid*/
	
	cssVO={
		"type": "list", "jaxId": "1FBSA3FO31", "x": 0, "y": 0, "w": "FW", "h": "FH-"+(appCfg.size.listHeadH+2), "autoLayout": 1, "headSpace": 0, "endSpace": 50, 
		"subGap": 0, "columns": [200,200], "rowH": 24, "multiSelect": 1, 
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FBSA3FO31CreateFunc*/
			app.listBox=this;
			self.webObj.ondragover=(e)=>{
				e.dataTransfer.dropEffect = "copy";
				e.preventDefault();
			};
			self.webObj.ondrop=(e)=>{
				let dt,files;
				dt=e.dataTransfer;
				app.DoCopyDataTransferFiles(dt);
				e.preventDefault();
				e.stopPropagation();
			};
			/*self.webObj.onpaste=(e)=>{
				let dt,files;
				dt=e.clipboardData;
				app.DoCopyDataTransferFiles(dt);
				e.preventDefault();
				e.stopPropagation();
			};*/
			/*}#1FBSA3FO31CreateFunc*/
		}
	};
	/*#{1FBSA3FO31ExViewDef*/
	//在这里指定列尺寸
	cssVO.columns=[appCfg.size.listColW1,appCfg.size.listColW2,appCfg.size.listColW3];
	cssVO.nodeCSS=(obj,node)=>{return itemBG(app,obj,node,self)};
	cssVO.columnCSS=[
		(obj,node)=>{return itemName(app,obj,node,self)},
		(obj,node)=>{return itemSize(app,obj,node,self)},
		(obj,node)=>{return itemTime(app,obj,node,self)},
	];

	//------------------------------------------------------------------------
	//被点击，获得焦点:
	cssVO.OnClick=function(){
		app.setFocusBox(self);
	};
	
	//------------------------------------------------------------------------
	//列出一个路径下的项目
	cssVO.showList=function(item){
		self.clear();
		curEntryItem=item;
		if(item){
			curEntryPath=item.path;
			curEntryDisk=(item instanceof CCDisk)?item:item.disk;
			item.getSubItems().then((list)=>{
				self.addNodes(list);
			});
		}else{
			curEntryPath="";
			curEntryDisk=null;
		}
		this.OnEntryChanged&&this.OnEntryChanged(item);
	};
	
	//------------------------------------------------------------------------
	//得到当前入口对象:
	cssVO.getEntryItem=function()
	{
		return curEntryItem;
	};

	//------------------------------------------------------------------------
	//得到当前入口所属的Disk对象:
	cssVO.getEntryDisk=function()
	{
		return curEntryDisk;
	};

	//------------------------------------------------------------------------
	//得到当前入口的路径:
	cssVO.getEntryPath=function()
	{
		return curEntryPath;
	};
	
	//------------------------------------------------------------------------
	//Get current entry's full-path:
	cssVO.getEntryDiskPath=function(){
		if(curEntryItem){
			return curEntryItem.diskPath;
		}
		return null;
	};

	//------------------------------------------------------------------------
	//得到当前选中的项目的名字:
	cssVO.getSelectedItemName=function()
	{
		return Array.from(self.selected).map((item)=>item.nodeObj.name);
	};
	
	//------------------------------------------------------------------------
	//得到当前选中的项目的路径:
	cssVO.getSelectedItemPath=function(addBase=1)
	{
		let files,basePath;
		if(addBase){
			basePath=curEntryPath;
			basePath=basePath.endsWith("/")?basePath.substring(0,basePath.length-1):basePath;
			basePath=(basePath)?basePath+"/":"";
		}else{
			basePath="";
		}
		files=Array.from(self.selected).map((item)=>basePath+item.nodeObj.name);
		return files;
	};
	
	//------------------------------------------------------------------------
	//刷新当前目录
	cssVO.refresh=function(){
		if(curEntryItem){
			self.showList(curEntryItem);
		}else{
			self.clear();
		}
	};

	//------------------------------------------------------------------------
	//刷新当前目录，显示增量:
	cssVO.refreshDiff=function(){
		let item,subName,node;
		item=curEntryItem;
		if(item){
			item.getSubItems().then((list)=>{
				let i,n,subItem;
				self.clearSelects();
				n=list.length;
				for(i=0;i<n;i++){
					subItem=list[i];
					subName=subItem.name;
					if(!self.findNode(node=>node.nodeObj.name===subName)){
						node=self.addNode(subItem);
						self.selectNode(node);
					}
				}
				if(node){
					self.setHotNode(node,1);
				}
			});
		}
	};

	//------------------------------------------------------------------------
	//添加目录:
	cssVO.addNewFolder=function(folderObj){
		//TODO: Code this:
	};

	//------------------------------------------------------------------------
	//添加文件:
	cssVO.addNewFiles=function(files){
		let fileSet;
		fileSet=new Set(files);
		self.setHotNode(null);
		self.clearSelects();
		curEntryItem.getSubItems(fileSet).then(list=>{
			let i,n,node;
			if(!list){
				return;
			}
			n=list.length;
			for(i=0;i<n;i++){
				node=self.findNode((node)=>node.nodeObj.name===list[i].name);
				if(node){
					self.removeNode(node);
				}
				node=self.addNode(list[i]);
				self.selectNode(node);
			}
			self.setHotNode(node,1);
		});
	};

	//-------------------------------------------------------------------------
	//Box获得App焦点:
	cssVO.OnAppFocus=function(){
		let node;
		node=self.hotNode;
		if(node){
			node.hud.showFace("hot");
			return node.nodeObj;
		}
		return null;
	};

	//-------------------------------------------------------------------------
	//Box失去App焦点:
	cssVO.OnAppBlur=function(){
		let node;
		node=self.hotNode;
		if(node){
			node.hud.showFace("selected");
		}
	};
	
	//------------------------------------------------------------------------
	//焦点对象改变:
	cssVO.OnHotNodeChange=function(newHotNode){
		self.OnHotChanged&&self.OnHotChanged(newHotNode?newHotNode.nodeObj:null,newHotNode?newHotNode.hud:null,newHotNode);
	};
	
	//------------------------------------------------------------------------
	//Move up selection:
	cssVO.moveUpSelection=function(){
		let node=self.hotNode;
		let idx=self.indexOfNode(node);
		if(idx>0){
			node=self.nodes[idx-1];
			if(node){
				//Call app to select this one:
				app.DoSelectListItem(node.nodeObj,node.hud,node,0);
			}
		}
	};
	
	//------------------------------------------------------------------------
	//Move down selection:
	cssVO.moveDownSelection=function(){
		let node=self.hotNode;
		let idx=self.indexOfNode(node);
		if(idx>=0){
			node=self.nodes[idx+1];
			if(node){
				//Call app to select this one:
				app.DoSelectListItem(node.nodeObj,node.hud,node,0);
			}
		}
	};

	//------------------------------------------------------------------------
	//快捷键处理:
	cssVO.handleShortcut=function(cmd){
		switch(cmd){
			case "Delete":
				app.DoListDel();
				break;
			case "Copy":
				app.DoListCopy();
				break;
			case "Paste":
				app.DoListPaste();
				break;
			case "SelectAll":
				app.DoListSelectAll();
				break;
			case "ItemUp":
				self.moveUpSelection();
				break;
			case "ItemDown":
				self.moveDownSelection();
				break;
		}
	};
	/*}#1FBSA3FO31ExViewDef*/
	
	return cssVO;
};

/*#{1FBSA3FO30PostCode*/
/*}#1FBSA3FO30PostCode*/

export {listBox};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "listBox.js", "def": "CdyFileUIGear", "jaxId": "1FBSA3FO30", 
//			"attrs": {
//				"gearName": "\"listBox\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBSA3FO60", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBSA3FO62","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudListBox", "jaxId": "1FBSA3FO31", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBSA3FO32", 
//					"attrs": {}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBSA3FO33", 
//					"attrs": {}, "funcs": {"jaxId":"1FBSA3FO63","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "#\"FH-\"+(appCfg.size.listHeadH+2)", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//					"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "headSpace": "0", "endSpace": "50", "subGap": "0", "columns": "[200,200]", 
//					"rowH": "24", "cursor": "\"\"", "multiSelect": "Yes", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FBSA3FO64","entrys":[]}, 
//				"funcs": {"jaxId":"1FBSA3FO66","funcs":[]}, "subs": []
//			}
//		}/*Doc}#*/;
//	}