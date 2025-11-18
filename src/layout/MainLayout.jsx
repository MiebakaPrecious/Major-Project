// ==============================

// layout/MainLayout.jsx

// ==============================

import { Sidebar } from "../components/Sidebar";

import { useState } from "react";


export function MainLayout({ children }) {

const [sidebarOpen, setSidebarOpen] = useState(true);


return (

<div className="flex h-screen w-full bg-gray-100 text-gray-900">

<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


<main className="flex-1 p-6 overflow-y-auto">

<button

className="mb-4 bg-gray-200 px-4 py-2 rounded"

onClick={() => setSidebarOpen(!sidebarOpen)}

>

Toggle Menu

</button>


{children}

</main>

</div>

);

}

