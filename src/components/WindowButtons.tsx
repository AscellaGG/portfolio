import { Minus, PanelTop, X } from "lucide-react";

export default function WindowButtons() {
  return (
    <div className="flex gap-1">
      <button type="button" aria-label="Close" className="window-button">
        <Minus />
      </button>
      <button type="button" aria-label="Close" className="window-button">
        <PanelTop />
      </button>
      <button type="button" aria-label="Close" className="window-button">
        <X />
      </button>
    </div>
  );
}
