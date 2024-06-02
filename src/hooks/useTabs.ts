import { useState } from 'react';

const useTabs = () => {
  const [tabType, setTabType] = useState('Received');

  const handleType = (t: string) => {
    setTabType(t);
  };

  return {
    tabType,
    handleType,
  };
};

export default useTabs;
