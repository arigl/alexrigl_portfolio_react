import { useEffect } from "react";
import Vara from "vara";

function VaraText({ text }: { text: string }) {
  const containerId = `vara-container-${text.replace(/\s/g, "")}`;
  console.log("testing");
  useEffect(() => {
    console.log(sessionStorage.getItem("animationTriggered"));
    console.log("vara text");
    const container = document.getElementById(containerId);

    if (container) {
      // If the container exists, clear its content
      console.log(container.innerHTML);
      container.innerHTML = "";

      const fontSize = window.innerWidth < 768 ? 40 : 50;

      // Initialize Vara only if the animation has not been triggered in the current session
      const animationTriggered = sessionStorage.getItem("animationTriggered");
      if (!animationTriggered) {
        new Vara(
          `#${containerId}`,
          "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
          [
            {
              text: text,
              fontSize: fontSize,
              strokeWidth: 1.5,
              delay: 1000,
              textAlign: "center",
              color: "black",
            },
          ]
        );

        // Set the flag in sessionStorage to indicate that the animation has been triggered in this session
        sessionStorage.setItem("animationTriggered", "true");
      } else {
        new Vara(
          `#${containerId}`,
          "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
          [
            {
              text: text,
              fontSize: fontSize,
              strokeWidth: 1.5,
              delay: 0,
              textAlign: "center",
              color: "black",
              autoAnimation: true,
            },
          ]
        );
      }
    }
  }, [containerId, text]);

  return <div id={containerId} className=""></div>;
}

// Rest of your component...

export default VaraText;
