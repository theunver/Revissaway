"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  target,
  duration = 2000,
  suffix = "",
  prefix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Intersection Observer to trigger animation when element is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Animate counter when visible
  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function (easeOutQuart for smooth deceleration)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target); // Ensure we end at exact target
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isVisible, target, duration]);

  // Format number with commas
  const formatNumber = (num: number): string => {
    if (decimals > 0) {
      return num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Special formatting for large numbers
  const getDisplayValue = (): string => {
    if (target >= 1000000) {
      // For millions, show as "1.5M" format
      const millions = count / 1000000;
      return millions.toFixed(1);
    }
    return formatNumber(count);
  };

  // Get appropriate suffix
  const getDisplaySuffix = (): string => {
    if (target >= 1000000 && suffix === "+") {
      return "M+";
    }
    return suffix;
  };

  return (
    <span ref={counterRef} className="inline-block">
      {prefix}
      {getDisplayValue()}
      {getDisplaySuffix()}
    </span>
  );
}

