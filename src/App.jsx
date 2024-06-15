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
								<li key={x.id} className="justify-between">
									{x.value}
								</li>
							))}
						</ul>
						<div className="mt-2 w-auto flex justify-center gap-7 text-xl mb-20">
							<button className="p-2 bg-teal-500 border-4 border-teal-500 rounded-3xl">
								Registrarse
							</button>
							<button className="p-2 border-4 border-teal-500 rounded-3xl bg-transparent bg-gradient-to-t hover:from-emerald-300 hover:to-teal-200 transition ease-linear duration-200">
								Iniciar sesión
							</button>
						</div>
						<a
							href="#shortener"
							className="link-arrow flex flex-col justify-center items-center font-bold "
						>
							<ArrowDown
								clases="animate-bounce arrow"
								dimentions={50}
							/>
							<span>Acortar url</span>
						</a>
					</div>
				</section>
				<section
					id="shortener"
					className="w-3/4 h-screen m-auto mt-3 flex flex-col justify-center items-center"
				>
					<div className="w-full flex justify-between gap-3">
						<input
							className="input h-16 w-full rounded-xl bg-neutral-300 p-4"
							type="url"
							name=""
							id=""
						/>
						<span className="flex items-center text-white w-36">
							<ArrowRight clases="arrow text-cyan-300 w-full" />
						</span>

						<input
							className="input h-16 w-full rounded-xl bg-neutral-300 p-4"
							type="url"
							name=""
							id=""
						/>
					</div>

					<input
						className="acortar w-full h-20 mt-5 rounded-xl bg-blue-950 text-4xl text-teal-500 font-bold cursor-pointer hover:bg-blue-900"
						type="button"
						value="Acortar"
					/>
				</section>
			</main>
		</>
	);
}

export default App;
