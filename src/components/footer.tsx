import React from 'react';
import Layout from './layout';

export default function Footer() {
  return (
    <footer>
      <Layout className="mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-gray-300">99LL Limited</span> All rights
            reserved.
          </div>
        </div>
      </Layout>
    </footer>
  );
}
