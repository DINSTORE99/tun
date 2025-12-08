const data = {
  
  // ===========================
  //  XL
  // ===========================
  "XL": {
    bugs: {
      "EDUKASI": {
        payload: [
          "GET / HTTP/1.1[crlf]Host: edu.ruangguru.com[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/ 1[crlf][crlf]",
          "GET / HTTP/1.1[crlf]Host: edu.ruangguru.com[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/ 69[crlf][crlf]"
        ],
        proxy: [
          "104.17.70.206:80",
          "ablink.alerts.udemy.com",
          "104.17.3.81:80",
          "104.22.4.240:80"
        ]
      },
      
      "CONFERENCE": {
        payload: [
          "GET / HTTP/1.1[crlf]Host: devsupport.zoom.us[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/SweaterPink 200 OK[crlf][crlf]",
          "PATCH /ssh-ws HTTP/1.1[crlf]Host: [host][crlf]Host: beta.zoom.us[crlf]Upgrade: websocket[crlf]Connection: Upgrade[crlf]User-Agent: @DINSTORE [ua][crlf][crlf]"
        ],
        proxy: [
          "zoomcares.zoom.us:80",
          "cdn-cf.zoom.us:80",
          "support.zoom.us:80"
        ]
      },
      
      "UDEMY": {
        "payload": [
          "GET / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: Websocket[crlf]Connection: Keep-Alive[crlf]Upgrade: websocket[crlf][crlf]",
          "pake yg no satu aja"
        ],
        "proxy": [
          "www.udemy.com:80",
          "pake yng no satu aja ya"
        ]
      },
      
      "VIDI": {
        "payload": [
          "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]",
          "PKE NO 1"
        ],
        "proxy": [
          "104.18.1.196:80",
          "PKE NO 1"
        ]
      },
      
      "tiktok": {
        "payload": [
          "mode v2/vmmes",
          "PKE NO 1"
        ],
        "proxy": [
          "api24-normal-alisg.tiktokv.com",
          "api24-normal-useast1a.tiktokv.com",
          "api24-normal.tiktokv.com"
        ]
      },
      
      "UTS": {
        "payload": [
          "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: ava.game.naver.com[crlf][crlf]BMOVE / [protocol][crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/1.1 200 OK[crlf][crlf]",
          "PKE NO 1"
        ],
        "proxy": [
          "ava.game.naver.com sni graph.instagram.com",
          "PKE NO 1"
        ]
      },
      
      "IFLIX": {
        "payload": [
          "PAKE MODE SSL ONLY",
          "PAKE MODE V2/VMMES BUG DI V2"
        ],
        "proxy": [
          "live.iflix.com",
          "162.159.138.78"
        ]
      }
    }
  },
  // ===========================
  //  AXIS
  // ===========================
  "AXIS": {
    bugs: {
      "Tiktok": {
        payload: [
          "GET http://v16.tiktokcdn.com/ HTTP/1.1\nHost: v16.tiktokcdn.com",
          "CONNECT tiktok.com:443 HTTP/1.1\nHost: tiktok.com"
        ],
        proxy: [
          "172.67.71.2:443",
          "104.21.45.6:443"
        ]
      },
      
      "Opok": {
        payload: [
          "GET / HTTP/1.1\nHost: opok.axis.com",
          "CONNECT axis-opok.com:443 HTTP/1.1\nHost: axis-opok.com"
        ],
        proxy: [
          "104.17.33.9:443",
          "172.67.90.4:443"
        ]
      }
    }
  },
  
  // ===========================
  //  TELKOMSEL
  // ===========================
  "TELKOMSEL": {
    bugs: {
      "Tiktok": {
        payload: [
          "GET http://v16.tiktokcdn.com/ HTTP/1.1\nHost: v16.tiktokcdn.com",
          "CONNECT tiktok.com:443 HTTP/1.1\nHost: tiktok.com"
        ],
        proxy: [
          "172.67.71.2:443",
          "104.21.45.6:443"
        ]
      },
      
      "Opok": {
        payload: [
          "GET / HTTP/1.1\nHost: opok.axis.com",
          "CONNECT axis-opok.com:443 HTTP/1.1\nHost: axis-opok.com"
        ],
        proxy: [
          "104.17.33.9:443",
          "172.67.90.4:443"
        ]
      }
    }
  },
  
  // ===========================
  //  INDOSAT
  // ===========================
  "Indosat": {
    bugs: {
      "Free": {
        payload: [
          "GET http://free.indosat.com/ HTTP/1.1\nHost: free.indosat.com",
          "CONNECT free.indosat.com:443 HTTP/1.1"
        ],
        proxy: [
          "104.21.88.3:443",
          "104.21.99.7:443"
        ]
      }
    }
  },
// ===========================
//  BYU
// ===========================
"BYU": {
  bugs: {
    "OPOK": {
      payload: [
        "GET http://example-opok.com/ HTTP/1.1\nHost: example-opok.com",
        "CONNECT example-opok.com:443 HTTP/1.1"
      ],
      proxy: [
        "1.1.1.1:443",
        "8.8.8.8:443"
      ]
    },

    "GGWP": {
      payload: [
        "GET http://example-ggwp.com/ HTTP/1.1\nHost: example-ggwp.com",
        "CONNECT example-ggwp.com:443 HTTP/1.1"
      ],
      proxy: [
        "9.9.9.9:443",
        "208.67.222.222:443"
      ]
    }
  }
}
};
// ===========================
//  ELEMENT
// ===========================
const operatorSelect = document.getElementById("operator");
const bugSelect = document.getElementById("bug");
const payloadList = document.getElementById("payloadList");
const proxyList = document.getElementById("proxyList");  // ← DITAMBAHKAN
const payloadOutput = document.getElementById("payloadOutput");
const proxyOutput = document.getElementById("proxyOutput");


