"use strict";(self.webpackChunkbooks=self.webpackChunkbooks||[]).push([[592],{3414:(h,a,c)=>{c.d(a,{N:()=>n});var e=c(5619),i=c(9291);let n=(()=>{class r{constructor(){this.cart=[],this.cartSubject=new e.X(this.cart)}get cart$(){return this.cartSubject.asObservable()}addToCart(t){this.cart.push(t),this.cartSubject.next(this.cart)}removeFromCart(t){const s=this.cart.findIndex(o=>o.isbn13===t.isbn13);-1!==s&&(this.cart.splice(s,1),this.cartSubject.next(this.cart))}isInCart(t){return this.cart.some(s=>s.isbn13===t.isbn13)}static#t=this.\u0275fac=function(s){return new(s||r)};static#s=this.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);