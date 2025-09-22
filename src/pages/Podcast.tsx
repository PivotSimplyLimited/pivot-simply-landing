import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Headphones, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";

const Podcast = () => {
  const platforms = [
    {
      name: "Spotify",
      icon: "🎵",
      url: "https://open.spotify.com/show/4hohCO69KurVGBn9j3TiWZ?si=b93253f536654790",
      color: "bg-green-500"
    },
    {
      name: "Apple Podcasts",
      icon: "🎧",
      url: "https://podcasts.apple.com/gb/podcast/thepivotsimplypodcast/id1828634193",
      color: "bg-purple-500"
    },
    {
      name: "Amazon Music",
      icon: "🎶",
      url: "https://music.amazon.co.uk/podcasts/d11589e1-8995-4333-84bd-94577d1de1e0/thepivotsimplypodcast",
      color: "bg-blue-500"
    },
    {
      name: "YouTube Music",
      icon: "📺",
      url: "https://music.youtube.com/playlist?list=PL1A95QHNyCgZKG3Vu9VQLs8xEWyKemsx_&si=G16lryUznrPkIxZi",
      color: "bg-red-500"
    }
  ];

  const episodes = [
    {
      title: "Shadow Work: Meeting Your True Self Instead of 'Fixing' Yourself",
      season: "Season 2",
      episode: "Episode 15",
      description: "Explore the transformative power of shadow work and learn to embrace your authentic self.",
      spotifyUrl: "https://open.spotify.com/episode/4C7ojshGR6asdYFoUrPvMr"
    },
    {
      title: "The Art of Conscious Creation",
      season: "Season 2",
      episode: "Episode 14",
      description: "Discover how to consciously create the life you desire through alignment and intention.",
      spotifyUrl: "#"
    },
    {
      title: "Breaking Through Self-Sabotage",
      season: "Season 2",
      episode: "Episode 13",
      description: "Understand the patterns of self-sabotage and learn practical tools to overcome them.",
      spotifyUrl: "#"
    },
    {
      title: "Manifesting with Spiritual Alignment",
      season: "Season 2",
      episode: "Episode 12",
      description: "Learn how to manifest from a place of spiritual alignment and authentic power.",
      spotifyUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Headphones className="w-16 h-16 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-foreground">
            The PivotSimply Podcast
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            You are just one decision away from making a huge shift in your Life. 
            It's time for you to rewrite your Story!
          </p>
          
          <p className="text-lg mb-12 text-muted-foreground max-w-4xl mx-auto">
            Through PivotSimply Podcast, we believe in simplifying life by taking it back to its basics—the essence of what humans truly need. 
            It's your foundations which keep you aligned in this life journey. I share the wisdom on self-discovery and how you can recreate yourself and your reality.
          </p>

          {/* Platform Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="group">
                  <span className="mr-2 text-xl">{platform.icon}</span>
                  Listen on {platform.name}
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-foreground">
              Latest Episodes
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover transformative insights and practical wisdom for your journey
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
            {episodes.map((episode, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-primary">
                          {episode.season}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {episode.episode}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {episode.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {episode.description}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-4 shrink-0"
                      onClick={() => window.open(episode.spotifyUrl, '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Subscribe Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">
                Never Miss an Episode
              </h3>
              <p className="text-muted-foreground mb-6">
                Subscribe on your favorite platform and join thousands on their transformation journey
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="default" size="sm">
                      {platform.icon} {platform.name}
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Podcast;