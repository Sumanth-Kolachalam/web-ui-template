import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router';

export const Router = () => {
  return (
    <Routes>
      <Route index element={<>Dashboard Home</>} />
      <Route path="settings" element={<>Settings</>} />
      <Route path="*" element={<>Not Found</>} />
    </Routes>
  );
};
