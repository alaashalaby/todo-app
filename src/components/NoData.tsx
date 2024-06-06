import nodataImg from '../assets/nodata.png'
const NoData = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <img src={nodataImg} alt="no_notes" className="w-80"/>
      <h3>You don’t have any Tasks</h3>
    </div>
  );
}

export default NoData
