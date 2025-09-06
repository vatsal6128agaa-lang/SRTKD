import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { imageConfig } from "@/config/imageLinks";

interface Tournament {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  images: string[];
}

const TournamentsPage = () => {
  const navigate = useNavigate();
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTournamentClick = (tournament: Tournament) => {
    setSelectedTournament(tournament);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedTournament(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </div>
            <h1 className="text-3xl font-bold">Tournaments & Achievements</h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Discover the competitive spirit and achievements of SHREE RAM TAEKWONDO CLUB. 
            Our students regularly participate in tournaments and competitions, showcasing their skills and dedication.
          </p>
        </div>

        {/* Tournament Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageConfig.tournaments.map((tournament) => (
            <Card 
              key={tournament.id} 
              className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleTournamentClick(tournament)}
            >
              <CardHeader className="p-0">
                <img 
                  src={tournament.thumbnail} 
                  alt={tournament.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{tournament.title}</CardTitle>
                <CardDescription className="text-sm">
                  {tournament.description.slice(0, 150)}...
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTournamentClick(tournament);
                  }}
                >
                  View Gallery
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tournament Modal */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedTournament && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl mb-4">
                    {selectedTournament.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Image Carousel */}
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedTournament.images.map((imageUrl, index) => (
                        <CarouselItem key={index}>
                          <img 
                            src={imageUrl} 
                            alt={`${selectedTournament.title} - Image ${index + 1}`}
                            className="w-full h-80 object-cover rounded-lg"
                            loading="lazy"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  
                  {/* Description */}
                  <div className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedTournament.description}
                    </p>
                  </div>
                  
                  {/* Close Button */}
                  <div className="flex justify-end pt-4">
                    <Button onClick={closeDialog}>
                      Close
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default TournamentsPage;