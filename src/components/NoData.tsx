import { useTranslation } from 'react-i18next';
import nodataImg from '../assets/nodata.png'
const NoData = () => {
  const {t}=useTranslation()
  return (
    <div className="flex flex-col items-center gap-5">
      <img src={nodataImg} alt="no_notes" className="w-80"/>
      <h3>{t('emptyText')}</h3>
    </div>
  );
}

export default NoData
