import React, { ReactNode, useEffect, useState } from "react";

interface HackerEffectTextProps {
  initialValue: string;
  targetValue?: string;
  children: ReactNode;
  className?: string;
  capitalize?: boolean;
}

const HackerEffectText: React.FC<HackerEffectTextProps> = ({
  initialValue,
  targetValue,
  children,
  className,
  capitalize = false,
}) => {
  const [lines, setLines] = useState<string[]>(
    initialValue
      .split("\n")
      .map((line) => (capitalize ? line.toUpperCase() : line))
  );
  let interval: NodeJS.Timeout | null = null;

  const capitalizeText = (value: string): string =>
    capitalize ? value.toUpperCase() : value;

  const calculateIntervalDuration = (text: string): number => {
    const baseSpeed = 500;
    return Math.max(baseSpeed / text.length, 20);
  };

  const startAnimation = () => {
    let iterations: number[] = Array(lines.length).fill(0);

    if (interval !== null) {
      clearInterval(interval as unknown as number);
    }

    const initialText = capitalizeText(initialValue);
    const targetText = targetValue ? capitalizeText(targetValue) : "";

    interval = setInterval(() => {
      setLines((prevLines) =>
        prevLines.map((line, lineIndex) => {
          const currentText = targetText || initialText;
          return line
            .split("")
            .map((_, index) =>
              index < iterations[lineIndex]
                ? currentText[index]
                : String.fromCharCode(65 + Math.floor(Math.random() * 26))
            )
            .join("");
        })
      );

      if (
        iterations.every(
          (iteration, lineIndex) => iteration >= lines[lineIndex].length
        )
      ) {
        clearInterval(interval as unknown as number);
        setLines((prevLines) =>
          prevLines.map(() =>
            targetText ? capitalizeText(targetText) : initialText
          )
        );
      }

      iterations = iterations.map((iteration) => iteration + 1);
    }, calculateIntervalDuration(initialText));
  };

  const handleMouseOver = () => startAnimation();

  const handleMouseLeave = () => {
    clearInterval(interval as unknown as number);
    setLines(
      initialValue
        .split("\n")
        .map((line) => (capitalize ? line.toUpperCase() : line))
    );
  };

  useEffect(
    () => () => clearInterval(interval as unknown as number),
    [interval]
  );

  return React.cloneElement(
    children as React.ReactElement,
    {
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseLeave,
    },
    <div className={className}>
      {lines.map((line, index) => (
        <span key={index}>{line}</span>
      ))}
    </div>
  );
};

export default HackerEffectText;
