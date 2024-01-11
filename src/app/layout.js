//import Home from "./page";

export default function RootLayout({ children }) {
  return (
    <div>
    <h1>this is header in root layout</h1>
    {children}
    </div>
  )
}

// export default function f() {
//   return (
//     <RootLayout>
//       <Home />
//     </RootLayout>
//   );
// }