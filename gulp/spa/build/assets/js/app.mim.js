"use strict";!function(){function n(t){if(t){document.querySelector("[wm-link='"+t+"']");var o=document.querySelector("[wm-link-destino]"),e=t.substring(1);fetch(e).then(function(e){return e.text()}).then(function(e){var n;o.innerHTML=e,n=t,document.querySelectorAll("[wm-link]").forEach(function(e){return e.classList.remove("selecionado")}),document.querySelector("[wm-link='"+n+"']").classList.add("selecionado")})}}window.onhashchange=function(e){return n(location.hash)},document.querySelectorAll("[wm-link]").forEach(function(e){e.href=e.attributes["wm-link"].value}),location.hash?n(location.hash):n(document.querySelector("[wm-link]").hash)}();