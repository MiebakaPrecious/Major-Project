// ==============================

// services/api.js

// ==============================

export const api = {

async getStats() {

return {

active: 4,

completed: 12,

pending: 3,

};

},


async getRecentActivity() {

return [

{ name: "Disease Detection", status: "Completed" },

{ name: "Medical Bot", status: "Running" },

{ name: "Genetic Simulation", status: "Pending" },

];

},

};

