import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Pending Tasks Card */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Pending Tasks</h2>
          <p className="text-3xl font-bold mt-2">3</p>
        </CardContent>
      </Card>

      {/* Recent Activity Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Training Activity</h2>

        <div className="bg-white p-4 rounded-2xl shadow">
          <ul className="space-y-3">
            <li className="flex justify-between border-b pb-2">
              <span>Model Training: Disease Detection</span>
              <span className="text-green-600 font-semibold">Completed</span>
            </li>

            <li className="flex justify-between border-b pb-2">
              <span>AI Bot: Medical Prescription</span>
              <span className="text-blue-600 font-semibold">Running</span>
            </li>

            <li className="flex justify-between">
              <span>Quantum Task: Genetic Simulation</span>
              <span className="text-yellow-600 font-semibold">Pending</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
