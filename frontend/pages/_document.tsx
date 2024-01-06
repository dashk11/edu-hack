import Header from "@/components/header/header.module";
import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";
// import logo from '../components/from_sketeches_to_smiles_logo.png';

export default function Document() {
	return (
		<Html lang="en" style={{ scrollBehavior: "smooth" }}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
