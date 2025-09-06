import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { imageConfig } from "@/config/imageLinks";

const Tournaments = () => {
  const navigate = useNavigate();

  return (
    <section id="tournaments" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">Tournaments & Achievements</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore our tournament participation and celebrate the achievements of our dedicated students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {imageConfig.tournaments.slice(0, 3).map((tournament) => (
            <div key={tournament.id} className="bg-card rounded-lg shadow-lg overflow-hidden hover-scale">
              <img 
                src={tournament.thumbnail} 
                alt={tournament.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{tournament.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {tournament.description.slice(0, 120)}...
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => navigate('/tournaments')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            View All Tournaments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;