// ===========================
//  LOAD OPERATOR
// ===========================
function loadOperators() {
  Object.keys(data).forEach(op => {
    operatorSelect.innerHTML += `<option value="${op}">${op}</option>`;
  });
}


// ===========================
//  LOAD BUG SESUAI OPERATOR
// ===========================
operatorSelect.addEventListener("change", () => {
  bugSelect.innerHTML = `<option value="">Pilih Bug / Kategori</option>`;
  payloadList.innerHTML = `<option value="">Pilih Payload</option>`;
  proxyList.innerHTML = `<option value="">Pilih Proxy</option>`;
  payloadOutput.value = "Payload akan tampil di sini";
  proxyOutput.value = "Proxy akan tampil di sini";

  const op = operatorSelect.value;
  if (!op) return;

  Object.keys(data[op].bugs).forEach(bug => {
    bugSelect.innerHTML += `<option value="${bug}">${bug}</option>`;
  });
});


// ===========================
//  LOAD PAYLOAD & PROXY LIST
// ===========================
bugSelect.addEventListener("change", () => {
  payloadList.innerHTML = `<option value="">Pilih Payload</option>`;
  proxyList.innerHTML = `<option value="">Pilih Proxy</option>`;
  payloadOutput.value = "Payload akan tampil di sini";
  proxyOutput.value = "Proxy akan tampil di sini";

  const op = operatorSelect.value;
  const bug = bugSelect.value;
  if (!op || !bug) return;

  // isi payload
  data[op].bugs[bug].payload.forEach((p, i) => {
    payloadList.innerHTML += `<option value="${i}">Payload ${i + 1}</option>`;
  });

  // isi proxy
  data[op].bugs[bug].proxy.forEach((px, i) => {
    proxyList.innerHTML += `<option value="${i}">Proxy ${i + 1}</option>`;
  });
});


// ===========================
//  TAMPILKAN PAYLOAD
// ===========================
payloadList.addEventListener("change", () => {
  const op = operatorSelect.value;
  const bug = bugSelect.value;
  const idx = payloadList.value;

  if (idx === "") return;

  payloadOutput.value = data[op].bugs[bug].payload[idx];
});


// ===========================
//  TAMPILKAN PROXY
// ===========================
proxyList.addEventListener("change", () => {
  const op = operatorSelect.value;
  const bug = bugSelect.value;
  const idx = proxyList.value;

  if (idx === "") return;

  proxyOutput.value = data[op].bugs[bug].proxy[idx];
});


// ===========================
//  COPY
// ===========================
function copyPayload() {
  payloadOutput.select();
  document.execCommand("copy");
}

function copyProxy() {
  proxyOutput.select();
  document.execCommand("copy");
}


// START
loadOperators();
