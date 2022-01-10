//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FBS9Q16V0Imports*/
import {CCDisk} from "../data/CCDisk.js"
import {CCFolder} from "../data/CCFolder.js"
import {lineDisk} from "./lineDisk.js"
import {lineFolder} from "./lineFolder.js"
/*}#1FBS9Q16V0Imports*/
//----------------------------------------------------------------------------
/*树形框，要指定项目的CSS*/
var naviBox=function (app, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBS9Q16V1ExLocal*/
	let isHot=0;
	/*}#1FBS9Q16V1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FBS9Q16V3ExState*/
		/*}#1FBS9Q16V3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FBS9Q16V1Mid*/
	/*}#1FBS9Q16V1Mid*/
	
	cssVO={
		"type": "tree", "jaxId": "1FBS9Q16V1", "id": "naviBox", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "multiSelect": 0, 
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FBS9Q16V1CreateFunc*/
			app.naviBox=this;
			self.initList();
			/*self.webObj.onpaste=(e)=>{
				let dt,files;
				dt=e.clipboardData;
				app.DoCopyDataTransferFiles(dt);
				e.preventDefault();
				e.stopPropagation();
			};*/
			/*}#1FBS9Q16V1CreateFunc*/
		}
	};
	/*#{1FBS9Q16V1ExViewDef*/
	//--------------------------------------------------------------------------
	//创建NodeCSS的函数:
	cssVO.nodeCSS=function(obj,node){
		if(obj instanceof CCDisk){
			return lineDisk(app,obj,node,self);
		}else if(obj instanceof CCFolder){
			return lineFolder(app,obj,node,self);
		}
	};

	//--------------------------------------------------------------------------
	//展开用函数
	cssVO.getSubObjs=function(item,node){
		return node.subFolders;
	};
	
	//------------------------------------------------------------------------
	//被点击，获得焦点:
	cssVO.OnClick=function(){
		app.setFocusBox(self);
	};
	
	//--------------------------------------------------------------------------
	//初始化列表:
	cssVO.initList=async function(){
		return CCDisk.getDiskList().then(async (diskList)=>{
			let i,n,disk;
			n=diskList.length;
			for(i=0;i<n;i++){
				disk=await CCDisk.getDisk(diskList[i]);
				self.addNode(disk);
				/*await CCDisk.getDisk(diskList[i]).then((disk)=>{
					self.addNode(disk);
				});*/
			}
		});
	};
	
	//-------------------------------------------------------------------------
	//Box获得App焦点:
	cssVO.OnAppFocus=function(){
		let node;
		node=self.hotNode;
		isHot=1;
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
		isHot=0;
		if(node){
			node.hud.showFace("selected");
		}
	};
	
	//------------------------------------------------------------------------
	//添加Disk:
	cssVO.addDisk=function(diskObj,name){
		let disk,node;
		disk=new CCDisk(app.appData,diskObj,name);
		node=self.addNode(disk);
		app.naviToItem(disk,node.hud,node);
	};
	
	//------------------------------------------------------------------------
	//找到一个项目的节点:
	cssVO.findNodeByDiskPath=function(diskPath){
		return self.findNode((node)=>{
			if(node.nodeObj.diskPath===diskPath){
				return 1;
			}
		});
	};
	//------------------------------------------------------------------------
	//添加目录:
	cssVO.addNewFolder=function(folderObj){
		let node,hotNode;
		hotNode=self.hotNode;
		if(hotNode.isOpen){
			node=self.addNode(folderObj,self.hotNode);
			app.naviToItem(folderObj,node.hud,node);
		}else{
			app.openItem(hotNode.nodeObj,hotNode.hud,hotNode).then(()=>{
				//找到并聚焦目录
				let newNode=self.findNodeByDiskPath(folderObj.diskPath);
				app.naviToItem(folderObj,newNode.hud,newNode);
			});
		}
	};
	
	//------------------------------------------------------------------------
	//删除了项目:
	cssVO.itemRemoved=function(item,hud,node){
		let index,nextNode;
		//TODO: Code this:
		index = self.indexOfNode(node);
		nextNode = self.nodes[index+1];
		if (!nextNode) {
			nextNode = self.nodes[index - 1];
		}
		if (nextNode) {
			self.setHotNode(nextNode);
		}
		self.removeNode(node);
	};
	
	//------------------------------------------------------------------------
	//打开节点
	cssVO.openItem=async function(node){
		let item,hud;
		item=node.nodeObj;
		hud=node.hud;
		if(item.getSubFolders){
			return item.getSubFolders().then((list)=>{
				if(list && list.length>0){
					hud.showFace("hasSub");
					node.subFolders=list;
					self.openNode(node);
				}else{
					hud.showFace("noSub");
				}
			});
		}
	};
	
	//------------------------------------------------------------------------
	//返回一个路径对应的node，根据参数决定是否展开节点
	cssVO.nodeByDiskPath=async function(diskPath,openNode=0){
		let node,pos,upPath,upNode;
		node=self.findNode((node)=>{
			return node.nodeObj.diskPath===diskPath;
		});
		if(node || !openNode){
			return node;
		}
		pos=diskPath.lastIndexOf("/");
		if(pos<0){
			pos=diskPath.lastIndexOf(":");
		}
		if(pos<0){
			return null;
		}
		upPath=diskPath.substring(0,pos);
		upNode=await self.nodeByDiskPath(upPath,1);
		if(upNode){
			await self.openItem(upNode);
			return self.findNode((node)=>{
				return node.nodeObj.diskPath===diskPath;
			});
		}
		return null;
	};

	//------------------------------------------------------------------------
	//显示一个路径，返回对应的node，根据参数决定是否展开节点
	cssVO.showItemByDiskPath=async function(diskPath,openNode=0){
		let node,pos,upPath,upNode;
		node=await self.nodeByDiskPath(diskPath,openNode);
		self.setHotNode(node);
		if(node && !isHot){
			node.hud.showFace("selected");
		}
		return node;
	};

	//------------------------------------------------------------------------
	//焦点对象改变:
	cssVO.OnHotNodeChange=function(newHotNode){
		self.OnHotChanged&&self.OnHotChanged(newHotNode?newHotNode.nodeObj:null,newHotNode?newHotNode.hud:null,newHotNode);
	};

	//------------------------------------------------------------------------
	//快捷键处理:
	cssVO.handleShortcut=function(cmd){
		switch(cmd){
			case "Delete":{
				let node=self.hotNode;
				app.DoNaviDel(node.nodeObj,node.hud,node);
				break;
			}
			case "Copy":{
				let node=self.hotNode;
				app.DoNaviCopy(node.nodeObj,node.hud,node);
				break;
			}
			case "Paste":{
				app.DoListPaste();
				break;
			}
			case "SelectAll":
				break;
		}
	};

	/*}#1FBS9Q16V1ExViewDef*/
	
	return cssVO;
};

/*#{1FBS9Q16V0PostCode*/
/*}#1FBS9Q16V0PostCode*/

export {naviBox};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "naviBox.js", "def": "CdyFileUIGear", "jaxId": "1FBS9Q16V0", 
//			"attrs": {
//				"gearName": "\"naviBox\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBS9Q1730", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBS9Q1732","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudTreeBox", "jaxId": "1FBS9Q16V1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBS9Q16V2", 
//					"attrs": {}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBS9Q16V3", 
//					"attrs": {}, "funcs": {"jaxId":"1FBS9Q1733","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"naviBox\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "headSpace": "0", "endSpace": "50", "nodeGap": "0", "intend": "30", "multiSelect": "0", 
//					"cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FBS9Q1734","entrys":[]}, 
//				"funcs": {"jaxId":"1FBS9Q1736","funcs":[]}, "subs": []
//			}
//		}/*Doc}#*/;
//	}