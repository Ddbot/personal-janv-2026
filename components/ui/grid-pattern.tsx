import { useId, use } from "react"
import { ThemeContext } from "@/contexts/ThemeContext"
import { cn } from "@/lib/utils"
import { transform } from "next/dist/build/swc/generated-native"

const urls = ["html_logo.svg", "css_logo.svg", "tailwind_logo.svg","js_logo.svg","ts_logo.svg",'react_logo.svg', "nextjs_logo.svg","postgreSQL_logo.svg","firebase_logo.svg","supabase_logo.svg","apps_script_logo.svg","figma_logo.svg","git_logo.svg","chatgpt_logo.svg","gsap_logo.svg"]
interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  squares?: Array<[x: number, y: number]>
  strokeDasharray?: string
  className?: string
  [key: string]: unknown
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}: GridPatternProps) {
    const id = useId()
    const { theme } = use(ThemeContext)
    console.log(urls.length)

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-foreground/50",
        className
      )}
      {...props}
    >
        <defs>
            <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
            >
            <path
                d={`M.5 ${height}V.5H${width}`}
                fill="none"
                strokeDasharray={strokeDasharray}
            />
            </pattern>
        </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y],i) => (
            // <rect
            //   strokeWidth="0"
            //   key={i}
            //   width={width - 1}
            //   height={height - 1}
            //   x={x * width + 1}
            //   y={y * height + 1}
              // />
              <image
                  className="image"
              href={(i === 13 && theme === "dark") ? "openai_logo.svg" : urls[i]}
              strokeWidth="0"
              key={i}
              width={width + 1}
              height={height + 1}
              x={x * width + 1}
                  y={y * height + 1}
                //   transform="scale(.9)"
                  style={{
                      transformOrigin: `${(width - 1) + (x * width + 1) / 2} ${(height - 1) + (y * height + 1) / 2}`,
                  }}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}
