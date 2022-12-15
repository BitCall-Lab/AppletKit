import {NativeModules,Platform} from "react-native";
var AppletKit = {
    toast:function(msg){
        NativeModules.AppletNative.toast(msg);
    },
    loading:function(canBack=true){
        NativeModules.AppletNative.loading(canBack);
    },
    dismissLoading:function(){
        NativeModules.AppletNative.dismissLoading();
    },
    route:function(url){
        NativeModules.AppletNative.route(url);
    },
    exit:function(){
        NativeModules.AppletNative.exit();
    },
    showToolbar:function(){
        NativeModules.AppletNative.showToolbar();
    },
    hiddenToolbar:function(){
        NativeModules.AppletNative.hiddenToolbar();
    },
    exit:function(){
        NativeModules.AppletNative.exit();
    },
    log:function(tag,msg){
        NativeModules.AppletNative.log(tag,msg);
    },
    storeSave:function(key,value){
        NativeModules.AppletNative.storeSave(key,value);
    },
    storeGet:function(key){
        return new Promise(function(resolve,reject) {
            try{
                if(Platform.OS==="ios"){
                    NativeModules.AppletNative.storeGet(key).then(r=>resolve(r));
                }else{
                    NativeModules.AppletNative.storeGet(key,(r)=>resolve(r))
                }
            }catch(e){
                reject(e);
            }
        }); 
    },
    alert:function(title,content,ok,cancel){
        return new Promise(function(resolve,reject) {
            try{
                if(Platform.OS==="ios"){
                    NativeModules.AppletNative.alert(title,content,ok,cancel).then(r=>resolve(r));
                }else{
                    NativeModules.AppletNative.alert(title,content,ok,cancel,(r)=>resolve(r))
                }
            }catch(e){
                reject(e);
            }
        }); 
    },
    deviceInfo:function(){
        return new Promise(function(resolve,reject) {
            try{
                if(Platform.OS==="ios"){
                    NativeModules.AppletNative.deviceInfo().then(data=>resolve(JSON.parse(data)));
                }else{
                    NativeModules.AppletNative.deviceInfo((data)=>resolve(JSON.parse(data)));
                }
            }catch(e){
                reject(e);
            }
        }); 
    },
    setStatusBarColor:function(color){
        return new Promise(function(resolve,reject) {
            try{
                if(Platform.OS==="ios"){
                    NativeModules.AppletNative.setStatusBarColor(color).then(data=>resolve(data));
                }else{
                    NativeModules.AppletNative.setStatusBgColor(color);
                }
            }catch(e){
                reject(e);
            }
        });
    },
    intent:function() {
        return new Promise(function(resolve,reject) {
            try{
                if(Platform.OS==="ios"){
                    NativeModules.AppletNative.intent().then(data=>resolve(data));
                }else{
                    NativeModules.AppletNative.intent((data)=>resolve(data));
                }
            }catch(e){
                reject(e);
            }
        }); 
    }
}

module.exports = AppletKit;