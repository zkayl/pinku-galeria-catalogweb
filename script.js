const a0_0x901d1a = a0_0x4c61;
(function (_0x222f89, _0x462f86) {
  const _0x390a6c = a0_0x4c61,
    _0x32b9ef = _0x222f89();
  while (!![]) {
    try {
      const _0xc2ea9e =
        parseInt(_0x390a6c(0x1bc)) / 0x1 +
        -parseInt(_0x390a6c(0x198)) / 0x2 +
        -parseInt(_0x390a6c(0x19a)) / 0x3 +
        (parseInt(_0x390a6c(0x1af)) / 0x4) *
          (parseInt(_0x390a6c(0x199)) / 0x5) +
        -parseInt(_0x390a6c(0x1a4)) / 0x6 +
        (-parseInt(_0x390a6c(0x1c4)) / 0x7) *
          (parseInt(_0x390a6c(0x1c3)) / 0x8) +
        parseInt(_0x390a6c(0x195)) / 0x9;
      if (_0xc2ea9e === _0x462f86) break;
      else _0x32b9ef["push"](_0x32b9ef["shift"]());
    } catch (_0x376d07) {
      _0x32b9ef["push"](_0x32b9ef["shift"]());
    }
  }
})(a0_0x5e0b, 0x79855);
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
function a0_0x5e0b() {
  const _0x50fc55 = [
    "now",
    "Gagal\x20menyalin:\x20",
    "div",
    "src",
    "Link\x20berhasil\x20disalin!",
    "classList",
    "className",
    "key",
    "ctrlKey",
    "391011KmPyBt",
    "/detail.html?id=",
    "6281234567890",
    "toDataURL",
    "forEach",
    "then",
    "getElementById",
    "272yYTnzE",
    "107779NLIcNK",
    "hidden",
    "toggle",
    "clipboard",
    "toast",
    "replace",
    "NumberFormat",
    "addEventListener",
    "Gagal\x20menyalin\x20link.",
    "contextmenu",
    "origin",
    "error",
    "format",
    "F12",
    "onload",
    "24133329mUVyrJ",
    "image/jpeg",
    "data",
    "1871770WzdtrI",
    "15fJYTZt",
    "2950596olDOlY",
    "writeText",
    "mobileMenuBtn",
    "body",
    "_blank",
    "mobileMenu",
    "currency",
    "click",
    "height",
    "result",
    "3968112PRPkUD",
    "drawImage",
    "innerText",
    "canvas",
    "shiftKey",
    "open",
    "keydown",
    "show",
    "Lihat\x20*",
    "cloneNode",
    "Yakin\x20ingin\x20menghapus\x20produk\x20ini\x20selamanya?",
    "706032GlTcqJ",
    "preventDefault",
    "catch",
    "products",
  ];
  a0_0x5e0b = function () {
    return _0x50fc55;
  };
  return a0_0x5e0b();
}
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import a0_0x4b3f39 from "./config.js";
export const WA_NUMBER = a0_0x901d1a(0x1be);
export const SITE_URL = window["location"][a0_0x901d1a(0x190)];
const app = initializeApp(a0_0x4b3f39),
  db = getFirestore(app),
  productsCollection = collection(db, "products");
