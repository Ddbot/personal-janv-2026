"use client";
import { Dispatch, useState } from 'react';
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils';
import styles from './styles.module.css';

type Category = 'all' | 'dev' | 'frontend' | 'diy' | 'music';

function Separator() {
    return  <BreadcrumbSeparator>/</BreadcrumbSeparator>
}

export default function Breadcrumbs({ className } : { className: string }) {
    const [currentCategory, setCurrentCategory]: [currentCategory: Category, setCurrentCategory: Dispatch<React.SetStateAction<Category>>] = useState<Category>('all');
    
    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        setCurrentCategory(e.currentTarget.dataset.category as Category);
    }
    return (
    <Breadcrumb className={className}>
        <BreadcrumbList>
            <BreadcrumbItem>
        <BreadcrumbLink asChild>
        <Link href="#" data-category="all" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'all' && styles.underlined)}>Tout</span></Link>
        </BreadcrumbLink>
        </BreadcrumbItem>
        <Separator />
        <BreadcrumbItem>
        <BreadcrumbLink asChild>
        <Link href="#" data-category="dev" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'dev' && styles.underlined)}>Dev</span></Link>
        </BreadcrumbLink>
        </BreadcrumbItem>
        <Separator />
        {/* <BreadcrumbItem>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon-sm" variant="ghost">
                <BreadcrumbEllipsis />
                <span className="sr-only">Toggle menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                <DropdownMenuGroup>
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
            </DropdownMenu>
        </BreadcrumbItem>
        <Separator />
        */}
        <BreadcrumbItem>
            <BreadcrumbLink asChild>
            <Link href="#" data-category="frontend" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'frontend' && styles.underlined)}>Front End</span></Link>
            </BreadcrumbLink>
        </BreadcrumbItem>
        <Separator />
        <BreadcrumbItem>
            <BreadcrumbLink asChild>
            <Link href="#" data-category="diy" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'diy' && styles.underlined)}>Bricolage</span></Link>
            </BreadcrumbLink>
        </BreadcrumbItem>
        <Separator />
        <BreadcrumbItem>
            <BreadcrumbLink asChild>
            <Link href="#" data-category="music" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'music' && styles.underlined)}>
                Musique
                </span>
                </Link>
            </BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem> */}
        </BreadcrumbList>
    </Breadcrumb>
    )
}
