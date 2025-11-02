import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Trophy, Award, Users, CheckCircle } from "lucide-react";

const SimeonCredentials = () => {
  const awards = [
    {
      icon: <Trophy className="h-5 w-5 text-yellow-500" />,
      title: "Award Winning Creative Visionary",
      organization: "British Parliament House, London",
      badge: "🏆"
    },
    {
      icon: <Award className="h-5 w-5 text-blue-500" />,
      title: "Most Transformative Tech Empowerment Champion 2024",
      organization: "United Kingdom",
      badge: "🎖️"
    },
    {
      icon: <Trophy className="h-5 w-5 text-emerald-500" />,
      title: "Elite International IE 100 Awards",
      organization: "PivotSimply - Coaching & Mentorship Company of the Year - UK",
      badge: "🏆"
    },
    {
      icon: <Star className="h-5 w-5 text-purple-500" />,
      title: "Finalist - Startups Magazine",
      organization: "Hustle Awards 2025",
      badge: "🌟"
    },
    {
      icon: <Award className="h-5 w-5 text-orange-500" />,
      title: "Finalist - British Business Awards",
      organization: "2024",
      badge: "🏅"
    }
  ];

  const achievements = [
    {
      icon: <Star className="h-5 w-5 text-yellow-500" />,
      text: "5-Star Google Transformations",
      badge: "⭐"
    },
    {
      icon: <Users className="h-5 w-5 text-green-500" />,
      text: "1000+ Lives Changed",
      badge: "👥"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-blue-500" />,
      text: "Certified Coaching Professional",
      badge: "✅"
    }
  ];

  return (
    <section className="py-8 px-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-y">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Badge className="mb-2 bg-yellow-500/20 text-yellow-700 hover:bg-yellow-500/30">
            Multi Award Winning
          </Badge>
          <p className="text-muted-foreground">Internationally recognized for excellence in transformation coaching</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {awards.map((award, index) => (
            <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="text-2xl mb-2">{award.badge}</div>
                <div className="flex justify-center mb-2">{award.icon}</div>
                <h4 className="font-semibold text-sm mb-1">{award.title}</h4>
                <p className="text-xs text-muted-foreground">{award.organization}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center gap-2 bg-background/80 rounded-full px-4 py-2 border">
              <span className="text-lg">{achievement.badge}</span>
              {achievement.icon}
              <span className="font-medium text-sm">{achievement.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimeonCredentials;