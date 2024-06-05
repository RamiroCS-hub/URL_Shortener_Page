import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
	const beneficios = [
		"Ver URLs acortadas y sus estadísticas",
		"Crear URLs personalizadas",
		"Proteger URLs con contraseña",
		"Editar URLs acortadas",
	];
	return (
		<>
			<header className="w-3/4 h-auto mt-6 mb-10 m-auto  border-4 border-red-700 text-center">
				<h1>Url Shortener</h1>
				<h2>
					Acorta tus url <strong>RAPIDO</strong>,{" "}
					<strong>GRATIS</strong> y <strong>SEGURO</strong>
				</h2>
			</header>
			<main className="w-3/4 m-auto border-4 border-violet-800">
				<section className="register h-60 border-4 border-black flex shadow-slate-800">
					<div className="w-5/6 h-5/6  m-auto border-4 border-yellow-500 flex justify-between align-middle">
						<ul className="flex flex-col gap-5">
							{beneficios.map((x, indice) => {
								return (
									<li
										key={indice}
										className="list-disc justify-between text-xl"
									>
										{x}
									</li>
								);
							})}
						</ul>
						<div className="">
							<p className="text-blue-900 font-extrabold text-xl mb-3">
								Obten los beneficios:
							</p>
							<span className="flex flex-col h-2/3 gap-3 justify-center">
								<button className="w-44 text-xl p-2 bg-slate-900 rounded-2xl">
									Registrarse
								</button>
								<button className="w-44 text-xl p-2 bg-slate-900 rounded-2xl">
									Iniciar seción
								</button>
							</span>
						</div>
					</div>
				</section>
				<section className="w-5/6 h-48 m-auto border-4 border-blue-800 mt-5 mb-10">
					<div className="border-4 border-gray-800 grid grid-cols-3">
						<input className="h-14 rounded-xl" type="text" />
						{
							//flecha svg
						}
						<span></span>
						<input className="h-14 rounded-xl" type="text" name="" id="" />
					</div>

					<input className="w-full mt-6" type="text" />
				</section>
			</main>
		</>
	);
}

export default App;
