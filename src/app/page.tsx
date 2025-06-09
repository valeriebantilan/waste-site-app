"use client";

import React, { useState, useEffect } from 'react';
import { Bar } from '@/components/Bar'
import { SkipCard } from '@/types';
import {CardList} from '@/components/CardList'

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [selectedSkip, setSelectedSkip] = useState<SkipCard | undefined>();
  const [skipCards, setSkipCards] = useState([]);



  const handleSelectedCard = (card: SkipCard) => () => {
    setSelectedSkip(card);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
        const data = await response.json();
        if(data.length) {
          const dataWithImg = data.map((d: SkipCard) => {
            const baseUrl = `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes`
            const yardage = d.size;
            const img = `${yardage}-yarder-skip.jpg`

            return {...d, imageUrl: `${baseUrl}/${img}`}
          })
          setSkipCards(dataWithImg); 
        }
        setLoading(false);
      } catch (error) {
        console.error('API fetch error:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  console.log('skipCards', skipCards)
  
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Bar />
      
      <div className="max-w-7xl mx-auto px-20 pb-32">

        <h2 className="text-2xl text-white font-bold text-center mt-4 mb-4">
          Choose Your Skip Size
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Select the skip size that best suits your needs
        </p>
        
        {!loading && ( <CardList
              skipCards={skipCards}
              selectedCard={selectedSkip}
              handleSelectedCard={handleSelectedCard}
            />)}
      
      <div
        className={`fixed bottom-0 left-0 right-0 ${
          selectedSkip ? "bg-white backdrop-blur-lg" : "bg-black/60"
        } py-4 z-50 border-t border-gray-700 transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedSkip && (
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-lg font-semibold text-black">
                    {selectedSkip.size} Yard skip
                  </p>
                  <p className="text-sm text-gray-400">
                    {selectedSkip.hire_period_days} day hire period
                  </p>
                </div>
                <button
                  className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 max-w-xs"
                >
                  Continue with • £{selectedSkip.price_before_vat}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}



export default Home;





