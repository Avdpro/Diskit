//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {JAXDataObj} from "/jaxweb/lib/JAXDataObj.js"
/*#{1FBS3RCE80Imports*/
import {JAXDisk} from "/jaxweb/lib/JAXDisk.js";
import {CCFolder} from "./CCFolder.js";
import {CCFile} from "./CCFile.js";
import Base64 from "../lib/base64.js";
import cokeNT from "/@cokecodes/cokeNT.js";
import {getCloudDiskInfo,checkOutDisk,getDiskChanges,commitDisk,updateDisk,checkInDisk} from "/@disk/utils.js";
/*}#1FBS3RCE80Imports*/
/*自定义数据类*/
var CCDisk;
let __Proto;

//*****************************************************
/*CCDisk: Data object class*/
//*****************************************************
{
	CCDisk=function(appData, diskObj, diskName){
		var jaxEnv,app;
		/*#{1FBS4M8GE0Pre*/
		/*}#1FBS4M8GE0Pre*/
		if(!appData){return;}
		JAXDataObj.call(this,appData.jaxEnv);
		this.appData=appData;
		
		//Data attributes:
		this.type = "disk";
		this.name = "";
		this.cloudId = "";
		this.baseVersion = 0;
		this.modified = 0;
		this.modifiedTime = 0;
		/*#{1FBS4M8GE0Post*/
		this.diskObj=diskObj;
		this.name=diskName;
		this.path="";
		this.diskPath="/"+diskName;
		this.diskTreeInfo=null;
		/*}#1FBS4M8GE0Post*/
	};
	__Proto=CCDisk.prototype={};
	
	//函数
	__Proto.getSubFolders=function(path){
		/*#{1FBTJMJG80Code*/
		let disk=this.diskObj;
		path=path?path:"";
		return disk.getEntries(path).then(list => {
			var dirList=[],item;
			if(!list){
				return [];
			}
			for(item of list){
				item.disk=disk;
				item.path=path?(path+"/"+item.name):item.name;
				item.diskPath="/"+disk.name+"/"+item.path;
				if(item.dir){
					dirList.push(new CCFolder(app.appData,this,item));
				}
			}
			dirList.sort((v1,v2)=>{
				return v1.name>v2.name?1:(v1.name<v2.name?-1:0)
			});
			return dirList;
		});
		/*}#1FBTJMJG80Code*/
	};
	
	//函数
	__Proto.getSubItems=function(path, fileSet){
		/*#{1FBS4QOIB3Code*/
		let disk=this.diskObj;
		//处理单参数fileSet:
		if(path instanceof Set){
			fileSet=path;
			path="";
		}
		path=path?path:"";
		return disk.getEntries(path).then(list => {
			var dirList=[],item;
			if(!list){
				return [];
			}
			for(item of list){
				if(fileSet && !fileSet.has(item.name)){
					continue;
				}
				item.disk=disk;
				item.path=path?(path+"/"+item.name):item.name;
				item.diskPath="/"+disk.name+"/"+item.path;
				if(item.dir){
					dirList.push(new CCFolder(app.appData,this,item));
				}else{
					dirList.push(new CCFile(app.appData,this,item));
				}
			}
			dirList.sort((v1,v2)=>{
				if(v1.isFolder && !v2.isFolder) return -1;
				if(!v1.isFolder && v2.isFolder) return 1;
				return v1.name>v2.name?1:(v1.name<v2.name?-1:0)
			});
			return dirList;
		});
		/*}#1FBS4QOIB3Code*/
	};
	
	
	/*#{1FBS4M8GE0Functions*/
	let diskMap={};
	let app=null;
	
	//------------------------------------------------------------------------
	//生成文件数据Hash的函数，buf是一个UInt8Array
	var digestBytes=async function(buf) {
		let hex;
		const hashBuffer = await crypto.subtle.digest('SHA-256', buf);       	    // hash the message
		const hashArray = Array.from(new Uint8Array(hashBuffer));                     			// convert buffer to byte array
		hex= hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
		return hex;
	};

	//------------------------------------------------------------------------
	//初始化系统
	CCDisk.init=function(app_){
		if(app){
			throw "Disk system is already inited!";
		}
		app=app_;
		return JAXDisk.init();
	};
	
	//------------------------------------------------------------------------
	//得到一个disk列表:
	CCDisk.getDiskList=function(){
		return new Promise((resolve, reject) => {
			var disks,name,list=[];
			disks=JAXDisk.getDisks();
			for(name of disks){
				list.push(name);
			}
			list.sort((a,b)=>{
				if(a[0]==="-" && b[0]!=="-"){
					return 1;
				}else if(a[0]!=="-" && b[0]==="-"){
					return -1;
				}
				if(a>b){
					return 1;
				}else if(a<b){
					return -1;
				}else{
					return 0;
				}
			});
			resolve(list);
		});
	};
	
	//------------------------------------------------------------------------
	//得到一个disk对象,不创建新的disk:
	CCDisk.pickDisk=function(name){
		return diskMap[name];
	};

	//------------------------------------------------------------------------
	//增加一个disk对象，放到map里:
	CCDisk.regDisk=function(name,disk){
		diskMap[name]=disk;
	};

	//------------------------------------------------------------------------
	//得到一个disk对象
	CCDisk.getDisk=function(name){
		let disk;
		disk=diskMap[name];
		if(disk){
			return new Promise((resolve,reject)=>{resolve(disk);});
		}
		return JAXDisk.openDisk(name,0).then(diskObj=>{
			if(diskObj) {
				disk=new CCDisk(app.appData,diskObj,name);
				diskMap[name] = disk;
			}
			return disk;
		});
	};
	
	//------------------------------------------------------------------------
	//添加一个目录
	__Proto.addNewFolder=function(path,name){
		let disk=this.diskObj;
		let self=this;
		if(!name){
			name=JAXEnv.getFileName(path);
		}
		return disk.isExist(path).then(exist=>{
			if(exist){
				throw("Path is already existed!");
			}
			return disk.newDir(path).then(obj=>{
				var time;
				time=Date.now();
				if(obj){
					obj={};
					obj.name=name;
					obj.disk=self;
					obj.path=path;
					obj.diskPath="/"+self.name+"/"+path;
					obj.createTime=time;
					obj.modifyTime=time;
					return new CCFolder(app.appData,self,obj);
				}
				throw("Add new folder error.");
			});
		});
	};
	
	//------------------------------------------------------------------------
	//检查一组文件是不是有存在,返回一个数组，包含存在的路径
	__Proto.checkFilesExist=function(pathes){
		let disk,pList,eList,i,n;
		
		function checkOne(path){
			return disk.isExist(path).then(exist=>{
				if(exist){
					eList.push(path);
				}
			});
		}
		
		disk=this.diskObj;
		pList=[];eList=[];
		n=pathes.length;
		for(i=0;i<n;i++){
			pList.push(checkOne(pathes[i]));
		}
		return Promise.all(pList).then(()=>{
			return eList
		});
	};

	//------------------------------------------------------------------------
	//添加一个文件
	__Proto.uploadOneFile=function(path,file,overwrite=1){
		let disk;
		disk=this.diskObj;
		if(overwrite){
			return this.diskObj.saveFile(path,file);
		}else{
			return disk.isExist(path).then(exist=>{
				if(!exist){
					return this.diskObj.saveFile(path,file);
				}
				return;
			});
		}
	};
	
	//------------------------------------------------------------------------
	//删除一组文件:
	__Proto.delItems=function(files){
		let pList,disk,i,n,path;
		disk=this.diskObj;
		pList=[];
		n=files.length;
		for(i=0;i<n;i++){
			path=files[i];
			pList.push(disk.del(path));
		}
		return Promise.allSettled(pList);
	};
	
	//------------------------------------------------------------------------
	//把指定目录/文件做成Zip:
	__Proto.makeZip=async function (path,items) {
		var disk,self,zipFile;

		disk=this.diskObj;
		self=this;
		async function zipDir(dirPath,zipPath,list){
			let i,n,stub;
			zipFile.folder(zipPath);
			if(!list){
				list=await disk.getEntries(dirPath);
			}
			n=list.length;
			for(i=0;i<n;i++){
				stub=list[i];
				if(stub.dir){
					await zipDir(JAXEnv.genFilePath(dirPath,stub.name),JAXEnv.genFilePath(zipPath,stub.name));
				}else{
					let fileData;
					fileData=await disk.loadFile(JAXEnv.genFilePath(dirPath,stub.name));
					if(fileData) {
						zipFile.file(JAXEnv.genFilePath(zipPath, stub.name), fileData);
					}
				}
			}
		}

		zipFile=new JSZip();
		return zipDir(path,"",items).then(()=>{
			return zipFile.generateAsync({
				type : "uint8array",
				compression: "DEFLATE",
				compressionOptions: {level: 6}				
			});
		});
	};
	
	//------------------------------------------------------------------------
	//把zip文件展开到指定目录里:
	__Proto.extractZip=async function(basePath,zipFile,dirZipName=0){
		var self,zipDir,zipDirs,zipName,disk;

		async function arrayBuffer(file){
			if(file.arrayBuffer){
				return file.arrayBuffer();
			}
			return new Promise((onDone,onError)=>{
				let reader=new FileReader();
				reader.onload=function(event) {
					let arrayBuffer = event.target.result;
					onDone(arrayBuffer);
				};
				reader.readAsArrayBuffer(file);
			})
		}

		self=this;
		disk=this.diskObj;
		zipDirs=[];
		zipName=zipFile.name;
		{
			let pos;
			pos=zipName.lastIndexOf(".");
			if(pos>0){
				zipName=zipName.substring(0,pos);
			}
		}
		if(dirZipName){
			zipDir=basePath+(basePath?"/":"")+zipName;
		}else{
			zipDir=basePath;
		}

		async function doFiles(list){
			let filePath,fileObj,i,n,path,zipObj;
			n=list.length;
			for(i=0;i<n;i++){
				path=list[i].path;
				zipObj=list[i].zipObj;
				filePath=JAXEnv.genFilePath(zipDir,path);
				await zipObj.async("uint8array").then((buf)=>{
					return disk.saveFile(filePath,buf);
				});
			}
			return true;
		}

		async function doDirs(list){
			let i,n,path;
			n=list.length;
			for(i=0;i<n;i++){
				path=list[i];
				await disk.newDir(path);
			}
			return true;
		}

		return arrayBuffer(zipFile).then(buf=>{
			return JSZip.loadAsync(buf).then(zip=>{
				let list=[];
				zip.forEach((path,zipObj)=>{
					console.log("File in zip: "+path);
					if(zipObj.dir){
						let dirPath;
						dirPath=JAXEnv.genFilePath(zipDir,path);
						zipDirs.push(dirPath);
					}else{
						let filePath,fileObj;
						list.push({path:path,zipObj:zipObj});
					}
				});
				return doFiles(list).then(()=>{
					return doDirs(zipDirs);
				});
			});
		});
	};

	//------------------------------------------------------------------------
	//得到TreeInfo:
	__Proto.getTreeInfo=async function(){
		let info;
		if(this.diskTreeInfo){
			if(this.diskTreeInfo.versionIdx>0){
				return this.diskTreeInfo;
			}
			return null;
		}
		info=await JAXDisk.getDiskInfo(this.name);
		if(!info){
			info={};
			return null;
		}
		this.diskTreeInfo=info;
		return info;
	};

	//------------------------------------------------------------------------
	//得到指定path的baseInfo:
	__Proto.getItemInfo=async function(){
		//TODO: Codet this:		
	};
	
	//------------------------------------------------------------------------
	//Create a cloud disk and init it's contents:
	__Proto.DoCheckInDisk=async function(logger,diskName,isPublic,info,version){
		if(!await cokeNT.checkLogin()){
			logger.log("Please login cokecodes.com first.\n");
			throw "Cloud not login.";
		}
		await checkInDisk(logger,this.name,diskName,isPublic,version,info);		
		logger.log("Check in disk successed.");
	};
	
	//------------------------------------------------------------------------
	//得到云盘信息:
	__Proto.DoGetCloudInfo=async function(diskId){
		let resVO;
		resVO=await this.appData.makeCall("diskInfo",{diskId:diskId});
		if(resVO.code===200){
			return resVO;
		}
		return resVO;
	};

	//------------------------------------------------------------------------
	//得到云盘信息:
	CCDisk.DoGetCloudInfo=async function(appData,diskId){
		let resVO;
		resVO=await appData.makeCall("diskInfo",{diskId:diskId});
		if(resVO.code===200){
			return resVO;
		}
		return resVO;
	};
	
	//------------------------------------------------------------------------
	//获得修改信息:
	__Proto.DoCheckDisk=async function(logger){
		let diskObj,list,i,n,path,entryInfo,fileData,hash,count;
		diskObj=this.diskObj;
		//查找改变的文件
		if(!logger){
			logger=console;
		}
		count=0;
		logger.log("Start check disk.");
		list=await diskObj.getAllItemPath();
		n=list.length;
		for(i=0;i<n;i++){
			path=list[i];
			entryInfo=await diskObj.getEntry(path);
			if(entryInfo && !entryInfo.dir){
				logger.log("Check file: "+path);
				fileData=await diskObj.loadFile(path);
				if(fileData instanceof Uint8Array){
					hash=await digestBytes(fileData);
					if(hash!==entryInfo.hash){
						logger.log("Find missmatched hash: "+path);
						count++;
						//diskObj.setEntryInfo({hash:hash,modified:true});
					}
				}
			}
		}
		logger.log("Check disk done. "+count+" problem(s) found.");
	};
	
	//------------------------------------------------------------------------
	//Get locale disk modifys:
	__Proto.DoGetModifys=async function(){
		let name=this.name;
		return await getDiskChanges(name);
	};

	//------------------------------------------------------------------------
	//Check out a cloud disk:
	CCDisk.DoCheckOutDisk=async function(appData,logger,diskId,versionIdx,diskName){
		await cokeNT.checkLogin();
		if(await checkOutDisk(logger,diskId,versionIdx,diskName)){
			let diskObj=await JAXDisk.openDisk(diskName,0);
			let treeInfo=await JAXDisk.getDiskInfo(diskName);
			let ccDisk=new CCDisk(appData,diskObj,diskName);
			diskMap[diskName]=ccDisk;
			return ccDisk;
		}else{
			throw "Check out disk error";
		}
	};
	
	//------------------------------------------------------------------------
	//Commit locale changes to server:
	__Proto.DoCommitDisk=async function(logger,diffVO,version,info,tag){
		if(!await cokeNT.checkLogin()){
			logger.log("Please login cokecodes.com first.\n");
			throw "Cloud not login.";
		}
		let versionIdx=await commitDisk(logger,this.name,diffVO,version,info);
		logger.log("Commit disk successed, new version-idx: "+versionIdx);
	};
	
	//------------------------------------------------------------------------
	//Update locale disk to cloud version:
	__Proto.DoUpdateDisk=async function(logger,recoverFiles){
		await cokeNT.checkLogin();
		let versionIdx=await updateDisk(logger,this.name,"",recoverFiles);
		logger.log("Update disk successed, current version-idx: "+versionIdx);
	};
	
	/*}#1FBS4M8GE0Functions*/
};

