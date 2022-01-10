import {appData} from "./appData.js";
import pathLib from "/@path";
export default {
	toolBoxes:[
		{
			codeName:"Disk",
			name:"Disk",
			createUI:{file:"../ui/UIToolDisk.js",func:"UIToolDisk"},
			icon:"assets/cipan.svg",
			checkPath(path, item){
				if(item && item.type==="disk"){
					return 100;
				}
				if(path.lastIndexOf("/")===0){
					return 100;
				}
				return 0;
			}
		},
		{
			codeName:"Folder",
			name:"Folder",
			createUI:{file:"../ui/UIToolFolder.js",func:"UIToolFolder"},
			icon:"assets/mulu.svg",
			checkPath(path, item){
				if(item && item.type==="dir"){
					return 100;
				}
				return 0;
			}
		},
		{
			codeName:"File",
			name:"File",
			createUI:{file:"../ui/UIToolFile.js",func:"UIToolFile"},
			icon:"assets/wenjian.svg",
			checkPath(path, item){
				if(item && item.type==="file"){
					return 10;
				}
				return 0;
			}
		},
		{
			codeName:"Image",
			name:"Image",
			createUI:{file:"../ui/UIToolImage.js",func:"UIToolImage"},
			icon:"assets/image.svg",
			checkPath(path, item){
				if(item.type==="file" ){
					let ext=pathLib.extname(path);
					switch(ext){
						case ".png":
						case ".jpg":
						case ".jpeg":
						case ".gif":
						case ".svg":
							return 100;
					}
				}
				return 0;
			}
		},
		{
			codeName:"MarkDown",
			name:"MarkDown",
			createUI:{file:"../ui/UIToolMD.js",func:"UIToolMD"},
			icon:"assets/markdown.svg",
			checkPath(path, item){
				if(item.type==="file" ){
					let ext=pathLib.extname(path);
					switch(ext){
						case ".md":
							return 0;//TODO: Do it later
					}
				}
				return 0;
			}
		},
		{
			codeName:"Text",
			name:"Text",
			createUI:{file:"../ui/UIToolText.js",func:"UIToolText"},
			icon:"assets/markdown.svg",
			checkPath(path, item){
				if(item.type==="file" ){
					let ext=pathLib.extname(path);
					switch(ext){
						case ".js":
						case ".md":
						case ".mjs":
						case ".txt":
						case ".css":
						case ".html":
						case ".htm":
						case ".json":
							return 20;
					}
				}
				return 0;
			}
		},
		{
			codeName:"Audio",
			name:"Audio",
			createUI:{file:"../ui/UIToolAudio.js",func:"UIToolAudio"},
			icon:"assets/markdown.svg",
			checkPath(path, item){
				if(item.type==="file" ){
					let ext=pathLib.extname(path);
					switch(ext){
						case ".wav":
						case ".mp3":
						case ".aac":
							return 0;//TODO: Do it later
					}
				}
				return 0;
			}
		},
		{
			codeName:"Conflict",
			name:"Conflict",
			createUI:{file:"../ui/UIToolConflict.js",func:"UIToolConflict"},
			icon:"assets/markdown.svg",
			checkPath(path, item){
				if(item.type==="file" ){
					let ext=pathLib.extname(path);
					switch(ext){
						case ".confilct":
							return 0;//TODO: Do it later
					}
				}
				return 0;
			}
		},
	],
};