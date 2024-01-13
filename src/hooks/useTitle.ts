import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useTitle = (doctumentTitle?: string) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof doctumentTitle === 'string') {
      const title = doctumentTitle;
      const docTitle = t(title) as unknown as string;
      document.title = docTitle || 'Discord Cùi Bắp';
    }
  }, [doctumentTitle, t]);
};

export default useTitle;
