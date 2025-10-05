import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

export function StatCard({ title, value, change, changeType = "neutral", icon: Icon }: StatCardProps) {
  const changeColor = {
    positive: "text-success",
    negative: "text-destructive",
    neutral: "text-muted-foreground",
  }[changeType];

  return (
    <Card className="p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300 card-glow group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground font-medium">{title}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-3xl font-bold text-foreground">{value}</h3>
          {change && (
            <span className={`text-sm font-semibold ${changeColor}`}>
              {change}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground">Compared to last month</p>
      </div>
    </Card>
  );
}
