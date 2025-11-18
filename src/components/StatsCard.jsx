// ==============================

// components/StatsCard.jsx

// ==============================

export function StatsCard({ title, value }) {

return (

<div className="bg-white p-4 rounded-2xl shadow-md">

<h2 className="text-lg font-semibold">{title}</h2>

<p className="text-3xl font-bold mt-2">{value}</p>

</div>

);

}

