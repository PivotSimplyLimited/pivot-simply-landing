import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Sparkles, Trophy, Mic, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import contentData from "../../content-export/our-journey.json";

const OurJourney = () => {
  const iconMap: Record<string, typeof Trophy> = {
    Trophy,
    Award,
    Sparkles,
    Heart,
  };

  const awards = contentData.awards.list.map((award) => ({
    ...award,
    icon: iconMap[award.icon],
  }));

  const timeline = contentData.timeline.milestones;
  const values = contentData.values.list;

  return (
    <div className="min-h-screen bg-gradient-section">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Badge variant="secondary" className="mb-6 text-base px-6 py-2">
            {contentData.hero.badge}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-hero animate-fade-in-up">
            {contentData.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-semibold">
            {contentData.hero.subtitle}
          </p>
          <blockquote className="text-lg md:text-xl text-foreground italic max-w-3xl mx-auto border-l-4 border-primary pl-6 mt-8">
            "{contentData.hero.quote}"
          </blockquote>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-strong bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-16">
              <div className="flex items-center justify-center mb-8">
                <Target className="w-12 h-12 text-primary mr-4" />
                <h2 className="text-4xl font-bold">{contentData.whoWeAre.title}</h2>
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                {contentData.whoWeAre.paragraphs.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-strong bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{contentData.founderStory.title}</h2>
                <p className="text-xl text-muted-foreground">{contentData.founderStory.subtitle}</p>
              </div>

              <blockquote className="text-2xl font-semibold text-primary italic text-center border-l-4 border-r-4 border-primary px-8 py-6 mb-12 bg-primary/5 rounded-lg">
                "{contentData.founderStory.quote}"
              </blockquote>

              <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                {contentData.founderStory.sections.map((section, index) => {
                  if (section.type === "highlight") {
                    return (
                      <div key={index} className="bg-muted/30 p-6 rounded-lg">
                        <p>{section.content as string}</p>
                      </div>
                    );
                  } else if (section.type === "emphasis") {
                    return (
                      <div key={index} className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                        <p>{section.content as string}</p>
                      </div>
                    );
                  } else if (section.type === "special") {
                    const content = section.content;
                    return (
                      <div key={index} className="bg-secondary/10 p-6 rounded-lg">
                        {Array.isArray(content) ? (
                          content.map((text, i) => (
                            <p key={i} className={i === 0 ? "font-semibold text-foreground" : "mt-4"} dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                          ))
                        ) : (
                          <p className="font-semibold text-foreground">{content}</p>
                        )}
                      </div>
                    );
                  } else if (section.type === "mission") {
                    return (
                      <div key={index} className="text-center py-8">
                        <p className="text-2xl font-bold text-primary mb-4">{section.mainText}</p>
                        <p className="text-xl text-muted-foreground italic">{section.subText}</p>
                      </div>
                    );
                  } else if (section.heading) {
                    return (
                      <div key={index}>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{section.heading}</h3>
                        {Array.isArray(section.content) && section.content.map((text, i) => (
                          <p key={i} className={i > 0 ? "mt-4" : ""}>{text}</p>
                        ))}
                      </div>
                    );
                  } else if (section.content) {
                    const content = section.content as string;
                    return (
                      <p 
                        key={index} 
                        className={content.includes("global movement") ? "text-xl font-semibold text-foreground" : ""}
                        dangerouslySetInnerHTML={{ 
                          __html: content
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                            .replace(/"([^"]+)"/g, '<em>"$1"</em>')
                            .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                        }} 
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{contentData.timeline.title}</h2>
            <p className="text-lg text-muted-foreground">
              {contentData.timeline.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Card key={index} className="border-0 shadow-medium bg-card/80 backdrop-blur-sm hover:shadow-strong transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-32 flex-shrink-0">
                      <Badge variant="default" className="text-2xl font-bold px-6 py-3 w-full justify-center">
                        {item.year}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-lg font-semibold text-primary mb-3">{item.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{contentData.awards.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {contentData.awards.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <Card key={index} className="border-0 shadow-medium bg-card/90 backdrop-blur-sm hover:shadow-strong hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                        <p className="text-muted-foreground">{award.organization}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-strong bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
            <CardContent className="p-8 md:p-16 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/20">
                  <Mic className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-6">{contentData.podcast.title}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                {contentData.podcast.description}
              </p>
              <Button asChild size="lg" className="shadow-medium hover:shadow-strong">
                <a href={contentData.podcast.url} target="_blank" rel="noopener noreferrer">
                  {contentData.podcast.buttonText}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 bg-gradient-section">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Mission */}
          <Card className="border-0 shadow-strong bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-bold">{contentData.mission.title}</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: contentData.mission.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
              <blockquote className="text-xl font-semibold text-primary italic mt-6 pl-6 border-l-4 border-primary">
                {contentData.mission.quote}
              </blockquote>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-0 shadow-strong bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Sparkles className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-bold">{contentData.vision.title}</h2>
              </div>
              <blockquote className="text-xl text-muted-foreground italic leading-relaxed">
                "{contentData.vision.quote}"
              </blockquote>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                {contentData.vision.content}
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="border-0 shadow-strong bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <Heart className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-bold">{contentData.values.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Unbound Platform */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-strong bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur-sm">
            <CardContent className="p-8 md:p-16 text-center">
              <Badge variant="secondary" className="mb-6 text-base px-6 py-2">
                {contentData.unbound.badge}
              </Badge>
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/20">
                  <Users className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{contentData.unbound.title}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: contentData.unbound.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-strong bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{contentData.founderMessage.title}</h2>
              <blockquote className="text-2xl font-semibold text-primary italic border-t-4 border-b-4 border-primary py-8 mb-8">
                "{contentData.founderMessage.quote}"
              </blockquote>
              {contentData.founderMessage.content.map((paragraph, index) => (
                <p key={index} className={`text-lg ${index === 0 ? 'text-muted-foreground' : 'text-foreground font-semibold text-xl'} leading-relaxed ${index === 0 ? 'mb-8' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-strong bg-gradient-accent backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary-foreground">{contentData.cta.title}</h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                {contentData.cta.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {contentData.cta.buttons.map((button, index) => (
                  <Button 
                    key={index}
                    asChild 
                    variant={button.variant as "secondary" | "outline"} 
                    size="lg"
                    className={button.variant === "outline" ? "bg-background/20 hover:bg-background/30 text-primary-foreground border-primary-foreground/20" : ""}
                  >
                    <Link to={button.link}>{button.text}</Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default OurJourney;
