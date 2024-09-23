import React from 'react';
import Layout from './layout';

export default function Footer() {
  return (
    <footer>
      <Layout className="mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} <strong>99LL Limited</strong> All
            rights reserved.
          </div>
        </div>
      </Layout>
    </footer>
  );
}
