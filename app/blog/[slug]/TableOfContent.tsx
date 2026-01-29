// components/TableOfContents.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function TableOfContents({ items }: { items: JSX.Element[] }) {
    useEffect(() => {
        const headings = items.map(h2 => document.querySelector(h2.props.children.props.href)).filter(Boolean);
            
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Remove active class from ALL links
                    document.querySelectorAll('[id^="link-"]').forEach((link) => {
                    link.classList.remove('active');
                    });
                    
                    // Add active class to the current link
                    const activeLink = document.querySelector(`#link-${entry.target.id}`);
                    if (activeLink) {
                    activeLink.classList.add('active');
                    }
                }
                });
            },
            {
                threshold: 0,
                rootMargin: '-100px 0px 0px 0px'
        });

        headings.forEach((heading) => {
        if (heading) observer.observe(heading);
        });

        return () => {
        headings.forEach((heading) => {       
            if (heading) observer.unobserve(heading);
        });
        };
  }, [items]);

  return (        <nav>
            <ul>
                <li>TABLE DES MATIÈRES</li>
                <li><a href="#intro" id="intro">Intro</a></li>
                {items}
            </ul>
        </nav>
  );
}