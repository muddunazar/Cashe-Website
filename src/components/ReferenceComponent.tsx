import React, { Suspense, lazy } from 'react';

const componentMap: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
  Banner: () => import('./Banner'),
  Header: () => import('./Header'),
  CTA: () => import('./CTA'),
  FAQS: () => import('./FAQS'),
};

type Props = {
  name: keyof typeof componentMap;
  [key: string]: any;
};

const ReferenceComponent: React.FC<Props> = ({ name, ...props }) => {
  const LazyComponent = React.useMemo(() => {
    const loader = componentMap[name];
    return loader ? lazy(loader) : null;
  }, [name]);

  if (!LazyComponent) return null;

  return (
    <Suspense fallback={<div>Loading {name}...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default ReferenceComponent;
