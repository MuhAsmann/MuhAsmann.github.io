'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  const basePath = '/infomee';

  return (
    <Button onClick={() => window?.open(`${basePath}/files/CV-Muhammad Asman-Software Engineer.pdf`, '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
