//Auto genterated by Cody
/*#{AppImport*/
//JAX Basic：
import {JAXEnv} from "/jaxweb/lib/JAXEnv.js";
import {JAXApp} from "/jaxweb/lib/JAXApp.js";
import {JAXDisk} from "/jaxweb/lib/JAXDisk.js";
import {} from "/jaxweb/lib/JAXHudLib.js";
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js";
import {appCfg} from "./cfg/appCfg.js";
import {textLib} from "./text/textLib.js";
import {appData} from "./appData.js";
import {CCDisk} from "./data/CCDisk.js"
import {CCFolder} from "./data/CCFolder.js"
import {CCFile} from "./data/CCFile.js"
import {DlgCloud} from "./ui/DlgCloud.js";
import {DlgWait} from "./ui/DlgWait.js";
import pathLib from "/@path";
import addOnCfg from "./addons.js";
import {getDataTransferFiles} from "./lib/readdrops.js";
import {dlgLogin} from "/@desktop/ui/dlgLogin.js";
import cokeNT from "/@cokecodes/cokeNT.js";
/*}#AppImport*/
import {DiskitUI} from "./ui/DiskitUI.js";
var entryUI=DiskitUI;
/*#{AppEnv-Pre*/
let jaxDiv=document.getElementById("JAXAppFrame");
var jaxApp,jaxEnv,docPath,diskPath;
var hotBox=null;

jaxDiv.style.height=window.innerHeight+"px";
jaxDiv.style.background="#F0F0F0";

docPath=document.location.href;
let pos1=docPath.indexOf("/disks/");
pos1+="/disks/".length;
let pos2=docPath.indexOf("/",pos1);
diskPath=docPath.substring(pos1,pos2);

document.title="CCDiskit";

jaxEnv=new JAXEnv(jaxDiv);
window.jaxApp=jaxApp=jaxEnv.createApp();

//先初始化JAX的文件系统，再启动App:
CCDisk.init(jaxApp).then(()=>{
	jaxApp.appCfg=appCfg;
	jaxApp.textLib=textLib["EN"];
	jaxApp.appData=appData;
	initData();
	/*appData.initData(diskPath).then(()=>{
		startApp();
	});*/
});
//----------------------------------------------------------------------------
//初始化数据:
function initData(){
	let result;
	result=appData.initData(jaxEnv);
	if(result instanceof Promise){
		result.then(startApp,(error)=>{jaxEnv.logError(error)});
	}else{
		startApp();
	}
	//TODO: Code this:
	
}

//----------------------------------------------------------------------------
//Paste from clip board:
document.body.onpaste=(e)=>{
	let dt,files,cpText;
	if(jaxApp){
		if(jaxApp.getDlg()){
			return;
		}
		if(jaxApp.isWaiting()){
			return;
		}
		dt=e.clipboardData;
		cpText=dt.getData("text/plain");
		if(cpText){
			let cpVO;
			try{
				cpVO=JSON.parse(cpText);
				if(cpVO && cpVO["$CCDiskitCopy"]){
					cpVO=cpVO["$CCDiskitCopy"];
				}
			}catch(err){
				cpVO=null;
			}
			if(cpVO){
				jaxApp.clipbordFiles=cpVO;
				jaxApp.DoListPaste();
				return;
			}
		}
		jaxApp.DoCopyDataTransferFiles(dt);
		e.preventDefault();
		e.stopPropagation();
	}
};

//----------------------------------------------------------------------------
//Paste from clip board:
/*document.body.oncopy=(e)=>{
	if(jaxApp){
		let theClipboard = navigator.clipboard;
		theClipboard.writeText("$CCDiskit");
		e.preventDefault();
		e.stopPropagation();
	}
};*/


//----------------------------------------------------------------------------
//Focus gain callback:
window.addEventListener("focus",()=>{
	if(jaxApp){
		cokeNT.checkLogin(true);
	}
});


