import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className="m-8">
			<button
				className="text-white rounded-lg p-2 transition ease-in-out delay-150 
      bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
			>
				Save Changes
			</button>

			<div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
				<div className="animate-pulse flex space-x-4">
					<div className="rounded-full bg-slate-700 h-10 w-10"></div>
					<div className="flex-1 space-y-6 py-1">
						<div className="h-2 bg-slate-700 rounded"></div>
						<div className="space-y-3">
							<div className="grid grid-cols-3 gap-4">
								<div className="h-2 bg-slate-700 rounded col-span-2"></div>
								<div className="h-2 bg-slate-700 rounded col-span-1"></div>
							</div>
							<div className="h-2 bg-slate-700 rounded"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	// return (
	// 	<div className="h-screen text-white bg-slate-900 Parent">
	// 		<header className="w-full border-1">Header</header>
	// 		<div className="divide-y divide-red-500">
	// 			<div>01</div>
	// 			<div>02</div>
	// 			<div>03</div>
	// 		</div>
	// 		<input
	// 			type="text"
	// 			className="border-2border-rose-600 rounded-xl h-9 w-36 outline-none"
	// 		/>
	// 	</div>
	// );
	// return (
	// 	<div className="h-screen text-white Parent bg-slate-900">
	// 		<div className="container px-2">
	// 			<div className="relative bg-red-500 rounded-lg w-32 h-32">
	// 				<div className="w-24 h-24 bg-green-500 rounded-lg absolute inset-2"></div>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
	// return (
	// 	<div className="h-screen text-white Parent bg-slate-900">
	// 		<div className="container px-2">
	// 			<img
	// 				className="w-64 float-left"
	// 				src="https://images.unsplash.com/photo-1536663815808-535e2280d2c2?"
	// 			/>
	// 			<img
	// 				className="w-32 float-right"
	// 				src="https://images.unsplash.com/photo-1536663815808-535e2280d2c2?"
	// 			/>
	// 			<p className="clear-both">
	// 				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
	// 				doloremque illo quis eos expedita nobis, quae aspernatur laudantium
	// 				similique veniam consequuntur recusandae perspiciatis dicta deleniti
	// 				repellendus facilis natus voluptas velit.
	// 			</p>
	// 			<p>
	// 				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
	// 				doloremque illo quis eos expedita nobis, quae aspernatur laudantium
	// 				similique veniam consequuntur recusandae perspiciatis dicta deleniti
	// 				repellendus facilis natus voluptas velit.
	// 			</p>
	// 			<p>
	// 				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
	// 				doloremque illo quis eos expedita nobis, quae aspernatur laudantium
	// 				similique veniam consequuntur recusandae perspiciatis dicta deleniti
	// 				repellendus facilis natus voluptas velit.
	// 			</p>
	// 			<p>
	// 				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
	// 				doloremque illo quis eos expedita nobis, quae aspernatur laudantium
	// 				similique veniam consequuntur recusandae perspiciatis dicta deleniti
	// 				repellendus facilis natus voluptas velit.
	// 			</p>
	// 		</div>
	// 	</div>
	// );
	// return (
	// 	<div className="h-screen text-white Parent bg-slate-900">
	// 		<div className="container mx-auto">
	// 			{/* <h1 className="py-4 text-white text-7xl">Hello</h1> */}
	// 			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
	// 				<div className="bg-sky-500 p-6 rounded-2xl">1</div>
	// 				<div className="bg-sky-500 p-6 rounded-2xl">2</div>
	// 				<div className="bg-sky-500 p-6 rounded-2xl">3</div>
	// 				<div className="bg-red-500 p-6 rounded-2xl col-span-2">4</div>
	// 				<div className="bg-sky-500 p-6 rounded-2xl">5</div>
	// 				<div className="bg-sky-500 p-6 rounded-2xl">6</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
	// return (
	// 	<div className="Parent">
	// 		<div>Header</div>
	// 		<div className="flex items-baseline justify-evenly">
	// 			<div>Sidebar</div>
	// 			<div className="">
	// 				<h1 className="font-bold">Main Content</h1>
	// 				<p>
	// 					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
	// 					fugiat iure deserunt iste commodi blanditiis recusandae officia sunt
	// 					provident. Mollitia, earum distinctio. Consequuntur, saepe
	// 					voluptatem eaque molestiae harum nihil laborum?
	// 				</p>
	// 			</div>
	// 			<div>Another Sidebar</div>
	// 		</div>
	// 	</div>
	// );
	// return (
	// 	<div className="Parent">
	// 		<div>Header</div>
	// 		<div className="flex flex-col md:flex-row">
	// 			<div className="md:w-32 bg-blue-400 text-white">Sidebar</div>
	// 			<div className="w-full bg-red-600 text-white">Main Content</div>
	// 		</div>
	// 	</div>
	// );
	// return (
	// 	<div className="flex flex-col min-h-screen space-y-4">
	// 		<div className="w-1/5 bg-red-500">Side Bar</div>
	// 		<div className="w-4/5 bg-green-500">Main content</div>
	// 	</div>
	// );
	// return (
	// 	<div className="space-y-1 p-2">
	// 		<div className="flex space-x-4">
	// 			<div className="w-1/5 h-16 bg-red-500">Sidebar</div>
	// 			<div className="w-3/5 h-16 bg-green-500">Main Content</div>
	// 			<div className="w-1/5 h-16 bg-blue-500">Main Content</div>
	// 		</div>
	// 		<div className="flex space-x-4">
	// 			<div className="w-1/5 h-16 bg-red-500">Sidebar</div>
	// 			<div className="w-3/5 h-16 bg-green-500">Main Content</div>
	// 			<div className="w-1/5 h-16 bg-blue-500">Main Content</div>
	// 		</div>
	// 	</div>
	// );
	// return (
	//   <div>
	//      <h1 className="font-bold text-2xl fmb-4 bg-blue-500 text-white">This is my title</h1>
	//      <p className="-mt-8 bg-red-300">This is my paragraph</p>
	//   </div>
	// );
	// return (
	//   <div>
	//     <h1 className="text-3xl">Title 1</h1>
	//     <h2 className="text-2xl">Title 2</h2>
	//     <h3 className="text-xl">Title 3</h3>
	//     <p className="text-base">A regular paragraph</p>
	//     <p className="text-sm">A description paragraph</p>
	//     <p className="note text-xs">A little note</p>
	//   </div>
	// )
	// Colors, customization and setup
	// return (
	//   <div>
	//     <p className="mb-1 text-xs sm:text-base lg:text-3xl">
	//       Spacing bottom
	//     </p>
	//     <p className="bg-[#bada55] text-xs sm:text-base lg:text-3xl">
	//       Hello Long sentence
	//     </p>
	//   </div>
	// )
	//Original Next.js
	// return (
	//   <main className={styles.main}>
	//     <div className={styles.description}>
	//       <p>
	//         Get started by editing&nbsp;
	//         <code className={styles.code}>app/page.tsx</code>
	//       </p>
	//       <div>
	//         <a
	//           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
	//           target="_blank"
	//           rel="noopener noreferrer"
	//         >
	//           By{" "}
	//           <Image
	//             src="/vercel.svg"
	//             alt="Vercel Logo"
	//             className={styles.vercelLogo}
	//             width={100}
	//             height={24}
	//             priority
	//           />
	//         </a>
	//       </div>
	//     </div>
	//     <div className={styles.center}>
	//       <Image
	//         className={styles.logo}
	//         src="/next.svg"
	//         alt="Next.js Logo"
	//         width={180}
	//         height={37}
	//         priority
	//       />
	//     </div>
	//     <div className={styles.grid}>
	//       <a
	//         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
	//         className={styles.card}
	//         target="_blank"
	//         rel="noopener noreferrer"
	//       >
	//         <h2>
	//           Docs <span>-&gt;</span>
	//         </h2>
	//         <p>Find in-depth information about Next.js features and API.</p>
	//       </a>
	//       <a
	//         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
	//         className={styles.card}
	//         target="_blank"
	//         rel="noopener noreferrer"
	//       >
	//         <h2>
	//           Learn <span>-&gt;</span>
	//         </h2>
	//         <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
	//       </a>
	//       <a
	//         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
	//         className={styles.card}
	//         target="_blank"
	//         rel="noopener noreferrer"
	//       >
	//         <h2>
	//           Templates <span>-&gt;</span>
	//         </h2>
	//         <p>Explore starter templates for Next.js.</p>
	//       </a>
	//       <a
	//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
	//         className={styles.card}
	//         target="_blank"
	//         rel="noopener noreferrer"
	//       >
	//         <h2>
	//           Deploy <span>-&gt;</span>
	//         </h2>
	//         <p>
	//           Instantly deploy your Next.js site to a shareable URL with Vercel.
	//         </p>
	//       </a>
	//     </div>
	//   </main>
	// );
}
