import { useEffect, useMemo, useRef, useState } from 'react';

export default function ScaledFrame({ designWidth, children }) {
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState(undefined);
  const [isScaledLayout, setIsScaledLayout] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const rawScale = window.innerWidth / designWidth;
      if (rawScale < 1) {
        setIsScaledLayout(false);
        setScale(1);
        return;
      }
      setIsScaledLayout(true);
      setScale(Math.min(1.8, rawScale));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [designWidth]);

  useEffect(() => {
    const node = contentRef.current;
    if (!node || !isScaledLayout) {
      setScaledHeight(undefined);
      return;
    }

    const updateHeight = () => {
      const contentHeight = node.scrollHeight || 0;
      setScaledHeight(contentHeight ? contentHeight * scale : undefined);
    };

    updateHeight();

    const observer = new ResizeObserver(() => updateHeight());
    observer.observe(node);

    return () => observer.disconnect();
  }, [isScaledLayout, scale]);

  const frameStyle = useMemo(
    () =>
      isScaledLayout
        ? {
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            width: designWidth
          }
        : { width: '100%' },
    [designWidth, isScaledLayout, scale]
  );

  return (
    <div
      style={{
        width: isScaledLayout ? designWidth * scale : '100%',
        height: isScaledLayout ? scaledHeight : undefined,
        margin: '0 auto'
      }}
    >
      <div ref={contentRef} style={frameStyle}>
        {children}
      </div>
    </div>
  );
}
