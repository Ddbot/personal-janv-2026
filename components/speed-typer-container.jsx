import bg from "@/public/speed_typer_.png"
import Image from 'next/image'

const Container = () => {
    return (
		<div className="w-full min-h-full" style={{}}>
			<Image src={bg} alt="speed typer, the game" className="scale-75 -translate-y-[7.5%] opacity-95 mix-blend-screen" />
		</div>
	);
}

export default Container;