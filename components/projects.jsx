"use client";
import { use } from 'react'
import { LangContext } from '@/contexts/LangContext';
import { dictionary } from '@/lib/dictionary';
import { Baby, Keyboard, Share2Icon, PocketKnife } from 'lucide-react';

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import AnimatedBeamMultipleOutputDemo from "@/components/animated-beam-example"
import AnimatedListDemo from "@/components/animated-list-demo"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Marquee } from "@/components/ui/marquee"

export default function Projects() {
    const { lang } = use(LangContext);

    const skills = [
		{
			name: 'Front End',
			body: 'Je maîtrise parfaitement les technologies Front End et CSS et me tient constamment informé de leurs évolutions',
		},
		{
			name: 'Back End',
			body: 'Je maîtrise parfaitement les technologies Back End et me tient constamment informé de leurs évolutions',
		},
		{
			name: 'Full Stack',
			body: 'Je maîtrise parfaitement les technologies Full Stack et me tient constamment informé de leurs évolutions',
		},
		{
			name: 'Rédaction & Copywriting',
			body: 'Je maîtrise parfaitement les technologies Rédaction & Copywriting et me tient constamment informé de leurs évolutions',
		},
		{
			name: 'Traduction & SEO',
			body: 'Je maîtrise parfaitement les technologies Traduction & SEO et me tient constamment informé de leurs évolutions',
		},
	];

    const features = [
        {
            Icon: Keyboard,
            name: 'Speed Typer',
            description: dictionary[lang]['features']['description'][0],
            href: '#',
            cta: dictionary[lang]['cta'],
            className: 'col-span-3 lg:col-span-1',
            background: (
                <Marquee
                    pauseOnHover
                    className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]">
                    {skills.map((f, idx) => (
                        <figure
                            key={idx}
                            className={cn(
                                'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
                                'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
                                'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
                                'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none',
                            )}>
                            <div className="flex flex-row items-center gap-2">
                                <div className="flex flex-col">
                                    <figcaption className="text-sm font-medium dark:text-white">
                                        {f.name}
                                    </figcaption>
                                </div>
                            </div>
                            <blockquote className="mt-2 text-xs">
                                {f.body}
                            </blockquote>
                        </figure>
                    ))}
                </Marquee>
            ),
        },
        {
            Icon: PocketKnife,
            name: 'Skills',
            description: dictionary[lang]['features']['description'][1],
            href: '#',
            cta: dictionary[lang]['cta'],
            className: 'col-span-3 lg:col-span-2',
            background: (
                <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
            ),
        },
        {
            Icon: Share2Icon,
            name: 'Trello to Google Apps Script',
            description: dictionary[lang]['features']['description'][2],
            href: '#',
            cta: dictionary[lang]['cta'],
            className: 'col-span-3 lg:col-span-2',
            background: (
                <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
            ),
        },
        {
            Icon: Baby,
            name: 'Baby Log',
            description: dictionary[lang]['features']['description'][3],
            className: 'col-span-3 lg:col-span-1',
            href: '#',
            cta: dictionary[lang]['cta'],
            background: (
                <Calendar
                    mode="single"
                    selected={new Date(2022, 4, 11, 0, 0, 0)}
                    className="absolute top-10 right-0 origin-top scale-75 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
                />
            ),
        },
    ];    

    return (
    <BentoGrid className="p-4 md:p-24" id="projects">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}
