export function Code({ code, name }: { code: string; name: string }) {
  return (
    <div className="overflow-hidden rounded bg-zinc-900 font-mono text-sm font-bold">
      <pre className="p-2">{code}</pre>
      <div className="flex bg-zinc-700 px-2 py-1 font-bold">{name}</div>
    </div>
  );
}
