"use strict";(self.webpackChunkbooks=self.webpackChunkbooks||[]).push([[947],{9947:(O,f,c)=>{c.r(f),c.d(f,{BookListModule:()=>E});var a=c(6814),k=c(7398),C=c(8645);const b={now:()=>(b.delegate||Date).now(),delegate:void 0};class g extends C.x{constructor(n=1/0,o=1/0,e=b){super(),this._bufferSize=n,this._windowTime=o,this._timestampProvider=e,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=o===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,o)}next(n){const{isStopped:o,_buffer:e,_infiniteTimeWindow:s,_timestampProvider:r,_windowTime:u}=this;o||(e.push(n),!s&&e.push(r.now()+u)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();const o=this._innerSubscribe(n),{_infiniteTimeWindow:e,_buffer:s}=this,r=s.slice();for(let u=0;u<r.length&&!n.closed;u+=e?1:2)n.next(r[u]);return this._checkFinalizedStatuses(n),o}_trimBuffer(){const{_bufferSize:n,_timestampProvider:o,_buffer:e,_infiniteTimeWindow:s}=this,r=(s?1:2)*n;if(n<1/0&&r<e.length&&e.splice(0,e.length-r),!s){const u=o.now();let l=0;for(let h=1;h<e.length&&e[h]<=u;h+=2)l=h;l&&e.splice(0,l+1)}}}var v=c(3020),m=c(8180),_=c(9397),t=c(9291),T=c(9862);let d=(()=>{class i{constructor(o){this.httpClient=o,this.allBooks$=this.getBooks$(),this.books$=this.allBooks$}getBooks$(){return this.httpClient.get("assets/mocks/books.json").pipe((0,k.U)(o=>o.books),function x(i,n,o){let e,s=!1;return i&&"object"==typeof i?({bufferSize:e=1/0,windowTime:n=1/0,refCount:s=!1,scheduler:o}=i):e=i??1/0,(0,v.B)({connector:()=>new g(e,n,o),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:s})}(1),(0,m.q)(1))}getBookFromId(o){return this.allBooks$.pipe((0,k.U)(e=>e.filter(s=>s.isbn13===o)[0]),(0,m.q)(1))}searchBooks(o){(!o||""===o.trim())&&(this.books$=this.allBooks$),this.books$=this.books$.pipe((0,k.U)(e=>e.filter(s=>s.title.toLowerCase().includes(o.toLowerCase())||s.subtitle.toLowerCase().includes(o.toLowerCase()))))}sortBooksByTitle(o){return this.books$=this.books$.pipe((0,_.b)(e=>e.sort((s,r)=>o?s.title>r.title?1:-1:s.title>r.title?-1:1)))}sortBooksByPrice(o){return this.books$.pipe((0,_.b)(e=>e.sort((s,r)=>{const u=parseFloat(s.price.replace("$","")),l=parseFloat(r.price.replace("$",""));return o?u>l?1:-1:u>l?-1:1})))}static#t=this.\u0275fac=function(e){return new(e||i)(t.LFG(T.eN))};static#o=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var p=c(5817),B=c(3414);let y=(()=>{class i{constructor(){this.book=new t.vpe}searchBook(o){this.book.emit(o)}static#t=this.\u0275fac=function(e){return new(e||i)};static#o=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-search-book"]],outputs:{book:"book"},decls:3,vars:0,consts:[[1,"books-search"],["type","text","placeholder","\u041f\u043e\u0438\u0441\u043a",3,"keyup"],["inputElement",""]],template:function(e,s){if(1&e){const r=t.EpF();t.TgZ(0,"div",0)(1,"input",1,2),t.NdJ("keyup",function(){t.CHM(r);const l=t.MAs(2);return t.KtG(s.searchBook(l.value))}),t.qZA()()}},styles:[".books-search[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0})}return i})();const Z=function(i,n){return{"add-to-cart-button":i,"remove-from-cart-button":n}};function S(i,n){if(1&i){const o=t.EpF();t.TgZ(0,"tr",6)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",7),t.NdJ("click",function(){const r=t.CHM(o).$implicit,u=t.oxw(2);return t.KtG(u.toDetail(r.isbn13))}),t._UZ(4,"img",8),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"button",9),t.NdJ("click",function(){const r=t.CHM(o).$implicit,u=t.oxw(2);return t.KtG(u.addToOrRemoveFromCart(r))}),t._uU(12),t.qZA()()()}if(2&i){const o=n.$implicit,e=n.index,s=t.oxw(2);t.xp6(2),t.Oqu(e+1),t.xp6(2),t.Q6J("src",o.image,t.LSH)("alt",o.title),t.xp6(1),t.hij(" ",o.title," "),t.xp6(2),t.Oqu(o.subtitle),t.xp6(2),t.Oqu(o.price),t.xp6(2),t.Q6J("ngClass",t.WLB(8,Z,!s.isBookInCart(o),s.isBookInCart(o))),t.xp6(1),t.hij(" ",s.isBookInCart(o)?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"," ")}}function A(i,n){if(1&i){const o=t.EpF();t.TgZ(0,"table",3)(1,"tr")(2,"th"),t._uU(3,"#"),t.qZA(),t.TgZ(4,"th")(5,"button",4),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.sortBooksByTitle())}),t._uU(6,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),t.qZA()(),t.TgZ(7,"th"),t._uU(8,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"),t.qZA(),t.TgZ(9,"th")(10,"button",4),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.sortBooksByPrice())}),t._uU(11,"\u0426\u0435\u043d\u0430"),t.qZA()(),t.TgZ(12,"th"),t._uU(13,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),t.qZA()(),t.YNc(14,S,13,11,"tr",5),t.qZA()}if(2&i){const o=n.ngIf;t.xp6(14),t.Q6J("ngForOf",o)}}let I=(()=>{class i{constructor(o,e,s){this.dataService=o,this.router=e,this.cartService=s,this.books$=this.dataService.books$,this.isBooksTitleSort=!0,this.isBooksPriceSort=!0}searchBooks(o){this.dataService.searchBooks(o),this.books$=this.dataService.books$}sortBooksByTitle(){this.isBooksTitleSort=!this.isBooksTitleSort,this.books$=this.dataService.sortBooksByTitle(this.isBooksTitleSort)}sortBooksByPrice(){this.isBooksPriceSort=!this.isBooksPriceSort,this.books$=this.dataService.sortBooksByPrice(this.isBooksPriceSort)}toDetail(o){o&&this.router.navigate(["main",o])}isBookInCart(o){return this.cartService.isInCart(o)}addToOrRemoveFromCart(o){this.isBookInCart(o)?this.cartService.removeFromCart(o):this.cartService.addToCart(o)}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(d),t.Y36(p.F0),t.Y36(B.N))};static#o=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-book-list"]],decls:4,vars:3,consts:[[1,"books"],[3,"book"],["class","books-table",4,"ngIf"],[1,"books-table"],[3,"click"],["class","books-row",4,"ngFor","ngForOf"],[1,"books-row"],[1,"books-title",3,"click"],["width","30px",3,"src","alt"],[1,"books-button",3,"ngClass","click"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"app-search-book",1),t.NdJ("book",function(u){return s.searchBooks(u)}),t.qZA(),t.YNc(2,A,15,1,"table",2),t.ALo(3,"async"),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,s.books$)))},dependencies:[a.mk,a.sg,a.O5,y,a.Ov],styles:[".books[_ngcontent-%COMP%]{margin:0 auto;display:flex;align-items:center;justify-content:center;flex-direction:column;max-width:90rem}.books-table[_ngcontent-%COMP%]{margin:0 auto}.books-row[_ngcontent-%COMP%]:hover{background-color:#faebd7}.books-title[_ngcontent-%COMP%]:hover{cursor:pointer;color:#3995ef}"],changeDetection:0})}return i})();var w=c(4664);function F(i,n){if(1&i&&(t.TgZ(0,"p",9),t._uU(1),t.qZA()),2&i){const o=t.oxw().ngIf;t.xp6(1),t.hij("\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e: ",o.subtitle,"")}}const D=function(i,n){return{"add-to-cart-button":i,"remove-from-cart-button":n}};function $(i,n){if(1&i){const o=t.EpF();t.TgZ(0,"div",2)(1,"div"),t._UZ(2,"img",3),t.qZA(),t.TgZ(3,"div",4)(4,"h1"),t._uU(5),t.qZA(),t.YNc(6,F,2,1,"p",5),t.TgZ(7,"div",6),t._uU(8),t.qZA(),t.TgZ(9,"a",7),t._uU(10,"\u041f\u043e\u043b\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),t.qZA(),t.TgZ(11,"button",8),t.NdJ("click",function(){const r=t.CHM(o).ngIf,u=t.oxw();return t.KtG(u.addToOrRemoveFromCart(r))}),t._uU(12),t.qZA()()()}if(2&i){const o=n.ngIf,e=t.oxw();t.xp6(2),t.Q6J("src",o.image,t.LSH)("alt",o.title),t.xp6(3),t.Oqu(o.title),t.xp6(1),t.Q6J("ngIf",o.subtitle),t.xp6(2),t.hij("\u0426\u0435\u043d\u0430: ",o.price,""),t.xp6(1),t.Q6J("href",o.url,t.LSH),t.xp6(2),t.Q6J("ngClass",t.WLB(8,D,!e.isBookInCart(o),e.isBookInCart(o))),t.xp6(1),t.hij(" ",e.isBookInCart(o)?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"," ")}}const L=[{path:"",component:I},{path:":id",component:(()=>{class i{constructor(o,e,s){this.activatedRoute=o,this.booksDataService=e,this.cartService=s}ngOnInit(){this.activatedRoute.paramMap.pipe((0,w.w)(o=>o.getAll("id")),(0,m.q)(1)).subscribe(o=>{this.book$=this.booksDataService.getBookFromId(o)})}isBookInCart(o){return this.cartService.isInCart(o)}addToOrRemoveFromCart(o){this.isBookInCart(o)?this.cartService.removeFromCart(o):this.cartService.addToCart(o)}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(p.gz),t.Y36(d),t.Y36(B.N))};static#o=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-detail-book"]],decls:4,vars:3,consts:[["routerLink","/main"],["class","book",4,"ngIf"],[1,"book"],[1,"book-image",3,"src","alt"],[1,"book-block"],["class","book-subtitle",4,"ngIf"],[1,"book-price"],["target","_blank",1,"book-full-info",3,"href"],[1,"book-buy-button",3,"ngClass","click"],[1,"book-subtitle"]],template:function(e,s){1&e&&(t.TgZ(0,"a",0),t._uU(1,"<\u2014\u041d\u0430\u0437\u0430\u0434"),t.qZA(),t.YNc(2,$,13,11,"div",1),t.ALo(3,"async")),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,s.book$)))},dependencies:[a.mk,a.O5,p.rH,a.Ov],styles:[".book[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:row;column-gap:1.5rem}.book-block[_ngcontent-%COMP%]{display:flex;align-items:start;justify-content:start;flex-direction:column;max-width:50%;row-gap:1rem}.book-image[_ngcontent-%COMP%]{max-height:22rem;max-width:19rem}.book-buy-button[_ngcontent-%COMP%]{width:300px;height:40px}"],changeDetection:0})}return i})()}];let M=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#o=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(L),p.Bz]})}return i})(),E=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#o=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({providers:[d],imports:[a.ez,M]})}return i})()}}]);