var mensaje1 = document.getElementsByName("mensaje1");
var mensaje2 = document.getElementsByName("mensaje2");

var btnEncriptar = document.getElementsByName("encriptar");
var btnDesencriptar = document.getElementsByName("desencriptar");

var dic = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

let criterio = "^[a-z0-9\\s]+$";

let exp_reg = new RegExp(criterio);

function encriptar() {
  let texto = document.querySelectorAll("textarea")[0].value;
  texto = texto.split('');
  texto = texto.filter((el) => {
    return exp_reg.test(el);
  });
  texto = texto.join('');

  let result = "";

  if (
    texto.indexOf(dic["a"]) >= 0 ||
    texto.indexOf(dic["e"]) >= 0 ||
    texto.indexOf(dic["i"]) >= 0 ||
    texto.indexOf(dic["o"]) >= 0 ||
    texto.indexOf(dic["u"]) >= 0
  ) {
    var notification = new Notification(
      "El mensaje ya se encuentra encriptado"
    );
    setTimeout(function () {
      notification.close();
    }, 2000);
    alert("El mensaje ya se encuentra encriptado");
  } else {
    for (let i = 0; i < texto.length; i++) {
      if (dic[texto[i]]) {
        result += dic[texto[i]];
      } else {
        result += texto[i];
      }
    }
    if (result.length > 0) {
      document
        .querySelectorAll("textarea")[1]
        .setAttribute("class", "textarea-dec");

      document.getElementById("textarea-background-id").style.display =
        "none";
      document.getElementById("copiar").style.display = "block";

      var notification = new Notification(
        "El mensaje ha sido encriptado"
      );
      setTimeout(function () {
        notification.close();
      }, 2000);
    } else {
      document
        .querySelectorAll("textarea")[1]
        .setAttribute("class", "no-visible");

      document.getElementById("textarea-background-id").style.display =
        "block";
      document.getElementById("copiar").style.display = "none";
    }
    document.querySelectorAll("textarea")[1].value = result;
  }
}

function replaceTextDic(texto) {
  let result = texto;

  for (var i in dic) {
    result = result.replaceAll(dic[i], i);
  }

  if (result.length > 0) {
    document
      .querySelectorAll("textarea")[1]
      .setAttribute("class", "textarea-dec");
  } else {
    document
      .querySelectorAll("textarea")[1]
      .setAttribute("class", "no-visible");
  }
  return result;
}

function desencriptar() {
  let texto = document.querySelectorAll("textarea")[0].value;
  texto = texto.split('');
  texto = texto.filter((el) => {
    return exp_reg.test(el);
  });
  texto = texto.join('');

  let result = "";

  result = replaceTextDic(texto);
  document.querySelectorAll("textarea")[1].value = result;
  if (result.length > 0) {
    document.getElementById("textarea-background-id").style.display =
      "none";
    document.getElementById("copiar").style.display = "block";
    var notification = new Notification(
      "El mensaje ha sido desencriptado"
    );
    setTimeout(function () {
      notification.close();
    }, 2000);
  } else {
    document.getElementById("textarea-background-id").style.display =
      "block";
    document.getElementById("copiar").style.display = "none";
  }
}

function copiarTextClipBoard_v1() {
  let texto = document.querySelectorAll("textarea")[1];
  let copy = texto.select();
  document.execCommand("copy");
  var notification = new Notification("El mensaje ha sido copiado");
  setTimeout(function () {
    notification.close();
  }, 2000);

  alert("Copied!");
}

function copiarAlPortapapelesOK() {
  let textarea = document.querySelectorAll("textarea")[1].select();
  document.execCommand("copy");
}

function copiarAlPortapapeles() {
  var aux = document.createElement("textarea");
  document.body.appendChild(aux);
  let texto = document.querySelectorAll("textarea")[1].value;
  aux.setAttribute("value", texto);
  aux.value = texto;
  aux.setAttribute("readonly", "");
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  var notification = new Notification("El mensaje ha sido copiado");
  setTimeout(function () {
    notification.close();
  }, 2000);
}

var derechos =
  "BRAYAN MUÑOZ     -     " +
  "BRAYAN'S COMPANY     -     " +
  "ORACLE                                                              ";

function scroll() {
  document.frm.w.value = derechos;
  derechos = derechos.substring(1, derechos.length) + derechos.charAt(0);
  window.setTimeout("scroll()", 150);
}

