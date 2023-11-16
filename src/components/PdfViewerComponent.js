import React from 'react';
import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current; // This `useRef` instance will render the PDF.

    let PSPDFKit;

    (async function () {
      PSPDFKit = await import("pspdfkit")

		PSPDFKit.unload(container) // Ensure that there's only one PSPDFKit instance.

      return await PSPDFKit.load({
        licenseKey: 'skhUNdHevdfv3ocq8Y13s-tlpl-FkkxNnjpYxLQcJNnflz3zS7ostYvNw26Fevam2VRgvpfeSxvY5GwDZIsw4fxt3OhMhE3KSCmsJt_NNAC6Smdpt_HT7bB34N5ZNFwqO2gr5jHfwPRKUA24KWLgusRIZADLA1jLL0GNuZnPfPcu9tpKFZujBQAP9nlP6pVhSYOQ1OQQHQuM6pvnSTUT8xOsekn-OWAU-Cq8buUUtEFixXf_7bxymB9pKDPfltXZIfoxMGnVbC9Ccjo6B-mrbe83i5xG2yxAKux5hKv9O64J2wE9CGJOjWEn4SlmrUwVceOeAQr5ZQga-_YaRryuqP-K2tiliCzZlVLYMY9mCFE7Mo-nATvBW3uC87kyDnk1lyaCOU9l3tOAp4UnPb96eMwygMlspMSbwjUwHFh9ezF_m4THlVK3O2z9qlLEvORaW-8JYeqxJt9wqDKzNiXeIdVUdYrCMhqFm1LvbjjwRQ6pYbklcVHAMJyT4AlZU7i3X9hdQYUmWQkdmgrifqSi8bdanI7yGyMB7ny4EAYGTOJPgI7aVhFOZvMklw_putUWdActQvw6XdRFUufKTYo6--cXrjLSRk1Mr7NPrKqMIm1MqSPub9rWG5NR3apDbo0E2bMKYQ408eoKevfMWhc6mWUKT9ONiqMUTQ7_FiJuBtA=',
        // Container where PSPDFKit should be mounted.
        container,
        // The document to open.
        document: props.document,
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}/`
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container)
  }, []);

  // This div element will render the document to the DOM.
  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />
}