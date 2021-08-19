import { useCallback, useEffect, useState } from "react";

export function useClientRect() {
  const [node, setNode] = useState(null);
  const [rect, setRect] = useState(null);

  function getElementContentSize(element) {
    const styles = window.getComputedStyle(element);
    const paddingLR =
      parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
    const paddingTB =
      parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);

    return {
      width: element.clientWidth - paddingLR,
      height: element.clientHeight - paddingTB,
    };
  }

  const ref = useCallback((node) => {
    if (node !== null) {
      setNode(node);
      setRect(getElementContentSize(node));
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      if (node !== null) {
        setRect(getElementContentSize(node));
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [node]);
  return [rect, ref];
}
