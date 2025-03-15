'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  const basePath = '/infomee';

  return (
    <Button onClick={() => window?.open(`${basePath}/files/sagar-cv-2023.pdf`, '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
