// ==============================

// pages/Dashboard.jsx

// ==============================

import { StatsCard } from "../components/StatsCard";


export function Dashboard() {

return (

<div>

<h1 className="text-3xl font-bold mb-6">AI Training Overview</h1>


<div className="grid md:grid-cols-3 gap-4">

<StatsCard title="Active Trainings" value="4" />

<StatsCard title="Completed Models" value="12" />

<StatsCard title="Pending Tasks" value="3" />

</div>

</div>

);

}