/*#{1FBS3RCE80ExCodes*/
/*}#1FBS3RCE80ExCodes*/
export {CCDisk};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FBS3RCE80", "def": "CdyFileDataClass", 
//			"attrs": {"fileName":"\"CCDisk\"","description":"\"\""}, 
//			"classObjs": {
//				"name": "classObjs", "type": "object", "def": "CdyDocObj", "jaxId": "1FBS3RCE81", 
//				"attrs": {
//					"CCDisk": {
//						"type": "object", "def": "CdyDataClass", "name": "CCDisk", "tip": "", "jaxId": "1FBS4M8GE0", 
//						"attrs": {}, 
//						"args": {
//							"name": "Arguments", "type": "object", "def": "ClassObjArgObj", "jaxId": "1FBS4QOIB0", 
//							"attrs": {
//								"superClass": "\"JAXDataObj\"", 
//								"diskObj": {"type":"auto","valText":"null","info":null,"tip":null}, 
//								"diskName": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}
//							}
//						}, 
//						"pptsObj": {
//							"name": "Properties", "type": "object", "def": "ClassObjPptObj", "jaxId": "1FBS4QOIB1", 
//							"attrs": {
//								"type": {
//									"type": "string", "valText": "\"disk\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"name": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"cloudId": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"baseVersion": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"modified": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"modifiedTime": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}
//							}
//						}, 
//						"funcsObj": {
//							"jaxId": "1FBS4QOIB2", 
//							"funcs": [
//								{
//									"jaxId": "1FBTJMJG80", "type": "object", "def": "CdyFunc", "name": "getSubFolders", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBTJMJG81", 
//										"attrs": {
//											"path": {
//												"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								},
//								{
//									"jaxId": "1FBS4QOIB3", "type": "object", "def": "CdyFunc", "name": "getSubItems", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBS4QOIC0", 
//										"attrs": {
//											"path": {
//												"type": "auto", "valText": "null", "initVal": "", "info": null, 
//												"tip": null
//											}, 
//											"fileSet": {
//												"type": "auto", "valText": "null", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								}
//							]
//						}, 
//						"mockObjs": {
//							"name": "Mockups", "type": "object", "def": "CdyDocObj", "jaxId": "1FBS4QOIC7", 
//							"attrs": {
//								"game": {
//									"type": "object", "def": "MockupRef1FBS4M8GE0", "jaxId": "1FBSBKU3L0", 
//									"attrs": {
//										"type": {
//											"type": "string", "valText": "\"disk\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"name": {
//											"type": "string", "valText": "\"game\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"cloudId": {
//											"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"baseVersion": {"type":"int","valText":"123","initVal":"","info":null,"tip":null}, 
//										"modified": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//										"modifiedTime": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}
//									}
//								}
//							}
//						}
//					}
//				}
//			}
//		}/*Doc}#*/;
//	}