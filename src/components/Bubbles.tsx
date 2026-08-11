export default function Bubbles() {
  return (
    <div className="pointer-events-none absolute inset-0 fixed inset-0 -z-10 overflow-hidden">
      <div
        className="
        absolute
        -left-40
        -top-40
        h-[500px]
        w-[500px]
        rounded-full
        bg-powder-blush/30
        blur-[120px]
      "
      />

      <div
        className="
        absolute
        right-[-200px]
        top-[20%]
        h-[600px]
        w-[600px]
        rounded-full
        bg-pacific-cyan/30
        blur-[140px]
      "
      />

      <div
        className="
        absolute
        bottom-[-200px]
        left-[30%]
        h-[500px]
        w-[500px]
        rounded-full
        bg-muted-teal/30
        blur-[130px]
      "
      />
    </div>
  );
}
