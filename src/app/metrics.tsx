"use client";
import Script from 'next/script'

const Metrics = () => {
    return (
        <>
            {/* <!-- Yandex.Metrika counter --> */}
        <Script id="yandex">
          {`(function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      })(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js",
        "ym"
      );

      ym(91346085, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });`}
        </Script>
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/91346085"
              className='absolute left-[-9999px]'
              alt="" />
          </div>
        </noscript>
        {/* <!-- /Yandex.Metrika counter --> */}

        {/* <!-- vk pixel --> */}
        <Script id="vk" type="text/javascript">
          {`(function () {
        var t = document.createElement("script");
        (t.type = "text/javascript"),
          (t.async = !0),
          (t.src = "https://vk.com/js/api/openapi.js?169"),
          (t.onload = function () {
            VK.Retargeting.Init("VK-RTRG-1607322-cCvpJ"), VK.Retargeting.Hit();
          }),
          document.head.appendChild(t);
      })();`}
        </Script>
        <noscript
          // eslint-disable-next-line @next/next/no-img-element
          ><img
            src="https://vk.com/rtrg?p=VK-RTRG-1607322-cCvpJ"
            className='absolute left-[-9999px]'
            alt=""
        /></noscript>
        {/* <!-- /vk pixel --> */}

        {/* <!-- Google tag (gtag.js) --> */}
        {/* // eslint-disable-next-line @next/next/next-script-for-ga */}
        <Script id="googletag" async src="https://www.googletagmanager.com/gtag/js?id=G-BFHB4LRVHL" />
        <Script id="google">
          {`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-BFHB4LRVHL");`}
        </Script>
        <Script id="okocrm-chat" src="https://chat.okocrm.com/widget/js/1dd25179-12a9-4ec0-bf46-c7800badc515" async></Script>
        </>
    );
};

export default Metrics;