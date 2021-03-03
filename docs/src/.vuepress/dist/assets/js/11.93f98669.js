(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{365:function(a,e,o){"use strict";o.r(e);var s=o(45),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"docker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),o("p",[a._v("TODO: sekcija o dokeru")]),a._v(" "),o("h2",{attrs:{id:"instalacija"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#instalacija"}},[a._v("#")]),a._v(" Instalacija")]),a._v(" "),o("p",[a._v("Kako bismo instalirali "),o("strong",[a._v("Docker")]),a._v(" najbolje je da pratimo\noficijalnu dokumentaciju "),o("a",{attrs:{href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Instalacija Dockera"),o("OutboundLink")],1),a._v(".")]),a._v(" "),o("p",[a._v("Nakon ovoga, potrebno je da omogućimo da "),o("code",[a._v("docker")]),a._v(" komanda ne radi preko "),o("code",[a._v("sudo")]),a._v(" komande, kako ne bi smo bespotrebno aktivirali "),o("code",[a._v("root")]),a._v(" korisnika.")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("$ sudo groupadd docker\n$ sudo usermod -aG docker $USER\n")])])]),o("p",[a._v("Sada, treba da se odjavimo i prijavimo na sistem, ili izvrsimo:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("$ newgrp docker \n")])])]),o("p",[a._v("Konačno, možemo izvršiti "),o("code",[a._v("docker")]),a._v(" komandu bez prefiksa.")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("$ docker run hello-world\n")])])]),o("h2",{attrs:{id:"docker-compose"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[a._v("#")]),a._v(" Docker compose")]),a._v(" "),o("p",[a._v("Pored "),o("strong",[a._v("Docker")]),a._v('-a, potreban nam je još jedan program za lakse upravljanje i orkestraciju ovih "Container"-a.\n'),o("code",[a._v("docker-compose")]),a._v(" nam omogućava da ga kroz konfiguracioni fajl napravimo sve potrebne container-e bez ručnog pokretanja "),o("code",[a._v("docker")]),a._v("\nkomande.")]),a._v(" "),o("p",[a._v("Hajde da ga instaliramo:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v('$ sudo curl -L "https://github.com/docker/compose/releases/download/1.28.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n$ sudo chmod +x /usr/local/bin/docker-compose\n')])])]),o("p",[a._v("Kako bi bili sigurni da je dostupan svuda u sistemu:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose\n")])])]),o("p",[a._v("Sada možemo da ga koristimo:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("$ docker-compose --version\ndocker-compose version 1.28.5, build 1110ad01\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);