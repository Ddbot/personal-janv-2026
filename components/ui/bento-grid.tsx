import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Phone } from 'lucide-react'; 
import { Empty } from '../projects'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import styles from '@/components/styles/bento-grid.module.css';
import Link from "next/link";
interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
    cta: string
    fn?: () => void
}

const BentoGrid = forwardRef<HTMLDivElement, BentoGridProps>((
    { children, className, ...props }: BentoGridProps,
    ref
) => {
  return (
      <div
          ref={ref}
        //   id="bentogrid"
      className={className}
      {...props}
    >
      {children}
    </div>
  )
})

BentoGrid.displayName = "BentoGrid"

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
    cta,
  fn,
  ...props
}: BentoCardProps) => (
    <div        
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4">
            <div className={cn("z-10 flex transform-gpu flex-col gap-1 transition-all duration-300",
                Icon === Empty ? '' : 'lg:group-hover:-translate-y-10',
            Icon !== Empty && 'pointer-events-none ')}>
        <Icon className={cn("h-12 w-12 origin-left transform-gpu text-[#185551] dark:text-[#FFE5D8] transition-all duration-300 ease-in-out", Icon === Empty ? '' : 'group-hover:scale-75')} />
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
        <div className={`max-w-lg ${Icon === Phone ? 'text-background' : 'text-foreground' } font-extralight`}>{description}</div>
      </div>

      { Icon !== Empty && <div
        className={cn(
            "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 lg:hidden",
            Icon !== Empty && "group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0"
        >
          <Link href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </Link>
        </Button>
      </div>}
    </div>

    {Icon !== Empty && <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 lg:flex",
        Icon !== Empty && "group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button
        variant="link"
        asChild
        size="sm"
        className="pointer-events-auto p-0"
      >
        <Link href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </Link>
      </Button>
    </div>}

    <div className={cn("pointer-events-none absolute inset-0 transform-gpu transition-all duration-300", Icon !== Empty && "group-hover:bg-black/3 group-hover:dark:bg-neutral-800/10")} />
  </div>
)

BentoCard.displayName = "BentoCard"

export { BentoCard, BentoGrid }
