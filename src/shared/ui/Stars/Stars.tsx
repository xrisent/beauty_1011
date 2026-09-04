import { IconStar } from "shared/assets";

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} filled={i < count} />
      ))}
    </div>
  );
}
