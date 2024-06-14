import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { ArrowDown } from "./iconos/arrow-down";
import { ArrowRight } from "./iconos/arrow-right";

function App() {
	const beneficios = [
		{
			value: "Personaliza tus URLs acortadas",
			id: 1,
		},
		{
			value: "Ve tus URLs y sus estadísticas",
			id: 2,
		},
		{
			value: "Protege tus URLs con contraseña",
			id: 3,
		},
		{
			value: "Edita tus URLs acortadas o borralas",
			id: 4,
		},
	];
	return (
		<>
			<div className="doted-background"></div>
			<main className="w-full flex flex-col items-center">
				<section className="w-full h-screen flex flex-col justify-start items-center mb-2">
					<h1 className="text-center justify-self-start mt-5">
						Url Shortener
					</h1>
					<h2 className="text-center">
						Acorta tus url <strong>RAPIDO</strong>,{" "}
						<strong>GRATIS</strong> y <strong>SEGURO</strong>
					</h2>

					<div className="w-full h-full flex flex-col justify-center items-center">
						<ul className="flex flex-col gap-6 mb-7 text-center text-2xl">
							{beneficios.map((x) => (
								<li
									key={x.id}
									className="justify-between"
								>
									{x.value}
								</li>
							))}
						</ul>
						<div className="mt-2 w-auto flex justify-center gap-7 text-xl mb-20" >
								<button className="p-2 bg-teal-500 border-4 border-teal-500 rounded-3xl">
									Registrarse
								</button>
								<button className="p-2 border-4 border-teal-500 rounded-3xl">
									Iniciar seción
								</button>
						</div>
						<a href="#shortener" className="link-arrow flex flex-col justify-center items-center font-bold "><ArrowDown clases='animate-bounce arrow' dimentions={50}/><span>Acortar url</span></a>
						
					</div>
				</section>
				<section id="shortener" className="w-3/4 h-screen m-auto mt-3 flex flex-col justify-center items-center">
					<div className="w-full flex justify-between">
						<input className="h-16 w-2/5 rounded-xl bg-neutral-300" type="text" />
						<span className="flex items-center text-white ">
							<ArrowRight clases='arrow text-cyan-300' dimentions={60}/>
						</span>
						<input
							className="h-16 w-2/5 rounded-xl bg-neutral-300 text-cyan-300"
							type="text"
							name=""
							id=""
						/>
					</div>

					<input
						className="w-full h-16 mt-4 rounded-xl bg-neutral-300"
						type="text"
					/>
				</section>
			</main>
		</>
	);
}

export default App;
