(this.webpackJsonpprojeto=this.webpackJsonpprojeto||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(10),r=a.n(c),i=(a(101),a(102),a(163)),s=a(52),l=a(84),d=a(44),u=a(13),j=a(167),m=a(164),b=a(152),h=a(170),f=a(169),x=a(156),O=a(165),v=a(157),p=a(45),g=a.n(p),A=a(57);function S(){return(S=Object(A.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"a4c03c31",a="https://api.hgbrasil.com/finance/stock_price?key=".concat("a4c03c31","&symbol=").concat(t,"&format=json-cors"),n={method:"GET",mode:"cors",cache:"default"},e.next=5,fetch(a,n).then((function(e){return console.log(e),e.json()})).then((function(e){return console.log(e),e})).then((function(e){return e.results[t].price})).catch((function(e){return console.log(e)}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e){return S.apply(this,arguments)};var N=function(e,t){(function(e){return new Promise((function(t,a){var n=[];e.map(function(){var a=Object(A.a)(g.a.mark((function a(o){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y(o.nomeAcao).then((function(e){return{nomeAcao:o.nomeAcao,dataAcao:o.dataAcao,qtdAcao:o.qtdAcao,precoAcao:o.precoAcao,precoHoje:e}})).then((function(a){return console.log(a),n.push(a),console.log(n.length),n.length===e.length&&t(n),a})).catch((function(e){return console.log(e)}));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}))})(e).then((function(e){return console.log(e),e})).then((function(e){return t(e)}))},q=(a(104),a(2));var F=function(e){var t=e.novaAcao,a=e.acoes,o=e.atualiza,c=Object(n.useState)(""),r=Object(u.a)(c,2),i=r[0],s=r[1],l=Object(n.useState)(""),d=Object(u.a)(l,2),j=d[0],p=d[1],g=Object(n.useState)(""),A=Object(u.a)(g,2),S=A[0],y=A[1],F=Object(n.useState)(""),V=Object(u.a)(F,2),C=V[0],D=V[1];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({nomeAcao:i,dataAcao:j,qtdAcao:S,precoAcao:C})},children:[Object(q.jsx)(m.a,{id:"nome-acao",label:"Nome da Acao",variant:"outlined",margin:"normal",onChange:function(e){return s(e.target.value)}}),Object(q.jsx)(m.a,{id:"data-acao",variant:"outlined",margin:"normal",type:"date",onChange:function(e){return p(e.target.value)}}),Object(q.jsx)(m.a,{id:"numero-acao",variant:"outlined",margin:"normal",type:"number",label:"Numero de Acoes",onChange:function(e){return y(e.target.value)}}),Object(q.jsxs)(b.a,{variant:"outlined",margin:"normal",children:[Object(q.jsx)(h.a,{htmlFor:"valor-acao",children:"Valor da Acao"}),Object(q.jsx)(f.a,{id:"valor-acao",startAdornment:Object(q.jsx)(x.a,{position:"start",children:"R$"}),labelWidth:105,onChange:function(e){return D(e.target.value)}})]}),Object(q.jsx)(O.a,{position:"inherit",minWidth:"64px",boxSizing:"border-box",margin:"0",display:"inline-flex",marginLeft:4,marginTop:3.2,children:Object(q.jsx)(v.a,{type:"submit",color:"primary",variant:"contained",children:"Adicionar"})})]}),Object(q.jsx)(O.a,{position:"inherit",minWidth:"64px",boxSizing:"border-box",margin:"0",display:"inline-flex",marginLeft:4,marginTop:2,marginBottom:3.5,children:Object(q.jsx)(v.a,{type:"submit",color:"primary",variant:"contained",onClick:function(e){e.stopPropagation(),N(a,o)},children:"Atualizar"})})]})},V=(a(111),a(76)),C=a.n(V),D=a(77),w=a.n(D);var T=function(e){var t=e.enviaAcoes,a=e.apagaAcao,n=t,o=function(e){if(e.preventDefault(),e.stopPropagation(),!0===window.confirm("Quer Deletar")){var t=e.target.parentElement.closest("tr");console.log(t),t.className="fade";var n=t.id;t.className="fade",setTimeout((function(){a(n)}),850)}else console.log("Exclusao Cancelada")},c=function(e){return parseFloat(e).toFixed(2)},r=function(e,t){var a=parseFloat((100*(t/e-1)).toFixed(2));return"".concat(a,"%")},i=function(e,t,a){var n=(t*a-e*a).toFixed(2);return"R$  ".concat(n)},s=function(e,t,a){var n=parseFloat((100*(a/t-1)).toFixed(2)),o=new Date,c=new Date(e),r=Math.abs(o.getTime()-c.getTime()),i=Math.ceil(r/864e5);return i/365>=1?n/(i/365):n},l=function(e){var t=0;e.forEach((function(e){t+=e.qtdAcao*e.precoAcao}));var a=t.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});return[t,a]},d=function(e){var t=0;e.forEach((function(e){t+=e.qtdAcao*e.precoHoje}));var a=t.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});return[t,a]},u=function(){var e=100*(d(n)[0]/l(n)[0]-1),t="";return e>0?t="positivo":e<0&&(t="negativo"),[e=e.toFixed(2),t]},j=function(e){var t=e.target.id,a=n[t].precoAcao*n[t].qtdAcao;e.target.innerText=a.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})},m=function(e){var t=e.target.id,a=n[t].precoAcao;e.target.innerText=a.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})},b=function(e){var t=e.target.parentElement.closest("tr");t=t.id;var a=document.querySelector("#formVenda");a.className="show",a.scrollIntoView(),a.querySelector("#nome-acao-venda").focus(),a.querySelector("#nome-acao-venda").value=t};return Object(q.jsx)("div",{children:Object(q.jsxs)("table",{children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{className:"header",children:[Object(q.jsx)("th",{children:"Nome da Acao"}),Object(q.jsx)("th",{children:"Data da Compra"}),Object(q.jsx)("th",{children:"Numero de Cotas"}),Object(q.jsx)("th",{children:"Preco Medio"}),Object(q.jsx)("th",{children:"Valor hoje"}),Object(q.jsx)("th",{children:"Alta / Queda %"}),Object(q.jsx)("th",{children:"Ganho / Perda $"}),Object(q.jsx)("th",{children:"Valorizacao % a.a"}),Object(q.jsx)("th",{children:"Apagar"}),Object(q.jsx)("th",{children:"Vender Acoes"})]})}),Object(q.jsx)("tfoot",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"Saldo % da Carteira"}),Object(q.jsxs)("td",{className:u()[1],children:[u()[0]," %"]}),Object(q.jsx)("th",{children:"Saldo da Carteira"}),Object(q.jsxs)("td",{className:u()[1],children:["R$ ",function(){var e=d(n)[0]-l(n)[0];return e=e.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}()]}),Object(q.jsx)("th",{children:"Investimento Inicial"}),Object(q.jsxs)("td",{className:"ajusteFoot",children:["R$ ",l(n)[1]]}),Object(q.jsx)("th",{children:"Total Atual da Carteira"}),Object(q.jsxs)("td",{className:"ajusteFoot",children:["R$ ",d(n)[1]]})]})}),Object(q.jsx)("tbody",{children:n.map((function(e,t){var a,n,l="";return a=e.precoAcao,n=e.precoHoje,l=parseFloat((100*(n/a-1)).toFixed(2))>0?"positivo":"negativo",Object(q.jsxs)("tr",{className:l,id:e.nomeAcao,children:[Object(q.jsx)("td",{children:e.nomeAcao}),Object(q.jsx)("td",{children:e.dataAcao}),Object(q.jsx)("td",{children:e.qtdAcao}),Object(q.jsx)("td",{id:t,onMouseOver:j,onMouseOut:m,children:e.precoAcao}),Object(q.jsx)("td",{children:c(e.precoHoje)}),Object(q.jsx)("td",{children:r(e.precoAcao,e.precoHoje)}),Object(q.jsx)("td",{children:i(e.precoAcao,e.precoHoje,e.qtdAcao)}),Object(q.jsxs)("td",{children:[s(e.dataAcao,e.precoAcao,e.precoHoje),"%"]}),Object(q.jsx)("td",{children:Object(q.jsx)(C.a,{style:{fontSize:35},onClick:o,className:"botaoDelete",children:"Apagar"})}),Object(q.jsx)("td",{children:Object(q.jsx)(w.a,{onClick:b,className:"botaoVender",style:{fontSize:38},children:"Vender"})})]},t)}))})]})})},I=(a(112),a(72),a(158)),R=a(155),z=a(159),L=a(162),k=a(160),P=a(161),E=a(78),W=a.n(E),B=a(79),U=a.n(B),$=a(80),H=a.n($),J=a(81),M=a.n(J),G=a(82),Q=a.n(G);var _=function(e){var t,a=e.listaVenda,n=Object(I.a)((function(e){return{root:{width:"100%",maxWidth:910,BackgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}}))(),c=o.a.useState(!0),r=Object(u.a)(c,2),i=r[0],l=r[1],d=0;return Object(q.jsxs)(R.a,{component:"nav",className:n.root,children:[Object(q.jsx)(s.a,{align:"left",children:Object(q.jsxs)(z.a,{button:!0,onClick:function(){l(!i),setTimeout((function(){var e=document.querySelector("#focusListaVenda");e&&e.scrollIntoView({behavior:"smooth"})}),200)},children:[Object(q.jsx)(k.a,{children:Object(q.jsx)(O.a,{fontWeight:600,m:1,fontSize:21,fontFamily:"Segoe UI",children:"Lista de Acoes Vendidas"})}),i?Object(q.jsx)(U.a,{}):Object(q.jsx)(W.a,{})]})}),Object(q.jsx)(P.a,{in:!i,timeout:"auto",unmountOnExit:!0,children:Object(q.jsx)(R.a,{id:"focusListaVenda",component:"div",disablePadding:!0,children:Object(q.jsxs)(s.a,{align:"left",children:[a.map((function(e,t){return d+=e.rendimentoValor,Object(q.jsxs)(z.a,{button:!0,className:n.nested,children:[Object(q.jsx)(L.a,{children:Object(q.jsx)(H.a,{})}),Object(q.jsx)(k.a,{children:Object(q.jsxs)(O.a,{fontWeight:450,m:1,fontSize:18,fontFamily:"Segoe UI",children:[e.dataVenda," - Venda de ",e.qtdVenda," acoes ",e.nomeAcao," por R$",e.precoVenda," |  ",e.rendimentoAA,"%  | Saldo: R$ ",e.rendimentoValor.toFixed(2)]})})]},t)})),Object(q.jsxs)(z.a,{button:!0,className:n.nested,children:[Object(q.jsx)(L.a,{children:Object(q.jsx)(M.a,{})}),Object(q.jsx)(k.a,{children:Object(q.jsxs)(O.a,{fontWeight:600,m:1,fontSize:18,fontFamily:"Segoe UI",textAlign:"center",children:["Lucro total Realizado: R$ ",(t=d,t=t.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}))]})}),Object(q.jsx)(L.a,{children:Object(q.jsx)(Q.a,{})})]})]})})})]})};var K=function(e){var t=e.enviaAcoes,a=e.novaAcao,o=e.usuario,c=Object(n.useState)(JSON.parse(localStorage.getItem("listaVenda".concat(o)))||[]),r=Object(u.a)(c,2),i=r[0],s=r[1],l=Object(n.useState)(""),j=Object(u.a)(l,2),p=j[0],g=j[1],A=Object(n.useState)(""),S=Object(u.a)(A,2),y=S[0],N=S[1],F=Object(n.useState)(""),V=Object(u.a)(F,2),C=V[0],D=V[1],w=Object(n.useState)(""),T=Object(u.a)(w,2),I=T[0],R=T[1],z=Object(n.useState)({classe:"hide",qtdPossivel:""}),L=Object(u.a)(z,2),k=L[0],P=L[1],E=function(e){var t={nomeAcao:p,dataCompra:e.dataAcao,dataVenda:y,qtdVenda:-C,precoCompra:e.precoAcao,precoVenda:I,rendimentoValor:"",rendimentoPercentual:"",rendimentoAA:""},a=Number(I).toFixed(2),n=(I*-C-e.precoAcao*-C).toFixed(2),c=(100*(I/e.precoAcao-1)).toFixed(2),r=function(e,t,a){var n=new Date(t),o=new Date(e),c=Math.abs(n.getTime()-o.getTime()),r=Math.ceil(c/864e5);return r/365>=1?a/(r/365):a}(e.dataAcao,y,c);r=Number(r).toFixed(2),t.rendimentoValor=Number(n),t.rendimentoPercentual=c,t.rendimentoAA=r,t.precoVenda=a;var l,u,j=[].concat(Object(d.a)(i),[t]);s(j),l=j,u=o,localStorage.setItem("listaVenda".concat(u),JSON.stringify(l)),console.log(j)};return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)("form",{id:"formVenda",className:"hide",onSubmit:function(e){e.preventDefault(),function(){var e=t.findIndex((function(e){return e.nomeAcao===p}));if(e<0){P({classe:"show erro",qtdPossivel:0});var n=document.querySelector("#mensagemErro");setTimeout((function(){n.scrollIntoView({behavior:"smooth"})}),300)}else if(Number(t[e].qtdAcao)+C<0){var o={classe:"show erro",qtdPossivel:t[e].qtdAcao};P(o);var c=document.querySelector("#mensagemErro");setTimeout((function(){c.scrollIntoView({behavior:"smooth"})}),300)}else{var r=t[e];E(r),a({nomeAcao:p,dataAcao:y,qtdAcao:C,precoAcao:I}),P({classe:"hide",qtdPossivel:""})}}()},children:[Object(q.jsx)(m.a,{id:"nome-acao-venda",label:"Nome da Acao",variant:"outlined",margin:"normal",onBlur:function(e){return g(e.target.value)}}),Object(q.jsx)(m.a,{id:"data-acao-venda",variant:"outlined",margin:"normal",type:"date",onChange:function(e){return N(e.target.value)}}),Object(q.jsx)(m.a,{id:"numero-acao-venda",variant:"outlined",margin:"normal",type:"number",label:"Numero de Acoes Vendidas",onChange:function(e){return D(-e.target.value)}}),Object(q.jsxs)(b.a,{variant:"outlined",margin:"normal",children:[Object(q.jsx)(h.a,{htmlFor:"valor-acao",children:"Valor da Acao"}),Object(q.jsx)(f.a,{id:"valor-acao-venda",startAdornment:Object(q.jsx)(x.a,{position:"start",children:"R$"}),labelWidth:105,onChange:function(e){return R(e.target.value)}})]}),Object(q.jsx)(O.a,{position:"inherit",minWidth:"64px",boxSizing:"border-box",margin:"0",display:"inline-flex",marginLeft:4,marginTop:3,children:Object(q.jsx)(v.a,{type:"submit",color:"primary",variant:"contained",children:"Confimar"})}),Object(q.jsx)(O.a,{position:"inherit",minWidth:"64px",boxSizing:"border-box",margin:"0",marginLeft:4,display:"inline-flex",marginTop:3,children:Object(q.jsx)(v.a,{color:"secondary",variant:"contained",margin:"normal",onClick:function(){document.querySelector("#formVenda").className="fadeOut",setTimeout((function(){document.querySelector("#formVenda").className="hide"}),300),P({classe:"hide",qtdPossivel:""}),document.querySelector("#data-acao-venda").value="",document.querySelector("#numero-acao-venda").value="",document.querySelector("#valor-acao-venda").value=""},children:"Cancelar"})})]}),Object(q.jsx)("div",{children:Object(q.jsxs)("p",{className:k.classe,id:"mensagemErro",children:["ERRO - Nao e possivel vender mais que  ",k.qtdPossivel," Acoes"]})}),Object(q.jsx)(_,{listaVenda:i})]})};var X=a(166),Y=(a(113),a(83));var Z=function(e){var t=e.setUsuario,a=Object(n.useState)(""),o=Object(u.a)(a,2),c=o[0],r=o[1],i=Object(n.useState)(JSON.parse(localStorage.getItem("listaUsuarios"))||[]),s=Object(u.a)(i,2),l=s[0],j=s[1];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("h4",{className:"subTexto",children:"Digite o Nome do Usuario da Carteira:"}),Object(q.jsxs)("form",{align:"center",onSubmit:function(e){e.preventDefault(),t(c)},children:[Object(q.jsx)(Y.a,{options:l,onCreateOption:function(e){return function(e){var t=e;r(t);var a=[].concat(Object(d.a)(l),[{value:t,label:t}]);j(a),localStorage.setItem("listaUsuarios",JSON.stringify(a))}(e)},onChange:function(e){return r(e.value)},placeholder:"Digite um novo Usuario",className:"seletorUsuario"}),Object(q.jsx)(O.a,{position:"inherit",minWidth:"64px",boxSizing:"border-box",margin:"0",display:"inline-flex",marginLeft:4,marginTop:1.1,children:Object(q.jsx)(v.a,{type:"submit",color:"primary",variant:"contained",children:"Ver Carteira"})})]})]})};var ee=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),r=Object(u.a)(c,2),s=r[0],l=r[1],m=Object(n.useState)({status:!1,severity:"",text:""}),b=Object(u.a)(m,2),h=b[0],f=b[1],x=function(e,t){f({status:!0,severity:e,text:t})},O=function(e,t){if("clickaway"!==t){f({status:!1,severity:"",text:""})}},v=Object(I.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}))(),p=function(e){var t,n;t=e,n=a,localStorage.setItem("acoes".concat(n),JSON.stringify(t)),l(e)},g=function(e){var t=s.findIndex((function(t){return t.nomeAcao===e.nomeAcao}));if(t<0){var a=[].concat(Object(d.a)(s),[e]);p(a),x("success","Novo Investimento Adicionado com Sucesso!")}else{var n=Number(s[t].precoAcao),o=Number(s[t].qtdAcao),c=Number(e.precoAcao),r=Number(e.qtdAcao);if(e.qtdAcao<0){if(0===e.qtdAcao+o)document.querySelector("#".concat(e.nomeAcao)).className="fade",setTimeout((function(){S(e.nomeAcao),x("success","Todas as Acoes da ".concat(e.nomeAcao," foram Vendidas com Sucesso!"))}),850);else{var i=s.map((function(e){return e}));i[t].qtdAcao=o+r,p(i),x("success","".concat(-e.qtdAcao," Acoes da ").concat(e.nomeAcao," foram vendidas com Sucesso!"))}}else{var l=(n*o+c*r)/(o+r),u=r+o,j=s.map((function(e){return e}));console.log(j),j[t].qtdAcao=u,j[t].precoAcao=l.toFixed(2),p(j),x("success","".concat(r," Novas Acoes da ").concat(e.nomeAcao," foram adicionadas com Sucesso!")),console.log(s)}}},A=function(e){if(e.length===s.length){var t=e.map((function(e,t){if(e.precoHoje>0)return e;var a={};return s.forEach((function(t){t.nomeAcao===e.nomeAcao&&(a=t)})),a}));p(t),x("info","Os Valores das Acoes foram Atualizados!"),console.log(t)}},S=function(e){var t=s.filter((function(t){return t.nomeAcao===e?(console.log(t.nomeAcao),""):t}));p(t),x("warning","Acao foi excluida com Sucesso!"),console.log(t)},y=function(e){o(e),l(JSON.parse(localStorage.getItem("acoes".concat(e))||[]))};return a?Object(q.jsxs)(i.a,{children:[Object(q.jsx)(F,{novaAcao:g,atualiza:A,acoes:s}),Object(q.jsx)(T,{enviaAcoes:s,apagaAcao:S}),Object(q.jsx)(K,{enviaAcoes:s,novaAcao:g,usuario:a}),Object(q.jsx)("div",{className:v.root,children:Object(q.jsx)(j.a,{open:h.status,autoHideDuration:5e3,onClose:O,children:Object(q.jsx)(te,{onClose:O,severity:h.severity,children:h.text})})})]}):Object(q.jsx)(Z,{setUsuario:y})};function te(e){return Object(q.jsx)(X.a,Object(l.a)({elevation:6,variant:"filled"},e))}var ae=function(){return Object(q.jsxs)(i.a,{children:[Object(q.jsx)(s.a,{variant:"h5",align:"center",children:Object(q.jsx)("h1",{children:"Controle de Investimento"})}),Object(q.jsx)(ee,{})]})};r.a.render(Object(q.jsx)(o.a.StrictMode,{children:Object(q.jsx)(ae,{})}),document.getElementById("root"))},72:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.759eba91.chunk.js.map