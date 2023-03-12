!(function (a) {
  var t,
    i,
    e,
    l,
    n,
    o =
      '<svg><symbol id="icon-caidan-jiashicang" viewBox="0 0 1024 1024"><path d="M832 160a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H192a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96h640z m-288 352a32 32 0 0 0-32 32v160a32 32 0 0 0 64 0v-160a32 32 0 0 0-32-32z m-224 96a32 32 0 0 0-32 32v64a32 32 0 0 0 64 0v-64a32 32 0 0 0-32-32z m448-224a32 32 0 0 0-32 32v288a32 32 0 0 0 64 0v-288a32 32 0 0 0-32-32zM320 256a128 128 0 1 0 0 256 128 128 0 0 0 0-256z m0 64a64 64 0 1 1 0 128 64 64 0 0 1 0-128z" fill="#000000" fill-opacity=".65" ></path></symbol><symbol id="icon-caidan-yingxiaozhongxin" viewBox="0 0 1024 1024"><path d="M942.784 559.04a64 64 0 0 1 0 90.496l-316.8 316.8a64 64 0 0 1-90.496 0l-422.08-422.08a96 96 0 0 1-27.936-73.504l15.104-256.448A96 96 0 0 1 190.72 124.096l256.448-15.072a96 96 0 0 1 73.536 27.936l422.08 422.08z m-316.8 181.024L422.4 536.416a32 32 0 0 0-45.248 45.248l203.616 203.648a32 32 0 1 0 45.28-45.248zM331.84 264.864a64 64 0 1 0-90.496 90.528 64 64 0 0 0 90.496-90.496z m429.92 339.424l-203.648-203.648a32 32 0 0 0-45.248 45.248l203.648 203.648a32 32 0 1 0 45.248-45.248z" fill="#000000" fill-opacity=".65" ></path></symbol><symbol id="icon-caidan-dingdanzhongxin1" viewBox="0 0 1024 1024"><path d="M768 96a96 96 0 0 1 96 96v640a96 96 0 0 1-96 96H256a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h512z m-224 576h-192a32 32 0 0 0 0 64h192a32 32 0 0 0 0-64z m64-192h-256a32 32 0 0 0 0 64h256a32 32 0 0 0 0-64z m64-192H352a32 32 0 0 0 0 64h320a32 32 0 0 0 0-64z" fill="#000000" fill-opacity=".65" ></path></symbol><symbol id="icon-caidan-xitongguanli" viewBox="0 0 1024 1024"><path d="M736 800a32 32 0 0 1 0 64H288a32 32 0 0 1 0-64h448z m96-640a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H192a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96h640zM512 256a32 32 0 0 0-32 32v3.2c-20.448 4.16-39.456 12.16-56.224 23.296l-2.272-2.24a32 32 0 0 0-45.28 45.248l2.272 2.24A159.104 159.104 0 0 0 355.2 416H352a32 32 0 0 0 0 64l3.2 0.032c4.16 20.416 12.192 39.424 23.296 56.192l-2.24 2.272a32 32 0 0 0 45.248 45.28l2.24-2.272A159.104 159.104 0 0 0 480 604.8L480 608a32 32 0 0 0 64 0v-3.2a159.104 159.104 0 0 0 56.224-23.296l2.272 2.24a32 32 0 0 0 45.28-45.248l-2.272-2.24A159.104 159.104 0 0 0 668.8 480L672 480a32 32 0 0 0 0-64h-3.2a159.104 159.104 0 0 0-23.296-56.224l2.24-2.272a32 32 0 1 0-45.248-45.28l-2.24 2.272A159.104 159.104 0 0 0 544 291.2L544 288a32 32 0 0 0-32-32z m0 96a96 96 0 1 1 0 192 96 96 0 0 1 0-192z" fill="#000000" fill-opacity=".65" ></path></symbol><symbol id="icon-caidan-zhandianguanli" viewBox="0 0 1024 1024"><path d="M640 599.84A222.976 222.976 0 0 0 768 640a223.136 223.136 0 0 0 96-21.568V800a96 96 0 0 1-96 96H256a96 96 0 0 1-96-96v-181.568c29.12 13.824 61.632 21.568 96 21.568a222.816 222.816 0 0 0 128-40.16A222.976 222.976 0 0 0 512 640a222.816 222.816 0 0 0 128-40.16zM746.752 128a96 96 0 0 1 82.144 46.336C894.976 283.616 928 364.16 928 416a160 160 0 0 1-288 96 159.68 159.68 0 0 1-128 64 159.744 159.744 0 0 1-128-64 160 160 0 0 1-288-96c0-51.84 33.024-132.384 99.104-241.664A96 96 0 0 1 271.04 128.192L277.248 128h469.504z" fill="#000000" fill-opacity=".65" ></path></symbol><symbol id="icon-caidan-shebeiguanli" viewBox="0 0 1024 1024"><path d="M736 96a96 96 0 0 1 96 96v640h48a48 48 0 0 1 0 96h-736a48 48 0 0 1 0-96H192V192a96 96 0 0 1 96-96h448z m-184.192 393.824l-2.784 0.384a16 16 0 0 0-9.184 5.984L403.2 678.4l-1.504 2.464a16 16 0 0 0 4.704 19.936l2.176 1.376A16 16 0 0 0 416 704h52l-12.512 100.224-0.128 2.88a16 16 0 0 0 28.8 8.704L620.8 633.6l1.504-2.464a16 16 0 0 0-4.704-19.936l-2.176-1.376A16 16 0 0 0 608 608h-52l12.512-100.224 0.128-2.88a16 16 0 0 0-14.016-14.976l-2.816-0.096zM672 192H352a64 64 0 0 0-64 64v96a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64z m-32 64a32 32 0 0 1 32 32v32a32 32 0 0 1-32 32h-256a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h256z" fill="#000000" fill-opacity=".65" ></path></symbol><symbol id="icon-caidan-dingdanzhongxin" viewBox="0 0 1024 1024"><path d="M768 96a96 96 0 0 1 96 96v640a96 96 0 0 1-96 96H256a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h512z m-224 576h-192a32 32 0 0 0 0 64h192a32 32 0 0 0 0-64z m64-192h-256a32 32 0 0 0 0 64h256a32 32 0 0 0 0-64z m64-192H352a32 32 0 0 0 0 64h320a32 32 0 0 0 0-64z" fill="#000000" fill-opacity=".65" ></path></symbol></svg>',
    c = (c = document.getElementsByTagName('script'))[c.length - 1].getAttribute('data-injectcss'),
    d = function (a, t) {
      t.parentNode.insertBefore(a, t);
    };
  if (c && !a.__iconfont__svg__cssinject__) {
    a.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      );
    } catch (a) {
      console && console.log(a);
    }
  }
  function h() {
    n || ((n = !0), e());
  }
  function m() {
    try {
      l.documentElement.doScroll('left');
    } catch (a) {
      return void setTimeout(m, 50);
    }
    h();
  }
  (t = function () {
    let a,
      t = document.createElement('div');
    (t.innerHTML = o),
      (o = null),
      (t = t.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (t = t),
        (a = document.body).firstChild ? d(t, a.firstChild) : a.appendChild(t));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((i = function () {
            document.removeEventListener('DOMContentLoaded', i, !1), t();
          }),
          document.addEventListener('DOMContentLoaded', i, !1))
      : document.attachEvent &&
        ((e = t),
        (l = a.document),
        (n = !1),
        m(),
        (l.onreadystatechange = function () {
          'complete' == l.readyState && ((l.onreadystatechange = null), h());
        }));
})(window);
