import { useState, useEffect } from "react";

export const usePaypalSdkScriptAppender = (paypalClientId: string): boolean => {
  const [sdkScriptRedy, setsdkScriptRedy] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}`;
    script.async = true;
    script.onload = () => {
      setsdkScriptRedy(true);
    };
    document.body.appendChild(script);
  }, [paypalClientId]);

  return sdkScriptRedy;
};
