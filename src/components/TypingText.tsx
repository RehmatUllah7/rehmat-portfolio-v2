import { useEffect, useState } from "react";

interface TypingTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseTime = 1500,
}) => {
  const [textIndex, setTextIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentText.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-white font-semibold">
      {displayText}
      <span className="text-[#00FFFF] animate-pulse font-bold">|</span>
    </span>
  );
};

export default TypingText;
