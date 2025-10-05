import { FileText, FolderOpen, Sparkles, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your overview</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
            <FileText className="w-4 h-4 mr-2" />
            New Document
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-muted">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Documents"
                value="24"
                change="+12.5%"
                changeType="positive"
                icon={FileText}
              />
              <StatCard
                title="Active Folders"
                value="8"
                change="+8.2%"
                changeType="positive"
                icon={FolderOpen}
              />
              <StatCard
                title="AI Assists"
                value="156"
                change="+29.4%"
                changeType="positive"
                icon={Sparkles}
              />
              <StatCard
                title="Words Written"
                value="12.5K"
                change="+15.3%"
                changeType="positive"
                icon={TrendingUp}
              />
            </div>

            {/* Recent Documents */}
            <Card className="p-6 bg-card border border-border">
              <h2 className="text-xl font-semibold mb-4">Recent Documents</h2>
              <div className="space-y-3">
                {[
                  { name: "Q4 Business Report.docx", modified: "2 hours ago", status: "Draft" },
                  { name: "Marketing Proposal.docx", modified: "5 hours ago", status: "Final" },
                  { name: "Project Timeline.docx", modified: "1 day ago", status: "Review" },
                  { name: "Meeting Notes.docx", modified: "2 days ago", status: "Draft" },
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-border/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">Modified {doc.modified}</p>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="p-6 bg-card border border-border">
              <h2 className="text-xl font-semibold mb-4">Analytics Coming Soon</h2>
              <p className="text-muted-foreground">Document analytics and insights will be available here.</p>
            </Card>
          </TabsContent>

          <TabsContent value="recent">
            <Card className="p-6 bg-card border border-border">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <p className="text-muted-foreground">Your recent activity timeline will appear here.</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
