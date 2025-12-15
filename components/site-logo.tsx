import Image from "next/image";

const Logo = ({theme}: {theme: string}) => {
    return (
        <Image src={`/logo-${theme}.png`} alt="Logo" width={48} height={48} />
    )
}

export default Logo