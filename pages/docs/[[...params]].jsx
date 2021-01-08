import React from 'react';
import { useRouter } from 'next/router';

const DocsPage = () => {
  const router = useRouter();

  const { params = [] } = router.query;

  return <div>Docs {params.join(", ")}</div>
};

export default DocsPage;