import React from 'react';
import { useParams } from 'react-router-dom';

function ServiceDetail() {
  const { slug } = useParams();
  return (
    <div className="bg-background text-primary min-h-screen p-8">
      <h1 className="text-3xl font-bold capitalize mb-4">{slug.replace('-', ' ')}</h1>
      <p className="text-base">This page contains an in-depth explanation about the {slug.replace('-', ' ')} service. Customize it with examples, testimonials, or downloadable content.</p>
    </div>
  );
}

export default ServiceDetail;