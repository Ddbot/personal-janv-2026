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

function Separator() {
    return  <BreadcrumbSeparator>/</BreadcrumbSeparator>
}

export default function Breadcrumbs({ className } : { className: string }) {
  return (
    <Breadcrumb className={className    }>
    <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="#"><span className={cn("font-bold")}>Dev</span></Link>
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
            <Link href="#" ><span className={cn("font-bold", styles.underlined)}>Front End</span></Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <Separator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="#" ><span className={cn("font-bold")}>Bricolage</span></Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <Separator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="#" ><span className={cn("font-bold")}>
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