//----------------------------------------------------------------------------
//启动App:
function startApp() {
	var appDef, isShowDlg, appState;
	var dlgList = [];

	appState=jaxHudState(jaxEnv,{
/*}#AppEnv-Pre*/
/*#{AppEnv-Mid*/
	});

	//************************************************************************
	//:Load addons:
	//************************************************************************
	{
		let defs=addOnCfg.toolBoxes;
		for(let i=0,n=defs.length;i<n;i++){
			appData.regToolBox(defs[i]);
		}
	}

	//************************************************************************
	//APP功能操作:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//添加一个disk:
		jaxApp.DoAddDisk=function(){
			let diskName,checker;
			diskName=window.prompt("Name of new disk:","NewDisk");
			if(diskName){
				checker=/^[ A-Za-z0-9_-]{3,30}$/;
				if(!checker.test(diskName)){
					window.alert("Wrong name: name should be 3~30 chars, only allow 'A'~'Z', 'a'~'z', '0'~'9', '-', '_' or space");
					return;
				}
				JAXDisk.diskExist(diskName).then((exist)=>{
					if(exist){
						window.alert("Disk already exist!");
						return;
					}
					return JAXDisk.newDisk(diskName).then((diskObj)=>{
						if(diskObj){
							jaxApp.naviBox.addDisk(diskObj,diskName);
						}
					});
				});
			}
		};
		
		//--------------------------------------------------------------------
		//添加一个已经下载安装好的云disk:
		jaxApp.DoAddCheckOutDisk=function(disk){
			let diskName,diskObj;
			diskName=disk.name;
			JAXDisk.diskExist(diskName).then((exist)=>{
				if(!exist){
					window.alert("Can't find disk to add!");
					return;
				}
				diskObj=disk.diskObj;
				if(diskObj){
					jaxApp.naviBox.addDisk(diskObj,diskName);
				}
			});
		};
		
		//--------------------------------------------------------------------
		//下载一个disk为Zip文件:
		jaxApp.DoDownloadDisk=function(diskObj){
			let naviBox,disk,node,item,ccDisk;
			naviBox=jaxApp.naviBox;
			node=naviBox.hotNode;
			item=node.nodeObj;
			if(!item instanceof CCDisk){
				return;
			}
			if(!window.confirm("Zip and download this disk?")){
				return;
			}
			jaxApp.showWait("Packaging zip...");
			ccDisk=item;
			ccDisk.makeZip("").then(data=>{
				let blob, url;
				let e, fileName, pos;
				if (data) {
					fileName =ccDisk.name+".zip";
					blob = new Blob([data], {type: "application/octet-stream"});
					url = URL.createObjectURL(blob);
					jaxEnv.webFileDownload.download = fileName;
					jaxEnv.webFileDownload.href = url;

					jaxApp.closeWait();
					//生成一个鼠标点击消息
					e = document.createEvent('MouseEvents');
					e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
					jaxEnv.webFileDownload.dispatchEvent(e);
					setTimeout(() => {
						URL.revokeObjectURL(url)
					}, 10000);
				}
			});
		};

		//--------------------------------------------------------------------
		//在NaviBox里删除一个项目:
		jaxApp.DoNaviDel=async function(item,hud,node){
			if(item instanceof CCDisk){
				let diskType=await JAXDisk.getDiskAttr(item.name,"diskType");
				if(diskType==="System"){
					window.alert("System disk can't be removed.");
					return;
				}
				if(diskType==="Package"){
					window.alert("Package disk can't be removed. Use pkg uninstall command to remove installed packages.");
					return;
				}
				if(window.confirm("Are you sure to delete this disk?")){
					JAXDisk.dropDisk(item.name).then(()=>{
						jaxApp.naviBox.itemRemoved(item,hud,node);
					});
				}
			}else if(item instanceof CCFolder){
				if(window.confirm("Are you sure to delete this folder?")){
					let disk;
					disk=item.disk;
					if(disk && disk.diskObj){
						disk.diskObj.del(item.path).then(() => {
							jaxApp.naviBox.itemRemoved(item,hud,node);
						});
					}
				}
			}
		};
		
		//--------------------------------------------------------------------
		//Paste an item in navi
		jaxApp.DoNaviPaste=function(){
			//TODO: Code this:
		};

		//--------------------------------------------------------------------
		//在ListBox里添加一个目录:
		jaxApp.DoListAddFolder=function(){
			let box,name,node,item,ccDisk,disk,basePath,path,checker;
			//TODO: Code this:
			node=jaxApp.naviBox.hotNode;
			if(!node){
				return;
			}
			item=node.nodeObj;
			if(item instanceof CCDisk){
				ccDisk=item;
				basePath="";
			}else{
				ccDisk=item.disk;
				basePath=item.path;
			}
			disk=ccDisk.diskObj;
			name=window.prompt("New folder name:","NewFolder");
			if(name){
				checker=/^[ .A-Za-z0-9_-]{1,1024}$/;
				if(!checker.test(name)){
					window.alert("Wrong name: name should be 1~1024 chars, only allow 'A'~'Z', 'a'~'z', '0'~'9', '-', '_', '.', or space");
					return;
				}
				if(name==="." || name===".."){
					window.alert("'.' and '..' can't be used as filename");
					return;
				}
				if(basePath){
					path = basePath.endsWith("/") ? (basePath + name) : (basePath + "/" + name);
				}else{
					path=name;
				}
				if (ccDisk){
					ccDisk.addNewFolder(path,name).then((folderObj)=>{
						jaxApp.naviBox.addNewFolder(folderObj);
					},(error)=>{
						window.alert(error);
					});
				}
			}
		};

		//--------------------------------------------------------------------
		//在ListBox里添加一个文件，如果是单个Zip文件，询问是否展开:
		jaxApp.DoListAddFile=function(files){
			let i,n,file,list,node,item,ccDisk,basePath,path;
			let pathes;
			node=jaxApp.naviBox.hotNode;
			if(!node){
				return;
			}
			item=node.nodeObj;
			if(item instanceof CCDisk){
				ccDisk=item;
				basePath="";
			}else{
				ccDisk=item.disk;
				basePath=item.path;
			}
			basePath=basePath?(basePath+"/"):"";
			
			n=files.length;
			//看一下是不是单个Zip文件
			if(n===1 && files[0].name.toLowerCase().endsWith(".zip")){
				if(window.confirm("Extract zip file here?")){
					//展开Zip文件:
					jaxApp.showWait("Unpackaging zip...");
					ccDisk.extractZip(basePath,files[0],0).then(()=>{
						jaxApp.listBox.refreshDiff();	
						jaxApp.refreshNaviByListEntry();
						jaxApp.closeWait();
					})
					return;
				}
			}
			
			//查看是不是有重复文件:
			pathes=[];
			for(i=0;i<n;i++){
				pathes.push(basePath+files[i].name);
			}
			return ccDisk.checkFilesExist(pathes).then(list=>{
				let info;
				if(list.length>0){
					info=list.length>1?(""+list[0]+" and more files already exist, overwrite?"):(""+list[0]+" already exists, overwrite?");
					if(window.confirm(info)){
						return doAddFiles(1);
					}else{
						if(window.confirm("Upload none-exist file(s)?")){
							return doAddFiles(0);
						}
					}
				}else{
					return doAddFiles(1);
				}
			});
			
			//在这里真正上传文件:
			function doAddFiles(overwrite){
				let pList=[],fList=[],i,n;
				n=files.length;
				for(i=0;i<n;i++){
					fList.push(files[i].name);
					pList.push(ccDisk.uploadOneFile(basePath+files[i].name,files[i],overwrite));
				}
				return Promise.all(pList).then(()=>{
					//添加新项目:
					jaxApp.listBox.addNewFiles(fList);
					
				});
			}
		};

		//--------------------------------------------------------------------
		//在list里下载:
		jaxApp.DoListDownload=function(){
			let node,item,listBox,ccDisk,disk;
			listBox=jaxApp.listBox;
			ccDisk=listBox.getEntryDisk();
			disk=ccDisk.diskObj;
			if(listBox.selected.size>1){
				let nodes,items;
				//Zip download
				if(!window.confirm("Zip and download selected items?")){
					return;
				}
				jaxApp.showWait("Packaging zip...",10);
				nodes=Array.from(listBox.selected);
				items=nodes.map((node)=>{
					let item=node.nodeObj;
					return {
						name:item.name,
						dir:item.isFolder?true:false
					}
				});
				item=listBox.getEntryItem();
				ccDisk.makeZip(item.path,items).then(data=>{
					let blob, url;
					let e, fileName, pos;
					if (data) {
						fileName =item.name+".zip";
						blob = new Blob([data], {type: "application/octet-stream"});
						url = URL.createObjectURL(blob);
						jaxEnv.webFileDownload.download = fileName;
						jaxEnv.webFileDownload.href = url;

						jaxApp.closeWait();
						//生成一个鼠标点击消息
						e = document.createEvent('MouseEvents');
						e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
						jaxEnv.webFileDownload.dispatchEvent(e);
						setTimeout(() => {
							URL.revokeObjectURL(url)
						}, 10000);
					}
				});
			}else{
				node=listBox.hotNode;
				if(!node){
					return;
				}
				item=node.nodeObj;
				if(item instanceof CCFolder){
					//Zip download
					if(!window.confirm("Zip and download this folder?")){
						return;
					}
					jaxApp.showWait("Packaging zip...",10);
					ccDisk.makeZip(item.path).then(data=>{
						let blob, url;
						let e, fileName, pos;
						if (data) {
							fileName =item.name+".zip";
							blob = new Blob([data], {type: "application/octet-stream"});
							url = URL.createObjectURL(blob);
							jaxEnv.webFileDownload.download = fileName;
							jaxEnv.webFileDownload.href = url;

							jaxApp.closeWait();
							//生成一个鼠标点击消息
							e = document.createEvent('MouseEvents');
							e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
							jaxEnv.webFileDownload.dispatchEvent(e);

							setTimeout(() => {
								URL.revokeObjectURL(url)
							}, 10000);
						}
					});
				}else{
					let path;
					path=item.path;
					disk.loadFile(path).then((data)=>{
						let blob, url;
						let e, fileName, pos;
						if (data) {
							pos = path.lastIndexOf("/");
							fileName =item.name;
							blob = new Blob([data], {type: "application/octet-stream"});
							url = URL.createObjectURL(blob);
							jaxEnv.webFileDownload.download = fileName;
							jaxEnv.webFileDownload.href = url;

							//生成一个鼠标点击消息
							e = document.createEvent('MouseEvents');
							e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
							jaxEnv.webFileDownload.dispatchEvent(e);

							setTimeout(() => {
								URL.revokeObjectURL(url)
							}, 10000);
						}
					});
				}
			}
		};

		//--------------------------------------------------------------------
		//在ListBox里改名:
		jaxApp.DoListRename=function(){
			let node,item,orgName,newName,disk,orgPath,dirPath,newPath;
			node=jaxApp.listBox.hotNode;
			item=node.nodeObj;
			orgName=item.name;
			newName=window.prompt("Rename",orgName);
			if(!newName || orgName===newName){
				return;
			}
			orgPath=item.path;
			dirPath=JAXEnv.getPathDir(orgPath);
			newPath=JAXEnv.genFilePath(dirPath,newName);
			disk=jaxApp.listBox.getEntryDisk();
			//diskName=disk.name;
			disk=disk.diskObj;
			jaxApp.showWait("Rename items...");
			disk.rename(orgPath,newPath).then(()=>{
				let naviBox,naviNode;
				node.setName(newName);
				//改ListBox里的名字
				if(item instanceof CCFolder){
					naviBox=jaxApp.naviBox;
					naviNode=naviBox.findNodeByDiskPath(item.diskPath);
					if(naviNode){
						naviNode.setName(newName);
					}
				}
				//更改item里的信息:
				item.rename(newName);
				jaxApp.closeWait();
				/*item.name=newName;
				item.path=newPath;
				item.diskPath=diskName+":"+newPath;*/
			});
		};
		
		//--------------------------------------------------------------------
		//在ListBox打开一个项目:
		jaxApp.DoListOpenItem=function(item,hud,node){
			if(item instanceof CCFolder){
				jaxApp.naviBox.showItemByDiskPath(item.diskPath,1).then(node=>{
					if(node){
						//TODO: Code this:
					}
				});
			}else if(item instanceof CCFile){
				//Open file:
				switch(item.nameExt){
					case ".js":
					case ".json":
					case ".mjs":
					case ".jsh":
					case ".conflict":
						window.open(document.location.origin+"/@ccedit?disk="+encodeURIComponent(item.disk.name)+"&file="+encodeURIComponent(item.path),"CCEdit_"+item.disk.name);
						break;
					case ".md":{
						window.open(document.location.origin+"/@markdownit/mdview.html?file="+encodeURIComponent(`/${item.disk.name}/${item.path}`),"MDView_"+`/${item.disk.name}/${item.path}`);
						break;
					}
					case ".svg":
					case ".html":
					default:						
						window.open(document.location.origin+"//"+item.disk.name+"/"+item.path);
						break;
				}
			}
		};
		
		//--------------------------------------------------------------------
		//在ListBox里删除一个项目:
		jaxApp.DoListDel=function(){
			let info,naviBox,listBox,files,basePath,disk;
			listBox=jaxApp.listBox;
			naviBox=jaxApp.naviBox;
			disk=listBox.getEntryDisk();
			files=listBox.getSelectedItemPath(1);
			info=files.length>1?"Delete selected items?":"Delete selected item?";
			if(disk && window.confirm(info)){
				disk.delItems(files).then(()=>{
					listBox.refresh();
					jaxApp.refreshNaviByListEntry();
				});
			}
		};
	}
	
	//************************************************************************
	//Copy, paste, drag and drop files:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//Copy an item in navi
		jaxApp.DoNaviCopy=function(item,hud,node){
			if(item.type==="disk"){
				window.alert("Can't make a disk entry as copy source.");
			}else if(item.type==="dir"){
				let disk,dir,baseName;
				dir=pathLib.dirname(item.path);
				if(dir==="."){
					dir="";
				}
				baseName=pathLib.basename(item.path);
				jaxApp.clipbordFiles={
					disk:item.disk.name,
					path:dir,
					files:[baseName],
				};
				let theClipboard = navigator.clipboard;
				theClipboard.writeText(`{"$CCDiskitCopy":${JSON.stringify(jaxApp.clipbordFiles)}}`);
				
			}
		};

		//--------------------------------------------------------------------
		//copy当前ListBox选中的项目
		jaxApp.DoListCopy=async function(){
			let list,listBox;
			listBox=jaxApp.listBox;
			list=listBox.getSelectedItemName();
			if(list.length){
				jaxApp.clipbordFiles={
					disk:listBox.getEntryDisk().name,
					path:listBox.getEntryPath(),
					files:list,
				};
				let theClipboard = navigator.clipboard;
				theClipboard.writeText(`{"$CCDiskitCopy":${JSON.stringify(jaxApp.clipbordFiles)}}`);
				{
					/*let file,data,disk,path,item;;
					disk=listBox.getEntryDisk().diskObj;
					path=listBox.getEntryPath();
					for(let i=0,n=list.length;i<n;i++){
						data=await disk.loadFile(pathLib.join(path,list[i]));
						if(data){
							file=new File([data],list[i],{type:"text/plain"});
							item=new ClipboardItem({"text/plain":file});
							theClipboard.write([item]);
						}
					}*/
				}
			}
		};

		//--------------------------------------------------------------------
		//paste剪贴板里的项目到list当前的entry里
		jaxApp.DoListPaste=async function(){
			let copyMeta,listBox,orgDisk,orgPath,tgtDisk,list,tgtPath,overwrite,filesCopied;
			listBox=jaxApp.listBox;
			copyMeta=jaxApp.clipbordFiles;
			if(!copyMeta){
				return;
			}
			if(!listBox.getEntryItem()){
				return;
			}
			jaxApp.showWait("Paste items...");
			copyMeta=jaxApp.clipbordFiles;
			//orgDisk=copyMeta.disk.diskObj;
			orgDisk=copyMeta.disk;
			orgDisk=await CCDisk.getDisk(orgDisk);
			if(!orgDisk){
				return;
			}
			orgDisk=orgDisk.diskObj;
			orgPath=copyMeta.path;
			tgtDisk=listBox.getEntryDisk();
			if(!tgtDisk){
				return;
			}
			tgtDisk=tgtDisk.diskObj;
			tgtPath=listBox.getEntryPath();
			list=copyMeta.files.slice(0);
			if(orgDisk.name===tgtDisk.name && tgtPath===orgPath){
				let curFiles,fileSet,i,n,name,orgName,idx;
				let nameBody,nameExt;
				curFiles=await tgtDisk.getEntries(tgtPath);
				fileSet={};
				n=curFiles.length;
				for(i=0;i<n;i++){
					fileSet[curFiles[i].name]=1;
				}
				n=list.length;
				for(i=0;i<n;i++){
					orgName=name=list[i];
					nameExt=pathLib.extname(name);
					nameBody=pathLib.basename(name,nameExt);
					idx=0;
					while(name in fileSet){
						name=nameBody+" copy"+(idx?idx:"")+nameExt;
						idx++;
					}
					fileSet[name]=1;
					list[i]={
						org:orgPath?orgPath+"/"+orgName:orgName,
						tgt:tgtPath?tgtPath+"/"+name:name,
					};
				}
			}else{
				let curFiles,fileSet,i,n,name;//aa
				curFiles=await tgtDisk.getEntries(tgtPath);
				fileSet={};
				n=curFiles.length;
				for(i=0;i<n;i++){
					fileSet[curFiles[i].name]=1;
				}
				overwrite=1;
				n=list.length;
				for(i=0;i<n;i++){
					name=list[i];
					if(name in fileSet){
						if(!window.confirm("Over write "+name+" and other exist files?")){
							if(!window.confirm("Continue paste files?")){
								jaxApp.closeWait();
								return;
							}
							overwrite=0;
						}
						break;
					}
				}
				list=list.map((item)=>{
					return {
						org:orgPath?orgPath+"/"+item:item,
						tgt:tgtPath?tgtPath+"/"+item:item,
					};
				});
			}
			filesCopied=[];
			list=list.map((item)=>{
				return tgtDisk.copyFile(item.org,item.tgt,overwrite,orgDisk).then(files=>{
					files.forEach(item=>{filesCopied.push(item)});
				});
			});
			return Promise.allSettled(list).then(()=>{
				filesCopied=filesCopied.map(item=>{
					return JAXEnv.divFilePath(item,tgtPath);
				}).filter(item=>{
					return !(item.indexOf("/")>0);
				});
				jaxApp.listBox.addNewFiles(filesCopied);
				jaxApp.refreshNaviByListEntry();
				jaxApp.closeWait();
			});
		};
		
		//--------------------------------------------------------------------
		//Copy droped files:
		jaxApp.DoCopyDataTransferFiles=async function(dt){
			let path,item,oldItem,file,dirName,filesCopied;
			let listBox=jaxApp.listBox;
			let tgtPath=listBox.getEntryPath();
			let overWriteAll=false;
			let ignoreAll=false;
			let askOneByOne=false;
			let disk=listBox.getEntryDisk();
			
			if(!disk){
				return;
			}
			disk=disk.diskObj;
			
			function getItemFile(item){
				return new Promise((OnDone,OnError)=>{
					item.file(OnDone);
				});
			};
			
			if(dt){
				let files2Copy=[];
				let dirs2Make=[];
				let files=await getDataTransferFiles(dt.items);

				jaxApp.showWait("Copying files...");
				//First check overwrites:
				for(let i=0,n=files.length;i<n;i++){
					item=files[i];
					if(item.isFile){
						path=pathLib.join(tgtPath,item.fullPath.substring(1));
						oldItem=await disk.getEntry(path);
						if(!oldItem){
							files2Copy.push(item);
						}else{
							if(oldItem.dir){
								//Can't overwrite a dir with file:
								window.alert(`Abort: can't overwrite folder "${path} with a file, no files copied."`);
								return;
							}
							if(overWriteAll){
								files2Copy.push(item);
							}else if(ignoreAll){
								//Pass this file:
							}else if(askOneByOne){
								if(window.confirm(`${path} file existed, overwrite it?`)){
									files2Copy.push(item);
								}
							}else{
								if(window.confirm(`${path} file existed, overwrite it and all other files?`)){
									files2Copy.push(item);
									overWriteAll=true;
								}else if(window.confirm(`Do you want to ignore all existed files?`)){
									ignoreAll=true;
								}else if(window.confirm(`Continue to copy and ask overwrite file one by one?`)){
									askOneByOne=true;
								}else{
									jaxApp.closeWait();
									return;
								}
							}
						}
					}else if(item.isDirectory){
						path=pathLib.join(tgtPath,item.fullPath.substring(1));
						oldItem=await disk.getEntry(path);
						if(!oldItem){
							dirs2Make.push(path);
						}else{
							if(!oldItem.dir){
								window.alert(`Abort: can't overwrite file "${path} with a folder, no files copied."`);
								return;
							}
						}
					}
				}
				filesCopied=[];
				//2) Make dirs:
				for(let i=0,n=dirs2Make.length;i<n;i++){
					path=dirs2Make[i];
					await disk.newDir(path);
					dirName=pathLib.dirname(path);
					dirName=dirName==="."?"":dirName;
					if(dirName===tgtPath){
						filesCopied.push(path);
					}
				}
				//3) Copy files:
				for(let i=0,n=files2Copy.length;i<n;i++){
					item=files2Copy[i];
					file=await getItemFile(item);
					if(!file){
						continue;
					}
					path=pathLib.join(tgtPath,item.fullPath.substring(1));
					await disk.saveFile(path,file);
					dirName=pathLib.dirname(path);
					dirName=dirName==="."?"":dirName;
					if(dirName===tgtPath){
						filesCopied.push(path);
					}
				}
				//4) Update view:
				jaxApp.listBox.addNewFiles(filesCopied);
				jaxApp.refreshNaviByListEntry();
				jaxApp.closeWait();
			}
		};
	}
	
	//************************************************************************
	//Cloud相关的:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//Show cloud dialog:
		jaxApp.showCloudDlg=function(){
			//TODO: Code this:
			jaxApp.showDlg(dlgLogin,{});
		};
		
		//--------------------------------------------------------------------
		//CheckIn一个Disk:
		jaxApp.DoCheckInDisk=function(disk){
			jaxApp.showDlg(DlgCloud,{mode:"CheckIn",disk:disk});
		};

		//--------------------------------------------------------------------
		//CheckOut一个Disk:
		jaxApp.DoCheckOutDisk=function(){
			jaxApp.showDlg(DlgCloud,{mode:"CheckOut"});
		};

		//--------------------------------------------------------------------
		//Commit一个Disk:
		jaxApp.DoCommitDisk=function(disk){
			jaxApp.showDlg(DlgCloud,{mode:"Commit",disk:disk});
		};

		//--------------------------------------------------------------------
		//Update一个Disk:
		jaxApp.DoUpdateDisk=function(disk){
			jaxApp.showDlg(DlgCloud,{mode:"Update",disk:disk});
		};
	}
	
	//************************************************************************
	//APP浏览相关的:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//设置焦点
		jaxApp.setFocusBox=function(box){
			let item;
			if(box===hotBox){
				return;
			}
			if(hotBox){
				hotBox.OnAppBlur();
			}
			hotBox=box;
			if(hotBox){
				item=hotBox.OnAppFocus();
				jaxApp.toolBox.showItemTool(item);
			}
			//TODO: Code this:
		};
		
		//--------------------------------------------------------------------
		//在NaviBox里选中了某个项目:
		jaxApp.naviToItem=function(item,hud,node){
			if(jaxApp.naviBox.hotNode!==node){
				jaxApp.naviBox.setHotNode(node);
			}
			//Set app-hot-box
			jaxApp.setFocusBox(jaxApp.naviBox);
		};
		
		//--------------------------------------------------------------------
		//在list里列出某个目录:
		jaxApp.listEntry=function(item){
			jaxApp.listBox.showList(item);
		};

		//--------------------------------------------------------------------
		//在NaviBox里打开某个项目:
		jaxApp.openItem=function(item,hud,node){
			return item.getSubFolders().then((list)=>{
				if(list && list.length>0){
					hud.showFace("hasSub");
					node.subFolders=list;
					jaxApp.naviBox.openNode(node);
				}else{
					hud.showFace("noSub");
				}
			});
		};
		
		//--------------------------------------------------------------------
		//在ListBox里点击选中某个项目:
		jaxApp.DoSelectListItem=function(item,hud,node,addSelect){
			if(jaxApp.listBox.hotNode!==node){
				jaxApp.listBox.setHotNode(node,addSelect);
				//jaxApp.toolBox.showItemTool(item);
			}
			jaxApp.setFocusBox(jaxApp.listBox);
		};
		
		//--------------------------------------------------------------------
		//Go to current folder's upper folder:
		jaxApp.DoListGoUpFolder=async function(){
			let disk,listBox,naviBox,path,node;

			listBox=jaxApp.listBox;
			naviBox=jaxApp.naviBox;
			path=listBox.getEntryDiskPath();
			path=pathLib.dirname(path);
			node=await jaxApp.naviBox.nodeByDiskPath(path,true);
			if(node){
				jaxApp.naviBox.setHotNode(node);
				jaxApp.setFocusBox(naviBox);
			}
		};
		
		//--------------------------------------------------------------------
		//在ListBox里点击取消选择某个项目:
		jaxApp.DoDeselectListItem=function(item,hud,node){
			if(jaxApp.listBox.hotNode!==node){
				jaxApp.listBox.deselectNode(node);
			}else{
				jaxApp.listBox.deselectNode(node);
				jaxApp.listBox.setHotNode(null,1);
			}
			jaxApp.setFocusBox(jaxApp.listBox);
		};
		
		//--------------------------------------------------------------------
		//用shift在listBox里选择:
		jaxApp.DoSelectListTo=function(node,addSelect=0){
			let listBox,hotNode,toIdx,hotIdx,minIdx,maxIdx,i;
			listBox=jaxApp.listBox;
			hotNode=listBox.hotNode;
			hotIdx=listBox.indexOfNode(hotNode);
			toIdx=listBox.indexOfNode(node);
			if(toIdx>hotIdx){
				minIdx=hotIdx;
				maxIdx=toIdx;
			}else{
				minIdx=toIdx;
				maxIdx=hotIdx;
			}
			if(!addSelect){
				listBox.clearSelects();
			}
			for(i=minIdx;i<=maxIdx;i++){
				listBox.selectNode(listBox.nodes[i]);
			}
			listBox.setHotNode(node,1);
		};
		
		//--------------------------------------------------------------------
		//在listBox里选中全部项目:
		jaxApp.DoListSelectAll=function(){
			let listBox,nodes,i,n,node;
			listBox=jaxApp.listBox;
			nodes=listBox.nodes;
			n=nodes.length;
			for(i=0;i<n;i++){
				node=nodes[i];
				listBox.selectNode(node);
			}
			listBox.setHotNode(node,1);
		};
		
		//--------------------------------------------------------------------
		//设置NaviBox宽度:
		jaxApp.setNaviBoxW=function(w){
			jaxApp.mainUI.setNaviBoxW(w);
			return w;
		};

		//--------------------------------------------------------------------
		//设置ToolBox宽度:
		jaxApp.setToolBoxW=function(w){
			jaxApp.mainUI.setNaviBoxW(w);
			return w;
		};

		//--------------------------------------------------------------------
		//刷新ListBox的entryItem对应的naviNode:
		jaxApp.refreshNaviByListEntry=function(){
			let node,entryItem;
			entryItem=jaxApp.listBox.getEntryItem();
			node=jaxApp.naviBox.findNodeByDiskPath(entryItem.diskPath);
			if(node && node.isOpen){
				jaxApp.naviBox.closeNode(node);
				jaxApp.openItem(node.nodeObj,node.hud,node);
			}
		};
		
	}

	//************************************************************************
	//对话框相关的:
	//************************************************************************
	{
		let waitTimer=null;
		let waitDlg=null;
		//--------------------------------------------------------------------
		//显示对话框
		jaxApp.showDlg=function(dlgFunc,vo,shared=1){
			var dlgHud,dlgCSS,curDlg;

			//显示对话框蒙板:
			if(!isShowDlg) {
				this.DlgLayer.attachLayer();
				isShowDlg = 1;
			}
			//如果当前有对话框，让当前的对话框失去输入响应，新创建的对话框在旧对话框之上:
			curDlg=dlgList.length>0?dlgList[dlgList.length-1]:null;
			if(curDlg){
				curDlg.uiEvent=-1;
			}

			//如果对话框是共享实例的，使用已有的共享实例，如果共享实例不存在，则创建共享实例
			if(shared){
				dlgHud=dlgFunc.sharedDlg;
				if(!dlgHud) {
					dlgCSS = dlgFunc(jaxApp);
					dlgHud = this.DlgBGBox.appendNewChild(dlgCSS);
					if (shared) {
						dlgFunc.sharedDlg = dlgHud;
						dlgHud.hold();
					}
				}else{
					this.DlgBGBox.appendChild(dlgHud);
				}
			}else{
				dlgCSS = dlgFunc(jaxEnv);
				dlgHud = this.DlgBGBox.appendNewChild(dlgCSS);
				if (shared) {
					dlgFunc.sharedDlg = dlgHud;
				}
			}
			dlgHud.uiEvent=1;
			dlgHud.showDlg&&dlgHud.showDlg(vo);
			dlgList.push(dlgHud);
			return dlgHud;
		};

		//--------------------------------------------------------------------
		//关闭对话框:
		jaxApp.closeDlg=function(dlg){
			var idx,preDlg;
			idx=dlgList.indexOf(dlg);
			if(idx<0){
				//这个对话框没有被显示
				return;
			}
			dlg.closeDlg&&dlg.closeDlg();
			this.DlgBGBox.removeChild(dlg);
			if(idx===dlgList.length-1){
				//这个是最后一个
				preDlg=dlgList[idx-1];
				if(preDlg){
					preDlg.uiEvent=1;
				}
			}
			dlgList.splice(idx,1);
			//如果没有在展示的对话框了，关闭对话框层:
			if(dlgList.length===0){
				this.DlgLayer.detachLayer();
				isShowDlg=0;
			}
		};
		
		//--------------------------------------------------------------------
		//Get active dialog:
		jaxApp.getDlg=function(){
			let curDlg=dlgList.length>0?dlgList[dlgList.length-1]:null;
			return curDlg;
		};
		
		//--------------------------------------------------------------------
		//Show wait info:
		jaxApp.showWait=function(info,holdTime){
			if(waitDlg){
				return;
			}
			if(waitTimer){
				window.clearTimeout(waitTimer);
			}
			waitTimer=window.setTimeout(()=>{
				waitTimer=null;
				waitDlg=jaxApp.showDlg(DlgWait,{info:info});
			},holdTime||500);
		};
		
		//--------------------------------------------------------------------
		//Close wait:
		jaxApp.closeWait=function(){
			if(waitDlg){
				jaxApp.closeDlg(waitDlg);
				waitDlg=null;
			}
			if(waitTimer){
				window.clearTimeout(waitTimer);
				waitTimer=null;
			}
		};
		
		//--------------------------------------------------------------------
		//Check if dialog is waiting something:
		jaxApp.isWaiting=()=>{
			if(waitDlg || waitTimer){
				return true;
			}
			return false;
		}
	}

	//************************************************************************
	//Tip相关的:
	//************************************************************************
	{
		let isTipShowing,tgtTipHud,tipTimer;
		let tipHud=null;
		const TIP_TIME=500;
		
		var cssTipBox;

		cssTipBox=function(jaxEnv,x,y,id,text)
		{
			var cssText,txtName;
			var tipAlignH=1,tipAlignV=0;
			cssText={
				type:"text",id:"txtName",x:0,y:0,w:"FW",h:"FH",autoLayout:1,
				text:text,fontSize:12,color:[255,255,255],bold:0,
				alignH:1,alignV:1
			};
			return {
				type:"box",id:id,x:x,y:y,w:200,h:20,display:0,anchorH:0,anchorV:0,
				color:[0,0,0,1],coner:3,shadow:1,
				items:[cssText],
				faces:{},
				OnCreate:function(){
					txtName=this.txtName;
				},
				show:function(x,y,text,alignH=1,alignV=0){
					tipAlignH=alignH;
					tipAlignV=alignV;
					this.x=x;
					this.y=y;
					this.text=text;
					this.display=1;
					this.animate({
						type:"html",
						keyframes:[
							{opacity:0},
							{opacity:1},
						],
						duration:200,
					});
				},
				hide:function(){
					this.display=0;
				},
				get "%text"(){return text;},
				set "%text"(newText){
					var w,h;
					text=newText;
					if(txtName) {
						txtName.text = text;
						w=txtName.textW;
						txtName.w=w+12;
						w=this.w=w+12;
						h=this.h;
						switch(tipAlignH){
							case 0:
								break;
							case 1:
								this.x-=w/2;
								break;
							case 2:
								this.x-=w;
								break;
						}
						switch(tipAlignV){
							case 0:
								break;
							case 1:
								this.y-=h/2;
								break;
							case 2:
								this.y-=h;
								break;
						}
						x=this.x;y=this.y;
						if(x<10){
							x=this.x=10;
						}
						if(x+w*0.5+10>=jaxEnv.jaxDiv.offsetWidth){
							x=this.x=jaxEnv.jaxDiv.offsetWidth-10-w*0.5;
						}
						if(y<10){
							y=this.y=10;
						}
						if(y+h+10>=jaxEnv.jaxDiv.offsetHeight){
							y=this.y=jaxEnv.jaxDiv.offsetHeight-10-h;
						}
					}
				}
			};
		};
		
		//--------------------------------------------------------------------
		//准备显示Tip
		jaxApp.showTip=function(hud,tip,x,y,ah,av){
			if(hud===tgtTipHud){
				return;
			}
			if(isTipShowing){
				this.hideTip();
			}
			if(tipTimer){
				window.clearTimeout(tipTimer);
			}
			tgtTipHud=hud;
			if(!hud)
				return;
			tipTimer=window.setTimeout(()=>{
				//Show tip:
				tipTimer=null;
				if(x===undefined){
					let w,h;
					w=hud.w;h=hud.h;
					x=w/2;y=h+5;
				}

				[x,y]=hud.findRelatedPos(x,y);
				if(!tipHud){
					tipHud=jaxApp.TipBox;
				}
				tipHud.show(x,y,tip,ah,av);
				isTipShowing=1;
			},TIP_TIME);
		};

		//--------------------------------------------------------------------
		//取消准备显示的Tip
		jaxApp.abortTip=function(hud){
			if(hud!==tgtTipHud){
				return;
			}
			if(tipTimer){
				window.clearTimeout(tipTimer);
				tipTimer=null;
			}
			tgtTipHud=null;
			if(isTipShowing){
				this.hideTip();
			}
		};

		//--------------------------------------------------------------------
		//隐藏当前Tip
		jaxApp.hideTip=function(){
			if(isTipShowing){
				tipHud.display=0;
				isTipShowing=0;
			}
		};
	}

	//************************************************************************
	//快捷键相关的:
	//************************************************************************
	{
		//-------------------------------------------------------------------*
		//按键/快捷键处理，
		jaxApp.OnKeyDown=function(e){
			var key,list,item,i,n,hotView;

			hotView=hotBox;

			function checkShortcut(item){
				if(item.altKey!==e.altKey){
					return 0;
				}
				if(item.ctrlKey!==e.ctrlKey){
					return 0;
				}
				if(item.metaKey!==e.metaKey){
					return 0;
				}
				if(item.shiftKey!==e.shiftKey){
					return 0;
				}
				return 1;
			}
			if(isShowDlg){
				return 0;
			}
			key=e.code;
			list=appCfg.shortCuts[key];
			if(list) {
				if (Array.isArray(list)) {
					n = list.length;
					for (i = 0; i < n; i++) {
						item = list[i];
						if (checkShortcut(item)) {
							console.log("Short cut: " + item.action);
							//处理快捷键:
							if(hotView && hotView.handleShortcut){
								if(hotView.handleShortcut(item.action)){
									return 1;
								}
							}
							//TODO: Handle app shortcut here:
							return 0;
						}
					}
				} else {
					item = list;
					if (checkShortcut(item)) {
						console.log("Short cut: " + item.action);
						if(hotView && hotView.handleShortcut){
							if(hotView.handleShortcut(item.action)){
								return 1;
							}
						}
						//TODO: Handle app shortcut here:
						return 0;
					}
				}
			}
			return 0;
		};
	}
