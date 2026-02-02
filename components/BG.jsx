import { usePathname } from "next/navigation";
const BG = () => {
    const pathname = usePathname();
//     return pathname === '/skills' ? <style>
//                         body {
//                             background: radial-gradient(#e66465, #9198e5);
//                         }
//                     </style> : null
    return (
		<div className="absolute inset-0 bg-[url(/noise.svg)]"></div>
	);
}

export default BG;