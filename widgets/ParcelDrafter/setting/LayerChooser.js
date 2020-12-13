// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/ParcelDrafter/setting/LayerChooser.html":'\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTLayerSelectorNode" data-dojo-attach-point\x3d"layerSelectorContainer"\x3e\r\n        \x3c!-- Single Layer Selector --\x3e\r\n        \x3cdiv style\x3d"width: 98%;"  data-dojo-attach-point\x3d"singleLayerChooser"\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Related Layer Selector --\x3e\r\n        \x3cdiv class\x3d"esriCTLayerSelectorDiv"  data-dojo-attach-point\x3d"relatedLayerChooser"\x3e\r\n            \x3cdiv class\x3d"esriCTLayerChooserContainer row"\x3e\r\n                \x3cdiv class\x3d"esriCTLayerChooserFieldLabel esriCTEllipsis" title\x3d"${nls.parcelPolygonLayer.selectPolygonLayerLabel}"\x3e\r\n                    ${nls.parcelPolygonLayer.selectPolygonLayerLabel}\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriCTLayerChooserField"\x3e\r\n                    \x3cdiv style\x3d"width: 98%;" data-dojo-attach-point\x3d"relatedLayerChooserDiv"\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriCTHint"\x3e\r\n                        ${nls.parcelPolygonLayer.selectPolygonLayerHintText}\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTLayerChooserContainer row"\x3e\r\n                \x3cdiv class\x3d"esriCTLayerChooserFieldLabel esriCTEllipsis" title\x3d"${nls.parcelLineLayer.selectLayerLabel}"\x3e\r\n                    ${nls.parcelLineLayer.selectLayerLabel}\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriCTLayerChooserField"\x3e\r\n                    \x3cselect style\x3d"width: 98%;" data-dojo-type\x3d"dijit/form/Select"  data-dojo-attach-point\x3d"relatedLayerSelector"\x3e\r\n                \x3c/select\x3e\r\n                    \x3cdiv class\x3d"esriCTHint"\x3e\r\n                        ${nls.parcelLineLayer.selectLayerHintText}\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/array dojo/_base/lang dojo/on dojo/text!./LayerChooser.html jimu/dijit/LayerChooserFromMap jimu/dijit/LayerChooserFromMapWithDropbox dojo/dom-class jimu/utils dojo/Deferred esri/request dojo/promise/all jimu/dijit/Message jimu/dijit/Popup dojo/dom-construct dojo/domReady!".split(" "),function(r,t,u,l,g,v,w,k,x,y,z,A,B,C,D,E,p){return r([t,u],{baseClass:"jimu-widget-ParcelDrafter-setting",templateString:w,selectedLayerDetails:[],
relatedLayerInfo:[],relatedLayerTypes:[],chooseRelatedLayers:!1,_layerChooserFromMap:null,startup:function(){this.inherited(arguments)},postCreate:function(){this.selectedLayerDetails=[];this.relatedLayerInfo=[];this.relatedLayerTypes&&0!==this.relatedLayerTypes.length||(this.relatedLayerTypes=["point","polyline","polygon"]);this._initPopup();this._initLayerSelector()},_initPopup:function(){this.okButton=p.create("button",{title:this.nls.common.ok});this.okButton.label=this.nls.common.ok;this.okButton.onClick=
g.hitch(this,function(){this.multiple&&this._getSelectedLayers();this.chooseRelatedLayers&&0<this.relatedLayerInfo.length&&this.selectedLayerDetails.push(this.relatedLayerInfo[this.relatedLayerSelector.value]);this.onOKButtonClicked(this.selectedLayerDetails);this.popup.close()});this.cancelButton=p.create("button",{title:this.nls.common.cancel});this.cancelButton.label=this.nls.common.cancel;this.cancelButton.onClick=g.hitch(this,function(a){this.onCancelClick(a);this.popup.close()});this.popup=
new E({titleLabel:this.title,content:this.domNode,width:830,autoHeight:!0,buttons:[this.okButton,this.cancelButton]});this.popup.disableButton(0)},_initLayerSelector:function(){var a={multiple:this.multiple,createMapResponse:this.map.webMapResponse,showLayerTypes:this.showLayerTypes,filter:this._createFiltersForLayerSelector()};this.multiple?this._layerChooserFromMap=new k(a):(a=new k(a),this._layerChooserFromMap=new x({layerChooser:a}));this.chooseRelatedLayers?this._layerChooserFromMap.placeAt(this.relatedLayerChooserDiv):
(y.add(this.relatedLayerChooser,"esriCTHidden"),this._layerChooserFromMap.placeAt(this.singleLayerChooser));this._layerChooserFromMap.startup();this.multiple?this._layerChooserFromMap._onTreeClick=g.hitch(this,function(){this._layerChooserFromMap.getSelectedItems().length?this.popup.enableButton(0):this.popup.disableButton(0)}):this.own(v(this._layerChooserFromMap,"selection-change",g.hitch(this,function(b){this._setSelectedLayerDetails(b)})))},_createFiltersForLayerSelector:function(){var a=k.createFeaturelayerFilter(this.types?
this.types:["point","polyline","polygon"],!1,!1);var b=k.createImageServiceLayerFilter(!0);return k.orCombineFilters([a,b])},_setSelectedLayerDetails:function(a){var b={};this.selectedLayerDetails=[];b.id=a[0].id;b.url=a[0].url;b.geometryType=a[0].geometryType;b.layerId=a[0].layerId;b.baseURL=a[0].url.substr(0,a[0].url.lastIndexOf("/")+1);a[0].relationships&&(b.relationships=a[0].relationships);this.selectedLayerDetails.push(b);this.chooseRelatedLayers?this._createRelatedLayerOptions(this.selectedLayerDetails[0]):
this.popup.enableButton(0)},_getSelectedLayers:function(){var a;this.selectedLayerDetails=[];var b=this._layerChooserFromMap.getSelectedItems();if(0<b.length)for(this.popup.enableButton(0),a=0;a<b.length;a++){var e={url:b[a].layerInfo.layerObject.url,geometryType:b[a].layerInfo.layerObject.geometryType,id:b[a].layerInfo.layerObject.id};e.layerId=b[a].layerId?b[a].layerId:e.url.substr(e.url.lastIndexOf("/")+1,e.url.length);var f=e.url.substr(0,e.url.lastIndexOf("/")+1);e.baseURL=f;this.selectedLayerDetails.push(e)}},
_getLayerDetailsFromMap:function(a,b){var e=[],f;this.map&&this.map.webMapResponse&&this.map.webMapResponse.itemInfo&&this.map.webMapResponse.itemInfo.itemData&&this.map.webMapResponse.itemInfo.itemData.operationalLayers&&l.forEach(this.map.webMapResponse.itemInfo.itemData.operationalLayers,g.hitch(this,function(d){f={};d.layerObject&&("ArcGISMapServiceLayer"===d.layerType||"ArcGISTiledMapServiceLayer"===d.layerType?a.substring(0,a.length-1)===d.url&&(l.forEach(d.resourceInfo.layers,g.hitch(this,
function(c){c.id===parseInt(b,10)&&(f.title=c.name,e.push(f))})),l.forEach(d.layers,g.hitch(this,function(c){c.id===parseInt(b,10)&&(c.name&&(f.title=c.name),f.id=d.id,e.push(f))}))):d.url.replace(/.*?:\/\//g,"").toLowerCase()===(a+b).replace(/.*?:\/\//g,"").toLowerCase()&&(f.id=d.id,f.title=d.title,e.push(f)))}));return e},_createRelatedLayerOptions:function(a){var b=[];if(a&&a.relationships&&0<a.relationships.length){this.relatedLayerInfo=[];var e=[];var f=a.baseURL;l.forEach(a.relationships,g.hitch(this,
function(d){var c=new A;e.push(c);B({url:f+d.relatedTableId,content:{f:"json"},handleAs:"json"}).then(g.hitch(this,function(h){c.resolve(h)}),g.hitch(this,function(){c.resolve()}))}));C(e).then(g.hitch(this,function(d){var c,h;for(c=0;c<d.length;c++)if(d[c]){var m=z.getTypeByGeometryType(d[c].geometryType);if(-1<this.relatedLayerTypes.indexOf(m)){m={url:f+d[c].id,baseURL:f,relationShipId:a.relationships[c].id,layerId:d[c].id,geometryType:d[c].geometryType,title:d[c].name};d[c].fields&&(m.fields=g.clone(d[c].fields));
var q=this._getLayerDetailsFromMap(f,d[c].id);for(h=0;h<q.length;h++){var n=g.clone(m);g.mixin(n,q[h]);n.title&&(this.relatedLayerInfo[b.length]=n,b.push({label:this.relatedLayerInfo[b.length].title,value:b.length}))}}}0<b.length?(this.relatedLayerSelector.options.length=0,b[0].selected=!0,this.relatedLayerSelector.addOption(b),this.popup.enableButton(0)):this._resetRelatedLayerSelector()}),g.hitch(this,function(){this._resetRelatedLayerSelector()}))}else this._resetRelatedLayerSelector()},_resetRelatedLayerSelector:function(){this.relatedLayerSelector.value=
"";this.relatedLayerSelector.options.length=0;this.relatedLayerSelector.addOption({value:"",label:"",selected:!0});this.popup.disableButton(0);this._showMessage(this.nls.layerSelector.selectedLayerNotHavingRelatedLayer)},onOKButtonClicked:function(){return this.selectedLayerDetails},onCancelClick:function(a){return a},_showMessage:function(a){(new D({message:a,buttons:[{label:this.nls.common.ok}]})).message=a}})});