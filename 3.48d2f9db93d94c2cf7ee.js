webpackJsonp([3],{1:function(e){e.exports=function(e){return 2048>e?e+" bytes":(e/=1024,2048>e?Math.round(e)+" KiB":(e/=1024,Math.round(e)+" MiB"))}},11:function(e,t,i){var s=i(2),a=i(8),r=(i(4),i(6).greenRed),n=document.getElementById("sigma-chunks"),o=[],u=[],l=s.stats.chunks.length,h=0;s.stats.chunks.forEach(function(e){e.size>h&&(h=e.size)}),s.stats.chunks.forEach(function(e,t){var i=r(Math.pow((e.size+1)/(h+1),.25));o.push({id:"chunk"+e.id,chunkId:e.id,size:Math.ceil(Math.sqrt(e.size+1)),type:"webpack",shortLabel:""+e.id,label:"["+e.id+"] "+e.origins.map(function(e){return e.reasons.concat(e.name).concat(e.moduleName).join(" ")}).join(", "),x:Math.cos(t/l*Math.PI*2)*l,y:Math.sin(t/l*Math.PI*2)*l,color:i})}),s.stats.chunks.forEach(function(e){e.parents.forEach(function(t){u.push({id:"edge"+e.id+"-"+t,source:"chunk"+t,target:"chunk"+e.id,arrow:"target",type:"arrow",size:e.parents.length})})});var d=new a({graph:{nodes:o,edges:u},renderer:{type:"canvas",container:n},settings:{edgeColor:"target",maxNodeSize:20,minNodeSize:4,maxEdgeSize:3,minEdgeSize:1}});d.bind("clickNode",function(e){window.location.hash="#chunk/"+e.data.node.chunkId}),d.refresh(),t.show=function(){n.style.display="block",d.refresh(),d.startForceAtlas2(),d.renderers[0].resize()},t.hide=function(){n.style.display="none",d.stopForceAtlas2()}},15:function(e,t,i){var s=i(2),a=i(11);e.exports=function(){return document.title="chunks",$(".page").html(i(38)({stats:s.stats})),a.show(),function(){a.hide()}}},38:function(module,exports,__webpack_require__){var jade=__webpack_require__(3);module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){buf.push('<table class="table table-condensed"><thead><tr><th>id</th><th>names</th><th>modules</th><th>size</th><th>parents</th><th>flags</th></tr></thead><tbody>'),function(){if("number"==typeof stats.chunks.length)for(var e=0,t=stats.chunks.length;t>e;e++){var i=stats.chunks[e];buf.push("<tr><td><a"),buf.push(attrs({href:"#chunk/"+i.id,"class":"btn btn-info"},{href:!0})),buf.push(">");var s=i.id;buf.push(escape(null==s?"":s)),buf.push("</a></td><td>"),function(){if("number"==typeof i.names.length)for(var e=0,t=i.names.length;t>e;e++){var s=i.names[e];buf.push("<code>");var a=s;buf.push(escape(null==a?"":a)),buf.push("</code>");var a=" ";buf.push(escape(null==a?"":a))}else{var t=0;for(var e in i.names){t++;var s=i.names[e];buf.push("<code>");var a=s;buf.push(escape(null==a?"":a)),buf.push("</code>");var a=" ";buf.push(escape(null==a?"":a))}}}.call(this),buf.push("</td><td>");var s=i.modules?i.modules.length:"N/A";buf.push(escape(null==s?"":s)),buf.push("</td><td>");var s=__webpack_require__(1)(i.size);if(buf.push(escape(null==s?"":s)),buf.push("</td><td>"),function(){if("number"==typeof i.parents.length)for(var e=0,t=i.parents.length;t>e;e++){var s=i.parents[e];buf.push("<a"),buf.push(attrs({href:"#chunk/"+s,"class":"btn btn-info"},{href:!0})),buf.push(">");var a=s;buf.push(escape(null==a?"":a)),buf.push("</a>");var a=" ";buf.push(escape(null==a?"":a))}else{var t=0;for(var e in i.parents){t++;var s=i.parents[e];buf.push("<a"),buf.push(attrs({href:"#chunk/"+s,"class":"btn btn-info"},{href:!0})),buf.push(">");var a=s;buf.push(escape(null==a?"":a)),buf.push("</a>");var a=" ";buf.push(escape(null==a?"":a))}}}.call(this),buf.push("</td><td>"),i.rendered){buf.push('<span class="label label-success">rendered</span>');var s=" ";buf.push(escape(null==s?"":s))}if(i.initial){buf.push('<span class="label label-info">initial</span>');var s=" ";buf.push(escape(null==s?"":s))}i.entry&&buf.push('<span class="label label-danger">entry</span>'),buf.push("</td></tr>")}else{var t=0;for(var e in stats.chunks){t++;var i=stats.chunks[e];buf.push("<tr><td><a"),buf.push(attrs({href:"#chunk/"+i.id,"class":"btn btn-info"},{href:!0})),buf.push(">");var s=i.id;buf.push(escape(null==s?"":s)),buf.push("</a></td><td>"),function(){if("number"==typeof i.names.length)for(var e=0,t=i.names.length;t>e;e++){var s=i.names[e];buf.push("<code>");var a=s;buf.push(escape(null==a?"":a)),buf.push("</code>");var a=" ";buf.push(escape(null==a?"":a))}else{var t=0;for(var e in i.names){t++;var s=i.names[e];buf.push("<code>");var a=s;buf.push(escape(null==a?"":a)),buf.push("</code>");var a=" ";buf.push(escape(null==a?"":a))}}}.call(this),buf.push("</td><td>");var s=i.modules?i.modules.length:"N/A";buf.push(escape(null==s?"":s)),buf.push("</td><td>");var s=__webpack_require__(1)(i.size);if(buf.push(escape(null==s?"":s)),buf.push("</td><td>"),function(){if("number"==typeof i.parents.length)for(var e=0,t=i.parents.length;t>e;e++){var s=i.parents[e];buf.push("<a"),buf.push(attrs({href:"#chunk/"+s,"class":"btn btn-info"},{href:!0})),buf.push(">");var a=s;buf.push(escape(null==a?"":a)),buf.push("</a>");var a=" ";buf.push(escape(null==a?"":a))}else{var t=0;for(var e in i.parents){t++;var s=i.parents[e];buf.push("<a"),buf.push(attrs({href:"#chunk/"+s,"class":"btn btn-info"},{href:!0})),buf.push(">");var a=s;buf.push(escape(null==a?"":a)),buf.push("</a>");var a=" ";buf.push(escape(null==a?"":a))}}}.call(this),buf.push("</td><td>"),i.rendered){buf.push('<span class="label label-success">rendered</span>');var s=" ";buf.push(escape(null==s?"":s))}if(i.initial){buf.push('<span class="label label-info">initial</span>');var s=" ";buf.push(escape(null==s?"":s))}i.entry&&buf.push('<span class="label label-danger">entry</span>'),buf.push("</td></tr>")}}}.call(this),buf.push("</tbody></table>")}return buf.join("")}}});