(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{287:function(e,t,i){"use strict";i.r(t),i.d(t,"pageQuery",(function(){return l}));var n=i(0),r=i(315),a=i(285),o=i(27),l="3507936326";t.default=function(e){var t=e.data,i=e.pageContext,l=Object(o.c)(),s=Object(o.b)(),c=t.allMarkdownRemark.nodes,d=i.currentPage,u=1===d;return n.createElement(a.c,{navLinks:[{content:"Tags",href:"/blog/tags",title:"List of blog tags",requiresAuthentication:!1}]},u?n.createElement(a.f,{title:"Blog",urlSlug:"blog/"}):n.createElement(a.f,{title:"Page "+d+" - "+l.title,urlSlug:"blog/"}),n.createElement(a.b,null,n.createElement(r.d,null,c.map((function(e){var t=e.fields,i=e.excerpt,a=e.frontmatter;return n.createElement(r.c,{key:t.slug,slug:t.slug,excerpt:i,fluid:a.image?a.image.childImageSharp.fluid:s.childImageSharp.fluid,publishDate:a.date,title:a.title||t.slug})})))),n.createElement(r.f,{prefix:"blog",context:i}))}},304:function(e,t,i){"use strict";i(8),i(5),i(3),i(94),i(199),i(314);var n=i(21);t.__esModule=!0,t.default=void 0;var r,a=n(i(100)),o=n(i(97)),l=n(i(201)),s=n(i(129)),c=n(i(0)),d=n(i(45)),u=function(e){var t=(0,s.default)({},e),i=t.resolutions,n=t.sizes,r=t.critical;return i&&(t.fixed=i,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},m=function(e){var t=e.fluid,i=e.fixed;return(t&&t[0]||i&&i[0]).src},f=Object.create({}),h=function(e){var t=u(e),i=m(t);return f[i]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,b=p&&window.IntersectionObserver,w=new WeakMap;function y(e){return e.map((function(e){var t=e.src,i=e.srcSet,n=e.srcSetWebp,r=e.media,a=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:a}),c.default.createElement("source",{media:r,srcSet:i,sizes:a}))}))}function v(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function x(e){return e.map((function(e){var t=e.src,i=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:i,srcSet:n})}))}function E(e){return e.map((function(e){var t=e.src,i=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:i,srcSet:n})}))}function k(e,t){var i=e.srcSet,n=e.srcSetWebp,r=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:i)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var S=function(e,t){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return i&&(i.observe(e),w.set(e,t)),function(){i.unobserve(e),w.delete(e)}},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+c+o+l+i+n+t+a+r+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,i=e.imageVariants,n=e.generateSources,r=e.spreadProps,a=c.default.createElement(C,(0,s.default)({src:t},r));return i.length>1?c.default.createElement("picture",null,n(i),a):a},C=c.default.forwardRef((function(e,t){var i=e.sizes,n=e.srcSet,r=e.src,a=e.style,o=e.onLoad,d=e.onError,u=e.onClick,m=e.loading,f=e.draggable,h=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return c.default.createElement("img",(0,s.default)({sizes:i,srcSet:n,src:r},h,{onLoad:o,onError:d,onClick:u,ref:t,loading:m,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));C.propTypes={style:d.default.object,onError:d.default.func,onClick:d.default.func,onLoad:d.default.func};var N=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=p&&h(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!g&&b&&!i.isCritical&&!i.seenBefore;var n=i.isCritical||p&&(g||!i.useIOSupport);return i.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn},i.imageRef=c.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,a.default)(i)),i.handleRef=i.handleRef.bind((0,a.default)(i)),i}(0,o.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=S(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),i=m(t),f[i]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,n=e.className,r=e.style,a=void 0===r?{}:r,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,h=e.fluid,g=e.fixed,p=e.backgroundColor,b=e.durationFadeIn,w=e.Tag,v=e.itemProp,k=e.loading,S=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,s.default)({opacity:N?1:0,transition:L?"opacity "+b+"ms":"none"},l),O="boolean"==typeof p?"lightgray":p,j={transitionDelay:b+"ms"},P=(0,s.default)({opacity:this.state.imgLoaded?0:1},L&&j,{},l,{},m),R={title:t,alt:this.state.isVisible?"":i,style:P,className:f,itemProp:v};if(h){var T=h,V=T[0];return c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),O&&c.default.createElement(w,{title:t,style:(0,s.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&j)}),V.base64&&c.default.createElement(I,{src:V.base64,spreadProps:R,imageVariants:T,generateSources:E}),V.tracedSVG&&c.default.createElement(I,{src:V.tracedSVG,spreadProps:R,imageVariants:T,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,y(T),c.default.createElement(C,{alt:i,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:k,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,s.default)({alt:i,title:t,loading:k},V,{imageVariants:T}))}}))}if(g){var W=g,M=W[0],q=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},a);return"inherit"===a.display&&delete q.display,c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},O&&c.default.createElement(w,{title:t,style:(0,s.default)({backgroundColor:O,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},L&&j)}),M.base64&&c.default.createElement(I,{src:M.base64,spreadProps:R,imageVariants:W,generateSources:E}),M.tracedSVG&&c.default.createElement(I,{src:M.tracedSVG,spreadProps:R,imageVariants:W,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,y(W),c.default.createElement(C,{alt:i,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:k,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,s.default)({alt:i,title:t,loading:k},M,{imageVariants:W}))}}))}return null},t}(c.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),z=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});N.propTypes={resolutions:L,sizes:z,fixed:d.default.oneOfType([L,d.default.arrayOf(L)]),fluid:d.default.oneOfType([z,d.default.arrayOf(z)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onClick:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var O=N;t.default=O},314:function(e,t,i){"use strict";i(130)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},315:function(e,t,i){"use strict";i(30);var n=i(0),r=i(285),a=i(1),o=a.e.div.withConfig({displayName:"author-meta__Wrapper",componentId:"u1uzmp-0"})(["display:flex;flex-direction:column;align-items:center;margin-bottom:2em;svg{width:1em;font-size:24px;& path{transition:0.2s;fill:",";opacity:0.7;}@media (hover:hover){&:hover path{fill:",";opacity:1;}}}"],(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.highlight})),l=a.e.div.withConfig({displayName:"author-meta__SocialAccounts",componentId:"u1uzmp-1"})(["display:flex;"]),s=a.e.h2.withConfig({displayName:"author-meta__Name",componentId:"u1uzmp-2"})(["margin:1em 0 0.5em;"]),c=function(e){var t=e.author,i=t.avatar,a=t.name,c=t.bio,d=t.github,u=t.twitter;return n.createElement(o,null,i&&n.createElement(f,{fluid:i.childImageSharp.fluid,alt:"",title:a,alignment:"vertical"}),n.createElement(s,null,a),n.createElement("p",null,c),n.createElement(l,null,n.createElement(r.g,{link:!0,socialName:"github",href:"https://github.com/"+d,title:a+" on GitHub"}),u&&n.createElement(r.g,{link:!0,socialName:"twitter",href:"https://twitter.com/"+u,title:a+" on Twitter"})))},d=(i(8),i(5),i(3),i(12),i(9),i(304)),u=i.n(d);var m=Object(a.e)(u.a).attrs((function(){return{small:!1}})).withConfig({displayName:"avatar__Image",componentId:"vlw4r0-0"})(["min-height:4em;max-height:4em;min-width:4em;max-width:4em;border-radius:50%;margin-right:",";"],(function(e){return"horizontal"===e.alignment?"1.6em":0})),f=function(e){var t=e.alignment,i=void 0===t?"horizontal":t,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,["alignment"]);return n.createElement(m,Object.assign({alignment:i},r))},h=(i(77),a.e.section.withConfig({displayName:"hero__Wrapper",componentId:"sc-19vaa23-0"})(["position:relative;min-height:300px;"])),g=Object(a.e)(u.a).withConfig({displayName:"hero__BgImg",componentId:"sc-19vaa23-1"})(["position:absolute;top:0;left:0;width:100%;z-index:-1;min-height:300px;height:auto;@media (min-width:","){height:",";}& > img{object-fit:"," !important;object-position:"," !important;}&::before{content:'';background:rgba(0,0,0,0.25);position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;z-index:1;}"],(function(e){return e.theme.responsive.small}),(function(e){return e.height||"auto"}),(function(e){return e.fit||"cover"}),(function(e){return e.position||"50% 50%"})),p=a.e.h1.withConfig({displayName:"hero__Title",componentId:"sc-19vaa23-2"})(["font-size:3em;text-transform:capitalize;font-weight:600;position:absolute;width:100%;max-width:",";padding:0 1rem;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;color:white;margin-top:0;"],(function(e){return e.theme.sizes.width.maxCentered})),b=function(e){var t=e.height,i=e.fluid,r=e.title;return n.createElement(h,null,n.createElement(g,{height:t,fluid:i,backgroundColor:"#eeeeee",title:r,alt:""}),n.createElement(p,null,r))},w=i(31),y=i(27),v=a.e.div.withConfig({displayName:"pagination__Wrapper",componentId:"mehen9-0"})(["position:relative;display:flex;justify-content:space-between;margin:-2em auto 0;width:100%;max-width:",";padding:0 1.5em 2em;a{background:transparent;color:",";padding:1em 0.8em;border-color:",";border-radius:2px;text-decoration:none;transition:0.2s;@media (hover:hover){&:hover{background:",";color:white;}}}"],(function(e){return e.theme.sizes.width.max}),(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.highlight}),(function(e){return e.theme.colors.highlight})),x=Object(a.e)(w.Link).withConfig({displayName:"pagination__PreviousLink",componentId:"mehen9-1"})(["margin-right:auto;order:1;"]),E=Object(a.e)(w.Link).withConfig({displayName:"pagination__NextLink",componentId:"mehen9-2"})(["margin-left:auto;order:3;"]),k=a.e.span.withConfig({displayName:"pagination__PageIndicator",componentId:"mehen9-3"})(["color:",";position:absolute;left:0;right:0;width:100%;text-align:center;padding:1em 1.5em;z-index:-1;opacity:0.7;"],(function(e){return e.theme.colors.text})),S=function(e){var t=e.context,i=e.prefix,r=Object(y.c)(),a=t.numPages,o=t.currentPage,l=void 0===o?1:o,s=1===l,c=l===a,d=s&&c,u=l-1==1?"":l-1,m=l+1,f=i?"/"+i+"/":"/",h=s?null:""+f+u+"/",g=c?null:""+f+m+"/";return n.createElement(v,null,!s&&h&&n.createElement(x,{to:h,title:r.title+" blog page "+u},"← Prev Page"),!d&&n.createElement(k,null,l,"/",a),!c&&g&&n.createElement(E,{to:g,title:r.title+" blog page "+m},"Next Page →"))},_=(i(4),i(64)),I=a.e.div.withConfig({displayName:"share__Wrapper",componentId:"sc-56ik4p-0"})(["display:flex;flex-direction:column;align-items:center;"]),C=a.e.div.withConfig({displayName:"share__List",componentId:"sc-56ik4p-1"})(["max-width:",";display:flex;flex-direction:row;margin:0 auto 1em auto;svg{path{transition:0.2s;fill:",";opacity:0.7;}}@media (hover:hover){& a:hover{cursor:pointer;svg{path{fill:",";opacity:1;}}}}"],(function(e){return e.theme.sizes.width.maxCentered}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.highlight})),N=a.e.p.withConfig({displayName:"share__Label",componentId:"sc-56ik4p-2"})(["font-weight:800;"]),L=function(e){var t=e.post,i=Object(y.c)(),a=i.social,o=i.siteUrl,l=a.twitter.replace("@",""),s=o+"/blog/"+t.slug;return n.createElement(I,null,n.createElement(N,null,"Share this post"),n.createElement(C,null,n.createElement(r.g,{link:!0,socialName:"facebook",title:'Share "'+t.title+'" on Facebook',href:Object(_.b)("facebook",{u:s})}),n.createElement(r.g,{link:!0,socialName:"twitter",title:'Share "'+t.title+'" on Twitter',href:Object(_.b)("twitter",{text:t.title,url:s,via:l})}),n.createElement(r.g,{link:!0,socialName:"linkedin",title:'Share "'+t.title+'" on LinkedIn',href:Object(_.b)("linkedin",{url:s})}),n.createElement(r.g,{link:!0,socialName:"reddit",title:'Share "'+t.title+'" on Reddit',href:Object(_.b)("reddit",{url:s})})))},z=a.e.li.withConfig({displayName:"card__Post",componentId:"en5oce-0"})(["position:relative;border-radius:0.3125em;width:100%;transition:0.2s;@media screen and (min-width:","){flex:",";margin:0 0 2vw 0;}@media screen and (min-width:","){flex:",";}a{display:flex;flex-flow:column;height:100%;width:100%;color:",";text-decoration:none;h2{transition:color 0.2s;}@media (hover:hover){&:hover{color:",";h2{color:",";}}}.gatsby-image-wrapper{height:0;padding-bottom:60%;@media screen and (min-width:","){padding-bottom:",";}}}"],(function(e){return e.theme.responsive.small}),(function(e){return e.featured?"0 0 100%":"0 0 49%"}),(function(e){return e.theme.responsive.medium}),(function(e){return e.featured?"0 0 100%":"0 0 32%"}),(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.highlight}),(function(e){return e.theme.responsive.small}),(function(e){return e.featured?"40%":"60%"})),O=Object(a.e)(w.Link).withConfig({displayName:"card__StyledLink",componentId:"en5oce-1"})(["background-image:none;"]),j=Object(a.e)(u.a).withConfig({displayName:"card__StyledImg",componentId:"en5oce-2"})(["border-radius:0.375em;"]),P=a.e.div.withConfig({displayName:"card__Text",componentId:"en5oce-3"})(["margin:0;padding:1em;"]),R=a.e.h2.withConfig({displayName:"card__Title",componentId:"en5oce-4"})(["text-transform:capitalize;margin:0.5em 0 1em;"]),T=a.e.p.withConfig({displayName:"card__Date",componentId:"en5oce-5"})(["margin:0 0 0.5em 0;color:",";"],(function(e){return e.theme.colors.text})),V=a.e.p.withConfig({displayName:"card__Excerpt",componentId:"en5oce-6"})(["color:",";"],(function(e){return e.theme.colors.text})),W=function(e){var t=e.slug,i=e.title,r=e.publishDate,a=e.excerpt,o=e.featured,l=void 0!==o&&o,s=e.fluid;return n.createElement(z,{featured:l},n.createElement(O,{to:"/blog/"+t+"/",title:i},n.createElement(j,{fluid:s,backgroundColor:"#eeeeee",title:i,alt:""}),n.createElement(P,null,n.createElement(R,null,i),n.createElement(T,null,r),n.createElement(V,{dangerouslySetInnerHTML:{__html:a}}))))},M=a.e.ul.withConfig({displayName:"card-list__List",componentId:"sc-1m8k5nm-0"})(["list-style:none;display:flex;flex-flow:row wrap;justify-content:space-between;margin:0 auto;&::after{content:'';flex:0 0 32%;}"]),q=function(e){var t=e.children;return n.createElement(M,null,t)},B=a.e.div.withConfig({displayName:"post-links__Wrapper",componentId:"sc-1x8u7h3-0"})(["margin:-2em 0 0 0;padding:0 1.5em 2em;"]),G=a.e.div.withConfig({displayName:"post-links__Box",componentId:"sc-1x8u7h3-1"})(["display:flex;justify-content:space-between;margin:0 auto;width:100%;max-width:",";a{background:transparent;color:",";padding:1em;border-radius:0.3125em;text-decoration:none;transition:0.2s;@media (hover:hover){&:hover{background:",";color:white;}}}"],(function(e){return e.theme.sizes.width.maxCentered}),(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.highlight})),H=Object(a.e)(w.Link).withConfig({displayName:"post-links__PreviousLink",componentId:"sc-1x8u7h3-2"})(["margin-right:auto;order:1;"]),F=Object(a.e)(w.Link).withConfig({displayName:"post-links__NextLink",componentId:"sc-1x8u7h3-3"})(["margin-left:auto;order:2;"]),D=function(e){var t=e.prefix,i=e.previous,r=e.next,a=t?t+"/":"";return n.createElement(B,null,n.createElement(G,null,i&&n.createElement(H,{to:"/"+a+i.fields.slug+"/",title:i.frontmatter.title},"← Prev Post"),r&&n.createElement(F,{to:"/"+a+r.fields.slug+"/",title:r.frontmatter.title},"Next Post →")))},U=a.e.div.withConfig({displayName:"post-meta__Wrapper",componentId:"zs3sza-0"})(["margin:0 auto 2.4em;max-width:",";display:flex;justify-content:center;align-items:center;"],(function(e){return e.theme.sizes.width.maxCentered})),J=a.e.div.withConfig({displayName:"post-meta__Body",componentId:"zs3sza-1"})(["flex:1;color:",";"],(function(e){return e.theme.colors.text})),A=a.e.header.withConfig({displayName:"post-meta__Header",componentId:"zs3sza-2"})(["display:inline-flex;a{color:",";display:inline-flex;align-items:center;}svg{width:1em;font-size:24px;& path{transition:0.2s;fill:",";opacity:0.7;}@media (hover:hover){&:hover path{fill:",";opacity:1;}}}"],(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.highlight})),Q=Object(a.e)(w.Link).withConfig({displayName:"post-meta__AuthorLink",componentId:"zs3sza-3"})(["font-weight:600;font-size:1.2em;margin:0 0.8em 0 0;text-decoration:none;display:inline-block;transition:0.2s;background-image:none;&&{color:",";&:hover{color:",";}}"],(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.highlight})),K=a.e.p.withConfig({displayName:"post-meta__Bio",componentId:"zs3sza-4"})(["margin:0;"]),X=function(e){var t=e.date,i=e.author,a=i.avatar,o=i.bio,l=i.id,s=i.name,c=i.github,d=i.twitter;return n.createElement(U,null,a&&n.createElement(f,{fluid:a.childImageSharp.fluid,alt:"",title:s}),n.createElement(J,null,n.createElement(A,null,n.createElement(Q,{to:"/blog/author/"+l,title:"Posts by "+s},s),n.createElement(r.g,{link:!0,socialName:"github",href:"https://github.com/"+c,title:s+" on GitHub"}),d&&n.createElement(r.g,{link:!0,socialName:"twitter",href:"https://twitter.com/"+d,title:s+" on Twitter"})),n.createElement(K,null,o),"Published on ",t))},Y=a.e.ul.withConfig({displayName:"post-tags__List",componentId:"sc-3sbxxt-0"})(["width:100%;margin:0 auto 1em auto;max-width:",";"],(function(e){return e.theme.sizes.width.maxCentered})),Z=a.e.li.withConfig({displayName:"post-tags__Tag",componentId:"sc-3sbxxt-1"})(["display:inline-block;margin:0 0.25em 0.25em 0;a{float:left;font-size:0.8em;transition:0.2s;background:",";padding:0.5em;border-radius:2px;text-transform:capitalize;text-decoration:none;color:",";border:1px solid ",";@media (hover:hover){&:hover{background:",";color:",";}}}"],(function(e){return e.theme.colors.tertiary}),(function(e){return e.theme.colors.base}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.base})),$=function(e){var t=e.tags;return n.createElement(Y,null,t.map((function(e){return n.createElement(Z,{key:e},n.createElement(w.Link,{to:"/blog/tag/"+Object(_.c)(e)+"/",title:"Posts tagged with "+e},e))})))};i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return f})),i.d(t,"e",(function(){return b})),i.d(t,"f",(function(){return S})),i.d(t,"j",(function(){return L})),i.d(t,"c",(function(){return W})),i.d(t,"d",(function(){return q})),i.d(t,"g",(function(){return D})),i.d(t,"h",(function(){return X})),i.d(t,"i",(function(){return $}))}}]);
//# sourceMappingURL=component---src-templates-blog-tsx-03b3045e8dbdc7dd4d90.js.map