import React, { ReactNode } from "react";
interface HackerEffectTextProps {
    initialValue: string;
    targetValue?: string;
    children: ReactNode;
    className?: string;
    capitalize?: boolean;
}
declare const HackerEffectText: React.FC<HackerEffectTextProps>;
export default HackerEffectText;
