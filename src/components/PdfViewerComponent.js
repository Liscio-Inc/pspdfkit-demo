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
            licenseKey: 'xCedLHtLRWdN1CwAtPQ1xKxKA8tS7EQvx3N6UtWa6_sU5Ktx0uv9oFJMDcS3E1BrTLx71_I54kvVnqxqoY2SiPojrFfsRCcjzJzWCsVlCnrGswj83RsCc6e-6g8fuv0BTMJLeAz0b3_-hi-skAxw-4JFew_jFP0UxHk5bcm7sqcj0cu-LrY6Xn4usygEz_kcc2OfzHXbUxSgDqxVCev8FZLm8LqlrxBjAeCr58ZBLT7kQZ2imalvR51ltX3hPWg0GENm3rxspqjVKkdfEfJT_UvRzgcQWpe_b-jrb9Sfq4oI1F76tTcOtzq7Hwxu6q2I2fGNVN25x3zSdpu7dR_zSsqfsXJoytHqOV1B_3k2ohEt7lIiW8y9AMfvLu9HJe0B--GUpKjiXvubG2Kgi4RRmJbvlPXpM2PoZCU90pycahCFkR2_e99tMy5zv4ePTaJN9BVX1Zf5Z1xlEeD4Sgd-Eh8JM6NcOxiT0vKWo_zMRtsYW0YPfABe7T4UWYCplCWXDXzdYVTLLBfNcrZ624Q1lUZvPL3-7IosFRzwySI1Twb6eXpGamb_h0xRyoLKj5LXLzrlUSbonBMIeePlRDvbnayTljvNEdmfZXLMOPGcizT6Yt3t6RbfMgMosEF6Z9LxyyjJyHDwEgP3tjaJ9xJ0SWHwWwoTQ8maPaIUNlkmBfk=',
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