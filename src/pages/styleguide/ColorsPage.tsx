import { Card } from "@/components/ui/card";

export function ColorsPage() {
  return (
    <div className="px-5 py-6 space-y-6">
      <h2 className="toss-title2 mb-4">Colors</h2>
      
      {/* Blue */}
      <Card className="card-toss p-6 space-y-4">
        <p className="toss-headline">Blue</p>
        <div className="grid grid-cols-7 gap-2">
          {[
            { color: "#E8F3FF", name: "50" },
            { color: "#C7DCFF", name: "100" },
            { color: "#85B8FF", name: "200" },
            { color: "#4593FC", name: "300" },
            { color: "#3182F6", name: "400" },
            { color: "#1B64DA", name: "500" },
            { color: "#194AA6", name: "700" },
          ].map((c) => (
            <div key={c.name} className="text-center">
              <div className="h-12 rounded-xl mb-1" style={{ backgroundColor: c.color }} />
              <span className="toss-caption2 text-muted-foreground">{c.name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Gray */}
      <Card className="card-toss p-6 space-y-4">
        <p className="toss-headline">Gray</p>
        <div className="grid grid-cols-7 gap-2">
          {[
            { color: "#F7F8FA", name: "50" },
            { color: "#F2F4F6", name: "100" },
            { color: "#E5E8EB", name: "200" },
            { color: "#D1D6DB", name: "300" },
            { color: "#B0B8C1", name: "400" },
            { color: "#6B7684", name: "600" },
            { color: "#191F28", name: "900" },
          ].map((c) => (
            <div key={c.name} className="text-center">
              <div className="h-12 rounded-xl mb-1 border border-border" style={{ backgroundColor: c.color }} />
              <span className="toss-caption2 text-muted-foreground">{c.name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Semantic */}
      <Card className="card-toss p-6 space-y-4">
        <p className="toss-headline">Semantic</p>
        <div className="grid grid-cols-5 gap-2">
          {[
            { color: "#F04452", name: "Red" },
            { color: "#FF9500", name: "Orange" },
            { color: "#FFC800", name: "Yellow" },
            { color: "#30C85E", name: "Green" },
            { color: "#936DFF", name: "Purple" },
          ].map((c) => (
            <div key={c.name} className="text-center">
              <div className="h-12 rounded-xl mb-1" style={{ backgroundColor: c.color }} />
              <span className="toss-caption2 text-muted-foreground">{c.name}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
