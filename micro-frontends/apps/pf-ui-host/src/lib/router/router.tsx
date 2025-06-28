import React from 'react';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  { path: '/', element: <>Home Page</> },
  {
    path: '/dashboard',
    lazy: async () => {
      try {
        const module = await import('Dashboard/App');
        return { Component: module.default };
      } catch (err) {
        console.error('Failed to load Dashboard remote:', err);
        return { Component: () => <div>Dashboard failed to load</div> };
      }
    },
  },
]);

