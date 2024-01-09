import React, { FC } from 'react';
import IMAGES from '../images/IMAGES'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import AutoHeight from 'embla-carousel-auto-height'


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
  
  
interface ToolProps {
  // Define props and their types here
}

const Tools: FC<ToolProps> = (props) => {
  // Destructure props here if needed
  // Example: const { propName } = props;

  return (
    <div className='p-4 pb-6 max-w-m mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4 mb-4'>
        <h1 className='pt-2 flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500'>Tools & Frameworks</h1>
        <Carousel className='pt-4 ml-10' plugins={[
            Autoplay({
                delay: 2500,
                stopOnMouseEnter: true,
                stopOnInteraction: false
            }),
         ]}
         opts={{
            align: "start",
            loop: true,
         }}
         >
            <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center p-1">
                            <img src={IMAGES.image1} loading="lazy" width="100" height="100" alt='first image' className="mb-2" />
                            <span className="text-3xl font-semibold">React</span>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center p-1">
                            <img src={IMAGES.image2} loading="lazy" width="100" height="100" alt='first image' className="mb-2" />
                            <span className="text-3xl font-semibold">ThreeJS</span>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center p-1">
                            <img src={IMAGES.image3} loading="lazy" width="100" height="100" alt='first image' className="mb-2" />
                            <span className="text-3xl font-semibold">Tailwind</span>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center p-1">
                            <img src={IMAGES.image2} loading="lazy" width="100" height="100" alt='first image' className="mb-2" />
                            <span className="text-3xl font-semibold">ThreeJS</span>
                        </CardContent>
                    </Card>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>

  );
};

export default Tools;
