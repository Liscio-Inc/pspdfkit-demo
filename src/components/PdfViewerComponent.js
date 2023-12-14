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
            licenseKey: 'hJAr9snbJtJRWdc6z4S2JDT2WUmF4e5exDfSJ6zwFKzzqY-3wyjo2H8T0AQyoyR7kq50ToTcc1XdVRlh-eaki-4-SOzJvrx2s72euCTUyzGDgQoMoOTASZNG5lFtpqVXfoZB6egUSXQPkpK-C-9_Wb1erY7x5bxAFdK8SoSbcFlamOtf1KrQwl04jEXMQpXuUiBCfTtIpJXxZ6pLbhzX5t1vAlABoSTf7EIL4pGTd7uj6lFnocZH79njzu-C5UPYRANSPCBgVnblNXHwJeHa2igbVkEepchF-KVIvnxHgbQT-eOym-t3wtjQuDsQJaVzL8q6K6aqIFf_K5QJbrsNpK15Y_2_Lrow2lqURrKhfVEDdhlS7TOYzvAq9VwJ-llsPno_v5D4cpJBkI4C3_EKTx0NjpxoT8IIOdrdzNKBzveLkyL1bYzLVMybYc0kaUCECk08JfxgY8Rznp_cmhY5HXbyLE_Y23zPtDIxI979evyaCGkCO9WsJ0TSxIPWMux7fLZs1kWpgAzpw_bmd-dj_yHOsj8XyMPmZZpQB5FOmoUl9XA_eEBni7qm6YW7pX6LJV7KfK3UyoGzDsnE4xZANJXDapkFwKsJsp2o-UWei5FQJhbGOcSGIT6Bh1gEpuf35cD3oqftc41uQULKCDLNy-34AzWaY_FVrT_HxzXCruo=',
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