function a0_0x4c61(_0x5d2ace, _0x16484f) {
  _0x5d2ace = _0x5d2ace - 0x18f;
  const _0x5e0bd6 = a0_0x5e0b();
  let _0x4c6147 = _0x5e0bd6[_0x5d2ace];
  return _0x4c6147;
}
export function compressImage(_0x479d8f, _0x1d33ef) {
  const _0xb3931 = a0_0x901d1a,
    _0xc59b6 = new FileReader();
  (_0xc59b6["readAsDataURL"](_0x479d8f),
    (_0xc59b6[_0xb3931(0x194)] = function (_0x13f62f) {
      const _0x4e6308 = _0xb3931,
        _0x3f361e = new Image();
      ((_0x3f361e[_0x4e6308(0x1b6)] = _0x13f62f["target"][_0x4e6308(0x1a3)]),
        (_0x3f361e[_0x4e6308(0x194)] = function () {
          const _0x198f58 = _0x4e6308,
            _0x8acf0a = document["createElement"](_0x198f58(0x1a7)),
            _0x208a49 = 0x1f4,
            _0x39e035 = _0x208a49 / _0x3f361e["width"];
          ((_0x8acf0a["width"] = _0x208a49),
            (_0x8acf0a[_0x198f58(0x1a2)] = _0x3f361e["height"] * _0x39e035));
          const _0x2ec519 = _0x8acf0a["getContext"]("2d");
          (_0x2ec519[_0x198f58(0x1a5)](
            _0x3f361e,
            0x0,
            0x0,
            _0x8acf0a["width"],
            _0x8acf0a[_0x198f58(0x1a2)],
          ),
            _0x1d33ef(_0x8acf0a[_0x198f58(0x1bf)](_0x198f58(0x196), 0.7)));
        }));
    }));
}
export async function addProductToDB(_0x1c61de) {
  const _0x11a85f = a0_0x901d1a;
  try {
    return (
      await addDoc(productsCollection, {
        ..._0x1c61de,
        createdAt: Date[_0x11a85f(0x1b3)](),
      }),
      { success: !![] }
    );
  } catch (_0x26ae29) {
    return (
      console[_0x11a85f(0x191)]("Error\x20adding\x20document:\x20", _0x26ae29),
      {
        success: ![],
        error: _0x26ae29,
      }
    );
  }
}
export async function updateProductInDB(_0x2edb22, _0x46b5ca) {
  const _0x3bbe9b = a0_0x901d1a;
  try {
    const _0x15c1d0 = doc(db, _0x3bbe9b(0x1b2), _0x2edb22);
    return (await updateDoc(_0x15c1d0, _0x46b5ca), { success: !![] });
  } catch (_0x272498) {
    return (
      console[_0x3bbe9b(0x191)](
        "Error\x20updating\x20document:\x20",
        _0x272498,
      ),
      {
        success: ![],
        error: _0x272498,
      }
    );
  }
}
export async function deleteProductFromDB(_0x5d4de5) {
  const _0x4648e7 = a0_0x901d1a;
  confirm(_0x4648e7(0x1ae)) &&
    (await deleteDoc(doc(db, _0x4648e7(0x1b2), _0x5d4de5)));
}
export async function getProductById(_0xd2508f) {
  const _0x32e9fa = a0_0x901d1a,
    _0x3d339c = doc(db, _0x32e9fa(0x1b2), _0xd2508f),
    _0x2bdfe9 = await getDoc(_0x3d339c);
  return _0x2bdfe9["exists"]()
    ? {
        id: _0x2bdfe9["id"],
        ..._0x2bdfe9[_0x32e9fa(0x197)](),
      }
    : null;
}
export function subscribeToProducts(_0x21d6fa) {
  const _0x2cba01 = query(productsCollection, orderBy("createdAt", "desc"));
  onSnapshot(_0x2cba01, (_0x48903e) => {
    const _0x40baa3 = a0_0x4c61,
      _0x4e70e0 = [];
    (_0x48903e[_0x40baa3(0x1c0)]((_0x42e89c) =>
      _0x4e70e0["push"]({
        id: _0x42e89c["id"],
        ..._0x42e89c[_0x40baa3(0x197)](),
      }),
    ),
      _0x21d6fa(_0x4e70e0));
  });
}
export function formatRupiah(_0x25d26e) {
  const _0x380ccb = a0_0x901d1a;
  return new Intl[_0x380ccb(0x1ca)]("id-ID", {
    style: _0x380ccb(0x1a0),
    currency: "IDR",
    minimumFractionDigits: 0x0,
  })[_0x380ccb(0x192)](_0x25d26e);
}
export function showToast(_0x1e2c55) {
  const _0x1cb3de = a0_0x901d1a;
  let _0x8abfb2 = document[_0x1cb3de(0x1c2)]("toast");
  (!_0x8abfb2 &&
    ((_0x8abfb2 = document["createElement"](_0x1cb3de(0x1b5))),
    (_0x8abfb2["id"] = _0x1cb3de(0x1c8)),
    document[_0x1cb3de(0x19d)]["appendChild"](_0x8abfb2)),
    (_0x8abfb2[_0x1cb3de(0x1a6)] = _0x1e2c55),
    (_0x8abfb2[_0x1cb3de(0x1b9)] = "show"),
    setTimeout(() => {
      const _0x54109f = _0x1cb3de;
      _0x8abfb2["className"] = _0x8abfb2[_0x54109f(0x1b9)][_0x54109f(0x1c9)](
        _0x54109f(0x1ab),
        "",
      );
    }, 0xbb8));
}
export function shareToWA(_0x19b61c, _0x15a76d) {
  const _0x21d4ea = a0_0x901d1a,
    _0xfc1335 = SITE_URL + _0x21d4ea(0x1bd) + _0x19b61c,
    _0x56bade =
      _0x21d4ea(0x1ac) +
      _0x15a76d +
      "*\x20yang\x20cantik\x20ini\x20di\x20Pinku\x20Galeria!\x0a" +
      _0xfc1335;
  window[_0x21d4ea(0x1a9)](
    "https://wa.me/?text=" + encodeURIComponent(_0x56bade),
    _0x21d4ea(0x19e),
  );
}
export function copyLink(_0x525e7f) {
  const _0x5cdeaa = a0_0x901d1a,
    _0x537232 = SITE_URL + "/detail.html?id=" + _0x525e7f;
  navigator[_0x5cdeaa(0x1c7)]
    [_0x5cdeaa(0x19b)](_0x537232)
    [_0x5cdeaa(0x1c1)](() => {
      const _0x34f894 = _0x5cdeaa;
      showToast(_0x34f894(0x1b7));
    })
    [_0x5cdeaa(0x1b1)]((_0x5b1b11) => {
      const _0x5b4580 = _0x5cdeaa;
      (console[_0x5b4580(0x191)](_0x5b4580(0x1b4), _0x5b1b11),
        showToast(_0x5b4580(0x1cc)));
    });
}
export function setupMobileMenu() {
  const _0x49d4e9 = a0_0x901d1a,
    _0xdbe74d = document["getElementById"](_0x49d4e9(0x19c)),
    _0x4d5a3e = document[_0x49d4e9(0x1c2)](_0x49d4e9(0x19f));
  if (_0xdbe74d && _0x4d5a3e) {
    const _0x59cc2c = _0xdbe74d[_0x49d4e9(0x1ad)](!![]);
    (_0xdbe74d["parentNode"]["replaceChild"](_0x59cc2c, _0xdbe74d),
      _0x59cc2c[_0x49d4e9(0x1cb)](_0x49d4e9(0x1a1), (_0x3ff9bb) => {
        const _0x4339b8 = _0x49d4e9;
        (_0x3ff9bb[_0x4339b8(0x1b0)](),
          _0x4d5a3e[_0x4339b8(0x1b8)][_0x4339b8(0x1c6)](_0x4339b8(0x1c5)));
      }));
  }
}
export function initProtection() {
  const _0xefc84b = a0_0x901d1a;
  (document[_0xefc84b(0x1cb)](_0xefc84b(0x18f), (_0x75d0f5) =>
    _0x75d0f5[_0xefc84b(0x1b0)](),
  ),
    document["addEventListener"](_0xefc84b(0x1aa), function (_0x5c982c) {
      const _0x22e2c0 = _0xefc84b;
      if (
        _0x5c982c["key"] === _0x22e2c0(0x193) ||
        (_0x5c982c[_0x22e2c0(0x1bb)] &&
          _0x5c982c[_0x22e2c0(0x1a8)] &&
          _0x5c982c[_0x22e2c0(0x1ba)] === "I") ||
        (_0x5c982c[_0x22e2c0(0x1bb)] && _0x5c982c["key"] === "u")
      )
        return (_0x5c982c[_0x22e2c0(0x1b0)](), ![]);
    }));
}