/*}#AppEnv-Mid*/
/*#{AppEnv-Post*/
	appDef={
		layers: [
			{
				appState:appState,
				id: "UILayer", x: 0, y: 0, ofW: "FW", ofH: "FH",
				items: [
					{
						type:"dock",id:"appDock",x:0,y:0,w:"FW",h:"FH",autoLayout:1,
						ui:entryUI(jaxApp)
					},					
				]
			},
			{
				id:"DlgLayer",x:0,y:0,w:"FW",h:"FH",
				items:[
					{
						type:"box",id:"DlgBGBox",x:0,y:0,w:"FW",h:"FH",color:[0,0,0,0.5],
					}
				]
			},
			{
				id:"TipLayer",x:0,y:0,w:"FW",h:"FH",uiEvent:-1,
				items:[
					cssTipBox(jaxEnv,0,0,"TipBox","Some tips")
				]
			}
		],
		UILayer:null,DlgLayer:null,TipLayer:null,TipBox:null,
		DlgBGBox:null,
		OnCreate:function(){
			this.DlgLayer.detachLayer();
			isShowDlg=0;
			jaxEnv.addOnKeyDown(this.OnKeyDown.bind(this));
		}
	};
	
	{
		let listUI=null;
		let infoUI=null;
		jaxApp.showUI=function(){
			listUI=jaxApp.appDock.showNewUI(CountersUI(jaxApp));
			listUI.hold();
		};

		jaxApp.dismissUI=function(ui){
			jaxApp.appDock.dismissUI(ui);
		};
	}
	
	jaxEnv.initApp(appDef);
/*}#AppEnv-Post*/
/*#{AppEnv-End*/
}
/*}#AppEnv-End*/

//Auto genterated by Cody
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FBOMFC1C0", "args": {"entryUI":"\"DiskitUI\"","language":"EN"}
//		}/*Doc}#*/;
//	}