function submitContactForm(){var t=[],i=$("#contact .questions .question-container");i.each(function(){var i=$(this).find(".answer"),e=i.attr("placeholder"),s=i.val();t.push({question:e,answer:s})}),$.ajax({url:"https://litebyteus.ipage.com//util/functions.php",type:"POST",data:{operation:"submitContactForm",data:JSON.stringify(t)},success:function(){}})}function disableContactForm(){$("#contact .submit").prop("disabled",!0)}function adjustTextArea(t){t.style.height="1px",t.style.height=118+t.scrollHeight+"px"}function initMap(){var t=new google.maps.Map(document.getElementById("map"),{center:{lat:-34.5883534,lng:-58.4298406},scrollwheel:!1,zoom:16});new google.maps.Marker({map:t,position:{lat:-34.5883534,lng:-58.4298406},title:"We are here!"})}$(document).ready(function(){$("#contact .submit").click(function(){disableContactForm(),submitContactForm()})}),!function(t,i,e,s){function o(i,e){var a=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var n=(this.position+"").toLowerCase().match(/\S+/g)||[];if(n.length<1&&n.push("center"),1==n.length&&n.push(n[0]),("top"==n[0]||"bottom"==n[0]||"left"==n[1]||"right"==n[1])&&(n=[n[1],n[0]]),this.positionX!=s&&(n[0]=this.positionX.toLowerCase()),this.positionY!=s&&(n[1]=this.positionY.toLowerCase()),a.positionX=n[0],a.positionY=n[1],"left"!=this.positionX&&"right"!=this.positionX&&(this.positionX=isNaN(parseInt(this.positionX))?"center":parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(this.positionY=isNaN(parseInt(this.positionY))?"center":parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo("body");var r=this.$element.find(">.parallax-slider"),h=!1;0==r.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=r.prependTo(this.$mirror),h=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){a.naturalHeight&&a.naturalWidth||(a.naturalHeight=this.naturalHeight||this.height||1,a.naturalWidth=this.naturalWidth||this.width||1),a.aspectRatio=a.naturalWidth/a.naturalHeight,o.isSetup||o.setup(),o.sliders.push(a),o.isFresh=!1,o.requestRender()}),h||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||r.length>0)&&this.$slider.trigger("load")}function a(s){return this.each(function(){var a=t(this),n="object"==typeof s&&s;this==i||this==e||a.is("body")?o.configure(n):a.data("px.parallax")?"object"==typeof s&&t.extend(a.data("px.parallax"),n):(n=t.extend({},a.data(),n),a.data("px.parallax",new o(this,n))),"string"==typeof s&&("destroy"==s?o.destroy(this):o[s]())})}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),a=i.setTimeout(function(){e(s+o)},o);return t=s+o,a}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=o.winHeight,i=o.docHeight,e=Math.min(this.boxOffsetTop,i-t),s=Math.max(this.boxOffsetTop+this.boxHeight-t,0),a=this.boxHeight+(e-s)*(1-this.speed)|0,n=(this.boxOffsetTop-e)*(1-this.speed)|0;if(a*this.aspectRatio>=this.boxWidth){this.imageWidth=a*this.aspectRatio|0,this.imageHeight=a,this.offsetBaseTop=n;var r=this.imageWidth-this.boxWidth;this.offsetLeft="left"==this.positionX?0:"right"==this.positionX?-r:isNaN(this.positionX)?-r/2|0:Math.max(this.positionX,-r)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var r=this.imageHeight-a;this.offsetBaseTop="top"==this.positionY?n:"bottom"==this.positionY?n-r:isNaN(this.positionY)?n-r/2|0:n+Math.max(this.positionY,-r)}},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,s=t+o.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-e,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var s=t(e),a=t(i),n=function(){o.winHeight=a.height(),o.winWidth=a.width(),o.docHeight=s.height(),o.docWidth=s.width()},r=function(){var t=a.scrollTop(),i=o.docHeight-o.winHeight,e=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(i,t)),o.scrollLeft=Math.max(0,Math.min(e,a.scrollLeft())),o.overScroll=Math.max(t-i,Math.min(t,0))};a.on("resize.px.parallax load.px.parallax",function(){n(),o.isFresh=!1,o.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){r(),o.requestRender()}),n(),r(),this.isReady=!0}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,i.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))},destroy:function(e){var s,a=t(e).data("px.parallax");for(a.$mirror.remove(),s=0;s<this.sliders.length;s+=1)this.sliders[s]==a&&this.sliders.splice(s,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,o.isSetup=!1)}});var n=t.fn.parallax;t.fn.parallax=a,t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=n,this},t(e).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document),$(document).ready(function(){$("body .animate").each(function(t,i){var e=$(i).find("img"),s=0;e.css("transition","opacity 100ms"),setInterval(function(){e.eq(s).css({opacity:1}),setTimeout(function(){e.eq(s-1).css({opacity:0}),s++,s>e.length-1&&(s=0)},100)},750)})});